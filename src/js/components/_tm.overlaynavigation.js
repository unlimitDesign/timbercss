// Copyright © UnlimitDesign 2019
// Plugin: Overlay Navigation 
// Version: 1.0.2
// URL: @UnlimitDesign
// Author: UnlimitDesign, Christian Lundgren, Shu Miyao
// Description: Detect when elements enter and/or leave viewport
// License: MIT

// Import utilities
import classList from '../utilities/_chaining.js';
import tmEasing from '../utilities/_tm.easing.js';
import passiveSupported from '../utilities/_passivesupported.js';

const tmOverlayNavigation = (function () {

  // Use strict mode
  'use strict';

  if (typeof navigator == 'undefined' || typeof document == 'undefined' || typeof window == 'undefined') return false;

  // Check for mobile device and determine event type
  let mobile = false;
  if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) ||  navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) ||  navigator.userAgent.match(/BlackBerry/i) ||  navigator.userAgent.match(/Windows Phone/i) ) mobile = true;
  
  // Check event type
  const eventType = mobile ? 'touchstart' : 'click';

  // Set the plugin defaults
  const defaults = {
    easing: 'easeInOutQuint',
    initialized: function(){},          // Callback - tabs initialized
    overlayNavOpen: function(){},       // Callback - tab pane is visible
    overlayNavClosed: function(){},       // Callback - tab pane hidden
    destroyed: function(){}           // Callback - tabs destroyed
  };

  /**
  * Constructor.
  * @param  {element}  element  The selector element(s).
  * @param  {object}   options  The plugin options.
  */
  function OverlayNavigation(element, options) {

    // Some aliases and classes used thruoghout
    let body;                                       // Body alias
    let siteWrapper;                                // Site wrapper alias
    let overlayNavShow = '.overlay-nav-show';       // Side nav show button.
    let overlayNavHide = '.overlay-nav-hide';       // Side nav hide button.

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
      console.log(`${error} - format must be: let x = new tmOverlayNavigation('.selector',{options})`);
    }

    /**
    * Get the classes associated with the overlay nav
    * @param  {object}  element  The target overlay nav.
    */
    const getClasses = (overlayNav) =>{
      
      // Determine animation type & scrollbar setting
      let animation = overlayNav.dataset.animation ? overlayNav.dataset.animation : 'no-transition';
      let scrollbar = overlayNav.dataset.noScrollbar ? 'no-scrollbar' : 'scrollbar';

      // Add reveal and reset classes
      classList(overlayNav).addClass(scrollbar);

      // Return classes
      return {animation: animation};
    };

    /**
    * Check event options
    * @param  {object}  element  The clickable item to check.
    */
    const checkEventOptions = (target) =>{
      let options = target.tagName === 'A' || eventType == 'click' ? false : passiveSupported() ? { passive: true } : false;
      return options;
    };

    /**
    * Public variables and methods.
    */

    /**
    * Initialize the plugin.
    */
    plugin.initialize = () => {

      if(plugin.elements == null) return false;

      // Loop through each overlay navigation show link
      document.querySelectorAll(plugin.elements).forEach(function(overlayNavShow){
        
        // Get overlay nav target
        let overlayNavId = overlayNavShow.dataset.target ? overlayNavShow.dataset.target : overlayNavShow.href.substring(overlayNavShow.href.indexOf('#'));
        let targetOverlayNav;
        try{
          targetOverlayNav = document.querySelector(overlayNavId);
        }catch(error){
          console.log(`${error} - please give overlay navigation a unique id`);
          return false;
        }

        // Add reset animation class.
        classList(targetOverlayNav).addClass(getClasses(targetOverlayNav).animation + '-reset');

        // Add open events to nav show links
        overlayNavShow.addEventListener(eventType, plugin.openNav, checkEventOptions(overlayNavShow));

        // Add close events to overlay nav hide links
        if(targetOverlayNav.querySelector(overlayNavHide) != null) targetOverlayNav.querySelector(overlayNavHide).addEventListener(eventType, plugin.closeNav, checkEventOptions(overlayNavHide));
      });
      
      // Get body
      body = document.querySelector('body');
      
      // Nav active
      body.dataset.overlayNavActive = false;

      // Get site wrapper
      siteWrapper = document.querySelector('.wrapper');
      
      // Callback
      plugin.settings.initialized();
    };

    /**
    * Trigger link click.
    * @param  {links}  element  The link to trigger a click on. 
    */
    plugin.triggerLinkClick = (link) => {
      try{
        link = document.querySelector(link);
        let event = new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window
        });
        let canceled = !link.dispatchEvent(event);
      }catch(error) {
        console.log(`${error} - selector not entered or does not exist`);
      }
    };

    /**
    * Open overlay navigation.
    * @param  {object}  element  The target overlay nav. 
    */
    plugin.openNav = () => {
      if(event.target.tagName === 'A') event.preventDefault();

      // Add active class to button
      classList(event.target).addClass('active');

      // Get overlay nav target
      let overlayNavId = event.target.dataset.target ? event.target.dataset.target : event.target.href.substring(event.target.href.indexOf('#'));
      let targetOverlayNav = document.querySelector(overlayNavId);

      // Check if target side nav is already active
      if(!targetOverlayNav.classList.contains('active')){

        // Nav now active add utility class to body
        body.dataset.overlayNavActive = true;
        classList(body).addClass('overflow-hidden');

        // Add animation & state classes to wrapper
        classList(siteWrapper).addClass('inactive');

        // Add animation & state classes to overlay nav
        classList(targetOverlayNav).addClass('active').addClass(getClasses(targetOverlayNav).animation);
        targetOverlayNav.style.transitionTimingFunction = tmEasing[plugin.settings.easing];

        // On transition end issue callack
        targetOverlayNav.addEventListener('transitionend', function transition(event){
          event.target.removeEventListener('transitionend', transition, false);
          if(event.target != targetOverlayNav) return false;

          // Callback
          plugin.settings.overlayNavOpen();
        });
      }else{
        plugin.closeNav();
      }
    };

    /**
    * Close overlay navigation.
    */
    plugin.closeNav = () => {
      if(event.target.tagName === 'A') event.preventDefault();

      // Remove active class to button
      document.querySelectorAll(plugin.elements).forEach(function(overlayNavShow){
        classList(overlayNavShow).removeClass('active');
      });

      // Get side nav from clicked link
      let overlayNavId;
      let targetOverlayNav;  
      if(event.target.closest('.overlay-navigation-wrapper') != null){
        overlayNavId = event.target.closest('.overlay-navigation-wrapper').id;
        targetOverlayNav = document.querySelector('#'+overlayNavId);
      }else{
        overlayNavId = event.target.dataset.target ? event.target.dataset.target : event.target.href.substring(event.target.href.indexOf('#'));
        targetOverlayNav = document.querySelector(overlayNavId);
      }

      // Remove animation classes
      classList(targetOverlayNav).removeClass(getClasses(targetOverlayNav).animation);

      // On transition end remove classes 
      targetOverlayNav.addEventListener('transitionend', function transition(event){
        event.target.removeEventListener('transitionend', transition, false);
        if(event.target != targetOverlayNav) return false;
        classList(body).removeClass('overflow-hidden');
        classList(siteWrapper).removeClass('inactive');
        classList(targetOverlayNav).removeClass('active');

        // Callback
        plugin.settings.overlayNavClosed();
      }, false);

      // Nav inactive
      body.dataset.overlayNavActive = false;
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

      // Loop through each overlay navigation show link
      document.querySelectorAll(plugin.elements).forEach(function(overlayNavShow){
        
        // Get overlay nav target
        let overlayNavId = overlayNavShow.dataset.target ? overlayNavShow.dataset.target : overlayNavShow.href.substring(overlayNavShow.href.indexOf('#'));
        let targetOverlayNav = document.querySelector(overlayNavId);

        // Add open events to nav show links
        overlayNavShow.removeEventListener(eventType, plugin.openNav, false);

        // Add close events to overlay nav hide links
        if(targetOverlayNav.querySelector(overlayNavHide) != null) targetOverlayNav.querySelector(overlayNavHide).removeEventListener(eventType, plugin.closeNav, false);
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
  return OverlayNavigation;
})();

// Export plugin
export default tmOverlayNavigation;