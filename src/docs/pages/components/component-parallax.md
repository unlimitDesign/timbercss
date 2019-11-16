---
title: Component - Parallax
menu_label: Parallax
layout: documentation
category: ["Components"]
markup_language: html
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <!-- Content Inner -->
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Component: Parallax</h1>
      <div class="tabs rounded">
        <div class="tab-nav button-nav left">
          <a href="#tabs-1-pane-1" class="button border-b border-2 active bg-transparent bg-hover-transparent border-grey-lightest border-hover-grey-lightest color-grey-dark color-hover-grey-darkest border-active-primary color-active-primary">Requirements</a>
          <a href="#tabs-1-pane-2" class="button border-b border-2 bg-transparent bg-hover-transparent border-grey-lightest border-hover-grey-lightest color-grey-dark color-hover-grey-darkest border-active-primary color-active-primary">API</a>
          <a href="#tabs-1-pane-3" class="button border-b border-2 bg-transparent bg-hover-transparent border-grey-lightest border-hover-grey-lightest color-grey-dark color-hover-grey-darkest border-active-primary color-active-primary">Settings</a>
          <a href="#tabs-1-pane-4" class="button border-b border-2 bg-transparent bg-hover-transparent border-grey-lightest border-hover-grey-lightest color-grey-dark color-hover-grey-darkest border-active-primary color-active-primary">CallBacks</a>
          <a href="#tabs-1-pane-5" class="button border-b border-2 bg-transparent bg-hover-transparent border-grey-lightest border-hover-grey-lightest color-grey-dark color-hover-grey-darkest border-active-primary color-active-primary">Classes &amp; Data Attributes</a>
        </div>
        <div class="tab-panes px-0 rounded rounded-sm-b border-transparent">
          <div id="tabs-1-pane-1" class="active animate-in">
            <div class="tab-content">
              <p class="mb-0">The parallax component requires <code class="color-indigo font-bold">_tm.parallax.js</code>. Parallax is by default imported in <code class="color-indigo font-bold">_tm.core.js</code>, which means creating an instance of the core creates an instance of the parallax component. To exclude the parallax, open<code class="color-indigo font-bold">_tm.core.js</code> and comment <code class="color-indigo font-bold">import tmAccordion from './components/_tm.parallax.js';</code>.</p>
            </div>
          </div>
          <div id="tabs-1-pane-2">
            <div class="tab-content">
              <!-- Classes -->
              <div class="table-scrollable">
                <table class="table size-md mb-0 rounded bg-white">
                  <thead>
                    <tr>
                      <th> Method </th>
                      <th> Example </th>
                    </tr>
                  </thead>
                  <tbody class="font-mono">
                    <tr>
                      <th class="color-indigo">initialize()</th>
                      <td> Initializes the plugin. </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">refresh()</th>
                      <td> Refreshes the plugin. Useful when new panes have been added to the accordion. </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">destroy()</th>
                      <td> Destroys the instance of the plugin. </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- Classes End -->
              <!-- code -->
              <h6 class="uppercase">As a standalone plugin</h6>
              <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
                <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--let parallax = new tmParallax('.parallax');
parallax.method();
--></code></pre>
              </div>
              <!-- code -->
              <!-- code -->
              <h6 class="uppercase">As a part of the core</h6>
              <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
                <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--timber.parallax.method();
--></code></pre>
              </div>
              <!-- code -->
            </div>
          </div>
          <div id="tabs-1-pane-3">
            <div class="tab-content">
              <!-- Classes -->
              <div class="table-scrollable">
                <table class="table size-md mb-0 rounded bg-white">
                  <thead>
                    <tr>
                      <th> Callback </th>
                      <th> Value </th>
                      <th> Description </th>
                    </tr>
                  </thead>
                  <tbody class="font-mono">
                    <tr>
                      <th class="color-indigo">direction:</th>
                      <td> 'vertical' </td>
                      <td> Accepts 'vertical' or 'horizontal' </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">duration:</th>
                      <td> 0.2 </td>
                      <td> Decimal, parallax speed </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">duration:</th>
                      <td> 0ms </td>
                      <td> Milliseconds </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">easing:</th>
                      <td> 'swing' </td>
                      <td> Cubic-bezier easing function </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- Classes End -->
              <!-- code -->
              <h6 class="uppercase">As a standalone plugin</h6>
              <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
                <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--let parallax = new tmParallax('.parallax',{
    direction: 'vertical',						
	speed: 0.2,									
	duration: '0ms',
	easing: 'swing'
});
--></code></pre>
              </div>
              <!-- code -->
              <!-- code -->
              <h6 class="uppercase">As a part of the core</h6>
              <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
                <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--timber.module.lightbox.settings.contentAnimation = 'slide';
timber.module.lightbox.settings.navThumbnails = false;
--></code></pre>
              </div>
              <!-- code -->
            </div>
          </div>
          <div id="tabs-1-pane-4">
            <div class="tab-content">
              <!-- Classes -->
              <div class="table-scrollable">
                <table class="table size-md mb-0 rounded bg-white">
                  <thead>
                    <tr>
                      <th> Callback </th>
                      <th> Value </th>
                    </tr>
                  </thead>
                  <tbody class="font-mono">
                    <tr>
                      <th class="color-indigo">initialized: function(){}</th>
                      <td> Called once plugin has been initialized. </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">elementVisible: function(){}</th>
                      <td> Called once a parallax item is visble and active. </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">destroyed: function(){}</th>
                      <td> Called once plugin has been destroyed. </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- Classes End -->
              <!-- code -->
              <h6 class="uppercase">As a standalone plugin</h6>
              <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
                <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--let parallax = new tmParallax('.parallax',{
    callback:function(){}
});
--></code></pre>
              </div>
              <!-- code -->
              <!-- code -->
              <h6 class="uppercase">As a part of the core</h6>
              <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
                <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--timber.module.parallax.settings.callback = function(){};
