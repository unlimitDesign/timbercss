// Copyright © ThemeMountain 2019
// Plugin: Tabs 
// Version: 1.0.0
// URL: @ThemeMountain
// Author: Thememountain, Christian Lundgren, Shu Miyao
// Description: Detect when elements enter and/or leave viewport
// License: MIT

// Import utilities
import classList from '../utilities/_chaining.js';
import locationHash from '../utilities/_locationHash.js';

const tmTabs = (function () {

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
		initialized: function(){},					// Callback - tabs initialized
		paneVisible: function(){},					// Callback - tab pane is visible
		paneHidden: function(){},					// Callback - tab pane hidden
		destroyed: function(){}						// Callback - tabs destroyed
	};

	/**
	// Constructor.
	* @param  {element}  element  The selector element(s).
	* @param  {object}   options  The plugin options.
	*/
	function Tabs(element, options) {

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
			console.log(`${error} - format must be: let x = new tmTabs('.selector',{options})`);
		}

		/**
		* Add tab link events.
		* @param  {accLink}  element  The tab tab link(s).
		*/
		const addLinkEvents = (tabLink) =>{
			tabLink.addEventListener(eventType, updateTabsState, false);
		};

		/**
		* Remove tab link events.
		* @param  {accLink}  element  The tab tab link(s).
		*/
		const removeLinkEvents = (tabLink) =>{
			tabLink.removeEventListener(eventType, updateTabsState, false);
		};

		/**
		* Update tab
		*/
		const updateTabsState = () =>{
			event.preventDefault();
			event.stopPropagation();

			let linkClicked = event.target;
			let linkClickedTarget = linkClicked.getAttribute('href');
			let linkActive = linkClicked.closest('.tab-nav').querySelector('.active');
			let paneActive = linkClicked.closest('.tabs').querySelector('.tab-panes > .active');
			let targetPane = linkClicked.closest('.tabs').querySelector(linkClickedTarget);
			let toggleTimer = null;

			// Return if disabled
			if(linkClicked.classList.contains('disabled')) return false;

			// Toggle panes
			classList(linkActive).removeClass('active');
			classList(linkClicked).addClass('active');
			classList(paneActive).removeClass('active').removeClass('animate-in');
			classList(targetPane).addClass('active');

			// Callback
			plugin.settings.paneHidden();

			// Set animation timeout
			clearTimeout( toggleTimer );
			toggleTimer = setTimeout( function(){
				classList(targetPane).addClass( 'animate-in' );
				
				// Callback
				plugin.settings.paneVisible();
			}, 50);
			return false;
		};

		/**
		* Public variables and methods.
		*/

		/**
		* Initialize the plugin.
		*/
		plugin.initialize = () => {

			if(plugin.elements == null) return false;

			// Loop through each item and check active tab link
			document.querySelectorAll(plugin.elements).forEach(function(tabs){
				let links = tabs.querySelectorAll('.tab-nav');
				let linksActive = tabs.querySelector('.tab-nav .active');
				let location = locationHash(tabs);
				let hashExists = location[0];
				let itemID = location[1];
				
				// Set active based on hash
				if( hashExists ){
					plugin.triggerLinkClick('a[href="' + itemID + '"]');
				}else{
					classList(tabs.querySelector('.tab-panes > .active')).addClass( 'animate-in' );
				}
				
				// Add events to tabs links
				for (var i = 0; i < links.length; i++) {
					addLinkEvents(links[i]);
				}
			});
			
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
				let links = element.querySelectorAll('.tab-nav');
				for (var i = 0; i < links.length; i++) {
					removeLinkEvents(links[i]);
				}
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
	return Tabs;
})();

// Export the plugin
export default tmTabs;