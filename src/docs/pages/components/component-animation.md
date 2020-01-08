---
title: Component - Animation
menu_label: Animation
layout: documentation
category: ["Components"]
markup_language: html
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <!-- Content Inner -->
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Component: Animation</h1>
      <div class="tabs rounded">
        <div class="tab-nav button-nav left">
          <a href="#tabs-1-pane-1" class="button border-b border-2 active bg-transparent bg-hover-transparent border-grey-lightest border-hover-grey-lightest color-grey-dark color-hover-grey-darkest border-active-primary color-active-primary">Requirements</a>
          <a href="#tabs-1-pane-2" class="button border-b border-2 bg-transparent bg-hover-transparent border-grey-lightest border-hover-grey-lightest color-grey-dark color-hover-grey-darkest border-active-primary color-active-primary">API</a>
          <a href="#tabs-1-pane-3" class="button border-b border-2 bg-transparent bg-hover-transparent border-grey-lightest border-hover-grey-lightest color-grey-dark color-hover-grey-darkest border-active-primary color-active-primary">CallBacks</a>
          <a href="#tabs-1-pane-4" class="button border-b border-2 bg-transparent bg-hover-transparent border-grey-lightest border-hover-grey-lightest color-grey-dark color-hover-grey-darkest border-active-primary color-active-primary">Classes &amp; Data Attributes</a>
        </div>
        <div class="tab-panes px-0 rounded rounded-sm-b border-transparent">
          <div id="tabs-1-pane-1" class="active animate-in">
            <div class="tab-content">
              <p class="mb-0">The horizon component requires <code class="color-indigo font-bold">_tm.horizon.js</code>. Tabs are by default imported in <code class="color-indigo font-bold">_tm.core.js</code>, which means creating an instance of the core creates an instance of the horizon component. To exclude horizons, open<code class="color-indigo font-bold">_tm.core.js</code> and comment <code class="color-indigo font-bold">import tmTabs from './components/_tm.horizon.js';</code>.</p>
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
                      <td> Refreshes the plugin. Useful when new elements have been added to the page. </td>
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
                <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--let horizon = new tmHorizon('.horizon');
