// Copyright © UnlimitDesign 2019
// Plugin: Rollover 
// Version: 1.0.0
// URL: @UnlimitDesign
// Author: UnlimitDesign, Christian Lundgren, Shu Miyao
// Description: Detect when elements enter and/or leave viewport
// License: MIT

// Import utilities 
import classList from '../utilities/_chaining.js';
import tmEasing from '../utilities/_tm.easing.js';

const tmRollover = (function () {

  'use strict';

  if (typeof navigator == 'undefined' || typeof document == 'undefined' || typeof window == 'undefined') return false;

  // Check for mobile device and determine event type
  let mobile = false;
  if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) ||  navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) ||  navigator.userAgent.match(/BlackBerry/i) ||  navigator.userAgent.match(/Windows Phone/i) ) mobile = true;
  
  // Check event type
  const eventType = mobile ? 'touchstart' : 'click';

  // Set the plugin defaults
  const defaults = {
    transitionElement: '.rollover-content, .image-mask, img, .img',
    overlay: '.rollover-content',
    speed: 400,
    easing: 'easeInOutQuint',
    gradientSpread: '50%',
    initialized: function(){},      // Callback - tabs initialized
    destroyed: function(){}       // Callback - tabs destroyed
  };

  /**
  // Constructor.
  * @param  {element}  element  The selector element(s).
  * @param  {object}   options  The plugin options.
  */
  function Rollover(element, options) {

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
      console.log(`${error} - format must be: let x = new tmRollover('.selector' or NodeList,{options})`);
    }

    /**
    * Hex to RGBA conversion.
    * @param  {string}  element  The hex value to be converted.
    * @param  {number}  number  Opacity used for alpha.
    */
    const convertHexToRgba = (hex, opacity) => {
      let r = parseInt(hex.substring(0,2), 16);
      let g = parseInt(hex.substring(2,4), 16);
      let b = parseInt(hex.substring(4,6), 16);
      let rgba = 'rgba( '+ r +','+ g +','+ b +','+ opacity / 1 +' )';
      return rgba;
    };

    /**
    * Set the rollover color properties.
    * @param  {object}  element  The thumbnail.
    */
    const setRolloverProperties = (thumbnail) => {
      let rgba;
      let speed = thumbnail.dataset.hoverSpeed ? thumbnail.dataset.hoverSpeed : plugin.settings.speed;
      let easing = thumbnail.dataset.hoverEasing ? thumbnail.dataset.hoverEasing : plugin.settings.easing;
      let opacity = thumbnail.dataset.hoverBkgOpacity ? thumbnail.dataset.hoverBkgOpacity : 1;
      let rolloverColor = thumbnail.dataset.hoverBkgColor ? thumbnail.dataset.hoverBkgColor.replace('#','') : thumbnail.querySelector(plugin.settings.overlay).style.backgroundColor;

      // Convert hex to RGBA
      rgba = convertHexToRgba(rolloverColor, opacity);
      
      // Check whether gradient should be used and set background color
      if(thumbnail.hasAttribute('data-gradient')){
        let spread = thumbnail.dataset.gradientSpread ? thumbnail.dataset.gradientSpread : plugin.settings.gradientSpread;
        thumbnail.querySelector(plugin.settings.overlay).style.backgroundImage = `linear-gradient(to top, ${rgba} 0%, transparent ${spread})`;
        thumbnail.querySelector(plugin.settings.overlay).style.backgroundColor = 'transparent';
      }else{
        thumbnail.querySelector(plugin.settings.overlay).style.backgroundColor = rgba;
      }

      // Set speed, easing for rollover content and image
      thumbnail.querySelectorAll(plugin.settings.transitionElement).forEach(function(element){
        element.style.transitionDuration = speed + 'ms';
        element.style.transitionTimingFunction = tmEasing[easing];
      });
    };

    /**
    * Public variables and methods.
    */

    /**
    * Initialize the plugin.
    */
    plugin.initialize = () => {

      if(plugin.elements == null) return false;

      // Loop through each item and check active accordion link
      document.querySelectorAll(plugin.elements).forEach(function(thumbnail){
        if(thumbnail.querySelector(plugin.settings.overlay)){
          setRolloverProperties(thumbnail);
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
        
      // Callback
      plugin.settings.destroyed();

      // Reset variables
      plugin.settings = null;
    };

    // Return API
    return plugin;
  }
  
  // Return constructor
  return Rollover;
})();

// Export the plugin
export default tmRollover;