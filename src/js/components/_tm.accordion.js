// Copyright © ThemeMountain 2019
// Plugin: Accordion 
// Version: 1.0.0
// URL: @ThemeMountain
// Author: Thememountain, Christian Lundgren, Shu Miyao
// Description: Detect when elements enter and/or leave viewport
// License: MIT

// Import utilities 
import classList from '../utilities/_chaining.js';
import locationHash from '../utilities/_locationHash.js';

const tmAccordion = (function () {

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
		initialized: function(){},					// Callback - accordion initialized
		paneVisible: function(){},					// Callback - pane is visible
		paneHidden: function(){},					// Callback - pade in hidden
		destroyed: function(){}						// Callback - accordion destroyed
	};

	/**
	// Constructor.
	* @param  {element}  element  The selector element(s).
	* @param  {object}   options  The plugin options.
	*/
	function Accordion(element, options) {

		// Create an empty plugin object
		const plugin = {};
		
		try{
			plugin.this = this;
			plugin.elements = element;
			plugin.defaults = defaults;
			plugin.options = options;
			plugin.settings = Object.assign({}, defaults, options);
		}catch(error){
			console.log(`${error} - format must be: let x = new tmAccordion('.selector',{options})`);
		}

		/**
		* Add accordion link events.
		* @param  {accLink}  element  The accordion tab link(s).
		*/
		const addLinkEvents = (acclink) =>{
			acclink.addEventListener(eventType, updateAccordionState, false);
		};

		/**
		* Remove accordion link events.
		* @param  {accLink}  element  The accordion tab link(s).
		*/
		const removeLinkEvents = (acclink) =>{
			acclink.removeEventListener(eventType, updateAccordionState, false);
		};

		/**
		* Update accordion
		*/
		const updateAccordionState = () =>{
			event.preventDefault();
			event.stopPropagation();

			let linkClicked = event.target;
			let linkClickedTarget = linkClicked.getAttribute('href');
			let linkActive = linkClicked.closest('.accordion').querySelector('.accordion-nav.active');
			let allPanes = linkClicked.parentNode.querySelectorAll('.accordion-pane');
			let targetPane = linkClicked.parentNode.querySelector(linkClickedTarget);
			let multiplePane = linkClicked.closest('.accordion').hasAttribute('data-toggle-multiple');
			let toggleTimer = null;

			// Return if disabled
			if(linkClicked.classList.contains('disabled')) return false;

			// Set height of all active
			plugin.updatePaneHeight();

			// Toggle panels
			clearTimeout(toggleTimer);
			if(linkClicked.classList.contains('active')){
				toggleTimer = setTimeout(function(){
					if(!multiplePane){
						classList(targetPane).removeClass('no-transition');
						targetPane.style.height = '0px';
					}else{
						classList(targetPane).removeClass('no-transition');
						targetPane.style.height = '0px';
					}
					classList(linkClicked).removeClass('active');

					// Callback
					plugin.settings.paneHidden();
				}, 50 );
			}else{
				toggleTimer = setTimeout( function(){
					let targetPaneHeight = targetPane.querySelector('div').offsetHeight;
					if(!multiplePane){
						if(linkActive) classList(linkActive).removeClass('active');
						allPanes.forEach(function(pane){	
							classList(pane).removeClass('no-transition');
							pane.style.height = '0px';
						});
					}
					classList(linkClicked).addClass('active');
					classList(targetPane).removeClass( 'no-transition' );
					targetPane.style.height = targetPaneHeight + 'px';

					// Callback
					plugin.settings.paneVisible();
				}, 50 );
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

			// Loop through each item and check active accordion link
			document.querySelectorAll(plugin.elements).forEach(function(accordion){
				let links = accordion.querySelectorAll('.accordion-nav');
				let linksActive = accordion.querySelector('.accordion-nav.active');
				
				// Add events to accordion links
				for (var i = 0; i < links.length; i++) {
					addLinkEvents(links[i]);
				}
			});

			// Check window hash and switch active if it exists
			let location = locationHash();
			let hashExists = location[0];
			let itemID = location[1];
			if(hashExists){
				plugin.triggerLinkClick('a[href="' + itemID + '"]');
			}

			// Add window resize event
			window.addEventListener('resize', plugin.clearAccordionHeights, false);
			
			// Callback
			plugin.settings.initialized();
		};

		/**
		* Refresh the plugin.
		* @param  {links}  element  The accordion tab link. 
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
		* Update panel heihgts of active accordion links.
		*/
		plugin.updatePaneHeight = () => {
			let linksActive = document.querySelectorAll('.accordion-nav.active');
			linksActive.forEach(function(link) {
				let targetPane = link.nextElementSibling.querySelector('div');
				let activePanelHeight = targetPane.offsetHeight;
				link.nextElementSibling.style.height = activePanelHeight  + 'px';
			});
		};

		/**
		* Update accordion
		*/
		plugin.clearAccordionHeights = () =>{
			let linksActive = document.querySelectorAll('.accordion-nav.active');
			linksActive.forEach(function(linkActive) {
				let targetPane = linkActive.nextElementSibling;
				targetPane.style.height = 'auto';
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

			// Remove link listeners
			document.querySelectorAll(plugin.elements).forEach(function(element){
				let links = element.querySelectorAll('.accordion-nav');
				for (var i = 0; i < links.length; i++) {
					removeLinkEvents(links[i]);
				}
			});

			// Remove window listener
			window.removeEventListener('resize', plugin.clearAccordionHeights, false);

			// Clear heights
			plugin.clearAccordionHeights();

			// Callback
			plugin.settings.destroyed();

			// Reset variables
			plugin.settings = null;
		};

		// Return API
		return plugin;
	}

	// Return the plugin
	return Accordion;
})();

// Export plugin
export default tmAccordion;