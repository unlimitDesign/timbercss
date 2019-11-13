// Copyright © ThemeMountain 2019
// Plugin: Inview 
// Version: 1.0.0
// URL: @ThemeMountain
// Author: Thememountain, Christian Lundgren, Shu Miyao
// Description: Detect when elements enter and/or leave viewport
// License: MIT

// Import classList utility 
import classList from './_chaining.js';

const tmInView = (function () {
  
  'use strict';

  if (typeof document == 'undefined' || typeof window == 'undefined') return false;
  
  // Set the plugin defaults
  const defaults = {
    threshold: 0.5,                   // Threshold - percentage of item that should be in the viewport 
    observeParent: false,             // Boolean - whether parent element should be observed
    detectionBuffer: 100,             // Detection buffer - forces the browser to start detecting x pixels prior to entering the viewport
    unObserveViewed: false,           // Whether observing should stop once it has entered the viewport
    delayCallbackTime: 500,           // Delay callback time - the amount of time the element needs to be in the viewport before inview callback is called (in case of fast scrolling)
    forceObserveOnScroll: false,      // Boolean - forces the use of window scroll event and getBoundingClientRect instead of intesectionObserver. Useful for when continous scroll detection is necessary.
    loopCallbackOnScroll: false,      // Boolean - forces continous callback - only available for when observeOnScroll is forced. Useful when continous callback for inview event is necessary.
    initialized: function(){},        // Callback - InView initialized
    inView: function(){},             // Callback - element in view
    outOfView: function(){},          // Callback - element out of view
    destroyed: function(){}           // Callback - tabs destroyed
  };

  /**
  * Constructor.
  * @param  {element}  element  The selector element(s).
  * @param  {object}   options  The plugin options.
  */
  function InView(element, options) {

    // Check for intersection observer support
    let iObserve = 'IntersectionObserver' in window ? true : false;
    let elementObservers = [];
    const timeOutData = 'data-timeout';

    // Deounce events if window on scroll event is used
    let debounceTimeout;

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
      console.log(`${error} - format must be: let x = new tmInView('.selector' or NodeList,{options})`);
    }
  
    /**
    * Utility functions for getting, setting and deleting timeout
    * @param  {element}   The element for which attributes are being modified
    */
    const getTimeoutData = element => element.getAttribute(timeOutData);
    const setTimeoutData = (element, value) => element.setAttribute(timeOutData, value);
    const deleteTimeoutData = element => element.removeAttribute(timeOutData);

    /**
    * Delay callback for element to ensure it's still in the viewport
    * @param  {element}   The element which a timeout is being set for
    */ 
    const delayCallbackInView = (element,elementObserver) => {
      let timeoutId = getTimeoutData(element);
      
      // Timeout was already set, do nothing
      if (timeoutId) {
        return;
      }
      timeoutId = setTimeout(function() {
        
        // Callback
        plugin.settings.inView(element);

        // Unobserve item once in view
        if(iObserve && plugin.settings.unObserveViewed) elementObserver.unobserve(element);

        // Delete timeout
        cancelDelayCallbackInView(element);
      }, plugin.settings.delayCallbackTime);

      // Set timeout data
      setTimeoutData(element, timeoutId);
    };

    /**
    * Cancel delay callback
    * @param  {element}   The element for which timeout and data will be removed
    */
    const cancelDelayCallbackInView = (element) => {
      let timeoutId = getTimeoutData(element);

      // Timeout was already set, do nothing
      if (!timeoutId) {
        return;
      }

      // Clear and delete timeout and data
      clearTimeout(timeoutId);
      deleteTimeoutData(element);
    };

    /**
    * Observe on intersect - modern browsers
    */
    const observeOnIntersect = (element,threshold) =>{
      let elementObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          let item = entry.target;
          if(entry.isIntersecting){
            
            // Swap classes
            classList(item).removeClass('out-of-view').addClass('in-view');
            
            // Test if item is still in the viewport
            delayCallbackInView(item, elementObserver);
          }else{

            // Swap classes
            classList(item).removeClass('in-view').addClass('out-of-view');
            
            // If no longer in the viewport delete timeout
            cancelDelayCallbackInView(item);
            
            // Callback
            plugin.settings.outOfView(item);
          }
        });
      },{
          threshold: threshold,
          rootMargin: `0px 0px ${plugin.settings.detectionBuffer + 'px'} 0px`
      });
      elementObservers.push(elementObserver);
      elementObserver.observe(element);
    };

    /**
    * Fallback for old browsers - detect elements upon window scroll
    */
    let observeOnScroll = () =>{

      // If there's a timer, cancel it
      if (debounceTimeout) {
        window.cancelAnimationFrame(debounceTimeout);
      }

      // Create an array of all elements
      let elementArray = [];

      // Setup the new requestAnimationFrame()
      debounceTimeout = window.requestAnimationFrame(function () {

        // Check element state
        plugin.elements.forEach(function (element) {

          if(plugin.settings.observeParent) element = element.parentNode;

          // Callback flag to stop repeated callbacks
          let callbackInFlag = element.classList.contains('in-view') && !plugin.settings.loopCallbackOnScroll ? true : false;
          let callbackOutFlag = element.classList.contains('out-of-view') && !plugin.settings.loopCallbackOnScroll ? true : false;

          // If unobserve is true and all items have been in the view remove listener
          if(element.classList.contains('in-view')) elementArray.push(element);
          if(elementArray.length === plugin.elements.length && plugin.settings.unObserveViewed) window.removeEventListener('scroll', observeOnScroll, false);

          // Check element visibility 
          if(isElementVisible(element)){
            
            // Swap classes
            classList(element).removeClass('out-of-view').addClass('in-view');

            // Callback
            if(!callbackInFlag) delayCallbackInView(element); 
          }else{

            // Swap classes
            classList(element).removeClass('in-view').addClass('out-of-view');

            // If no longer in the viewport delete timeout
            cancelDelayCallbackInView(element);

            if(plugin.settings.unObserveViewed) return false;

            // Callback
            if(!callbackOutFlag) plugin.settings.outOfView(element);
          }
        });
      });
    };

    /**
    * Fallback for old browser - check to see whether element is in viewport
    * @param  {elemen}  defaults  The element being tested.
    */
    const isElementVisible = (element) => {
      let rect = element.getBoundingClientRect();
      let windowHeight = window.innerHeight + plugin.settings.detectionBuffer || document.documentElement.clientHeight + plugin.settings.detectionBuffer;
      let threshold = element.getAttribute('data-threshold') ? element.getAttribute('data-threshold') : plugin.settings.threshold;
      let isBeyondRect = Math.floor(100 - (((rect.top >= 0 ? 0 : rect.top) / +-( rect.height / 1 )) * 100)) < 1 || Math.floor( 100 - ((rect.bottom - windowHeight) / rect.height) * 100 ) < 1;
      let isBeyondThreshold = Math.floor(100 - (((rect.top >= 0 ? 0 : rect.top) / +-( rect.height / 1)) * 100)) < threshold * 100 || Math.floor( 100 - ((rect.bottom - windowHeight) / rect.height) * 100 ) < threshold * 100;
      return !(isBeyondThreshold);
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
      
      // Check element
      plugin.elements = NodeList.prototype.isPrototypeOf(plugin.elements) ? plugin.elements : document.querySelectorAll(plugin.elements);

      // Check force option
      iObserve = plugin.settings.forceObserveOnScroll ? false : iObserve;

      // Start observing
      if(iObserve){
        plugin.elements.forEach(function(element) {
          let threshold = element.dataset.threshold ? element.dataset.threshold : plugin.settings.threshold;
          if(plugin.settings.observeParent) element = element.parentNode;
          observeOnIntersect(element,threshold);
        });
        
      // Fallback
      }else{
        window.addEventListener('scroll', observeOnScroll, false);

        // Dispatch it once in case items are in the viewport already
        window.dispatchEvent(new Event('scroll'));
      }
      
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

      if (!plugin.settings) return;

      // Remove intersect and window listener
      if(iObserve)
        plugin.elements.forEach(function (element,i) {
          elementObservers[i].unobserve(element);
        });
      else{
        window.removeEventListener('scroll', observeOnScroll, false);
      }

      // Delete any delay callback timer
      plugin.elements.forEach(function (element) {
        cancelDelayCallbackInView(element);
      });
        
      // Callback
      plugin.settings.destroyed();

      // Reset variables
      plugin.settings = null;
    };

    // Return API
    return plugin;
  }
  
  // Return constructor
  return InView;
})();

// Export plugin
export default tmInView;