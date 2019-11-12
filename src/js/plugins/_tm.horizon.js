// Copyright © ThemeMountain 2019
// Plugin: Horizon 
// Version: 1.0.0
// URL: @ThemeMountain
// Author: Thememountain, Christian Lundgren, Shu Miyao
// Description: Detect when elements enter and/or leave viewport
// License: MIT

// Import utilities
import classList from '../utilities/_chaining.js';
import tmInView from '../utilities/_tm.inview.js';
import tmEasing from '../utilities/_tm.easing.js';
import tmAnimation from '../utilities/_tm.animation.js';

const tmHorizon = (function () {

	'use strict';

	if (typeof document == 'undefined') return false;

	// Set the plugin defaults
	const defaults = {
		easing: 'easeInOutQuint',					// Easing type: string, see tmEasing
		speed: 1000,								// Animation speed: milliseconds 
		threshold: 0.5,								// Threshold - determines how much of the items should be in the viewport before animation kicks in
		initialized: function(){},					// Callback - horizon initialized
		elementVisible: function(){},				// Callback - horizon element is visible
		destroyed: function(){}						// Callback - horizon destroyed
	};

	/**
	* Constructor.
	* @param  {element}  element  The selector element(s).
	* @param  {object}   options  The plugin options.
	*/
	function Horizon(element, options) {

		// Attribute array
		let startAttrArray = [];

		//inView instace for elements;
		let horizonItemsInView;

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
			console.log(`${error} - format must be: let x = new tmHorizon('.selector' or NodeList,{options})`);
		}
	
		/**
		*	Element animation attributes, get and set them
		*	@param  {element}   The element to which data attributes are being added.
		*/
		const addDataAttributes = (element) => {
			startAttrArray.filter(Boolean).forEach(function(pair){
				pair = pair.split(':');
				let i = pair[0];
				let j = pair[1];
				
				// Check unit
				let unit = j.indexOf('px') >= 0 ? 'px' : j.indexOf('%') >= 0 ? '%' : 'px';

				// Clean up any possible mistaies
				j = isNaN(parseFloat(j)) ? j : parseFloat(j);
			
				// Add the attributes
				if (i == 'width') element.dataset.width = j + unit;
				if (i == 'height') element.dataset.height = j + unit;
				if (i == 'opacity') element.dataset.opacity = j;
				if (i == 'transX') element.dataset.transX = j + unit;
				if (i == 'transY') element.dataset.transY = j + unit;
				if (i == 'transZ') element.dataset.transZ = j + unit;
				if (i == 'rotateX') element.dataset.rotateX = j + 'deg';
				if (i == 'rotateY') element.dataset.rotateY = j + 'deg';
				if (i == 'rotateZ') element.dataset.rotateZ = j + 'deg';
				if (i == 'scale') element.dataset.scale = j;
				if (i == 'transOrigX') element.dataset.transOrigX = j + unit;
				if (i == 'transOrigY') element.dataset.transOrigY = j + unit;
				if (i == 'duration') element.dataset.duration = j + 'ms';
				if (i == 'delay') element.dataset.delay = j + 'ms';
				if (i == 'easing') element.dataset.easing = j;
			});
		};

		/**
		*	Position element
		*	@param  {element}   The element whose transition elements we're setting
		*/
		const setElementState = (element) => {
			let width = element.dataset.width ? 0 : 'auto'; 
			let height = element.dataset.height ? 0 : 'auto';
			let opacity = element.dataset.opacity ? element.dataset.opacity : 0; 
			let transX = element.dataset.transX ? element.dataset.transX : 0;
			let transY = element.dataset.transY ? element.dataset.transY : 0; 
			let transZ = element.dataset.transZ ? element.dataset.transZ : 0; 
			let rotateX = element.dataset.rotateX ? element.dataset.rotateX : 0; 
			let rotateY = element.dataset.rotateY ? element.dataset.rotateY : 0; 
			let rotateZ = element.dataset.rotateZ ? element.dataset.rotateZ : 0; 
			let scale = element.dataset.scale ? element.dataset.scale : 1;
			element.style.cssText = `width:${width};` +
									`height:${height};` +
									`opacity:${opacity};` +
									`visibility:hidden;` +
									`transition:none;` +
									`transform:translate3d(${transX},${transY},${transX}) rotateX(${rotateX}) rotateY(${rotateY}) rotateZ(${rotateZ}) scale3d(${scale},${scale},${scale});`;	
		};

		/**
		*	Animate element
		*	@param  {element}   The element that's being animated. Rest is animation attributes.
		*/
		const animateElement = (element, width, height, opacity, transX, transY, transZ, rotateX, rotateY, rotateZ, scale, transOrigX, transOrigY, duration, delay, easing, settings) => {
			element.style.cssText = `width: ${width};` +
									`height: ${height};` +
									`opacity: ${opacity};` +
									`visibility: visible;` +
									`transform:translate3d(${transX},${transY},${transZ}) rotateX(${rotateX}) rotateY(${rotateY}) rotateZ(${rotateZ}) scale3d(${scale},${scale},${scale});` +
									`transition-property: width, height, opacity, transform;` +
									`transform-origin: ${transOrigX} ${transOrigY} 0;` +
									`transition-duration: ${duration};` +
									`transition-delay: ${delay};` +
									`transition-timing-function: ${easing};`;
			
			// On transition end issue callack
			element.addEventListener('transitionend', function transition(event){
				event.target.removeEventListener('transitionend', transition, false);
				if(event.target != element) return false;

				// Callback
				plugin.settings.elementVisible();
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

			// Loop through each freeze item
			document.querySelectorAll(plugin.elements).forEach(function(element){
				
				// Get parent
				classList(element.parentNode).addClass('horizon-parent');

				// Initial data
				element.style.cssText = '-webkit-backface-visibility: hidden;';

				// Add perspective class and split array
				classList(element.parentNode).addClass('tmh-perspective');
				startAttrArray = element.dataset.animateIn.split(';');

				// Check for presets
				if(String(startAttrArray).split(':').indexOf('preset') > -1){
					startAttrArray.forEach(function(attribute){
						if(attribute.split(':')[0] == 'preset'){
							let presetArray = String(tmAnimation[attribute.split(':')[1]]).split(';');
							startAttrArray = [...startAttrArray,...presetArray].filter(Boolean);
							if(typeof startAttrArray[0] !== 'undefined'){
								addDataAttributes(element);
								setElementState(element);
							}
						}
					});
				}else{
					startAttrArray = startAttrArray.filter(Boolean);
					if(typeof startAttrArray[0] !== 'undefined'){
						addDataAttributes(element);
						setElementState(element);
					}
				}
			});

			// Create instance of inView to observe horizon items and animate them
			// upon entering the viewport
			horizonItemsInView = new tmInView(plugin.elements,{
				threshold: plugin.settings.threshold,
				observeParent: true,
				unObserveViewed: true,
				detectionBuffer: 0,
				inView: function(visibleElement){
					visibleElement.querySelectorAll(plugin.elements).forEach(function(element){

						// Check duration, delay and timing function
						let width = element.dataset.width ? element.dataset.width : '';
						let height = element.dataset.height ? element.dataset.height : '';
						let transOrigX = element.dataset.transOrigX ? element.dataset.transOrigX : '50%';
						let transOrigY = element.dataset.transOrigY ? element.dataset.transOrigY : '50%';
						let duration = element.dataset.duration ? element.dataset.duration : plugin.settings.speed + 'ms';
						let delay = element.dataset.delay ? element.dataset.delay : 0;
						let easing = element.dataset.easing ? tmEasing[element.dataset.easing] : tmEasing[plugin.settings.easing];

						// Call animate
						animateElement(element, width, height, 1, 0, 0, 0, 0, 0, 0, 1, transOrigX, transOrigY, duration, delay, easing, plugin.settings);
					});
				},
				outOfView: function(hiddenElement){
					hiddenElement.querySelectorAll(plugin.elements).forEach(function(element){
						setElementState(element);
					});
				}
			});
			horizonItemsInView.initialize();

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

			// Remove inView && lazyload instance from grid items
			if(horizonItemsInView != undefined) horizonItemsInView.destroy();

			// Callback
			plugin.settings.destroyed();

			// Reset variables
			plugin.settings = null;
		};

		// Return API
		return plugin;
	}
	
	// Return constructor
	return Horizon;
})();

// Export plugin
export default tmHorizon;