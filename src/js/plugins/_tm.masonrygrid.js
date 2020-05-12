// Copyright © UnlimitDesign 2019
// Plugin: Masonry Grid 
// Version: 1.0.5
// URL: @UnlimitDesign
// Author: UnlimitDesign, Christian Lundgren, Shu Miyao
// Description: Detect when elements enter and/or leave viewport
// License: MIT

// Import utilities and required plugins
import classList from '../utilities/_chaining.js';
import tmInView from '../utilities/_tm.inview.js';
import loadMedia from '../utilities/_tm.loadmedia.js';
import passiveSupported from '../utilities/_passivesupported.js';

const tmMasonryGrid = (function () {

  // Use strict mode
  'use strict';

  if (typeof document == 'undefined' || typeof window == 'undefined') return false;

  // InView & LazyLoad instance
  let gridItemsInView;
  let gridItemsLazyload;

  // Set the plugin defaults
  const defaults = {
    gridGutter: 30,                         // Used as fallback if no grid gap is set in CSS
    gridTransDuration: 300,                 // Grid item transition duration in milliseconds
    gridItemThreshold: 0.5,                 // Grid item threshold in viewport - used for fallback method only
    gridItemRatio:  1.5,                    // Grid item size radio 
    hideErrorItems: false,                  // Whether grid items that failed to load should be hidden
    usePreloader: true,                     // Whether preloader graphic should be added to the grid items as they load
    preloaderMarkup: '',                    // For custom loader markup
    initialized: function(){},              // Callback - masonry grid initialized
    gridItemLoaded: function(){},           // Callback - masonry item loaded
    destroyed: function(){}                 // Callback - masonry grid destroyed
  };

  /**
  * Constructor.
  * @param  {element}  element  The selector element(s).
  * @param  {object}   options  The plugin options.
  */
  function MasonryGrid(element, options) {

    // Create an empty plugin object
    let plugin = {};

    try{
      plugin.this = this;
      plugin.elements = element;
      plugin.element = element;
      plugin.defaults = defaults;
      plugin.options = options;
      plugin.settings = Object.assign({}, defaults, options);
    }catch(error){
      console.log(`${error} - format must be: let x = new tmMasonryGrid('.selector',{options})`);
    }

    /**
    * Load the media by switching setting src value of data-src
    * @param  {element}  The grid item in which to search for images  
    */
    const mediaLoad = (gridItem) => {
      
      let itemToLoad = gridItem.querySelector('[data-src]') || gridItem.querySelector('[data-bg-image]');
      let asBgImages = gridItem.closest('.grid').hasAttribute('data-as-bg-imgs');
      let loaded = gridItem.classList.contains('loaded');
      let itemParent;

      // Add preloader 
      if(plugin.settings.usePreloader && !loaded && itemToLoad != null) addPreloader(gridItem);

      // Create instance of loadMedia if there is an item to preload
      if(itemToLoad != null){
        gridItemsLazyload = new loadMedia(itemToLoad,{
          backgroundImage: asBgImages, 
          onLoaded: function(loadedItem){

            // Check returned item actually exists
            itemParent = loadedItem.closest('.grid-item');
            if(itemParent == null) return false;

            // Remove loader if it exists
            if(plugin.settings.usePreloader) removePreloader(itemParent);

            // Show loaded grid item by adding the loaded class to it
            classList(itemParent).addClass('loaded');

            // Clear any min-height set
            if(gridItem.classList.contains('loaded')) gridItem.style.minHeight = 'auto'; 

            // Callback
            plugin.settings.gridItemLoaded(loadedItem);
          },
          onError: function(loadedItem){
            itemParent = loadedItem.closest('.grid-item');
            if(plugin.settings.hideErrorItems) classList(itemParent).addClass('hidden');
          }
        });
        gridItemsLazyload.initialize();
      }else{
        classList(gridItem).addClass('loaded');
      }
    };

    /**
    * Calculate grid item height based on span-row-x classes
    * @param  {element}  The grid item which serves as column width size reference
    * @param  {element}  The grid item for which to calculate height
    */
    const calcGridItemHeight = (gridItemSizer, gridItem) =>{
      let columnWidth = gridItemSizer.offsetWidth;
      let rowHeight = gridItemSizer.offsetHeight;
      let rowClassExists = gridItem.className.split(' ').some(c => /span-rows-.*/.test(c));
      let row = rowClassExists ? JSON.stringify(gridItem.className.match(/span-rows-\d+/)) : 1;
      let rowMultiplier = row != 1 ? parseInt(row.substr(row.lastIndexOf( '-' ) + 1),10) : 1;
      let ratio = gridItem.closest('.grid').dataset.gridRatio ? gridItem.closest('.grid').dataset.gridRatio : plugin.settings.gridItemRatio;
      let gridItemHeight = rowClassExists ? (columnWidth/ratio) * rowMultiplier + (plugin.settings.gridGutter * (rowMultiplier - 1)) : columnWidth/ratio;
      return gridItemHeight;
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
    * Create filter menu
    */

    /**
    * Filter grid items
    * @param  {element}  The target grid
    * @param  {string}  Filter category
    */
    const filterSelection = (grid, category) => {
      let gridItem, i;
      gridItem = grid.querySelectorAll('.grid-item');
      for (i = 0; i < gridItem.length; i++) {
        if(category == '*') category = '';
        addFilterClass(gridItem[i], 'hidden');
        if (gridItem[i].className.indexOf(category) > -1) removeFilterClass(gridItem[i], 'hidden');
      }
    };

    /**
    * Adds class to grid items
    * @param  {element}  The gird item
    * @param  {string}  Display class
    */
    const addFilterClass = (gridItem, displayClass) => {
      let i, array1, array2;
      array1 = gridItem.className.split(' ');
      array2 = displayClass.split(' ');
      for (i = 0; i < array2.length; i++) {
        if (array1.indexOf(array2[i]) == -1) gridItem.className += ' ' + array2[i];
      }
    };

    /**
    * Removes classes from grid items
    * @param  {element}  The gird item
    * @param  {string}  Display class
    */
    const removeFilterClass = (gridItem, displayClass) => {
      let i, array1, array2;
      array1 = gridItem.className.split(' ');
      array2 = displayClass.split(' ');
      for (i = 0; i < array2.length; i++) {
        while (array1.indexOf(array2[i]) > -1) {
          array1.splice(array1.indexOf(array2[i]), 1);     
        }
      }
      gridItem.className = array1.join(' ');
    };

    /**
    * Filter menu link events
    */
    const filterListeners = () => {
      document.querySelectorAll('.grid-filter-menu').forEach(function(element){
        let filterMenu = element;
        let gridTarget = document.getElementById(filterMenu.getAttribute('data-target-grid'));
        var menuItems = element.getElementsByTagName('li');
        for (let i = 0; i < menuItems.length; i++) {
          let menuItem = menuItems[i];
          let eventOptions = eventType == 'click' ? false : passiveSupported() && target.tagName != 'A' ? {passive: true} : {passive: false};
          menuItem.addEventListener(eventType, function(event){
            if(event.target.tagName === 'A') event.preventDefault();
            filterSelection(gridTarget,event.target.getAttribute('data-filter'));
            let current = filterMenu.getElementsByClassName('active');
            current[0].className = current[0].className.replace(' active', '');
            event.target.className += ' active';
          }, eventOptions);
        }
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

      // Loop through grid and add inview instance
      document.querySelectorAll(plugin.elements).forEach(function(element){

        // Check existence for grid gutter classes
        let gutterClassExists = element.className.split(' ').some(c => /grid-gutter-.*/.test(c));
        let gutterClass = gutterClassExists ? JSON.stringify(element.className.match(/grid-gutter-\d+/)) : plugin.settings.gridGutter;
        let gutter = gutterClass != plugin.settings.gridGutter ? parseInt(gutterClass.substr(gutterClass.lastIndexOf( '-' ) + 1),10) : plugin.settings.gridGutter;
        plugin.settings.gridGutter = gutter;

        // Add filter menu listeners
        filterListeners();
        
        // Check if items shold receive a fixed height
        if(element.hasAttribute('data-set-grid-item-height')){
          classList(element).addClass('fixed-dimension');
        }
        
        // Find grid items
        let gridItems = element.querySelectorAll('.grid-item:not(.loaded)');

        // Check preloader option
        plugin.settings.usePreloader = element.hasAttribute('data-no-preloader') ? false : plugin.settings.usePreloader;

        // Create instance of inView to observe grid items and load their images
        // upon entering the viewport
        gridItemsInView = new tmInView(gridItems,{
          threshold: plugin.settings.gridItemThreshold,
          unObserveViewed: true,
          inView: function(visibleGridItem){
            mediaLoad(visibleGridItem);
          }
        });
        gridItemsInView.initialize();
      });

      // Add window resize event
      window.addEventListener('resize', plugin.updateGridItemSizes, false);

      // Dispatch it once in case items are in the viewport already
      window.dispatchEvent(new Event('resize'));

      // Callback
      plugin.settings.initialized();
    };

    /**
    * Calculate grid item size.
    */
    plugin.updateGridItemSizes = () => {
      document.querySelectorAll(plugin.elements).forEach(function(element){
        let gridItemSizer = element.querySelector('.grid-sizer');
        let gridItems = element.querySelectorAll('.grid-item');
        for (let i=0; i < gridItems.length; i++) {
          let gridItem = gridItems[i];
          gridItem.style.width = 'auto';
          if(element.hasAttribute('data-set-grid-item-height')) gridItem.style.height = calcGridItemHeight(gridItemSizer,gridItem) + 'px';
        }
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

      // Remove window listener
      window.removeEventListener('resize', plugin.this.updateGridItemSizes, false);

      // Remove inView && lazyload instance from grid items
      if(gridItemsInView != undefined) gridItemsInView.destroy();
      if(gridItemsLazyload != undefined) gridItemsLazyload.destroy();
      
      // Callback
      plugin.settings.destroyed();

      // Reset variables
      plugin.settings = null;
    };

    // Return API
    return plugin;
  }

  // Return the plugin
  return MasonryGrid;
})();

// Export the plugin
export default tmMasonryGrid;