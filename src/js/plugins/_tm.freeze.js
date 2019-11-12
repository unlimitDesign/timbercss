// Copyright © ThemeMountain 2019
// Plugin: Freeze elements - fallback for browser not supporting position: sticky 
// Version: 1.0.0
// URL: @ThemeMountain
// Author: Thememountain, Christian Lundgren, Shu Miyao
// Description: Detect when elements enter and/or leave viewport
// License: MIT

// Import classList utility 
import classList from '../utilities/_chaining.js';

const tmFreeze = (function () {

	'use strict';

	if (typeof document == 'undefined' || typeof window == 'undefined') return false;

	// Check CSS Sticky support
	const cssStickySupport = function() { 
		let el = document.createElement( 'span' ), 
		sticky = el.style;sticky.cssText='position:sticky;position:-webkit-sticky;position:-ms-sticky;';
		return sticky.position.indexOf( 'sticky' )!==-1;
	}();

	// Set the plugin defaults
	const defaults = {
		pushSection: 'footer',
		breakpoint: 992,
		initialized: function(){},			// Callback - freeze initialized
		sticky: function(){},				// Callback - freeze element is sticky
		destroyed: function(){}				// Callback - freeze destroyed
	};

	/**
	* Constructor.
	* @param  {element}  element  The selector element(s).
	* @param  {object}   options  The plugin options.
	*/
	function Freeze(element, options) {

		// Deounce events if window on scroll event is used
		let debounceTimeout;

		// Create an empty plugin object
		let  plugin = {};

		// Get defaults and merge with user options
		try{
			plugin.this = this;
			plugin.elements = element;
			plugin.defaults = defaults;
			plugin.options = options;
			plugin.settings = Object.assign({}, defaults, options);
		}catch(error){
			console.log(`${error} - format must be: let x = new tmFreeze('.selector' or NodeList,{options})`);
		}

		/**
		*	Create wrapper
		*/
		const addWrapper = () => {
			document.querySelectorAll(plugin.elements).forEach(function(element){
				let newWrapper = document.createElement('div');
				classList(newWrapper).addClass('freeze-wrapper');
				element.parentNode.insertBefore(newWrapper, element);
				newWrapper.appendChild(element);
			});
		};

		/**
		* Check computed styles of freeze elment
		* @param  {object}  element  The element that becomes frozen.
		*/
		const getComputedStyles = (element) => {
			let style = window.getComputedStyle ? getComputedStyle(element, null) : element.currentStyle;
			let top = parseInt(style.top, 10) || 0;
			let marginBottom = parseInt(style.marginBottom, 10) || 0;
			return {top: top, marginBottom: marginBottom};
		};

		/**
		*	Set wrapper height
		*/
		const setWrapperHeight = () => {
			document.querySelectorAll(plugin.elements).forEach(function(element){
				let height = element.offsetHeight + parseInt(element.dataset.marginBottom,10);
				element.parentNode.style.height = height + 'px';
			});
		};

		/**
		*	Update element state
		*/
		const updateElementState = () => {

			// If there's a timer, cancel it
			if (debounceTimeout) {
				window.cancelAnimationFrame(debounceTimeout);
			}

			// Setup the new requestAnimationFrame()
			debounceTimeout = window.requestAnimationFrame(function () {
				document.querySelectorAll(plugin.elements).forEach(function(element){
					setWrapperHeight();
					freezeElement(element);
				}, false);
			});
		};

		/**
		*	Fallback function for older browsers
		*	@param  {element}   The element that becomes frozen.
		*/
		const freezeElement = function(element){
	 		
			let winWidth = window.innerWidth;

			if(winWidth >= plugin.settings.breakpoint){

				// Check if data attributes are set
				plugin.settings.pushSection = element.dataset.pushSection || plugin.settings.pushSection;
				plugin.settings.breakpoint = parseInt(element.dataset.breakpoint,10) || plugin.settings.breakpoint;

				// Some variables for calculating
				let winScrollTop = window.pageYOffset;
				let elementOrigOffset = parseInt(element.dataset.origOffset,10);
				let pushSection = document.querySelector(element.dataset.pushSection);
				let pushSectionOffset = winScrollTop + pushSection.getBoundingClientRect().top;
				let elementTop = parseInt(element.dataset.top,10);
				let elementMarginBottom = parseInt(element.dataset.marginBottom,10);
				let elementHeight = element.offsetHeight + elementMarginBottom;
			
				// Calculate top and distances from top/bottom of viewport
				let newTop = Math.abs(pushSectionOffset - (elementOrigOffset + elementHeight + elementMarginBottom));
				let distanceFromTop = (elementOrigOffset - winScrollTop) - elementTop;	
				let distanceFromBottom = ((elementOrigOffset + (pushSectionOffset - (elementOrigOffset + elementHeight))) - winScrollTop) - elementTop;

				// Swap positions and set values
				if(distanceFromTop <= 0 || distanceFromTop <= 0 && element.dataset.startup){
					classList(element).addClass('sticky');
					element.style.cssText = `max-width: ${element.parentNode.offsetWidth}px;  position: fixed; top: ${elementTop}px; z-index: 5;`;
					if(distanceFromBottom <= 0 + elementMarginBottom){
						classList(element).removeClass('sticky');
						element.style.cssText = `top: ${newTop}px;  position: relative; z-index: 5;`;
					}
				}else{
					if(winScrollTop <= element.winScrollTop) element.style.cssText = `max-width: ${element.parentNode.offsetWidth}px;  position: fixed; top: ${elementTop}px; z-index: 5;`;
					if(element.offsetTop <= elementOrigOffset){
						classList(element).removeClass('sticky');
						element.style.cssText = `max-width:'';  position: ''; top: ''; z-index: '';`;
					}
				}

				// Callback
				plugin.settings.sticky();
			}else{
				classList(element).removeClass('sticky');
				element.style.cssText = `nax-width:'';  position: ''; top: ''; z-index: '';`;
			}

			// Startup over
			element.dataset.startup = false;
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

				// Use CSS for modern browsers
				if(!cssStickySupport){

					let origOffset;
					let toggleTimer = null;
					
					toggleTimer = setTimeout(function(){
						origOffset = window.pageYOffset + element.getBoundingClientRect().top;
						clearTimeout(toggleTimer);

						// Set some startup attributes
						element.dataset.startup = true;
						element.dataset.origOffset = origOffset;
						element.dataset.top = getComputedStyles(element).top;
						element.dataset.marginBottom = getComputedStyles(element).marginBottom;
						element.style.cssText = 'width: 100%; display: flex; flex-direction: column';
						
						// Dispatch it once in case items are in the viewport already
						window.dispatchEvent(new Event('scroll'));
					}, 50 );
				}
			});

			// If CSS sticky is not supported, add wrappers and window listeners
			if(!cssStickySupport){

				// Create wrapper and set height
				addWrapper();
				setWrapperHeight();

				// Add resize event for window
				window.addEventListener('scroll', updateElementState, false);
				window.addEventListener('resize', updateElementState, false);
			}

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

			// Remove resize and scroll event for window
			if(!cssStickySupport){
				window.removeEventListener('scroll', updateElementState, false);
				window.removeEventListener('resize', updateElementState, false);
			}
				
			// Callback
			plugin.settings.destroyed();

			// Reset variables
			plugin.settings = null;
		};

		// Return API
		return plugin;
	}
	
	// Return constructor
	return Freeze;
})();

// Export plugin
export default tmFreeze;