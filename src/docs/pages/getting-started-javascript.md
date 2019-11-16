---
title: JavaScript
menu_label: JavaScript
layout: documentation
category: ["Gettings Started"]
markup_language: html
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <!-- Content Inner -->
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">JavaScript</h1>
      <p class="text-large">Timber offers a range of components and plugins, many of which require JavaScript to function.</p>
      <p>You can either include the entire Timber core, or, if you prefer, and only require a few plugins, include the ones you need. Note that Timber plugins do not require jQuery or any other library to function, they are all written in Vanilla JavaScript. The only files you will need to modify when it comes to JavaScript are <code class="color-indigo font-bold">_tm.core.js</code> and <code class="color-indigo font-bold">custom.js</code></p>
      <!-- code -->
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--your-project/
├── js
│   └── components
│	└── plugins
│	└── utilities
│	└── _tm.core.js
│	└── custom.js --></code></pre>
      </div>
      <!-- code -->
      <h5>Removing plugins from the core</h5>
      <p>To remove JavaScript plugins from the core, open <code class="color-indigo font-bold">_tm.core.js</code> and simply comment the plugins you do not need. Once you run the build command, these plugins will be exluded.</p>
      <!-- code -->
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--// Components
//import tmAccordion from './components/_tm.accordion.js';
//import tmTabs from './components/_tm.tabs.js';
//mport tmCollapsable from './components/_tm.collapsable.js';
import tmRollover from './components/_tm.rollover.js';
import tmDismissable from './components/_tm.dismissable.js';
import tmDropdown from './components/_tm.dropdown.js';
import tmScrollTo from './components/_tm.scrollto.js';
import tmSideNavigation from './components/_tm.sidenavigation.js';
import tmOverlayNavigation from './components/_tm.overlaynavigation.js';
import tmToggleSubMenu from './components/_tm.togglesubmenu.js';

// Plugins
/*import tmMasonryGrid from './plugins/_tm.masonrygrid.js';
import tmFreeze from './plugins/_tm.freeze.js';
import tmStickyHeader from './plugins/_tm.stickyheader.js';
import tmLightbox from './plugins/_tm.lightbox.js';
import tmHorizon from './plugins/_tm.horizon.js';
import tmParallax from './plugins/_tm.parallax.js';
import tmResponsiveVideo from './plugins/_tm.responsivevideo.js';*/--></code></pre>
      </div>
      <!-- code -->
      <h5>Writing custom JS</h5>
      <p>To add your own JS to Timber, open <code class="color-indigo font-bold">scustom.js</code> and add or import your modules after the initialization of the Timber core.</p>
      <!-- code -->
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--// Core
import timberCore from './_tm.core.js';

// Core instance
let timber = new timberCore({
	initialize: false
});

// Initialize all imported modules
// Or intialize a select number of modules as follows:
// timber.module.moduleName.initialize();
// For callbacks: timber.module.moduleName.settings.callback = function(){};
// console.log(timber.module.moduleName.settings) for module settings
if (typeof timber.initialize != 'undefined') {
	timber.initialize();
}

// Add your JS here
--></code></pre>
      </div>
      <!-- code -->
      <h5>Fallbacks when JavaScript is disabled</h5>
      <p>Timber's plugins do not provide a fallback for when JavaScript is disabled because 98% of users have JavaScript enabled. If you care about the user experience when JavaScript is disabled, use <code class="color-indigo font-bold">noscript</code> tag and let your users know and how to re-enable JavaScript and/or add your own custom fallbacks.</p>
      <hr class="mt-50">
      <a href="getting-started-theming.html" title="Next Page" class="pagination-link button border-none flex flex-row-reverse justify-start justify-sm-between w-auto pr-0 m-0 right bg-transparent bg-hover-transparent left-sm color-grey color-hover-grey-darkest">
        <span class="icon-material mr-0 ml-10">chevron_right</span>
        <span class="mt-0 mr-20">
          <span class="leading-none text-tiny uppercase">Next</span>
          <span class="block text-large">Theming</span>
        </span>
      </a>
    </div>
    <!-- Content Inner End -->
  </div>
</div>
