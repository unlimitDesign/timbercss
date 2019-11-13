// Copyright © ThemeMountain 2019
// Plugin: Toggle Sub Menu 
// Version: 1.0.0
// URL: @ThemeMountain
// Author: Thememountain, Christian Lundgren, Shu Miyao
// Description: Detect when elements enter and/or leave viewport
// License: MIT

// Import utilities
import classList from '../utilities/_chaining.js';
import getParents from '../utilities/_getparents.js';
import tmEasing from '../utilities/_tm.easing.js';

const tmToggleSubMenu = (function () {

  // Use strict mode
  'use strict';

  if (typeof navigator == 'undefined' || typeof document == 'undefined' || typeof window == 'undefined') return false;

  // Check for mobile device and determine event type
  let mobile = false;
  if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) ||  navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) ||  navigator.userAgent.match(/BlackBerry/i) ||  navigator.userAgent.match(/Windows Phone/i) ) mobile = true;
  
  // Check event type
  const eventType = mobile ? 'touchstart' : 'click';

  // Sub menu references
  let subMenu = '.sub-menu';                // Sub menu
  let subMenuParentLink = '.contains-sub-menu';     // Sub menu parent link

  // Set the plugin defaults
  const defaults = {
    easing: 'easeInOutQuint',             // Sub menu  easing
    multipleMenusOpen: false,             // Whether multiple top level sub menus should be open simultaneously
    initialized: function(){},              // Callback - side nav initialized
    subMenuOpen: function(){},              // Callback - side nav open
    subMenuClosed: function(){},            // Callback - side nav closed
    destroyed: function(){}               // Callback - side nav destroyed
  };

  /**
  * Constructor.
  * @param  {element}  element  The selector element(s).
  * @param  {object}   options  The plugin options.
  */
  function ToggleSubMenu(element, options) {

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
      console.log(`${error} - format must be: let x = new tmToggleSubMenu('.selector',{options})`);
    }

    /**
    * Close sub menus
    */
    const closeSubMenus = (link) => {
      subMenu = link.nextElementSibling;
      link.closest('li').querySelector('.sub-menu').style.height = 0;
      classList(subMenu).removeClass('active');

      // Callback
      plugin.settings.subMenuClosed();
    };

    /**
    * Calculate link heights of sub menu and return the height
    */
    const calcMenuHeight = (link) => {
      let subMenuItems = link.nextElementSibling.childNodes;
      let subMenuHeight = 0;
      subMenuItems.forEach(function(element){
        if(element.nodeType == Node.ELEMENT_NODE) subMenuHeight += element.offsetHeight; 
      });
      return subMenuHeight;
    };

    /**
    * Update the parent height for nested sub menus
    * @param  {boolean}  state  Whether sub menu is open or closed.
    */
    const setAncestorHeights = (link) => {
      if(link.closest('.sub-menu') == null) return false;
      getParents(link, 'sub-menu').forEach(function(element){
        element.style.height = 'auto';
      });
    };

    /**
    * Toggle sub menu
    */
    const toggleSubMenu = (event) =>{
      event.preventDefault();
      
      // Get link subling
      subMenu = event.target.nextElementSibling;
      subMenu.style.transitionTimingFunction = tmEasing[plugin.settings.easing];

      // Check if its already animating
      if(subMenu.classList.contains('animating')) return false;

      // Now animating
      classList(subMenu).addClass('animating');

      // Is a child of collapsable div
      let isChildofCollapsable = event.target.closest('.collapsable-target');
      if(isChildofCollapsable) event.target.closest('.collapsable-target').style.height = '';

      // Swap active link and set heights
      if(event.target.classList.contains('active')){
        subMenu.style.height = calcMenuHeight(event.target) + 'px';
    
        // Set timeout for animation
        let toggleTimeout = setTimeout(function(){
          classList(event.target).removeClass('active');
          setAncestorHeights(event.target);
          closeSubMenus(event.target);
          clearTimeout(toggleTimeout);
        }, 100);
      }else{
        closeSubMenus(event.target);
        subMenu.style.height = calcMenuHeight(event.target) + 'px';
        setAncestorHeights(event.target);
        classList(subMenu).addClass('active');
        classList(event.target).addClass('active');
      }

      // On transition end issue callack
      subMenu.addEventListener('transitionend', function transition(event){
        event.target.removeEventListener('transitionend', transition, false);
        if(event.target != subMenu) return false;
        classList(subMenu).removeClass('animating');

        // Callback
        plugin.settings.subMenuOpen();
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

      // Loop through each nav container
      document.querySelectorAll(plugin.elements).forEach(function(navContainer){
        let links = navContainer.querySelectorAll(subMenuParentLink);
        
        // Add events to parent links
        for (var i = 0; i < links.length; i++) {
          links[i].addEventListener(eventType, function(){
            toggleSubMenu(event);
          }, false);

          // If active, trigger click so sub menu height is set on startup
          if(links[i].classList.contains('active')){
            classList(links[i]).removeClass('active').addClass(`trigger-${i}`);
            plugin.triggerLinkClick(`.trigger-${i}`);
          }
        }
      });

      // Add window resize event
      window.addEventListener('resize', plugin.clearContentHeights, false);

      // Callback
      plugin.settings.initialized();
    };

    /**
    * Refresh the plugin.
    * @param  {links}  element  The tab link. 
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
    * Clear content heights
    */
    plugin.clearContentHeights = () =>{
      document.querySelectorAll('.sub-menu').forEach(function(element){
        if(element.classList.contains('active')) element.style.height = 'auto';
        else element.style.height = '';
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

      if (!plugin.settings) return;

      // Loop through each link in the navigation and remove events
      document.querySelectorAll(plugin.elements).forEach(function(navigation){
        let links = navigation.querySelectorAll(subMenuParentLink);
        
        // Add events to accordion links
        for (var i = 0; i < links.length; i++) {
          links[i].removeEventListener(eventType, toggleSubMenu, false);
        }
      });

      // Remove window listener
      window.removeEventListener('resize', plugin.clearContentHeights, false);

      // Callback
      plugin.settings.destroyed();

      // Reset variables
      plugin.settings = null;
    };

    // Return API
    return plugin;
  }

  // Return the plugin
  return ToggleSubMenu;
})();

// Export the plugin
export default tmToggleSubMenu;