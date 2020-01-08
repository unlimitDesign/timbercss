---
title: Component - Scroll To
menu_label: Scroll To
layout: documentation
category: ["Components"]
markup_language: html
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <!-- Content Inner -->
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Component: Scroll To</h1>
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
              <p class="mb-0">The scroll to component requires <code class="color-indigo font-bold">_tm.scrollto.js</code>. Tabs are by default imported in <code class="color-indigo font-bold">_tm.core.js</code>, which means creating an instance of the core creates an instance of the scrollto component. To exclude scrolltos, open<code class="color-indigo font-bold">_tm.core.js</code> and comment <code class="color-indigo font-bold">import tmTabs from './components/_tm.scrollto.js';</code>.</p>
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
                <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--let scrollto = new tmScrollTo('.scroll-to');
scrollto.method();
--></code></pre>
              </div>
              <!-- code -->
              <!-- code -->
              <h6 class="uppercase">As a part of the core</h6>
              <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
                <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--timber.scrollto.method();
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
                <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--let scrollto = new tmScrollTo('.scroll-to',{
   callback:function(){}
});
--></code></pre>
              </div>
              <!-- code -->
              <!-- code -->
              <h6 class="uppercase">As a part of the core</h6>
              <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
                <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--timber.module.scrollto.settings.callback = function(){};
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
                      <th> Classes &amp; Data Attribute </th>
                      <th> Description </th>
                    </tr>
                  </thead>
                  <tbody class="font-mono">
                    <tr>
                      <th class="color-indigo">.scroll-to</th>
                      <td> Class for which the scroll to instance is created. </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">data-scroll-type</th>
                      <td> Add data attribute to scroll link. Defines the scroll type. Acceptable values: 'window-scroll-to', 'window-scroll-by', 'element-scroll-by', and 'element-scroll-into-view'. </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">data-scroll-y</th>
                      <td> Added to the scroll link. Defines the number of pixels the window or element should scroll. </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">data-element</th>
                      <td> Added to the scroll link. Defines the ID of the element that should be scrolled into view. Used in combination with data-scroll-type: 'data-scroll-into-view'. </td>
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
        <h3 class="font-light">Window Scroll To Bottom</h3>
        <p>Use the data attribute <code class="color-indigo font-bold">data-scroll-type</code> to define the scroll type. Use the <code class="color-indigo font-bold">data-scroll-y</code> data attribute to define the number of pixels.</p>
        <ul class="list-none">
          <li><strong>data-scroll-type</strong>: window-scroll-to</li>
          <li><strong>data-scroll-y</strong>: {x}px</li>
        </ul>
        <div class="p-30 rounded bg-grey-ultralight">
          <button class="button rounded scroll-to m-0" data-scroll-type="window-scroll-to" data-scroll-y="2500">scroll to bottom</button>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="p-30 rounded bg-grey-ultralight">
	<button class="button rounded scroll-to m-0" data-scroll-type="window-scroll-to" data-scroll-y="2500">scroll to bottom</button>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Window Scroll By</h3>
        <p>Use the data attribute <code class="color-indigo font-bold">data-scroll-type</code> to define the scroll type. Use the <code class="color-indigo font-bold">data-scroll-y</code> data attribute to define the number of pixels.</p>
        <ul class="list-none">
          <li><strong>data-scroll-type</strong>: window-scroll-by</li>
          <li><strong>data-scroll-y</strong>: {x}px</li>
        </ul>
        <div class="p-30 rounded bg-grey-ultralight">
          <button class="button rounded scroll-to m-0" data-scroll-type="window-scroll-by" data-scroll-y="100">Scroll by 100 pixels</button>
          <button class="button rounded scroll-to m-0" data-scroll-type="window-scroll-by" data-scroll-y="-100">Scroll by -100 pixels</button>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="p-30 rounded bg-grey-ultralight">
	<button class="button rounded scroll-to m-0" data-scroll-type="window-scroll-by" data-scroll-y="100">Scroll by 100 pixels</button>
	<button class="button rounded scroll-to m-0" data-scroll-type="window-scroll-by" data-scroll-y="-100">Scroll by -100 pixels</button>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Scroll Element To Top</h3>
        <p>Use the data attribute <code class="color-indigo font-bold">data-scroll-type</code> to define the scroll type. Use the <code class="color-indigo font-bold">data-scroll-y</code> data attribute to define the number of pixels.</p>
        <ul class="list-none">
          <li><strong>data-scroll-type</strong>: element-scroll-to</li>
          <li><strong>data-scroll-y</strong>: 0px</li>
        </ul>
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="actions">
            <p>Scroll the text the use the button to scrol to top.</p>
            <button class="button rounded scroll-to" data-scroll-type="element-scroll-to" data-element=".element-scroll-top" data-scroll-y="0">scroll element to top</button>
          </div>
          <article class="overflow-scroll element-scroll-top" style="height:30rem;">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui iure obcaecati, repudiandae aspernatur cumque recusandae adipisci consequuntur maiores, quo in nulla ratione facere distinctio beatae, quae consequatur ab labore dolorum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui iure obcaecati, repudiandae aspernatur cumque recusandae adipisci consequuntur maiores, quo in nulla ratione facere distinctio beatae, quae consequatur ab labore dolorum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui iure obcaecati, repudiandae aspernatur cumque recusandae adipisci consequuntur maiores, quo in nulla ratione facere distinctio beatae, quae consequatur ab labore dolorum.</p>
            <h3 class="hello"><em>hello!</em></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui iure obcaecati, repudiandae aspernatur cumque recusandae adipisci consequuntur maiores, quo in nulla ratione facere distinctio beatae, quae consequatur ab labore dolorum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui iure obcaecati, repudiandae aspernatur cumque recusandae adipisci consequuntur maiores, quo in nulla ratione facere distinctio beatae, quae consequatur ab labore dolorum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui iure obcaecati, repudiandae aspernatur cumque recusandae adipisci consequuntur maiores, quo in nulla ratione facere distinctio beatae, quae consequatur ab labore dolorum.</p>
          </article>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="p-30 rounded bg-grey-ultralight">
	<div class="actions">
		<p>Scroll the text the use the button to scrol to top.</p>
		<button class="button rounded scroll-to" data-scroll-type="element-scroll-to" data-element=".element-scroll-top" data-scroll-y="0">scroll element to top</button>
	</div>
	<article class="overflow-scroll element-scroll-top" style="height:30rem;">
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui iure obcaecati, repudiandae aspernatur cumque recusandae
		adipisci consequuntur maiores, quo in nulla ratione facere distinctio beatae, quae consequatur ab labore dolorum.</p>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui iure obcaecati, repudiandae aspernatur cumque recusandae
		adipisci consequuntur maiores, quo in nulla ratione facere distinctio beatae, quae consequatur ab labore dolorum.</p>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui iure obcaecati, repudiandae aspernatur cumque recusandae
		adipisci consequuntur maiores, quo in nulla ratione facere distinctio beatae, quae consequatur ab labore dolorum.</p>
		<h3 class="hello"><em>hello!</em></h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui iure obcaecati, repudiandae aspernatur cumque recusandae
		adipisci consequuntur maiores, quo in nulla ratione facere distinctio beatae, quae consequatur ab labore dolorum.</p>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui iure obcaecati, repudiandae aspernatur cumque recusandae
		adipisci consequuntur maiores, quo in nulla ratione facere distinctio beatae, quae consequatur ab labore dolorum.</p>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui iure obcaecati, repudiandae aspernatur cumque recusandae
		adipisci consequuntur maiores, quo in nulla ratione facere distinctio beatae, quae consequatur ab labore dolorum.</p>
	</article>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Scroll Into View</h3>
        <p>Use the data attribute <code class="color-indigo font-bold">data-scroll-type</code> to define the scroll type. Use the <code class="color-indigo font-bold">data-element</code> data attribute to define the element that should be scrolled into view.</p>
        <ul class="list-none">
          <li><strong>data-scroll-type</strong>: element-scroll-into-view</li>
          <li><strong>data-element</strong>: #elementID</li>
        </ul>
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="actions">
            <button class="button rounded scroll-to" data-scroll-type="element-scroll-into-view" data-element=".scroll-into-view">Scroll into view</button>
          </div>
          <article class="overflow-scroll h-300">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui iure obcaecati, repudiandae aspernatur cumque recusandae adipisci consequuntur maiores, quo in nulla ratione facere distinctio beatae, quae consequatur ab labore dolorum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui iure obcaecati, repudiandae aspernatur cumque recusandae adipisci consequuntur maiores, quo in nulla ratione facere distinctio beatae, quae consequatur ab labore dolorum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui iure obcaecati, repudiandae aspernatur cumque recusandae adipisci consequuntur maiores, quo in nulla ratione facere distinctio beatae, quae consequatur ab labore dolorum.</p>
            <h3 class="scroll-into-view"><em>hello!</em></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui iure obcaecati, repudiandae aspernatur cumque recusandae adipisci consequuntur maiores, quo in nulla ratione facere distinctio beatae, quae consequatur ab labore dolorum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui iure obcaecati, repudiandae aspernatur cumque recusandae adipisci consequuntur maiores, quo in nulla ratione facere distinctio beatae, quae consequatur ab labore dolorum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui iure obcaecati, repudiandae aspernatur cumque recusandae adipisci consequuntur maiores, quo in nulla ratione facere distinctio beatae, quae consequatur ab labore dolorum.</p>
          </article>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="p-30 rounded bg-grey-ultralight">
	<div class="actions">
		<button class="button rounded scroll-to" data-scroll-type="element-scroll-into-view" data-element=".scroll-into-view">Scroll into view</button>
	</div>
	<article class="overflow-scroll h-300">
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui iure obcaecati, repudiandae aspernatur cumque recusandae
		adipisci consequuntur maiores, quo in nulla ratione facere distinctio beatae, quae consequatur ab labore dolorum.</p>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui iure obcaecati, repudiandae aspernatur cumque recusandae
		adipisci consequuntur maiores, quo in nulla ratione facere distinctio beatae, quae consequatur ab labore dolorum.</p>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui iure obcaecati, repudiandae aspernatur cumque recusandae
		adipisci consequuntur maiores, quo in nulla ratione facere distinctio beatae, quae consequatur ab labore dolorum.</p>
		<h3 class="scroll-into-view"><em>hello!</em></h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui iure obcaecati, repudiandae aspernatur cumque recusandae
		adipisci consequuntur maiores, quo in nulla ratione facere distinctio beatae, quae consequatur ab labore dolorum.</p>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui iure obcaecati, repudiandae aspernatur cumque recusandae
		adipisci consequuntur maiores, quo in nulla ratione facere distinctio beatae, quae consequatur ab labore dolorum.</p>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui iure obcaecati, repudiandae aspernatur cumque recusandae
		adipisci consequuntur maiores, quo in nulla ratione facere distinctio beatae, quae consequatur ab labore dolorum.</p>
	</article>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Scroll Window To Top</h3>
        <p>Use the data attribute <code class="color-indigo font-bold">data-scroll-type</code> to define the scroll type. Use the <code class="color-indigo font-bold">data-scroll-y</code> data attribute to define the number of pixels.</p>
        <ul class="list-none">
          <li><strong>data-scroll-type</strong>: window-scroll-to</li>
          <li><strong>data-scroll-y</strong>: 0px</li>
        </ul>
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="actions">
            <button class="button rounded scroll-to" data-scroll-type="window-scroll-to" data-scroll-y="0">Scroll Window To Top</button>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="p-30 rounded bg-grey-ultralight">
	<div class="actions">
		<button class="button rounded scroll-to" data-scroll-type="window-scroll-to" data-scroll-y="0">Scroll Window To Top</button>
	</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Scroll Navigation</h3>
        <p>Use the data attribute <code class="color-indigo font-bold">data-scroll-type</code> to define the scroll type. Use the <code class="color-indigo font-bold">data-element</code> data attribute to define the section IDs.</p>
        <ul class="list-none">
          <li><strong>data-scroll-type</strong>: element-scroll-into-view</li>
          <li><strong>data-element</strong>: #elementID</li>
        </ul>
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="freeze z-10 pst-80">
            <ul class="list-style-none list-horizontal">
              <li><button data-element="#section-1" class="button rounded scroll-to nav-item bg-active-black" data-scroll-type="element-scroll-into-view">Section 1</button></li>
              <li><button data-element="#section-2" class="button rounded scroll-to nav-item bg-active-black" data-scroll-type="element-scroll-into-view">Section 2</button></li>
              <li><button data-element="#section-3" class="button rounded scroll-to nav-item bg-active-black" data-scroll-type="element-scroll-into-view">Section 3</button></li>
              <li><button data-element="#section-4" class="button rounded scroll-to nav-item bg-active-black" data-scroll-type="element-scroll-into-view">Section 4</button></li>
            </ul>
          </div>
          <div id="section-1" data-threshold="0.5" class="section-block h-screen bg-blue color-white">
            <div class="row">
              <div class="col w-full center">
                <h1>Section 1</h1>
              </div>
            </div>
          </div>
          <div id="section-2" data-threshold="0.5" class="section-block h-screen bg-pink color-white">
            <div class="row">
              <div class="col w-full center">
                <h1>Section 2</h1>
              </div>
            </div>
          </div>
          <div id="section-3" data-threshold="0.5" class="section-block h-screen bg-teal color-white">
            <div class="row">
              <div class="col w-full center">
                <h1>Section 3</h1>
              </div>
            </div>
          </div>
          <div id="section-4" data-threshold="0.5" class="section-block h-screen bg-purple color-white">
            <div class="row">
              <div class="col w-full center">
                <h1>Section 4</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="p-30 rounded bg-grey-ultralight">
	<div class="freeze z-10 pst-80">
		<ul class="list-style-none list-horizontal">
			<li><button data-element="#section-1" class="button rounded scroll-to nav-item bg-active-black" data-scroll-type="element-scroll-into-view">Section 1</a></li>
			<li><button data-element="#section-2" class="button rounded scroll-to nav-item bg-active-black" data-scroll-type="element-scroll-into-view">Section 2</a></li>
			<li><button data-element="#section-3" class="button rounded scroll-to nav-item bg-active-black" data-scroll-type="element-scroll-into-view">Section 3</a></li>
			<li><button data-element="#section-4" class="button rounded scroll-to nav-item bg-active-black" data-scroll-type="element-scroll-into-view">Section 4</a></li>
		</ul>
	</div>
	<div id="section-1" class="section-block h-screen bg-blue color-white">
		<div class="row">
			<div class="col w-full center">
				<h1>Section 1</h1>
			</div>
		</div>
	</div>
	<div id="section-2" class="section-block h-screen bg-pink color-white">
		<div class="row">
			<div class="col w-full center">
				<h1>Section 2</h1>
			</div>
		</div>
	</div>
	<div id="section-3" class="section-block h-screen bg-teal color-white">
		<div class="row">
			<div class="col w-full center">
				<h1>Section 3</h1>
			</div>
		</div>
	</div>
	<div id="section-4" class="section-block h-screen bg-purple color-white">
		<div class="row">
			<div class="col w-full center">
				<h1>Section 4</h1>
			</div>
		</div>
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
