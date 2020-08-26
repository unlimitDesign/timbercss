// Copyright © UnlimitDesign 2019
// Plugin: Dismissable 
// Version: 1.0.3
// URL: @UnlimitDesign
// Author: UnlimitDesign, Christian Lundgren, Shu Miyao
// Description: Detect when elements enter and/or leave viewport
// License: MIT

// Import utilities
import passiveSupported from '../utilities/_passivesupported.js';

const tmDismissale = (function () {

    'use strict';

    if (typeof navigator == 'undefined' || typeof document == 'undefined' || typeof window == 'undefined') return false;

    // Check for mobile device and determine event type
    let mobile = false;
    if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) ||  navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) ||  navigator.userAgent.match(/BlackBerry/i) ||  navigator.userAgent.match(/Windows Phone/i) ) mobile = true;
    
    // Check event type
    const eventType = mobile ? 'touchstart' : 'click';

    // Set the plugin defaults
    const defaults = {
        iconClose: 'close',
        fontLibrary: 'icon-material',
        speed: '600ms',
        easing: 'ease-in-out',
        initialized: function(){},          // Callback - dismissable initialized
        destroyed: function(){}             // Callback - dismissable destroyed
    };

    /**
    * Constructor.
    * @param  {element}  element  The selector element(s).
    * @param  {object}   options  The plugin options.
    */
    function Dismissible(element, options) {

        // Create an empty plugin object
        const plugin = {};

        // Get defaults and merge with user options
        try{
            plugin.this = this;
            plugin.elements = element;
            plugin.defaults = defaults;
            plugin.options = options;
            plugin.settings = Object.assign({}, defaults, options);
        }catch(error){
            console.log(`${error} - format must be: let x = new tmDismissale('.selector' or NodeList,{options})`);
        }

        /**
        * Set the rollover color properties.
        * @param  {object}  element  The dismissable element.
        */
        const addCloseLink = (dismissible) => {
            const closeLink = document.createElement('button');
            closeLink.className = `close p-0 outline-none bg-transparent bg-hover-transparent border-none ${plugin.settings.fontLibrary}`;
            closeLink.innerHTML = plugin.settings.iconClose;
            dismissible.appendChild(closeLink);
            addLinkEvents(closeLink);
        };

        /**
        * Add link events.
        * @param  {object}  element  The dismissable element.
        */
        const addLinkEvents = (element) => {
          let eventOptions = eventType == 'click' ? false : passiveSupported() && element.tagName != 'A' ? {passive: true} : {passive: false};
          element.addEventListener(eventType, deleteParent, eventOptions);
        };

        /**
        * Remove link events.
        * @param  {object}  element  The dismissable element.
        */
        const removeLinkEvents = (element) => {
            element.removeEventListener(eventType, deleteParent, false);
        };

        /**
        * Set the rollover color properties.
        * @param  {object}  element  The dismissable element.
        */
        const deleteParent = (event) => {
            event.stopPropagation();
            let parent = event.target.parentNode;
            parent.style.cssText = `max-height: 0px; padding-top: 0px; padding-bottom: 0px; opacity: 0; transition-duration: ${plugin.settings.speed}; transition-timing-function: ${plugin.settings.easing};`;
            parent.addEventListener('transitionend', function transition(event){
                event.stopPropagation();
                event.target.removeEventListener('transitionend',transition, false);
                event.target.parentNode.removeChild(event.target);
            },false);
        };

        /**
        * Public variables and methods.
        */

        /**
        * Initialize the plugin.
        */
        plugin.initialize = () => {
            
            if(plugin.elements == null) return false;

            // Loop through each item and check each dismissable element
            document.querySelectorAll(plugin.elements).forEach(function(dismissible){
                addCloseLink(dismissible);
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

            // Loop through each item and check each dismissable element
            document.querySelectorAll(plugin.elements).forEach(function(dismissible){
                if(dismissible.querySelector('.close')) removeLinkEvents(dismissible.querySelector('.close'));
            });
                
            // Callback
            plugin.settings.destroyed();

            // Reset variables
            plugin.settings = null;
        };

        // Return API
        return plugin;
    }
    
    // Return the plugin
    return Dismissible;
})();

// Export plugin
export default tmDismissale;