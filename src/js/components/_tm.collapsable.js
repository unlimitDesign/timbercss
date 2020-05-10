// Copyright © UnlimitDesign 2019
// Plugin: Collapsable 
// Version: 1.0.1
// URL: @UnlimitDesign
// Author: UnlimitDesign, Christian Lundgren, Shu Miyao
// Description: Detect when elements enter and/or leave viewport
// License: MIT

// Import utilities 
import classList from '../utilities/_chaining.js';
import locationHash from '../utilities/_locationHash.js';
import getParents from '../utilities/_getparents.js';
import passiveSupported from '../utilities/_passivesupported.js';

const tmCollapsable = (function () {

  // Use strict mode
  'use strict';

  if (typeof navigator == 'undefined' || typeof document == 'undefined' || typeof window == 'undefined') return false;

  // Check for mobile device and determine event type
  let mobile = false;
  if(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) ||  navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) ||  navigator.userAgent.match(/BlackBerry/i) ||  navigator.userAgent.match(/Windows Phone/i)) mobile = true;
  
  // Check event type
  let eventType = mobile ? 'touchstart' : 'click';

  // Set the plugin defaults
  const defaults = {
    minHeight: '0px',             // Integer - collapsible min height
    initialized: function(){},          // Callback - collapsible initialized
    contentVisible: function(){},       // Callback - collapsible pane visible
    contentHidden: function(){},        // Callback - collapsible pane hidden
    destroyed: function(){}           // Callback - collapsible destroyed
  };

  /**
  * Constructor.
  * @param  {element}  element  The selector element(s).
  * @param  {object}   options  The plugin options.
  */
  function Collapsable(element, options) {

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
      console.log(`${error} - format must be: let x = new tmCollapsable('.selector',{options})`);
    }

    /**
    * Add collapsable link events.
    * @param  {element}  The collapsable link(s).
    */
    const addLinkEvents = (collapsableLink, eventType) => {
      let options = collapsableLink.tagName === 'A' || eventType == 'click' ? false : passiveSupported() ? { passive: true } : false;
      collapsableLink.addEventListener(eventType, toggleTimeout, options);
    };

    /**
    * Remove accordion link events.
    * @param  {element}  The collapsable link(s).
    */
    const removeLinkEvents = (collapsableLink) => {
      let event = collapsableLink.type == 'radio' ? 'change' : collapsableLink.type == 'checkbox' ? 'change' : eventType;
      collapsableLink.removeEventListener(event, toggleTimeout, false);
    };

    /**
    * Get collapsable target.
    */
    const getCollapsableTarget = (element) =>{
      let radio = element.type == 'radio';
      let checkbox = element.type == 'checkbox';
      let button = element.tagName == 'BUTTON';
      let collapsableTarget = radio || checkbox || button ? document.querySelector(element.dataset.target) : document.querySelector(element.getAttribute('href'));
      return collapsableTarget;
    };

    /**
    * Toogle timer used for CSS animations to kick, update collapsable state on 
    * @param  {event} click event.
    */
    const toggleTimeout = (event) => {
      if(event.target.tagName === 'A') event.preventDefault();
      event.stopPropagation();

      // Clear height of any collapsable parents in the event that the
      // current collapsable item is nested
      getParents(event.target, 'collapsable-target').forEach(function(element){
        element.style.height = 'auto';
      });

      // Update height in the event it has changed
      plugin.updateContentHeight(getCollapsableTarget(event.target));

      // Toggle current content
      let toggleTimeout = setTimeout(function(){
        updateCollapsableState(event);
        clearTimeout(toggleTimeout);
      }, 100 );
    };

    /**
    * Update collapsable content
    * @param  {event} click event.
    */
    const updateCollapsableState = (event) => {
      let radio = event.target.type == 'radio';
      let checkbox = event.target.type == 'checkbox';
      let activeState = radio ? !event.target.dataset.toggleContent : checkbox ? !event.target.checked : event.target.classList.contains('active');
      if(activeState){
        if(radio){
          let siblings = event.target.parentNode.querySelectorAll('.radio.active');
          siblings.forEach(function(radio){
            classList(radio).removeClass('active');
            classList(getCollapsableTarget(radio)).removeClass('active');
            plugin.updateContentHeight(getCollapsableTarget(radio));
          });
          classList(event.target).addClass('active');
          classList(getCollapsableTarget(event.target)).addClass('active');
        }else{
          classList(event.target).removeClass('active');
          classList(getCollapsableTarget(event.target)).removeClass('active');
        }

        // Callback
        plugin.settings.contentHidden();
      }else{
        classList(event.target).addClass('active');
        classList(getCollapsableTarget(event.target)).addClass('active');

        // Callback
        plugin.settings.contentVisible();
      }
      plugin.updateContentHeight(getCollapsableTarget(event.target));
    };

    /**
    * Public variables and methods.
    */

    /**
    * Initialize the plugin.
    */
    plugin.initialize = () => {

      if(plugin.elements == null) return false;

      // Loop through each item and check active colapsable links
      document.querySelectorAll(plugin.elements).forEach(function(element){
        let radio = element.type == 'radio';
        let checkbox = element.type == 'checkbox';
        let location = locationHash(element);
        let hashExists = location[0];
        let itemID = location[1];

        // Add events
        if(radio || checkbox){
          if(element.hasAttribute('data-toggle-content')){
            addLinkEvents(element, 'change');
          }
        }else{
          addLinkEvents(element, eventType);
        }

        // Set initial height of target content upon initialization
        let checkBreakpointClass = getCollapsableTarget(element).classList.toString();
        if(checkBreakpointClass.indexOf('active-') == -1){
          plugin.updateContentHeight(getCollapsableTarget(element));
        }else{
          getCollapsableTarget(element).style.height = '';
        }

        // Set active based on hash
        if(hashExists){
          if(radio && element.dataset.target == itemID) getCollapsableTarget(element).style.height = '0px';
          if(element.dataset.target == itemID){
            plugin.triggerClick('[data-target="' + itemID + '"]');
          }else if(element.href && element.href.substring(element.href.indexOf('#')) == itemID){
            getCollapsableTarget(element).style.height = '0px';
            plugin.triggerClick('a[href="' + itemID + '"]');
          }
          classList(document.querySelector(itemID)).addClass('active');
        }
      });

      // Add window resize event
      window.addEventListener('resize', plugin.clearContentHeights, false);
      
      // Callback
      plugin.settings.initialized();
    };

    /**
    * Refresh the plugin.
    * @param  {object}  The collapsable link, radio or checkbox. 
    */
    plugin.triggerClick = (element) => {
      try{
        element = document.querySelector(element);
        let event = new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window
        });
        let canceled = !element.dispatchEvent(event);
      }catch(error) {
        console.log(`${error} - selector not entered or does not exist`);
      }
    };

    /**
    * Update content heights of active collapsable links.
    */
    plugin.updateContentHeight = (targetContent) => {
      if(targetContent.classList.contains('active')){
        let targetContentChildren = targetContent.childNodes;
        let targetContentHeight = 0;
        targetContentChildren.forEach(function(element){
          if(element.nodeType == Node.ELEMENT_NODE) targetContentHeight += element.offsetHeight; 
        });
        targetContent.style.height = targetContentHeight + 'px';
      }else{
        let minHeight = targetContent.dataset.minHeight ? targetContent.dataset.minHeight + 'px' : plugin.settings.minHeight;
        targetContent.style.height = minHeight;
      }
    };

    /**
    * Clear content heights
    */
    plugin.clearContentHeights = () =>{
      document.querySelectorAll(plugin.elements).forEach(function(element){
        let targetContent = getCollapsableTarget(element);
        let minHeight = targetContent.dataset.minHeight ? targetContent.dataset.minHeight + 'px' : '';
        targetContent.style.height = minHeight;
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

      // Remove link listeners
      document.querySelectorAll(plugin.elements).forEach(function(element){
        removeLinkEvents(element);
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

  // Return constructor
  return Collapsable;
})();

// Export plugin
export default tmCollapsable;