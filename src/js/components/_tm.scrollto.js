// Copyright © UnlimitDesign 2019
// Plugin: Scroll To 
// Version: 1.0.0
// URL: @UnlimitDesign
// Author: UnlimitDesign, Christian Lundgren, Shu Miyao
// Description: Detect when elements enter and/or leave viewport
// License: MIT

// Import utilities
import classList from '../utilities/_chaining.js';
import polyfill from '../utilities/_smoothscrollpolyfill.js';
import tmInView from '../utilities/_tm.inview.js';

const tmScrollTo = (function () {

  'use strict';

  if (typeof navigator == 'undefined' || typeof document == 'undefined' || typeof window == 'undefined') return false;

  // Check for mobile device and determine event type
  let mobile = false;
  if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) ||  navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) ||  navigator.userAgent.match(/BlackBerry/i) ||  navigator.userAgent.match(/Windows Phone/i) ) mobile = true;
  
  // Check event type
  const eventType = mobile ? 'touchstart' : 'click';

  // Set the plugin defaults
  const defaults = {
    scrollBehaviour: 'smooth',
    navItemClass: 'nav-item',
    initialized: function(){},      // Callback - tabs initialized
    destroyed: function(){}       // Callback - tabs destroyed
  };
  
  /**
  * Constructor.
  * @param  {element}  element  The selector element(s).
  * @param  {object}   options  The plugin options.
  */
  function ScrollTo(element, options) {
    
    // Create an empty plugin object
    let plugin = {};

    // InView instance
    let sectionInView;
    let sectionArray = [];

    // Get defaults and merge with user options
    try{
      plugin.this = this;
      plugin.elements = element;
      plugin.defaults = defaults;
      plugin.options = options;
      plugin.settings = Object.assign({}, defaults, options);
    }catch(error){
      console.log(`${error} - format must be: let x = new tmScrollTo('.selector' or NodeList,{options})`);
    }

    /**
    * Initiate scroll event
    */
    const initiateScroll = () => {
      event.preventDefault();

      // Defines some variales
      let scrollType = event.target.dataset.scrollType;
      let amountX = event.target.dataset.scrollX ? parseInt(event.target.dataset.scrollX,10) : 0;
      let amountY = event.target.dataset.scrollY ? parseInt(event.target.dataset.scrollY,10) : 0;
      let element = event.target.tagName == 'A' ? event.target.href.substring(event.target.href.indexOf('#')) : event.target.dataset.element;

      // Switch based on scroll types
      try{  
        switch(scrollType){

          case 'window-scroll-to':

            window.scrollTo({top: amountY, left: amountX, behavior: plugin.settings.scrollBehaviour});

          break;

          case 'window-scroll-by':

            window.scrollBy({top: amountY, left: amountX, behavior: plugin.settings.scrollBehaviour});

          break;

          case 'element-scroll-to':

            document.querySelector(element).scroll({top: amountY, left: amountX, behavior: plugin.settings.scrollBehaviour});
      
          break;

          case 'element-scroll-by':

            document.querySelector(element).scrollBy({top: amountY, left: amountX, behavior: plugin.settings.scrollBehaviour});

          break;

          case 'element-scroll-into-view':

            document.querySelector(element).scrollIntoView({behavior: plugin.settings.scrollBehaviour});

          break;

          default:

            console.log(`Check that scroll type is defined properly: ${scrollType}`);
        }
      }catch(error){
        console.log(`${error} - Check that section exists: ${element}`);
      }
    };

    /**
    * Observe sections 
    */
    const observeSections = () => {

      // Create instance of inView to observe sections
      // upon entering the viewport
      sectionInView = new tmInView(sectionArray,{
        unObserveViewed: false,
        detectionBuffer: 0,
        inView: function(visibleSection){
          updateNavigationState(visibleSection);
          classList(visibleSection).addClass('active');
        },
        outOfView: function(hiddenSection){
          updateNavigationState(hiddenSection);
          classList(hiddenSection).removeClass('active');
        }
      });
      sectionInView.initialize();
    };

    /**
    * Observe on interset - modern browsers
    * @param  {object}  element  The current section in or out of view.
    */
    const updateNavigationState = (section) => {
      let navItem = document.querySelector('a[href="#' + section.id + '"]') ? document.querySelector('a[href="#' + section.id + '"]') : document.querySelector('[data-element="#' + section.id + '"]');
      if(section.classList.contains('out-of-view')){
        classList(navItem).removeClass('active');
      }else{
        classList(navItem).addClass('active');
      }
    };

    /**
    * Public variables and methods.
    */

    /**
    * Initialize the plugin.
    */
    plugin.initialize = () => {

      if(plugin.elements == null) return false;

      // Kick off the polyfill!
      polyfill();

      // Get nav elements length
      let navItemLength = document.querySelectorAll(plugin.elements + '.nav-item').length;
      let i = 0;

      // Add link event 
      document.querySelectorAll(plugin.elements).forEach(function(element){
        element.addEventListener(eventType, initiateScroll, false);

        // Find associated nav items
        let isNavItem = element.classList.contains(plugin.settings.navItemClass);
        if(isNavItem){
          i++;

          // Get referenced section and observe it
          element.tagName == 'A' ? sectionArray.push(element.href.substring(element.href.indexOf('#'))) : sectionArray.push(element.dataset.element);
          if(i == navItemLength) observeSections(sectionArray);
        }
      });

      // Callback
      plugin.settings.initialized();
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

      if ( !plugin.settings ) return;

      // Remove link event
      document.querySelectorAll(plugin.elements).forEach(function(element){
        element.removeEventListener(eventType, initiateScroll, false);
      });

      // Remove inView instance from sections
      if(sectionInView != undefined) sectionInView.destroy();
        
      // Callback
      plugin.settings.destroyed();

      // Reset variables
      plugin.settings = null;
    };

    // Return API
    return plugin;
  }
  
  // Return the plugin
  return ScrollTo;
})();

// Export the plugin
export default tmScrollTo;