horizon.method();
--></code></pre>
              </div>
              <!-- code -->
              <!-- code -->
              <h6 class="uppercase">As a part of the core</h6>
              <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
                <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--timber.horizon.method();
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
                    </tr>
                  </thead>
                  <tbody class="font-mono">
                    <tr>
                      <th class="color-indigo">initialized: function(){}</th>
                      <td> Called once plugin has been initialized. </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">elementVisible: function(){}</th>
                      <td> Called once the element is visible and animated. </td>
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
                <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--let horizon = new tmHorizon('.horizon',{
	callback:function(){}
});
--></code></pre>
              </div>
              <!-- code -->
              <!-- code -->
              <h6 class="uppercase">As a part of the core</h6>
              <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
                <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--timber.module.horizon.settings.callback = function(){};
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
                      <th> Classes &amp; Data Attributes </th>
                      <th> Description </th>
                    </tr>
                  </thead>
                  <tbody class="font-mono">
                    <tr>
                      <th class="color-indigo">.horizon</th>
                      <td> Class for which the horizon instance is created. </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">.in-view</th>
                      <td> Class added to horizon parent when horizon element is physically visible in the viewport. </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">data-animate-in</th>
                      <td> Used to define the animate attributes for the element. Added to div.horizon. </td>
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
        <h3 class="font-light">Animation Presets</h3>
        <p>Use the animation presets to quickly animate an element as it enters the viewport, or, define custom animation attributes.</p>
        <div class="row">
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-dark color-white horizon" data-animate-in="preset:fadeIn;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:fadeIn</p>
              </div>
            </div>
          </div>
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-darkest color-white horizon" data-animate-in="preset:slideInUpShort;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:slideInUpShort</p>
              </div>
            </div>
          </div>
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-dark color-white horizon" data-animate-in="preset:slideInRightShort;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:slideInRightShort</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-darkest color-white horizon" data-animate-in="preset:slideInDownShort;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:slideInDownShort</p>
              </div>
            </div>
          </div>
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-dark color-white horizon" data-animate-in="preset:slideInLeftShort;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:slideInLeftShort</p>
              </div>
            </div>
          </div>
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-darkest color-white horizon" data-animate-in="preset:slideInUpLong;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:slideInUpLong</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-dark color-white horizon" data-animate-in="preset:slideInRightLong;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:slideInRightLong</p>
              </div>
            </div>
          </div>
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-darkest color-white horizon" data-animate-in="preset:slideInDownLong;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:slideInDownLong</p>
              </div>
            </div>
          </div>
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-dark color-white horizon" data-animate-in="preset:slideInLeftLong;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:slideInLeftLong</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-darkest color-white horizon" data-animate-in="preset:bounceIn;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:bounceIn</p>
              </div>
            </div>
          </div>
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-dark color-white horizon" data-animate-in="preset:bounceOut;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:bounceOut</p>
              </div>
            </div>
          </div>
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-darkest color-white horizon" data-animate-in="preset:bounceInUp;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:bounceInUp</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-dark color-white horizon" data-animate-in="preset:bounceInRight;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:bounceInRight</p>
              </div>
            </div>
          </div>
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-darkest color-white horizon" data-animate-in="preset:bounceInDown;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:bounceInDown</p>
              </div>
            </div>
          </div>
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-dark color-white horizon" data-animate-in="preset:bounceInLeft;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:bounceInLeft</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-darkest color-white horizon" data-animate-in="preset:scaleIn;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:scaleIn</p>
              </div>
            </div>
          </div>
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-dark color-white horizon" data-animate-in="preset:scaleOut;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:scaleOut</p>
              </div>
            </div>
          </div>
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-darkest color-white horizon" data-animate-in="preset:flipInX;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:flipInX</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-dark color-white horizon" data-animate-in="preset:flipInY;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:flipInY</p>
              </div>
            </div>
          </div>
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-darkest color-white horizon" data-animate-in="preset:spinInX;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:spinInX</p>
              </div>
            </div>
          </div>
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-dark color-white horizon" data-animate-in="preset:spinInY;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:spinInY</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-darkest color-white horizon" data-animate-in="preset:helicopterIn;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:helicopterIn</p>
              </div>
            </div>
          </div>
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-dark color-white horizon" data-animate-in="preset:helicopterOut;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:helicopterOut</p>
              </div>
            </div>
          </div>
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-darkest color-white horizon" data-animate-in="preset:signSwingTop;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:signSwingTop</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-dark color-white horizon" data-animate-in="preset:signSwingRight;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:signSwingRight</p>
              </div>
            </div>
          </div>
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-darkest color-white horizon" data-animate-in="preset:signSwingBottom;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:signSwingBottom</p>
              </div>
            </div>
          </div>
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-dark color-white horizon" data-animate-in="preset:signSwingLeft;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:signSwingLeft</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-darkest color-white horizon" data-animate-in="preset:wiggleX;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:wiggleX</p>
              </div>
            </div>
          </div>
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-dark color-white horizon" data-animate-in="preset:wiggleY;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:wiggleY</p>
              </div>
            </div>
          </div>
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-darkest color-white horizon" data-animate-in="preset:dropUp;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:dropUp</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-dark color-white horizon" data-animate-in="preset:dropDown;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:dropDown</p>
              </div>
            </div>
          </div>
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-darkest color-white horizon" data-animate-in="preset:rollInLeft;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:rollInLeft</p>
              </div>
            </div>
          </div>
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-dark color-white horizon" data-animate-in="preset:rollInRight;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:rollInRight</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-darkest color-white horizon" data-animate-in="preset:turnInLeft;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:turnInLeft</p>
              </div>
            </div>
          </div>
          <div class="col w-4/12 center">
            <div class="card h-200 flex items-center rounded bg-grey-dark color-white horizon" data-animate-in="preset:turnInRight;duration:500ms;delay:200ms;" data-threshold="1">
              <div class="mx-auto">
                <p>preset:turnInRight</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="card h-200 flex items-center rounded bg-grey-dark color-white horizon" data-animate-in="preset:fadeIn;duration:500ms;delay:200ms;" data-threshold="1">
	<div class="mx-auto">
		<p>preset:fadeIn</p>
	</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Custom Animation</h3>
        <p>Define a custom animation of an element by specifying one or multiple of the following attributes using the <code class="color-indigo font-bold">data-animate-in</code> attribute:</p>
        <ul>
          <li>width: {x}px or %</li>
          <li>height: {x}px or %</li>
          <li>opacity: {x}</li>
          <li>transX: {x}px</li>
          <li>transY: {x}px</li>
          <li>transZ: {x}px</li>
          <li>rotateX: {x}px</li>
          <li>rotateY: {x}px</li>
          <li>rotateZ: {x}px</li>
          <li>scale: {x}</li>
          <li>transOrigX: {x}px</li>
          <li>transOrigY: {x}px</li>
        </ul>
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="row">
            <div class="col w-4/12 center">
              <div class="card rounded size-xl shadow bg-grey-darkest color-white horizon" data-animate-in="height:300px;duration:500ms;delay:200ms;" data-threshold="0">
                <div class="mx-auto">
                  <p>height: 300px</p>
                </div>
              </div>
            </div>
            <div class="col w-4/12 center">
              <div class="card rounded size-xl shadow bg-grey-dark color-white horizon" data-animate-in="transY:-100px;scale:0.5;width:100%;duration:500ms;delay:200ms;easing:easeInOutQuint;" data-threshold="1">
                <div class="mx-auto">
                  <p>width: 100%;<br>transX:-200px;<br>scale:0.5;</p>
                </div>
              </div>
            </div>
            <div class="col w-4/12 center">
              <div class="card rounded size-xl shadow bg-grey-dark color-white horizon" data-animate-in="width:100%;height:100%;duration:500ms;delay:200ms;" data-threshold="1">
                <div class="mx-auto">
                  <p>width:100%;<br>height:100%;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="card rounded size-xl shadow bg-grey-darkest color-white horizon" data-animate-in="height:300px;duration:500ms;delay:200ms;" data-threshold="1">
	<div class="mx-auto">
		<p>height: 300px</p>
	</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
    </div>
    <!-- Content Inner End -->
		<!-- {{ sidebar }} -->
  </div>
</div>
