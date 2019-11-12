// Copyright © ThemeMountain 2019
// Plugin: Side Navigation 
// Version: 1.0.0
// URL: @ThemeMountain
// Author: Thememountain, Christian Lundgren, Shu Miyao
// Description: Detect when elements enter and/or leave viewport
// License: MIT

// Import utilities
import classList from '../utilities/_chaining.js';
import tmEasing from '../utilities/_tm.easing.js';

const tmSideNavigation = (function () {

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
		initialized: function(){},					// Callback - tabs initialized
		sideNavOpen: function(){},					// Callback - tab pane is visible
		sideNavClosed: function(){},				// Callback - tab pane hidden
		destroyed: function(){}						// Callback - tabs destroyed
	};

	/**
	// Constructor.
	* @param  {element}  element  The selector element(s).
	* @param  {object}   options  The plugin options.
	*/
	function SideNavigation(element, options) {

		// Some aliases and classes used thruoghout
		let body;												// Body alias
		let siteWrapper;										// Site wrapper alias
		let revealLeft = '.element-reveal-left';				// Wrapper reveal left class
		let revealRight = '.element-reveal-right';				// Wrapper reveal right class
		let sideNavShow = '.side-nav-show';						// Side nav show button.
		let sideNavHide = '.side-nav-hide';						// Side nav hide button.

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
			console.log(`${error} - format must be: let x = new tmSideNavigation('.selector',{options})`);
		}

		/**
		* Get the classes associated with the side nav
		* @param  {object}  element  The target side nav.
		*/
		const getClasses = (sideNav) =>{
			
			// Determine animation type & scrollbar setting
			let animation = sideNav.dataset.animation ? sideNav.dataset.animation : 'no-transition';
			let scrollbar = sideNav.dataset.noScrollbar ? 'no-scrollbar' : 'scrollbar';

			// Add reveal and reset classes
			classList(siteWrapper).addClass('reveal-side-navigation');
			classList(sideNav).addClass(animation + '-reset').addClass(scrollbar);

			// Determine wrapper animation direction 
			// based on side-nav position
			let menuPosition = sideNav.classList.contains('enter-right') ? 'right' : 'left';
			let direction = menuPosition == 'left' ? revealLeft : revealRight;

			// Strip .
			direction = direction.split('.').join('');

			// Return classes
			return {direction: direction, animation: animation};
		};

		/**
		* Public variables and methods.
		*/

		/**
		* Initialize the plugin.
		*/
		plugin.initialize = () => {

			if(plugin.elements == null) return false;

			// Loop through each side navigation show link
			document.querySelectorAll(plugin.elements).forEach(function(sideNavShow){
				
				// Get side nav target
				let sideNavId = sideNavShow.dataset.targetSideNav ? sideNavShow.dataset.targetSideNav : sideNavShow.href.substring(sideNavShow.href.indexOf('#'));
				let targetSideNav;
				try{
					targetSideNav = document.querySelector(sideNavId);
				}catch(error){
					console.log(`${error} - please give side navigation a unique id`);
					return false;
				}

				// Add open events to nav show links
				sideNavShow.addEventListener(eventType, plugin.openNav, false);

				// Add close events to side nav hide links
				targetSideNav.querySelector(sideNavHide).addEventListener(eventType, plugin.closeNav, false);
			});

			// Get body
			body = document.querySelector('body');
			
			// Nav active
			body.dataset.sideNavActive = false;

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
		* Open side navigation.
		* @param  {object}  element  The target side nav. 
		*/
		plugin.openNav = function(){
			event.preventDefault();

			// Get side nav target
			let sideNavId = event.target.dataset.targetSideNav ? event.target.dataset.targetSideNav : event.target.href.substring(event.target.href.indexOf('#'));
			let targetSideNav = document.querySelector(sideNavId);

			// Check if target side nav is already active
			if(!targetSideNav.classList.contains('active')){

				// Nav now active add utility class to body
				body.dataset.sideNavActive = true;
				classList(body).addClass('overflow-hidden');

				// Add animation & state classes to wrapper
				classList(siteWrapper).addClass(getClasses(targetSideNav).direction).addClass('inactive').addClass(getClasses(targetSideNav).animation);
				siteWrapper.style.transitionTimingFunction = tmEasing[plugin.settings.easing];
				
				// Add animation & state classes to side nav
				classList(targetSideNav).addClass('active').addClass(getClasses(targetSideNav).animation);
				targetSideNav.style.transitionTimingFunction = tmEasing[plugin.settings.easing];

				// On transition end issue callack
				siteWrapper.addEventListener('transitionend', function transition(event){
					event.target.removeEventListener('transitionend', transition, false);
					if(event.target != siteWrapper) return false;

					// Callback
					plugin.settings.sideNavOpen();
				});
			}else{
				plugin.closeNav();
			}
		};

		/**
		* Close side navigation.
		*/
		plugin.closeNav = function(){
			event.preventDefault();
			
			// Get side nav from clicked link
			let sideNavId = event.target.closest('.side-navigation-wrapper').id;
			let targetSideNav = document.querySelector('#'+sideNavId);													
			
			// Remove direction & animation classes
			classList(siteWrapper).removeClass(getClasses(targetSideNav).direction).removeClass(getClasses(targetSideNav).animation);
			classList(targetSideNav).removeClass(getClasses(targetSideNav).animation);

			// On transition end remove classes 
			siteWrapper.addEventListener('transitionend', function transition(event){
				event.target.removeEventListener('transitionend', transition, false);
				if(event.target != siteWrapper) return false;
				classList(body).removeClass('overflow-hidden');
				classList(siteWrapper).removeClass('inactive');
				classList(targetSideNav).removeClass('active');

				// Callback
				plugin.settings.sideNavClosed();
			},false);

			// Nav inactive
			body.dataset.sideNavActive = false;
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

			// Loop through each side navigation show link
			document.querySelectorAll(plugin.elements).forEach(function(sideNavShow){

				// Get side nav target
				let sideNavId = sideNavShow.dataset.targetSideNav ? sideNavShow.dataset.targetSideNav : sideNavShow.href.substring(sideNavShow.href.indexOf('#'));
				let targetSideNav = document.querySelector(sideNavId);

				// Remove open events to nav show links
				sideNavShow.removeEventListener(eventType, plugin.openNav, false);

				// Remove close events to side nav hide links
				targetSideNav.querySelector(sideNavHide).removeEventListener(eventType, plugin.closeNav, false);
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
	return SideNavigation;
})();

// Export the plugin
export default tmSideNavigation;