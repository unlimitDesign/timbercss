// Copyright © UnlimitDesign 2019
// Plugin: Timber core
// Version: 1.0.1
// URL: @UnlimitDesign
// Author: UnlimitDesign, Christian Lundgren, Shu Miyao
// Description: Creates instances of timber plugins
// License: MIT

// Utilities
import tmInView from './utilities/_tm.inview.js';
import tmLoadMedia from './utilities/_tm.loadmedia.js';

// Components
import tmAccordion from './components/_tm.accordion.js';
import tmCollapsable from './components/_tm.collapsable.js';
import tmDismissable from './components/_tm.dismissable.js';
import tmDropdown from './components/_tm.dropdown.js';
import tmOverlayNavigation from './components/_tm.overlaynavigation.js';
import tmRollover from './components/_tm.rollover.js';
import tmScrollTo from './components/_tm.scrollto.js';
import tmSideNavigation from './components/_tm.sidenavigation.js';
import tmToggleSubMenu from './components/_tm.togglesubmenu.js';
import tmTabs from './components/_tm.tabs.js';

// Plugins
import tmHorizon from './plugins/_tm.horizon.js';
import tmLightbox from './plugins/_tm.lightbox.js';
import tmMasonryGrid from './plugins/_tm.masonrygrid.js';
import tmParallax from './plugins/_tm.parallax.js';
import tmResponsiveVideo from './plugins/_tm.responsivevideo.js';
import tmStickyHeader from './plugins/_tm.stickyheader.js';

const timberCore = (function () {

  'use strict';

  function Timber(options) {

    if (typeof document == 'undefined') return false;

    // Set the plugin defaults
    const defaults = {
      initialize: true,
      inview: '.observe',
      loadmedia: '.preload-media',
  
      accordion: '.accordion',
      collapsable: '.collapsable',
      dismissable: '.dismissable',
      dropdown: '.dropdown',
      overlaynav: '.overlay-nav-show',
      rollover: '.thumbnail',
      scrollto: '.scroll-to',
      sidenav: '.side-nav-show',
      togglesubmenu: '.toggle-sub-menus',
      tabs: '.tabs',

      horizon: '.horizon',
      lightbox: '.lightbox',
      masonrygrid: '.grid.preload',
      parallax: '.parallax',
      responsiveVideo: '.video',
      stickyheader: '.header'
    };

    // Create an empty plugin object
    let plugin = {};

    // Instance references

    try {
      // Get defaults and merge with user options
      plugin.defaults = defaults;
      plugin.options = options;
      plugin.settings = Object.assign({}, defaults, options);
      plugin.module = { inview: null, loadmedia: null, accordion: null, collapsable: null, dismissable: null, dropdown: null, horizon: null, masonrygrid: null, overlaynavigation: null, rollover: null, scrollto: null, sidenavigation: null, stickyheader: null, tabs: null, togglesubmenu: null };

      // Create instances if module exists
      if (typeof tmAccordion != 'undefined') plugin.module.accordion = new tmAccordion(plugin.settings.accordion);
      if (typeof tmCollapsable != 'undefined') plugin.module.collapsable = new tmCollapsable(plugin.settings.collapsable);
      if (typeof tmDismissable != 'undefined') plugin.module.dismissable = new tmDismissable(plugin.settings.dismissable);
      if (typeof tmDropdown != 'undefined') plugin.module.dropdown = new tmDropdown(plugin.settings.dropdown);
      if (typeof tmLightbox != 'undefined') plugin.module.lightbox = new tmLightbox(plugin.settings.lightbox);
      if (typeof tmHorizon != 'undefined') plugin.module.horizon = new tmHorizon(plugin.settings.horizon);
      if (typeof tmMasonryGrid != 'undefined') plugin.module.masonrygrid = new tmMasonryGrid(plugin.settings.masonrygrid);
      if (typeof tmInView != 'undefined') plugin.module.inview = new tmInView(plugin.settings.inview);
      if (typeof tmLoadMedia != 'undefined') plugin.module.loadmedia = new tmLoadMedia(plugin.settings.loadmedia);
      if (typeof tmOverlayNavigation != 'undefined') plugin.module.overlaynavigation = new tmOverlayNavigation(plugin.settings.overlaynav);
      if (typeof tmParallax != 'undefined') plugin.module.parallax = new tmParallax(plugin.settings.parallax);
      if (typeof tmRollover != 'undefined') plugin.module.rollover = new tmRollover(plugin.settings.rollover);
      if (typeof tmScrollTo != 'undefined') plugin.module.scrollto = new tmScrollTo(plugin.settings.scrollto);
      if (typeof tmSideNavigation != 'undefined') plugin.module.sidenavigation = new tmSideNavigation(plugin.settings.sidenav);
      if (typeof tmStickyHeader != 'undefined') plugin.module.stickyheader = new tmStickyHeader(plugin.settings.stickyheader);
      if (typeof tmTabs != 'undefined') plugin.module.tabs = new tmTabs(plugin.settings.tabs);
      if (typeof tmToggleSubMenu != 'undefined') plugin.module.togglesubmenu = new tmToggleSubMenu(plugin.settings.togglesubmenu);
      if (typeof tmResponsiveVideo != 'undefined') plugin.module.responsivevideo = new tmResponsiveVideo(plugin.settings.responsiveVideo);
    } catch (error) {
      console.log(`${error} - ensure module is imported or instantiate specific plugin instead of core, for example: plugin.module.moduleName.initialize();`);
    }

    /**
    * Initialize the plugin.
    */
    plugin.initialize = () => {
      for (let module in plugin.module) {
        if (plugin.module[module] != null && document.querySelector(plugin.module[module].elements)) plugin.module[module].initialize();
      }
    };

    /**
    * Refresh the plugin.
    */
    plugin.refresh = () => {
      for (let module in plugin.module) {
        if (plugin.module[module] != null && document.querySelector(plugin.module[module].elements)) plugin.module[module].refresh();
      }
    };

    /**
    * Destroy an existing initialization.
    */
    plugin.destroy = () => {
      for (let module in plugin.module) {
        if (plugin.module[module] != null && document.querySelector(plugin.module[module].elements)) plugin.module[module].destroy();
      }
    };

    // Auto initialize
    if (plugin.settings.initialize) plugin.initialize();

    // Return API
    return plugin;
  }

  // Return the plugin
  return Timber;
})();

// Export the plugin
export default timberCore;
