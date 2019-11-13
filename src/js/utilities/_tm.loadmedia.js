// Copyright © ThemeMountain 2019
// Plugin: Load media 
// Version: 1.0.0
// URL: @ThemeMountain
// Author: Thememountain, Christian Lundgren, Shu Miyao
// Description: Detect when elements enter and/or leave viewport
// License: MIT

// Import classList utility 
import classList from './_chaining.js';

const loadMedia = (function () {

  'use strict';

  if (typeof document == 'undefined') return false;

  // Set the plugin defaults
  const defaults = {
    backgroundImage: false,           // Preload background image set in CSS
    onLoaded: function(){},           // Callback - tabs initialized
    onError: function(){},            // Callback - element in view
  };

  /**
  * Constructor.
  * @param  {element}  element  The selector element(s).
  * @param  {object}   options  The plugin options.
  */
  function LoadMedia(element, options) {

    // Create an empty plugin object
    let plugin = {};

    // Get defaults and merge with user options
    try{
      plugin.this = this;
      plugin.elements = element;
      plugin.defaults = defaults;
      plugin.options = options;
      plugin.settings = Object.assign({}, defaults, options);
    }catch(error){
      console.log(`${error} - format must be: let x = new loadMedia('.selector' or NodeList,{options})`);
    }

    /**
    * Load the media
    * @param  {element}  The reference to the media to be loaded.
    * @param  {string}  The media tag type.
    */
    const processMedia = (media, mediaType) =>{

      if(media.classList.contains('loaded')) return false;

      switch(mediaType){

        case 'image':

          let image = media;
          let proxyImage = new Image();
          proxyImage.src = image.dataset.src;
          proxyImage.classList = image.classList;
          
          // Only set srcset if it's not a background image and it has srcset
          if(!plugin.settings.backgroundImage && image.srcset){
            proxyImage.srcset = image.dataset.srcset;
            proxyImage.alt = image.alt;
          }

          // Use decode for modern browsers
          if('decode' in proxyImage){
            proxyImage.decode().then(() => {
              onSuccess(proxyImage, image);
            }).catch((encodingError) => {
              console.log(encodingError);
              onError(proxyImage);
            });

          // Fallback to traditional loading
          }else{
            addEventListeners(proxyImage, image);
          }

          break;

        case 'video':
          
          let source = media;
          let video = source.parentNode;

          // Swap src with data src value
          video.querySelectorAll('source').forEach(function(source){
            if (typeof source.tagName === "string" && source.tagName === "SOURCE") {
              source.src = source.dataset.src;
              video.load();
            }
          })

          // Add events
          addEventListeners(video);

          break;

        case 'iframe':

          let iframe = media;

          // Swap the source
          iframe.src =  iframe.dataset.src;

          // Add events
          addEventListeners(iframe);
      }
    };

    /**
    * Add event listeners, serves as fallback for images, loader for video and iframe
    * @param  {element}  The media to receive listeners
    * @param  {element}  For images only, reference to old image for insertion.
    */
    const addEventListeners = (media, refItem) =>{

      // Check load event
      let loadEvent = media.tagName == 'VIDEO' ? 'loadeddata' : 'load';
      
      // Listeners
      media.addEventListener(loadEvent, function mediaLoaded(event){
        onSuccess(event.target, refItem);
        event.target.removeEventListener(loadEvent, mediaLoaded);
      });
      media.addEventListener('error', function mediaError(event){
        onError(event);
        event.target.removeEventListener('error', mediaError);
      });
    };

    /**
    * Called if media loaded
    * @param  {element}  The newly loaded media.
    * @param  {element}  For images only, reference to old image for insertion.
    */
    const onSuccess = (media, refItem) => {
      let element = !plugin.settings.backgroundImage ? media : refItem;
      if(plugin.settings.backgroundImage) setBgImage(media, refItem);
      if(media.tagName == 'IMG' && !plugin.settings.backgroundImage) addLoadedMedia(media, refItem);
      classList(element).addClass('loaded');

      // Callback
      plugin.settings.onLoaded(element);
    };

    /**
    * Called if media loaded
    * @param  {element}  The newly loaded media.
    * @param  {element}  For images only, reference to old image for insertion.
    */
    const addLoadedMedia = (media, refItem) => {
      if(refItem.parentNode == null) return false;
      refItem.parentNode.insertBefore(media, refItem.nextSibling);
      media.style.cssText = refItem.style.cssText;
      media.style.height = 'auto';
      refItem.parentNode.removeChild(refItem);
    };

    /**
    * Set background image
    * @param  {element}  The newly loaded media.
    */
    const setBgImage = (media, refItem) => {
      if(refItem.parentNode == null) return false;
      refItem.style.cssText = refItem.style.cssText + `background-image:url(${media.src})`;
      classList(refItem).addClass('bg-image').addClass('bg-cover').addClass('bg-center');
    };

    /**
    * Called if image failed to load
    * @param  {element}  defaults  The event or image that failed to load.
    */
    const onError = (event) => {
      let target = event.target != undefined ? event.target : event;
      let errorMessage = `The following image: ${target.src} did not load.`;
      console.log(event.target);

      // Callback
      plugin.settings.onError(target);
    };

    /**
    * Public variables and methods.
    */

    /**
    * Initialize the plugin.
    */
    plugin.initialize = () => {

      if(plugin.elements == null) return false;

      // Check if data src exists on element
      let elementDataSrc = !plugin.elements.dataset ? false : plugin.elements.dataset.src ? true : false;
      
      // Check tag type
      let tagName = plugin.elements.tagName;
      let mediaType = tagName == 'IMG' ? 'image' : tagName == 'DIV' ? 'image' : tagName == 'SPAN' ? 'image' : tagName == 'SOURCE' ? 'video' : 'iframe';

      // Single item
      if(elementDataSrc){
        processMedia(plugin.elements, mediaType);

      // Look for multiple items in container
      }else{
        document.querySelectorAll(plugin.elements).forEach(function(element){
          let images = element.querySelectorAll(mediaType);
          for (let i=0; i < images.length; i++) {
            let image = images[i];
            processMedia(image, mediaType);
          }
        });
      }
    };

    /**
    * Destroy an existing initialization.
    */
    plugin.destroy = () => {

      if (!plugin.settings) return;

      // Reset variables
      plugin.settings = null;
    };

    // Return API
    return plugin;
  }
  
  // Return constructor
  return LoadMedia;
})();

// Export plugin
export default loadMedia;