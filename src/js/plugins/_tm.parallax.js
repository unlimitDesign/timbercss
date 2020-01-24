// Copyright © UnlimitDesign 2019
// Plugin: Parallax 
// Version: 1.0.0
// URL: @UnlimitDesign
// Author: UnlimitDesign, Christian Lundgren, Shu Miyao
// Description: Detect when elements enter and/or leave viewport
// License: MIT

// Import utilities
import classList from '../utilities/_chaining.js';
import tmInView from '../utilities/_tm.inview.js';
import tmEasing from '../utilities/_tm.easing.js';

const tmParallax = (function () {

  'use strict';

  if (typeof document == 'undefined' || typeof window == 'undefined') return false;

  // Set the plugin defaults
  const defaults = {
    direction: 'vertical',            // Parallax direction - vertical or horizontal
    speed: 0.2,                       // Decimal - parallax speed 
    duration: '0ms',                  // Milliseconds - determines duration of the last position of the parallax element
    easing: 'swing',                  // String - easing type string, see tmEasing
    initialized: function(){},        // Callback - prallax initialized
    elementVisible: function(){},     // Callback - prallax element is visible
    destroyed: function(){}           // Callback - prallax destroyed
  };

  /**
  * Constructor.
  * @param  {element}  element  The selector element(s).
  * @param  {object}   options  The plugin options.
  */
  function Parallax(element, options) {

    // Attribute array
    let startAttrArray = [];

    //inView instace for elements;
    let parallaxItemsInView;

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
      console.log(`${error} - format must be: let x = new tmParallax('.selector' or NodeList,{options})`);
    }

    /**
    * Calculate Ratios
    * @param  {element}
    */
    const calcRatios = (value1, value2) =>{
       return parseInt(value1, 10)/parseInt(value2, 10);
    };

    /**
    * Resize Bg
    */
    const resizeBgElement = () =>{
      document.querySelectorAll(plugin.elements).forEach(function(element){
        if(element.hasAttribute('data-bg-element')){
          let direction = element.dataset.direction ? element.dataset.direction : 'vertical';
          let speed = element.dataset.speed ? element.dataset.speed : plugin.settings.speed;
          let distanceScroll = window.innerHeight+element.parentNode.offsetHeight;
          let distanceParallax = Math.abs(distanceScroll*speed);
          let parentW = element.parentNode.offsetWidth;
          let parentH = element.parentNode.offsetHeight;
          let elementW = direction == 'horizontal' ? parentW+distanceParallax : parentW;
          let elementH = direction == 'vertical' ? parentH+distanceParallax : parentH;
          Object.assign(element.style,{
            width: direction == 'vertical' ? parentW + 'px' : elementW + 'px',
            height: direction == 'horizontal' ? parentH + 'px' : elementH + 'px',
            top: direction == 'horizontal' ? 0 : speed < 0 ? parentH - elementH + 'px' : 0,
            left: direction == 'vertical' ? 0 : speed < 0 ? parentW - elementW + 'px' : 0
          });
        }
      });
    };
  
    /**
    * Element animation attributes, get and set them
    * @param  {element}   The element to which data attributes are being added.
    */
    const addDataAttributes = (element) => {
      startAttrArray.filter(Boolean).forEach(function(pair){
        pair = pair.split(':');
        let i = pair[0];
        let j = pair[1];
        
        // Clean up any possible mistaies
        j = isNaN(parseFloat(j)) ? j : parseFloat(j);
      
        // Add the attributes
        if (i === 'direction') element.dataset.direction = j;
        if (i === 'speed') element.dataset.speed = j;
        if (i === 'duration') element.dataset.duration = j;
        if (i == 'easing') element.dataset.easing = j;
      });

      // Get actual position in HTML
      element.dataset.zeroPositionY = element.getBoundingClientRect().top+window.pageYOffset;
      element.dataset.zeroPositionX = element.getBoundingClientRect().top+window.pageYOffset;
    };

    /**
    * Position element
    * @param  {element}   The element whose transition elements we're setting
    */
    const calcElementPosition = (element) => {

      // Check direction, speed and easing
      let direction = element.dataset.direction ? element.dataset.direction : 'vertical';
      let speed = element.dataset.speed ? element.dataset.speed : plugin.settings.speed;
      let duration = element.dataset.duration ? element.dataset.duration : plugin.settings.duration;
      let easing = element.dataset.easing ? element.dataset.easing : plugin.settings.easing;
      let zeroPositionY = element.dataset.zeroPositionY;
      let zeroPositionX = element.dataset.zeroPositionY;
    
      // Some variables
      let win = window;
      let winTop = win.pageYOffset;
      let winLeft = win.pageXOffset;
      let transX;
      let transY;

      // Calculate translation amounts for X and Y
      if(direction == 'horizontal') transX = win.innerHeight >= zeroPositionX ? -win.pageXOffset * speed : Math.round((zeroPositionX-(win.pageXOffset+win.innerHeight))*speed);
      else transX = 0;
      if(direction == 'vertical') transY = win.innerHeight >= zeroPositionY ? -win.pageYOffset*speed : Math.round((zeroPositionY-(win.pageYOffset+win.innerHeight))*speed);
      else transY = 0;

      // Call animate
      animateElement(element, transX, transY, 0, duration, easing, plugin.settings);
    };

    /**
    * Animate element
    * @param  {element}   The element that's being animated.
    */
    const animateElement = (element, transX, transY, transZ, duration, easing, settings) => {
      Object.assign(element.style,{
          transform:`translate3d(${transX}px,${transY}px,${transZ}px)`, 
          transitionProperty: 'transform', 
          transitionDuration: `${duration}`,
          transitionTimingFunction: `${easing}`
      });

      // On transition end issue callack
      element.addEventListener('transitionend', function transition(event){
        event.target.removeEventListener('transitionend', transition, false);
        if(event.target != element) return false;

        // Callback
        plugin.settings.elementVisible();
      });
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
        
        // Get parent
        classList(element.parentNode).addClass('parallax-parent');

        // Check parallax type
        let parallaxBg = element.hasAttribute('data-bg-element') ? true : false;
        
        // Initial data
        element.style.cssText = '-webkit-backface-visibility: hidden;';

        // Add perspective class and split array
        classList(element.parentNode).addClass('tmh-perspective');
        startAttrArray = element.dataset.parallax.split(';');

        // Add data attributes
        addDataAttributes(element);

        // Resize event
        if(parallaxBg){
          window.addEventListener('resize', resizeBgElement, false);
          window.dispatchEvent(new Event('resize'));
        }
      });

      // Create instance of inView to observe horizon items and animate them
      // upon entering the viewport
      parallaxItemsInView = new tmInView(plugin.elements,{
        threshold: 0,
        unObserveViewed: false,
        delayCallbackTime: 0,
        detectionBuffer: 0,
        forceObserveOnScroll: true,
        loopCallbackOnScroll: true,
        inView: function(visibleElement){
          calcElementPosition(visibleElement);
        },
        outOfView: function(visibleElement){
          calcElementPosition(visibleElement);
        }
      });
      parallaxItemsInView.initialize();

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

      // Remove inView && lazyload instance from grid items
      if(parallaxItemsInView != undefined) parallaxItemsInView.destroy();

      // Callback
      plugin.settings.destroyed();

      // Reset variables
      plugin.settings = null;
    };

    // Return API
    return plugin;
  }
  
  // Return constructor
  return Parallax;
})();

// Export plugin
export default tmParallax;