// Copyright © UnlimitDesign 2019
// Plugin: Dropdown 
// Version: 1.0.0
// URL: @UnlimitDesign
// Author: UnlimitDesign, Christian Lundgren, Shu Miyao
// Description: Detect when elements enter and/or leave viewport
// License: MIT

// Import utilities 
import classList from '../utilities/_chaining.js';

const tmDropdown = (function () {

  'use strict';

  if (typeof navigator == 'undefined' || typeof document == 'undefined' || typeof window == 'undefined') return false;

  // Check for mobile device and determine event type
  let mobile = false;
  if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) ||  navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) ||  navigator.userAgent.match(/BlackBerry/i) ||  navigator.userAgent.match(/Windows Phone/i) ) mobile = true;
  
  // Check event type
  const eventType = mobile ? 'touchstart' : 'click';

  // Set the plugin defaults
  const defaults = {
    initialized: function(){},      // Callback - dropdown initialized
    menuVisible: function(){},      // Callback - dropdown menu active and visible
    menuHidden: function(){},     // Callback - dropdown menu inactive and hidden
    destroyed: function(){}       // Callback - dropdown destroyed
  };

  /**
  // Constructor.
  * @param  {element}  element  The selector element(s).
  * @param  {object}   options  The plugin options.
  */
  function Dropdown(element, options) {

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
      console.log(`${error} - format must be: let x = new tmDropdown('.selector' or NodeList,{options})`);
    }

    /**
    * Check computed styles of the dropdown list
    * @param  {object}  element  The dropdown list.
    */
    const getComputedStyles = (dropdownList) => {
      let style = window.getComputedStyle ? getComputedStyle(dropdownList, null) : dropdownList.currentStyle;
      let borderTop = parseInt(style.borderTop, 10) || 0;
      let borderBottom = parseInt(style.borderBottom, 10) || 0;
      let marginTop = parseInt(style.marginTop, 10) || 0;
      let totalComputedHeight = borderTop + borderBottom + marginTop;
      return totalComputedHeight;
    };

    /**
    * Set input focus
    * @param  {object}  element  The dropdown list.
    */
    const setInputFocus = (dropdownList) =>{
      let input = dropdownList.querySelector('input');
      if(input){
        if(input.classList.contains('set-focus')){
          let input = dropdownList.querySelector('input');
          let setFocus;
          clearTimeout( setFocus );
          setFocus = setTimeout( function(){
            input.focus();
          }, 50);
        }
      }
    };

    /**
    * Toggle dropdown
    */
    const updateDropdownState = () => {
      event.preventDefault();
      event.stopPropagation();

      // Define some variables
      let dropdown = event.target.parentNode;
      let dropdownList = dropdown.querySelector('.dropdown-menu');

      // Return if dropdown is disabled
      if(event.target.parentNode.classList.contains('disabled')) return false;

      // Close all other dropdowns in the event they are open
      if(!event.target.classList.contains('active')) plugin.closeAllDropdowns();

      // Toggle classes
      if(dropdownList.classList.contains('active')){
        classList(dropdownList).removeClass('active');
        classList(event.target).removeClass('active');

        // Callback
        plugin.settings.menuHidden();
      }else{
        classList(dropdownList).addClass('active');
        classList(event.target).addClass('active');

        // Check for input fields and set focus
        setInputFocus(dropdownList);

        // Callback
        plugin.settings.menuVisible();
      }
    };

    /**
    * Toggle dropdown link items
    */
    const updateDropdownLinkState = () => {
      event.preventDefault();
      event.stopPropagation();

      // Define some variables
      let dropdown = event.target.closest('.dropdown');
      let dropdownList = event.target.closest('.dropdown').querySelector('.dropdown-menu');

      // Swap classes
      if(dropdownList.querySelector('.active')) classList(dropdownList.querySelector('.active')).removeClass('active');
      classList(event.target).addClass('active');

      // Update dropdown link with selected item text
      if(dropdown.hasAttribute('data-update-selection')){
        let selected = event.target.innerText;
        let link = dropdown.querySelector('a, .button, button');
        if(link.querySelector('span') == null){
          link.innerText = selected;
        }else{
          link.querySelector('span:not([class*="icon-"])').innerText = selected;
        }
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

      // Loop through each item and check each dismissable element
      document.querySelectorAll(plugin.elements).forEach(function(dropdown){
        let dropdownLink = dropdown.querySelector('a, .button, button');
        let dropdownList = dropdown.querySelector('.dropdown-menu');
        let dropdownMenuLinks = dropdown.querySelectorAll('.dropdown-item');

        // Add link events
        dropdownLink.addEventListener(eventType, updateDropdownState, false);

        // Add events to dropdown menu links
        for (var i = 0; i < dropdownMenuLinks.length; i++) {
          dropdownMenuLinks[i].addEventListener(eventType, updateDropdownLinkState, false);
        }

        // Set height of dropdown list if it's to open upwards
        if(dropdown.classList.contains('menu-up')){
          let listHeight = dropdownLink.offsetHeight + plugin.updateListHeight(dropdownList) + getComputedStyles(dropdownList);
          dropdownList.style.cssText = `margin-top: 0px; transform: translateY(-${listHeight}px);`;
        }
      });

      // Add document and window events
      document.querySelector('.wrapper-inner').addEventListener(eventType, plugin.closeAllDropdowns, false);
      window.addEventListener('scroll', plugin.closeAllDropdowns, false);
      
      // Callback
      plugin.settings.initialized();
    };

    // Update list height
    plugin.updateListHeight = (dropdownList) => {
      let listItems = dropdownList.childNodes;
      let listHeight = 0;
      listItems.forEach(function(link) {
        if(link.nodeType == Node.ELEMENT_NODE) listHeight += link.offsetHeight;
      });
      return listHeight;
    };

    /**
    * Close all dropdowns
    */
    plugin.closeAllDropdowns = () => {
      if(event.target != document){
        if(event.target.closest('.dropdown-menu')) return false;
      }
      document.querySelectorAll(plugin.elements).forEach(function(dropdown){
        let dropdownLinks = dropdown.querySelector('a, .button, button');
        let dropdownList = dropdown.querySelector('.dropdown-menu');
        classList(dropdownLinks).removeClass('active');
        classList(dropdownList).removeClass('active');
      });
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

      // Loop through each item and check each dropdown element
      document.querySelectorAll(plugin.elements).forEach(function(dropdown){
        let dropdownLink = dropdown.querySelector('a, .button, button');
        let dropdownMenuLinks = dropdown.querySelectorAll('.dropdown-item');
        dropdownLink.removeEventListener(eventType, updateDropdownState, false);
        for (var i = 0; i < dropdownMenuLinks.length; i++) {
          dropdownMenuLinks[i].removeEventListener(eventType, updateDropdownLinkState, false);
        }
      });

      // Remove document and window events
      document.removeEventListener(eventType, plugin.closeAllDropdowns, false);
      window.removeEventListener('scroll', plugin.closeAllDropdowns, false);
        
      // Callback
      plugin.settings.destroyed();

      // Reset variables
      plugin.settings = null;
    };

    // Return API
    return plugin;
  }
  
  // Return constructor
  return Dropdown;
})();

// Export plugin
export default tmDropdown;