--></code></pre>
              </div>
              <!-- code -->
            </div>
          </div>
          <div id="tabs-1-pane-5">
            <div class="tab-content">
              <!-- Classes -->
              <div class="table-scrollable">
                <table class="table size-md mb-0 rounded bg-white">
                  <thead>
                    <tr>
                      <th> Classes &amp; Data Attributes </th>
                      <th> Description </th>
                    </tr>
                  </thead>
                  <tbody class="font-mono">
                    <tr>
                      <th class="color-indigo">.parallax</th>
                      <td> Class for which the parallax instance is created. </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">.in-view</th>
                      <td> Class added to parallax item once visible in the viewport. </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">.out-of-view</th>
                      <td> Class added to parallax item once hidden, outside of the viewport. </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- Classes End -->
            </div>
          </div>
        </div>
      </div>
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Element Parallax</h3>
        <p>Adding the class <code class="color-indigo font-bold">.parallax</code> to any element will make it a parallax item. Add the data attribute <code class="color-indigo font-bold">data-parallax</code> to define the direction and parallax speed.</p>
        <div class="rounded overflow-hidden relative border-1 border-grey-lightest" style="height:700px;">
          <div class="absolute w-full h-full flex items-center">
            <p class="w-full pl-40 pl-md-0 left text-huge-x5 leading-tight font-heavy opacity-20 parallax" data-parallax="direction:vertical;speed:0.1;">Awesome<br>Parallax</p>
          </div>
          <div class="absolute w-full h-full flex items-center">
            <p class="w-full pl-40 pl-md-0 left text-huge-x5 leading-tight font-heavy opacity-10 parallax" data-parallax="direction:vertical;speed:0.3;">Awesome<br>Parallax</p>
          </div>
          <div class="absolute w-full h-full flex items-end">
            <p class="w-full pl-40 pl-md-0 left text-huge-x4 leading-tight font-heavy opacity-10 parallax" data-parallax="direction:vertical;speed:0.3;">2019</p>
          </div>
          <div class="absolute w-full h-full flex items-end">
            <p class="w-full flex items-end right text-huge-x2 leading-tight font-light color-grey-dark parallax" data-parallax="direction:vertical;speed:0.2;"><span class="w-100 block border-2 border-grey"></span>A JavasScript Event</p>
          </div>
          <div class="absolute w-full h-full">
            <div class="row h-full">
              <div class="col w-3/12 border-1 border-r border-grey-lightest">
                <div class="w-150 h-150 -mt-80 mb-100 mx-auto rounded-full border-4 border-black opacity-20 parallax" data-parallax="direction:vertical;speed:-0.3;"></div>
                <div class="w-80 h-80 mt-30 mx-auto rounded-full bg-purple parallax" data-parallax="direction:vertical;speed:0.25;"></div>
              </div>
              <div class="col w-3/12 flex items-center border-1 border-r border-grey-lightest">
              </div>
              <div class="col w-3/12 border-1 border-r border-grey-lightest">
                <div class="w-150 h-150 mt-50 mx-auto rounded-full bg-purple parallax" data-parallax="direction:vertical;speed:-0.35;"></div>
                <div class="w-50 h-50 mt-60 mx-auto rounded-full border-1 border-white parallax" data-parallax="direction:vertical;speed:0.2;"></div>
                <div class="w-50 h-50 mt-80 mx-auto rounded-full border-2 border-teal parallax" data-parallax="direction:vertical;speed:-0.2;"></div>
              </div>
              <div class="col w-3/12 border-1 border-r border-grey-lightest">
                <div class="w-80 h-80 mt-100 mx-auto rounded border-2 border-grey-darkest parallax" data-parallax="direction:vertical;speed:-0.35;"></div>
                <div class="w-80 h-80 mt-100 mx-auto rounded-full bg-pink parallax" data-parallax="direction:vertical;speed:-0.15;"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<p class="parallax" data-parallax="direction:vertical;speed:0.1;">Awesome<br>Parallax</p>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Parallax Background Image</h3>
        <p>Adding the data attribute <code class="color-indigo font-bold">data-bg-element</code> to the parallax container to make it scale to fit the parent container; hence, creating a background image parallax effect.</p>
        <div class="rounded overflow-hidden relative bg-grey-ultralight" style="height:500px;">
          <div class="bg-cover bg-no-repeat bg-center relative hero-3-1 bg-grey-ultralight parallax" data-bg-element="" data-parallax="direction:vertical;speed:-0.3;easing:easeInOutBack;"></div>
          <div class="media-overlay bg-black opacity-30"></div>
          <div class="content-over items-center center">
            <div>
              <h2 class="text-huge-x3 text-md-huge color-white">Parallax Background</h2>
            </div>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="rounded overflow-hidden relative bg-grey-ultralight" style="height:500px;">
	<div class="bg-cover bg-no-repeat bg-center relative hero-3-1 bg-grey-ultralight parallax" data-bg-element data-parallax="direction:vertical;speed:-0.3;easing:easeInOutBack;"></div>
	<div class="media-overlay bg-black opacity-30"></div>
	<div class="content-over items-center center">
		<div>
			<h2 class="text-huge-x3 text-md-huge color-white">Parallax Background</h2>
		</div>
	</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
    </div>
    <!-- Content Inner End -->
  </div>
</div>
