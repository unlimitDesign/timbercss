// Copyright © ThemeMountain 2019
// Plugin: Responsive Video 
// Version: 1.0.0
// URL: @ThemeMountain
// Author: Thememountain, Christian Lundgren, Shu Miyao
// Description: Detect when elements enter and/or leave viewport
// License: MIT

// Import utilities 
import classList from '../utilities/_chaining.js';

const tmResponsiveVideo = (function () {

	'use strict';

	if (typeof navigator == 'undefined' || typeof document == 'undefined' || typeof window == 'undefined') return false;

	// Set the plugin defaults
	const defaults = {
		bgVideo: false,						// Whether the video should be set as a background video of it's parent.
		initialized: function(){},			// Callback - video initialized
		destroyed: function(){}				// Callback - video destroyed
	};

	/**
	// Constructor.
	* @param  {element}  element  The selector element(s).
	* @param  {object}   options  The plugin options.
	*/
	function ResponsiveVideo(element, options) {

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
			console.log(`${error} - format must be: let x = new tmResponsiveVideo('.selector' or NodeList,{options})`);
		}

		/**
		*	Create wrapper
		*	@param  {element}
		*/
		const addWrapper = (video) => {
			if(!video.parentNode.classList.contains('video-container')){
				let newWrapper = document.createElement('div');
				if(!video.hasAttribute('data-bg-video')) classList(newWrapper).addClass('video-container');
				else classList(newWrapper).addClass('bg-video-container');
				video.parentNode.insertBefore(newWrapper, video);
				newWrapper.appendChild(video);
			}
		};

		/**
		*	Calculate Padding
		*	@param  {element}
		*/
		const calcPadding = (video) =>{
			return ((parseInt(video.height, 10) / parseInt(video.width, 10)) * 100) + '%';
		};

		/**
		*	Calculate Ratios
		*	@param  {element}
		*/
		const calcRatios = (value1, value2) =>{
			 return parseInt(value1, 10)/parseInt(value2, 10);
		};

		/**
		*	Make Responsive
		*	@param  {element}
		*/
		const makeResponsive = (video) =>{
			let padding = calcPadding(video);
			video.parentNode.style.cssText = `padding-bottom: ${padding};height:0;`;
			video.style.cssText = 'width:100%;height:100%;top:0;left 0;';
		};

		/**
		*	Resize video
		*/
		const resizeVideo = () =>{
			document.querySelectorAll(plugin.elements).forEach(function(video){
				if(video.hasAttribute('data-bg-video')){
					let videoW = video.width;
					let videoH = video.height;
					let parentW = video.parentNode.offsetWidth;
					let parentH = video.parentNode.offsetHeight;
					let newVideoW;
					let newVideoH;
					let videoRatio = calcRatios(videoW, videoH);
					let parentRatio = parentW > parentH ? calcRatios(parentW, parentH) : calcRatios(parentH, parentW);
					newVideoH = parentRatio >= videoRatio ? parentH * parentRatio : parentH;
					newVideoW = newVideoH * videoRatio;
					video.style.width = newVideoW + 'px';
					video.style.height = newVideoH + 'px';
					video.style.top = parentRatio >= videoRatio ? ((parentH - newVideoH)/2) + 'px' : ((newVideoH - parentH)/2) + 'px';
					video.style.left = ((parentW - newVideoW)/2) + 'px';
				}
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

			// Loop through each item and check active accordion link
			document.querySelectorAll(plugin.elements).forEach(function(video){
				let mediaType = video.tagName == 'IFRAME' || video.tagName == 'OBJECT';
				let bgVideo = video.hasAttribute('data-bg-video') ? true : plugin.settings.bgVideo;
				addWrapper(video);
				if(mediaType && !bgVideo){
					makeResponsive(video);
				}else if(bgVideo){
					window.addEventListener('resize', resizeVideo, false);
					window.dispatchEvent(new Event('resize'));
				}
			});
			
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

			if ( !plugin.settings ) return;

			// Remove window listener
			if(document.querySelector('[data-bg-video]')) window.removeEventListener('resize', resizeVideo, false);

			// Callback
			plugin.settings.destroyed();

			// Reset variables
			plugin.settings = null;
		};

		// Return API
		return plugin;
	}
	
	// Return constructor
	return ResponsiveVideo;
})();

// Export the plugin
export default tmResponsiveVideo;