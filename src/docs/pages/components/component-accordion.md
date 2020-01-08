---
title: Component - Accordion
menu_label: Accordion
layout: documentation
category: ["Components"]
markup_language: html
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <!-- Content Inner -->
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Component: Accordion</h1>
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
              <p class="mb-0">The accordion component requires <code class="color-indigo font-bold">_tm.accordion.js</code>. Accordions are by default imported in <code class="color-indigo font-bold">_tm.core.js</code>, which means creating an instance of the core creates an instance of the accordion component. To exclude accordions, open<code class="color-indigo font-bold">_tm.core.js</code> and comment <code class="color-indigo font-bold">import tmAccordion from './components/_tm.accordion.js';</code>.</p>
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
                      <th class="color-indigo">triggerLinkClick(#linkID)</th>
                      <td> Triggers accordion button click. </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">updatePaneHeight()</th>
                      <td> Updates the accordion pane heights. Useful when content has been added. </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">clearAccordionHeights()</th>
                      <td> Clears all heights set of active panes. Useful when resizing accordion. </td>
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
                <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--let accordion = new tmAccordion('.accordion');
accordion.method();
--></code></pre>
              </div>
              <!-- code -->
              <!-- code -->
              <h6 class="uppercase">As a part of the core</h6>
              <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
                <pre class="m-0 language-js"><code class="inline-block scrolling-touch">timber.accordion.method();
</code></pre>
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
                      <th class="color-indigo">paneVisible: function(){}</th>
                      <td> Called once an accordion pane has been expanded. </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">paneHidden: function(){}</th>
                      <td> Called once an accordion pane has been collapsed. </td>
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
                <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--let accordion = new tmAccordion('.accordion',{
	callback:function(){}
});
--></code></pre>
              </div>
              <!-- code -->
              <!-- code -->
              <h6 class="uppercase">As a part of the core</h6>
              <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
                <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--timber.module.accordion.settings.callback = function(){};
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
                      <th class="color-indigo">.accordion</th>
                      <td> Class for which the accordion instance is created. </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">.active</th>
                      <td> Class added to active accordion buttons. Can be added manually to accordion buttons to activate accordion panes on page load. </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">data-toggle-multiple</th>
                      <td> Data attribute added to div.accordion to allow multiple active panes. Takes no value. </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- Classes End -->
            </div>
          </div>
        </div>
      </div>
      <!-- Accordions -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Default</h3>
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="accordion rounded mb-0 bg-white">
            <a href="#accordion-1-panel-1" class="accordion-nav button rounded-t bg-grey-lightest bg-hover-grey-lightest color-grey-dark color-hover-grey-darkest  bg-active-primary color-active-white">Button</a>
            <div id="accordion-1-panel-1" class="accordion-pane">
              <div class="accordion-content">
                <p class="lead mb-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                <p>Accordions are a great way for presenting information in a limited amount of space. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
              </div>
            </div>
            <a href="#accordion-1-panel-2" class="accordion-nav button bg-grey-lightest bg-hover-grey-lightest color-grey-dark color-hover-grey-darkest bg-active-primary color-active-white active">Button</a>
            <div id="accordion-1-panel-2" class="accordion-pane">
              <div class="accordion-content">
                <p class="lead mb-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                <p>Accordions are a great way for presenting information in a limited amount of space. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.</p>
              </div>
            </div>
            <a href="#accordion-1-panel-3" class="accordion-nav accordion-link button rounded-b bg-grey-lightest bg-hover-grey-lightest color-grey-dark color-hover-grey-darkest bg-active-primary color-active-white">Button</a>
            <div id="accordion-1-panel-3" class="accordion-pane">
              <div class="accordion-content">
                <p class="lead mb-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                <p>Accordions are a great way for presenting information in a limited amount of space. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Accordions End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="accordion rounded mb-0 bg-white">
	<a href="#accordion-1-panel-1" class="accordion-nav button rounded-t bg-grey-lightest bg-hover-grey-lightest color-grey-dark color-hover-grey-darkest  bg-active-primary color-active-white">Button</a>
	<div id="accordion-1-panel-1" class="accordion-pane">
		<div class="accordion-content">
			<p>Content pane 1</p>
		</div>
	</div>
	<a href="#accordion-1-panel-2" class="accordion-nav button bg-grey-lightest bg-hover-grey-lightest color-grey-dark color-hover-grey-darkest bg-active-primary color-active-white active">Button</a>
	<div id="accordion-1-panel-2" class="accordion-pane">
		<div class="accordion-content">
			<p>Content pane 2</p>
		</div>
	</div>
	<a href="#accordion-1-panel-3" class="accordion-nav accordion-link button rounded-b bg-grey-lightest bg-hover-grey-lightest color-grey-dark color-hover-grey-darkest bg-active-primary color-active-white">Button</a>
	<div id="accordion-1-panel-3" class="accordion-pane">
		<div class="accordion-content">
			<p>Content pane 3</p>
		</div>
	</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Accordions -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Multiple Active Panels</h3>
        <p>Adding the data attribute <code class="color-indigo font-bold">data-toggle-multiple</code> to the accordion wrapper will allow accordions to have multiple active panels at once. Simply add the class <code class="color-indigo font-bold">.active</code> to the tab buttons you want to be active by default.</p>
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="accordion rounded bg-white mb-0" data-toggle-multiple="">
            <a href="#accordion-2-panel-1" class="accordion-nav button rounded-t bg-grey-ultralight bg-hover-grey-lightest color-grey-dark color-hover-grey-darkest active bg-active-indigo color-active-white">Button</a>
            <div id="accordion-2-panel-1" class="accordion-pane">
              <div class="accordion-content">
                <p class="lead mb-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                <p>Accordions are a great way for presenting information in a limited amount of space. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
              </div>
            </div>
            <a href="#accordion-2-panel-2" class="accordion-nav button bg-grey-lightest bg-hover-grey-lightest color-grey-dark color-hover-grey-darkest active bg-active-purple color-active-white">Button</a>
            <div id="accordion-2-panel-2" class="accordion-pane">
              <div class="accordion-content">
                <p class="lead mb-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                <p>Accordions are a great way for presenting information in a limited amount of space. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.</p>
              </div>
            </div>
            <a href="#accordion-2-panel-3" class="accordion-nav button rounded-b bg-grey-ultralight bg-hover-grey-lightest color-grey-dark color-hover-grey-darkest bg-active-pink color-active-white">Button</a>
            <div id="accordion-2-panel-3" class="accordion-pane">
              <div class="accordion-content">
                <p class="lead mb-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                <p>Accordions are a great way for presenting information in a limited amount of space. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Accordions End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="accordion rounded bg-white mb-0" data-toggle-multiple>
	<a href="#accordion-2-panel-1" class="accordion-nav button rounded-t bg-grey-ultralight bg-hover-grey-lightest color-grey-dark color-hover-grey-darkest active bg-active-indigo color-active-white">Button</a>
	<div id="accordion-2-panel-1" class="accordion-pane">
		<div class="accordion-content">
			<p>Content pane 1</p>
		</div>
	</div>
	<a href="#accordion-2-panel-2" class="accordion-nav button bg-grey-lightest bg-hover-grey-lightest color-grey-dark color-hover-grey-darkest active bg-active-purple color-active-white">Button</a>
	<div id="accordion-2-panel-2" class="accordion-pane">
		<div class="accordion-content">
			<p>Content pane 2</p>
		</div>
	</div>
	<a href="#accordion-2-panel-3" class="accordion-nav button rounded-b bg-grey-ultralight bg-hover-grey-lightest color-grey-dark color-hover-grey-darkest bg-active-pink color-active-white">Button</a>
	<div id="accordion-2-panel-3" class="accordion-pane">
		<div class="accordion-content">
			<p>Content pane 3</p>
		</div>
	</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Accordions -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Customized With Utitliy Classes</h3>
        <p>Use Timber's utility classes to quickly customise the accordion component on the fly.</p>
        <div class="p-30 rounded border-1 border-grey-ultralight">
          <div class="accordion rounded mb-0">
            <a href="#accordion-3-panel-1" class="accordion-nav button pl-0 pr-0 text-normal border-b border-lg border-grey-lightest bg-transparent bg-hover-transparent border-hover-grey-lightest color-grey-dark color-hover-grey-darkest active border-active-teal color-active-teal"> <span class="icon-material">dashboard</span> Dashboard</a>
            <div id="accordion-3-panel-1" class="accordion-pane">
              <div class="accordion-content border-none pl-0 pr-0">
                <p class="lead mb-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                <p>Accordions are a great way for presenting information in a limited amount of space. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
              </div>
            </div>
            <a href="#accordion-3-panel-2" class="accordion-nav button pl-0 pr-0 text-normal border-b border-lg border-grey-lightest bg-transparent bg-hover-transparent border-hover-grey-lightest color-grey-dark color-hover-grey-darkest border-active-teal color-active-teal"><span class="icon-material">person</span> User</a>
            <div id="accordion-3-panel-2" class="accordion-pane">
              <div class="accordion-content border-none pl-0 pr-0">
                <p class="lead mb-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                <p>Accordions are a great way for presenting information in a limited amount of space. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.</p>
              </div>
            </div>
            <a href="#accordion-3-panel-3" class="accordion-nav button pl-0 pr-0 text-normal border-b border-lg border-grey-lightest bg-transparent bg-hover-transparent border-hover-grey-lightest color-grey-dark color-hover-grey-darkest border-active-teal color-active-teal"><span class="icon-material">settings</span> Settings</a>
            <div id="accordion-3-panel-3" class="accordion-pane">
              <div class="accordion-content border-none pl-0 pr-0">
                <p class="lead mb-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                <p>Accordions are a great way for presenting information in a limited amount of space. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Accordions End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="accordion rounded mb-0">
	<a href="#accordion-3-panel-1" class="accordion-nav button pl-0 pr-0 text-normal border-b border-lg border-grey-lightest bg-transparent bg-hover-transparent border-hover-grey-lightest color-grey-dark color-hover-grey-darkest active border-active-teal color-active-teal"> <span class="icon-material">dashboard</span> Dashboard</a>
	<div id="accordion-3-panel-1" class="accordion-pane">
		<div class="accordion-content border-none pl-0 pr-0">
			<p>Content pane 1</p>
		</div>
	</div>
	<a href="#accordion-3-panel-2" class="accordion-nav button pl-0 pr-0 text-normal border-b border-lg border-grey-lightest bg-transparent bg-hover-transparent border-hover-grey-lightest color-grey-dark color-hover-grey-darkest border-active-teal color-active-teal"><span class="icon-material">person</span> User</a>
	<div id="accordion-3-panel-2" class="accordion-pane">
		<div class="accordion-content border-none pl-0 pr-0">
			<p>Content pane 2</p>
		</div>
	</div>
	<a href="#accordion-3-panel-3" class="accordion-nav button pl-0 pr-0 text-normal border-b border-lg border-grey-lightest bg-transparent bg-hover-transparent border-hover-grey-lightest color-grey-dark color-hover-grey-darkest border-active-teal color-active-teal"><span class="icon-material">settings</span> Settings</a>
	<div id="accordion-3-panel-3" class="accordion-pane">
		<div class="accordion-content border-none pl-0 pr-0">
			<p>Content pane 3</p>
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
