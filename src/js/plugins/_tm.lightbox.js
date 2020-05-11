// Copyright © UnlimitDesign 2019
// Plugin: Lightbox 
// Version: 1.0.1
// URL: @UnlimitDesign
// Author: UnlimitDesign, Christian Lundgren, Shu Miyao
// Description: Detect when elements enter and/or leave viewport
// License: MIT

// Import utilities
import classList from '../utilities/_chaining.js';
import loadMedia from '../utilities/_tm.loadmedia.js';
import tmEasing from '../utilities/_tm.easing.js';

const tmLightbox = (function () {

  'use strict';

  if (typeof navigator == 'undefined' || typeof document == 'undefined' || typeof window == 'undefined') return false;

  // Check for mobile device and determine event type
  let mobile = false;
  if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) ||  navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) ||  navigator.userAgent.match(/BlackBerry/i) ||  navigator.userAgent.match(/Windows Phone/i) ) mobile = true;
  
  // Check event type
  const eventType = mobile ? 'touchstart' : 'click';

  // Gallery array
  let galleryGroup = [];
  let thumbnailGroup = [];

  // Media load instance
  let lightboxItemToLoad;

  // Zoom variable
  let zoomed = false;

  // Set the plugin defaults
  const defaults = {
    
    // Content animation
    contentAnimation: 'slide',                              //Animation type: Slide or fade
    slideAmount: 100,                                 //Animation amount: Amount to slide on x axis
    easing: 'easeInOutQuint',                             //Easing type: string, see easingArray
    duration: 400,                                    //Animation duration: milliseconds, lowest 50 in which no animation occurrs
    
    // Preloader
    usePreloader: true,                                 // Whether preloader graphic should be added to the grid items as they load
    preloaderMarkup: '',                                // For custom loader markup

    // Video
    maxVideoWidth: 1140,                                //Max width for video, inline, iframe and ajax content
    videoRatio: 1.778,                                  //Video Ratio - calculated with/ratio

    // Navigation
    navArrows: true,                                  //Arrow nav: boolean
    navKeyboard: true,                                  //Keyboard nav: boolean
    navThumbnails: true,
    navZoom: true,
    navExit: true,                                    //Exit nav: boolean
    overlayClickClose: true,                              //Close lightbox upon clicking overlay: boolean

    // Zoom
    zoomDuration: 400,
    
    // Error classes
    extraClasses: '',

    // Callback 
    initialized: function(){},          // Callback - lightbox initialized
    onLoaded: function(){},           // Callback - lightbox element is loaded
    closed: function(){},           // Callback - lightbox destroyed
    destroyed: function(){}           // Callback - lightbox destroyed
  };

  /**
  * Constructor.
  * @param  {element}  element  The selector element(s).
  * @param  {object}   options  The plugin options.
  */
  function Lightbox(element, options) {

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
      console.log(`${error} - format must be: let x = new tmLightbox('.selector' or NodeList,{options})`);
    }

    /**
    * Add lightbox link events.
    * @param  {element}  The lightbox link.
    */
    const addLinkEvent = (lightboxLink) => {
      let options = lightboxLink.tagName === 'A' || eventType == 'click' ? false : passiveSupported() ? { passive: true } : false;
      lightboxLink.addEventListener(eventType, function(){
        buildLightbox(lightboxLink);
      }, options);
    };

    /**
    * Add keyboard nav events.
    */
    const addKeyboardEvent = () => {
      if (event.keyCode == 37 && galleryGroup.length >= 2) {
        plugin.prevContent();
      } else if (event.keyCode == 39 && galleryGroup.length >= 2) {
        plugin.nextContent();
      }else if (event.keyCode == 27) {
        plugin.closeLightbox();
      }
    };

    /**
    * Add overlay click event.
    */
    const addOverlayEvent = () => {
      if(event.target.classList.contains('tml-content-wrapper')){
        plugin.closeLightbox();
      }
    };

    /**
    * Check if part of group
    * @param  {element} The lightbox link being tested
    */
    const isGalleryGroup = (link) => {
       if(link.dataset.group){
        let group = link.dataset.group;

        // Check that all elements in the group have an ID, 
        // if not, add an ID and add push it to the array
        if(link.hasAttribute('id')){
          galleryGroup.push(link.id);
        }else{
          link.setAttribute('id', `${group}-tml-link-${galleryGroup.length}`);
          galleryGroup.push(link.id);
        }
        return galleryGroup;
      }
    };

    /**
    * Toggle active
    * @param {element} Wrapper to which active class is added/removed
    */
    const toggleActiveClass = (item) => {
      let element = item != undefined ? item : event.target;
      if(!element.classList.contains('active')){
        classList(element).addClass('active');
      }else{
        classList(element).removeClass('active');
      }
    };

    /**
    * Toggle zoom visibility
    * @param mediaType {string}  The media type of currently loaded media;
    */
    const showHideZoom = (mediaType) => {
      let zoom = document.querySelector('.tml-zoom');
      if(mediaType == 'iframe' || mediaType == 'html5video'){
        classList(zoom).addClass('hidden');
      }else{
        classList(zoom).removeClass('hidden');
      }
    };

    /**
    * Build the Lightbox
    */
    const buildLightbox = (lightboxLink) => {
      if(event.target.tagName === 'A') event.preventDefault();
      event.stopPropagation();

      // Check lightbox doesn't already exist
      if(document.querySelector('.tm-lightbox')) return false;

      // Add active class to lightbox link
      classList(lightboxLink).addClass('tml-active');

      // Build gallery group
      if(lightboxLink.dataset.group){
        document.querySelectorAll(`[data-group="${lightboxLink.dataset.group}"]`).forEach(function(element){
          galleryGroup = isGalleryGroup(element);
        });
      }

      // Append markup for the lightbox
      const markup = `<div class="tm-lightbox" class="tm-lightbox ${plugin.settings.extraClasses}"><div class="tml-inner"><div class="tml-toolbar"></div><div class="tml-content-wrapper"><div class="tml-content"/></div><div class="tml-caption"/><span class="tml-caption-inner"/></div></div>`;
      document.body.insertAdjacentHTML('beforeend', markup);

      // Disable scrollbar
      classList(document.body).addClass('overflow-hidden');

      // References
      let lightbox = document.querySelector('.tm-lightbox');
      let lightboxInner = document.querySelector('.tml-inner');
      let contentWrapper = document.querySelector('.tml-content-wrapper');
      let toolbar = document.querySelector('.tml-toolbar');
      let content = document.querySelector('.tml-content');
      let options = eventType == 'click' ? false : passiveSupported() ? { passive: true } : false;

      // Add zoom button
      if(plugin.settings.navZoom){

        // Construct
        let zoom = document.createElement('button');
        classList(zoom).addClass('tml-nav').addClass('tml-zoom').addClass('outline-none');
        zoom.setAttribute('aria-label', 'Zoom');

        // Add to lightbox
        toolbar.appendChild(zoom);

        // Add Events
        zoom.addEventListener(eventType, zoomContent, options);
      }

      // Add thumbnails button
      if(plugin.settings.navThumbnails && lightboxLink.dataset.group){

        // Construct thumnail wrapper and add to lightbox
        let thumbnailWrapper = document.createElement('div');
        classList(thumbnailWrapper).addClass('tml-thumbnail-wrapper').addClass('overflow-hidden').addClass('overflow-x-scroll');
        thumbnailWrapper.innerHTML += '<ul class="list-none list-horizontal center"/>';
        lightbox.appendChild(thumbnailWrapper);

        // Construct and add thumbnail button to toolbar 
        let showThumbnails = document.createElement('button');
        classList(showThumbnails).addClass('tml-nav').addClass('tml-thumbnails').addClass('outline-none');
        toolbar.appendChild(showThumbnails);
        showThumbnails.setAttribute('aria-label', 'Show Thumbnails');

        //Add Events for show thumbnail button
        showThumbnails.addEventListener(eventType, function(){
          toggleActiveClass();
          toggleActiveClass(document.querySelector('.tml-thumbnail-wrapper'));
          toggleStageHeight();
        }, options);
        
        // Loop through gallery group and build thumbnails based on gallery array
        galleryGroup.forEach(function(groupLink, i){
          i = i-1;
          groupLink = document.querySelector(`#${groupLink}`);
          let thumbnailURL = groupLink.dataset.thumbnail ? groupLink.dataset.thumbnail : groupLink.getAttribute('href');
          let mediaSrc = checkMedia(groupLink);
          let play = mediaSrc.type == 'iframe' || mediaSrc.type == 'html5video' ? `<span class="content-over p-0 items-center center"><span><span class="play flex mx-auto"><i class="icon-material size-sm self-center mx-auto mb-0">play_arrow</i></span></span></span>` : '';
          thumbnailGroup.push(`tml-thumbnail-${i}`);
          thumbnailWrapper.querySelector('ul').innerHTML += `<li><div class="thumbnail"><button data-url="${mediaSrc.url}" id="tml-thumbnail-${i}" data-group-link-id="${groupLink.id}" class="overlay-link tml-thumbnail"><img src="${thumbnailURL}"/>${play}</button></div></li>`;
        });

        // Get thumbnails and 
        let thumbnails = document.querySelectorAll('.tml-thumbnail');

        // Loop through created thumbnails and add events
        thumbnails.forEach(function(thumbnail){

          // Get array indicies of active items
          let thumbnailIndex = thumbnailGroup.indexOf(thumbnail.getAttribute('id'));
          let galleryIndex = galleryGroup.indexOf(lightboxLink.getAttribute('id'));
          
          // Set active
          if(thumbnailIndex == galleryIndex) classList(thumbnail).addClass('tml-thumb-active');
          
          //let options = thumbnail.tagName === 'A' || eventType == 'click' ? false : passiveSupported() ? { passive: true } : false;
          thumbnail.addEventListener(eventType, function(){
            plugin.getContent(thumbnail);
          }, options);
        });
      }

      // Add keyboard nav
      if(plugin.settings.navKeyboard){
        document.addEventListener('keyup', addKeyboardEvent, false);
      }

      // Add exit button
      if(plugin.settings.navExit){

        // Construct
        let exit = document.createElement('button');
        classList(exit).addClass('tml-nav').addClass('tml-exit').addClass('outline-none');
        exit.setAttribute('aria-label', 'Exit');

        // Add to lightbox
        toolbar.appendChild(exit);

        // Add Events
        exit.addEventListener('click', plugin.closeLightbox, options);
      }

      // Overlay exit
      if(plugin.settings.overlayClickClose){
        lightbox.addEventListener('click', addOverlayEvent, options);
      }

      // Add arrow nav
      if(plugin.settings.navArrows && galleryGroup.length >= 2){
        
        // Construct
        let prev = document.createElement('button');
        classList(prev).addClass('tml-nav').addClass('tml-prev').addClass('outline-none');
        prev.setAttribute('aria-label', 'Previous');

        let next = document.createElement('button');
        classList(next).addClass('tml-nav').addClass('tml-next').addClass('outline-none');
        next.setAttribute('aria-label', 'Next');

        // Add them to lightbox
        lightboxInner.appendChild(prev);
        lightboxInner.appendChild(next);

        // Add Events
        prev.addEventListener('click', plugin.prevContent, options);
        next.addEventListener('click', plugin.nextContent, options);
      }

      // Add window listener for resize events
      window.addEventListener('resize', resizeContent, false);

      // Load media
      mediaLoad(lightboxLink, 'next');
    };

    /**
    * Remove Content
    * @param {element} The lightbox link; 
    * @param {string} The direction of next media to load;
    */
    const removeContent = (link, direction) => {
      let lightbox = document.querySelector('.tm-lightbox');
      let content =  document.querySelector('.tml-content');

      // Lightbox now loading
      content.setAttribute('loading','');

      // Check direction
      let transX = plugin.settings.contentAnimation == 'fade' ? 0 : plugin.settings.slideAmount;
      direction = direction == 'next' ? 1 : -1;

      // On transition load new content
      content.addEventListener('transitionend', function transition(event){
        event.target.removeEventListener('transitionend', transition, false);
        Object.assign(content.style,{
          visibility: 'hidden'
        });
        mediaLoad(link, direction);
      });

      // Animate content out
      animate(content, 0, -transX * direction, 0, 1, 'opacity, transform', plugin.settings.duration);
    };

    /**
    * Add prealoder markup to grid item
    * @param  {element}  The container to which loader will be added  
    */
    const addPreloader = (container) => {
      const loader = document.createElement('div');
      loader.className = 'preloader';
      loader.innerHTML = plugin.settings.preloaderMarkup ? plugin.settings.preloaderMarkup : '<svg id="circle" viewBox="25 25 50 50"><circle class="stroke" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg>';
      container.appendChild(loader);
    };

    /**
    * Remove prealoder markup from grid item
    * @param  {element}  The container from which to remove the loader 
    */
    const removePreloader = (container) => {
      const loader = container.querySelector('.preloader');
      container.removeChild(loader);
    };

    /**
    * Check media
    * @param  {element}  The link that launched the lightbox, returns URL and media type
    */
    const checkMedia = (link) => {
      let url = link.tagName == 'A' ? link.getAttribute('href') : '#' + link.dataset.url;
      let mediaType = url.match(/\.(jpeg|jpg|png|gif)/i) || link.dataset.content == 'image' ? 'image' : url.match(/\.(vimeo\.com|youtu(be\.com|\.be))\/(watch\?v=)?([A-Za-z0-9._%-]*)(\&\S+)?/) || link.dataset.content == 'iframe' ? 'iframe' : url.match(/\.(mp4|webm)$/) ? 'html5video' : 'inline';
      return {url:url, type:mediaType};
    };

    /**
    * Load Content
    * @param {element} The lightbx link;
    * @param {string} The direction of the next loaded media;
    */
    const mediaLoad = (link, direction) => {
      
      // Ref the lightbox
      let lightbox = document.querySelector('.tm-lightbox');
      let content = document.querySelector('.tml-content');
      let loaded = content.hasAttribute('loaded');
      let media;
      let mediaSrc = checkMedia(link);

      // Clear content & remove any errors
      content.innerHTML = '';
      classList(content).removeClass('error');

      // Add preloader 
      if(plugin.settings.usePreloader && !loaded) addPreloader(lightbox);       

      // Process caption
      processCaption();
      
      // Create the necessary markup based on type
      switch(mediaSrc.type){

        case 'image':

          media = document.createElement('img');
          media.dataset.src = mediaSrc.url;
          media.className = 'media-source';
          content.appendChild(media);
          
          break;

        case 'iframe':

          media = document.createElement('iframe');
          media.dataset.src = mediaSrc.url;
          media.width = '100%';
          media.height = '100%';
          media.className = 'media-source';
          content.appendChild(media);

          break;

        case 'html5video':

          mediaSrc.url = mediaSrc.url.split('.').slice(0, -1).join('.');
          media = document.createElement('video');
          let controls = document.createAttribute('controls');
          let autoplay = document.createAttribute('autoplay');
          let source = `<source class="media-source" data-src="${mediaSrc.url}.mp4"/><source class="media-source" data-src="${mediaSrc.url}.webm"/>`;
          media.setAttributeNode(controls);
          media.setAttributeNode(autoplay);
          media.innerHTML += source;
          content.appendChild(media);

          break;
      }
      
      // Reference the media to load
      media.parentNode.dataset.mediaType = mediaSrc.type;
      let mediaToLoad = document.querySelector('.media-source');

      // Hide/show toolbar buttons based on type
      showHideZoom(mediaSrc.type);

      // Create instance of loadMedia
      lightboxItemToLoad = new loadMedia(mediaToLoad,{
        backgroundImage: false,
        onLoaded: function(loadedMedia){
          
          // Remove loader if it exists
          if(plugin.settings.usePreloader && !loaded) removePreloader(lightbox);

          // Destroy plugin
          lightboxItemToLoad.destroy();

          // Animate content
          let tx = plugin.settings.contentAnimation == 'fade' ? 0 : plugin.settings.slideAmount;
          let animateContentTimer = null;
          
          // Set initial position
          animate(content, 0, tx * direction, 0, 1, 'opacity, transform', 0);

          // Create timeout before animating content again 
          clearTimeout( animateContentTimer );
          animateContentTimer = setTimeout( function(){
            
            // Resize content
            resizeContent();

            // Item no longer loading
            content.removeAttribute('loading');

            // Animate the loaded content
            animate(content, 1, 0, 0, 1, 'opacity, transform', plugin.settings.duration);
          }, 50);

          // Callback
          plugin.settings.onLoaded();
        },
        onError: function(loadedMedia){
          let src = loadedMedia.src;

          // Remove loader if it exists
          if(plugin.settings.usePreloader && !loaded) removePreloader(lightbox);

          // Make content visible again
          Object.assign(content.style,{
            width: '100%',
            visibility: 'visible'
          });

          // Item no longer loading
          content.removeAttribute('loading');

          classList(content).addClass('error');
          content.innerHTML = `<span>Following media didn't load: ${src}</span>`;
          
          // Animate the loaded content
          animate(content, 1, 0, 0, 1, 'opacity, transform', plugin.settings.duration);
        }
      });
      lightboxItemToLoad.initialize();
    };

    /**
    * Resize content
    */
    const resizeContent = () => {

      let content = document.querySelector('.tml-content');

      if(!content) return false;

      let mediaType = content.dataset.mediaType;
      let media = mediaType == 'video' ? content.querySelector('.media-source').parentNode : content.querySelector('.media-source');
      let contentW = 0;
      let contentH = 0;

      // Get computed top/bottom padding to get inner height of container
      let computedStyle = getComputedStyle(content.parentNode);
      let wrapperW = window.innerWidth;
      let wrapperH = content.parentNode.offsetHeight;
      wrapperH -= parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom);
      
      // Verify media type
      if(mediaType == 'image'){

        let imageW = media.offsetWidth;
        let imageH = media.offsetHeight;
        let imageNaturalW = media.naturalWidth;
        let imageNaturalH = media.naturalHeight;
        let ratio = imageW/imageH;

        // If image height is less than container height, use natural height
        wrapperH = imageNaturalH < wrapperH ? imageNaturalH : wrapperH;

        // Check zoom option, if zoomed, display in natural height
        wrapperH = !zoomed ? wrapperH : imageNaturalH;

        // Calculate width/height
        if(wrapperW/wrapperH > imageW/imageH){
          contentW = wrapperH*ratio;
          contentH = wrapperH;
        }else{
          contentW = wrapperW;
          contentH = wrapperW/ratio;
        }

      // Video
      }else{

        // Calculate width/height
        if(wrapperW > plugin.settings.maxVideoWidth){
          contentW = plugin.settings.maxVideoWidth;
          contentH = contentW/plugin.settings.videoRatio;
        }else{
          contentW = wrapperW;
          contentH = wrapperW/plugin.settings.videoRatio;
        }
      }

      // Set
      Object.assign(content.style,{
        width: Math.round(contentW) + 'px',
        height: Math.round(contentH) + 'px'
      });
    };

    /**
    * Animation Handling
    * @param {element} The element being animated;
    * @param {integer} Opacity value;
    * @param {integer} Translation X value;
    * @param {integer} Translation Y value;
    * @param {integer} Scale value;
    * @param {string} Transition properties;
    * @param {milliseconds} Duration of animation;
    */
    const animate = (element, opacity, transX, transY, scale, transProperty, duration) => {
       Object.assign(element.style,{
          opacity: opacity,
          visibility: 'visible',
          transform:`translate3d(${transX}px,${transY}px,0px) scale(${scale})`, 
          transitionProperty: transProperty, 
          transitionDuration: `${duration}ms`,
          transitionTimingFunction: plugin.settings.easing
      });
    };

    /**
    * Process caption
    */
    const processCaption = () => {

      // Build it
      let captionInner = document.querySelector('.tml-caption-inner');
      let captionContent = document.querySelector('.tml-active').dataset.caption;
      let animateCaptionTimer = null;
      captionInner.innerHTML = '';
      
      // Set caption initial state
      animate(captionInner, 0, 0, 0, 1, 'opacity, transform', plugin.settings.duration);
      
      if(captionContent){
        // Create timeout before animating content again 
        clearTimeout(animateCaptionTimer);
        animateCaptionTimer = setTimeout( function(){

          // Set Caption
          captionInner.innerHTML = captionContent;
          
          // Animation caption
          animate(captionInner, 1, 0, 0, 1, 'opacity, transform', 1000);
        }, 150);
      }
    };

    /**
    * Zoom content
    */
    const zoomContent = () => {
      let contentWrapper = document.querySelector('.tml-content-wrapper');
      let content = document.querySelector('.tml-content');

      // Toggle content zoom
      if(!contentWrapper.classList.contains('zoomed')){
        toggleActiveClass();
        classList(contentWrapper).addClass('zoomed').addClass('overflow-scroll');
        zoomed = true;
        resizeContent();
        animate(content, 1, 0, 0, 1, 'width, height', plugin.settings.zoomDuration);
      }else{
        toggleActiveClass();
        classList(contentWrapper).removeClass('zoomed').removeClass('overflow-scroll');
        zoomed = false;
        resizeContent();
        animate(content, 1, 0, 0, 1, 'width, height', plugin.settings.zoomDuration);
      }

      // On transition end clear content transition properties
      content.addEventListener('transitionend', function transition(event){
        event.target.removeEventListener('transitionend', transition, false);
        animate(content, 1, 0, 0, 1, '', 0);
      });
    };

    /**
    * Toggle gallery thumbnails
    * @param {string} The direction of the next loaded thumb.
    * @param {element} The thumb that received a click event;
    */
    const swapActiveThumb = (direction, clicked) =>{
      let activeThumb;
      let newThumb;
      if(clicked){
        activeThumb = document.querySelector('.tml-thumb-active');
        newThumb = clicked;
      }else{
        let thumbGroup = getActiveNewLink('.tml-thumb-active', thumbnailGroup, direction);
        newThumb = direction == 'prev' ? thumbGroup.prev : thumbGroup.next;
        activeThumb = thumbGroup.active;
        newThumb = document.querySelector(`#${newThumb}`);
      }
      classList(activeThumb).removeClass('tml-thumb-active');
      classList(newThumb).addClass('tml-thumb-active');
    };

    /**
    * Toggle lightbox inner height
    */
    const toggleStageHeight = () =>{
      let lightboxInner = document.querySelector('.tml-inner');
      let thumbnailWrapper = document.querySelector('.tml-thumbnail-wrapper');
      if(lightboxInner.classList.contains('active')){
        classList(lightboxInner).removeClass('active');
        Object.assign(lightboxInner.style,{
          height: '100%'
        });
        
      }else{
        classList(lightboxInner).addClass('active');
        Object.assign(lightboxInner.style,{
          height: (window.innerHeight-thumbnailWrapper.offsetHeight) + 'px'
        });
      }

      // Animate
      animate(lightboxInner, 1, 0, 0, 1, 'height', plugin.settings.zoomDuration);
    };

    /**
    *   Public variables and methods.
    * @param {element} Active link 
    * @param {array} Group array
    * @param {string} The direction of the next link
    */
    const getActiveNewLink = (active, array, direction) =>{
      let next;
      let prev;
      active = document.querySelector(active);
      let activeIndex = array.indexOf(active.getAttribute('id'));
      if(direction == 'prev'){
        prev = array[activeIndex-1] == undefined ? array[array.length-1] : array[activeIndex-1];
      }else if(direction == 'next'){
        next = array[activeIndex+1] == undefined ? array[0] : array[activeIndex+1];
      }
      return {active:active, prev:prev, next:next};
    };


    /**
    * Public variables and methods.
    * @type {object}
    */
    
    /**
    * Initialize the plugin.
    */
    plugin.initialize = () => {
      
      if(plugin.elements == null) return false;

      // Loop through each freeze item
      document.querySelectorAll(plugin.elements).forEach(function(element){

        // Add link events
        addLinkEvent(element);

        // Check for setting overrides
        plugin.settings.maxVideoWidth = element.dataset.maxVideoWidth ? element.dataset.maxVideoWidth : plugin.settings.maxVideoWidth;
        plugin.settings.videoRatio = element.dataset.videoRatio ? element.dataset.videoRatio : plugin.settings.videoRatio;
        plugin.settings.extraClasses = element.dataset.extraClasses ? element.dataset.extraClasses : plugin.settings.extraClasses;
      });
    };

    /**
    * Load next content
    */
    plugin.nextContent = () => {

      let content = document.querySelector('.tml-content');
      if(content.hasAttribute('loading')) return false;

      // Got to next and swap active class
      let group = getActiveNewLink('.tml-active', galleryGroup, 'next');
      let nextLink = document.querySelector(`#${group.next}`);
      classList(group.active).removeClass('tml-active');
      classList(nextLink).addClass('tml-active');

      // Call remove content
      removeContent(nextLink, 'next');

      // Thumbnails
      if(plugin.settings.navThumbnails) swapActiveThumb('next');
    };
    
    /**
    * Load previous content
    */
    plugin.prevContent = () => {

      let content = document.querySelector('.tml-content');
      if(content.hasAttribute('loading')) return false;

      // Got to next and swap active class
      let group = getActiveNewLink('.tml-active', galleryGroup, 'prev');
      let prevLink = document.querySelector(`#${group.prev}`);
      classList(group.active).removeClass('tml-active');
      classList(prevLink).addClass('tml-active');

      // Call remove content
      removeContent(prevLink, 'prev');

      // Thumbnails
      if(plugin.settings.navThumbnails) swapActiveThumb('prev');
    };

    /**
    * Load content
    */
    plugin.getContent = (thumbnailLink) => {

      let content = document.querySelector('.tml-content');
      if(content.hasAttribute('loading') || thumbnailLink.classList.contains('tml-thumb-active')) return false;

      let active = document.querySelector('.tml-active');
      let newLink = document.querySelector(`#${thumbnailLink.dataset.groupLinkId}`);
      let activeIndex = galleryGroup.indexOf(active.getAttribute('id'));
      let newIndex = galleryGroup.indexOf(thumbnailLink.dataset.groupLinkId);
      let direction = activeIndex < newIndex ? 'next' : 'prev';

      // Swap active class
      classList(active).removeClass('tml-active');
      classList(newLink).addClass('tml-active');

      // Call remove content
      removeContent(newLink, direction);

      // Thumbnails
      if(plugin.settings.navThumbnails) swapActiveThumb(direction,thumbnailLink);
    };

    /**
    * Load previous content
    */
    plugin.closeLightbox = () => {
      let lightbox = document.querySelector('.tm-lightbox');

      // Remove event listeners
      if(galleryGroup.length >= 2){
        document.querySelector('.tml-next').removeEventListener('click', plugin.prevContent, false);
        document.querySelector('.tml-prev').removeEventListener('click', plugin.nextContent, false);
        document.querySelector('.tml-thumbnails').removeEventListener('click', plugin.nextContent, false);
      }
      document.querySelector('.tml-exit').removeEventListener('click', plugin.nextContent, false);
      document.removeEventListener('keyup', addKeyboardEvent, false);
      window.removeEventListener('resize', resizeContent, false);

      // Reactivate scrollbar
      classList(document.body).removeClass('overflow-hidden');

      // Reset gallery and thumbnail arrays
      galleryGroup = [];
      thumbnailGroup = [];

      // Reset zoom
      zoomed = false;

      // On transition end issue callack
      lightbox.addEventListener('transitionend', function transition(){
        event.target.removeEventListener('transitionend', transition, false);
        if(event.target != lightbox) return false;
        
        // Delete the lightbox
        lightbox.parentNode.removeChild(lightbox);

        // Callback
        plugin.settings.closed();
      });

      // Animate out the lightbox 
      animate(lightbox, 0, 0, 0, 1, 'opacity, transform', plugin.settings.duration);
    };

    /**
    * Refresh the plugin.
    */
    plugin.refresh = () => {
      // Destroy the existing initialization
      plugin.destroy();

      // Initialize the plugin
      plugin.settings = Object.assign({}, defaults, options);
      plugin.initialize();
    };

    /**
    * Destroy an existing initialization.
    */
    plugin.destroy = () => {

      if (!plugin.settings) return;

      // Callback
      plugin.settings.destroyed();

      // Reset variables
      plugin.settings = null;
    };

    // Return API
    return plugin;
  }
  
  // Return constructor
  return Lightbox;
})();

// Export plugin
export default tmLightbox;