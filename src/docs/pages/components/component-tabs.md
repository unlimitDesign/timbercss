---
title: Component - Tabs
menu_label: Tabs
layout: documentation
category: ["Components"]
markup_language: html
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <!-- Content Inner -->
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Component: Tabs</h1>
      <div class="tabs rounded">
        <div class="tab-nav button-nav left">
          <a href="#tabs-1-pane-1" class="button border-b border-2 active bg-transparent bg-hover-transparent border-grey-lightest border-hover-grey-lightest color-grey-dark color-hover-grey-darkest border-active-primary color-active-primary">Requirements</a>
          <a href="#tabs-1-pane-2" class="button border-b border-2 bg-transparent bg-hover-transparent border-grey-lightest border-hover-grey-lightest color-grey-dark color-hover-grey-darkest border-active-primary color-active-primary">API</a>
          <a href="#tabs-1-pane-3" class="button border-b border-2 bg-transparent bg-hover-transparent border-grey-lightest border-hover-grey-lightest color-grey-dark color-hover-grey-darkest border-active-primary color-active-primary">CallBacks</a>
          <a href="#tabs-1-pane-4" class="button border-b border-2 bg-transparent bg-hover-transparent border-grey-lightest border-hover-grey-lightest color-grey-dark color-hover-grey-darkest border-active-primary color-active-primary">Classes</a>
        </div>
        <div class="tab-panes px-0 rounded rounded-sm-b border-transparent">
          <div id="tabs-1-pane-1" class="active animate-in">
            <div class="tab-content">
              <p class="mb-0">The tabs component requires <code class="color-indigo font-bold">_tm.tabs.js</code>. Tabs are by default imported in <code class="color-indigo font-bold">_tm.core.js</code>, which means creating an instance of the core creates an instance of the tabs component. To exclude tabss, open<code class="color-indigo font-bold">_tm.core.js</code> and comment <code class="color-indigo font-bold">import tmTabs from './components/_tm.tabs.js';</code>.</p>
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
                      <td> Triggers tab button click. </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">refresh()</th>
                      <td> Refreshes the plugin. Useful when new panes have been added to the tab. </td>
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
                <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--let tabs = new tmTabs('.tabs');
tabs.method();
--></code></pre>
              </div>
              <!-- code -->
              <!-- code -->
              <h6 class="uppercase">As a part of the core</h6>
              <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
                <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--timber.tabs.method();
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
                      <th class="color-indigo">paneVisible: function(){}</th>
                      <td> Called once a tab pane has been expanded. </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">paneHidden: function(){}</th>
                      <td> Called once a tab pane has been collapsed. </td>
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
                <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--let tabs = new tmTabs('.tabs',{
    callback:function(){}
});
--></code></pre>
              </div>
              <!-- code -->
              <!-- code -->
              <h6 class="uppercase">As a part of the core</h6>
              <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
                <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--timber.module.tabs.settings.callback = function(){};
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
                      <th> Classes </th>
                      <th> Description </th>
                    </tr>
                  </thead>
                  <tbody class="font-mono">
                    <tr>
                      <th class="color-indigo">.tabs</th>
                      <td> Class for which the tabs instance is created. </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">.active</th>
                      <td> Class added to active tab buttons. Can be added manually to tab buttons to activate tab panes on page load. </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">.vertical</th>
                      <td> Class added to tab wrapper to make tab buttons align vertically. </td>
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
        <h3 class="font-light">Default</h3>
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="tabs rounded">
            <div class="tab-nav button-nav center">
              <a href="#tabs-1-pane-1" class="button size-md rounded-tl rounded-sm-t bg-grey-lightest bg-hover-grey-lightest color-grey-dark color-hover-grey-darkest active bg-active-primary color-active-white">Button</a>
              <a href="#tabs-1-pane-2" class="button size-md bg-grey-lightest bg-hover-grey-lightest color-grey-dark color-hover-grey-darkest bg-active-primary color-active-white">Button</a>
              <a href="#tabs-1-pane-3" class="button tab-link size-md rounded-tr rounded-sm-none bg-grey-lightest bg-hover-grey-lightest color-grey-dark color-hover-grey-darkest bg-active-primary color-active-white">Button</a>
            </div>
            <div class="tab-panes rounded rounded-sm-b bg-white">
              <div id="tabs-1-pane-1" class="active animate-in">
                <div class="tab-content">
                  <p class="lead">Much like accordions, tabs are a great way for presenting information in a limited amount of space.</p>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                </div>
              </div>
              <div id="tabs-1-pane-2">
                <div class="tab-content">
                  <p class="lead">Much like accordions, tabs are a great way for presenting information in a limited amount of space.</p>
                  <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.</p>
                </div>
              </div>
              <div id="tabs-1-pane-3">
                <div class="tab-content">
                  <p class="lead">Much like accordions, tabs are a great way for presenting information in a limited amount of space.</p>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="p-30 rounded bg-grey-ultralight">
<div class="tabs rounded">
	<div class="tab-nav button-nav center">
		<a href="#tabs-1-pane-1" class="button size-md rounded-tl rounded-sm-t bg-grey-lightest bg-hover-grey-lightest color-grey-dark color-hover-grey-darkest active bg-active-primary color-active-white">Button</a>
		<a href="#tabs-1-pane-2" class="button size-md bg-grey-lightest bg-hover-grey-lightest color-grey-dark color-hover-grey-darkest bg-active-primary color-active-white">Button</a>
		<a href="#tabs-1-pane-3" class="button tab-link size-md rounded-tr rounded-sm-none bg-grey-lightest bg-hover-grey-lightest color-grey-dark color-hover-grey-darkest bg-active-primary color-active-white">Button</a>
	</div>
	<div class="tab-panes rounded rounded-sm-b bg-white">
		<div id="tabs-1-pane-1" class="active animate-in">
			<div class="tab-content">
				<p>Content pane 1</p>
			</div>
		</div>
		<div id="tabs-1-pane-2">
			<div class="tab-content">
				<p>Content pane 2</p>
			</div>
		</div>
		<div id="tabs-1-pane-3">
			<div class="tab-content">
				<p>Content pane 3</p>
			</div>
		</div>
	</div>
</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Vertical</h3>
        <p>Use modifier class <code class="color-indigo font-bold">.vertical</code> to make any tabs vertical. Use Timber's row and column width utility classes to regulate tab button and tab pane widths.</p>
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="tabs vertical row rounded">
            <div class="tab-nav button-nav col w-3/12 w-lg-full center">
              <a href="#tabs-2-pane-1" class="button size-md rounded-tl rounded-sm-t bg-grey-ultralight bg-hover-grey-ultralight color-grey-dark color-hover-grey-darkest active bg-active-indigo color-active-white">Button</a>
              <a href="#tabs-2-pane-2" class="button size-md bg-grey-lightest bg-hover-grey-lightest color-grey-dark color-hover-grey-darkest bg-active-purple color-active-white">Button</a>
              <a href="#tabs-2-pane-3" class="button size-md rounded-bl rounded-sm-none bg-grey-ultralight bg-hover-grey-ultralight color-grey-dark color-hover-grey-darkest bg-active-pink color-active-white">Button</a>
            </div>
            <div class="tab-panes col w-9/12 w-lg-full rounded-tr rounded-br rounded-bl rounded-lg-b bg-white">
              <div id="tabs-2-pane-1" class="active animate-in">
                <div class="tab-content">
                  <p class="lead">Much like accordions, tabs are a great way for presenting information in a limited amount of space.</p>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                </div>
              </div>
              <div id="tabs-2-pane-2">
                <div class="tab-content">
                  <p class="lead">Much like accordions, tabs are a great way for presenting information in a limited amount of space.</p>
                  <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.</p>
                </div>
              </div>
              <div id="tabs-2-pane-3">
                <div class="tab-content">
                  <p class="lead">Much like accordions, tabs are a great way for presenting information in a limited amount of space.</p>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="p-30 rounded bg-grey-ultralight">
	<div class="tabs vertical row rounded">
		<div class="tab-nav button-nav col w-3/12 w-lg-full center">
			<a href="#tabs-2-pane-1" class="button size-md rounded-tl rounded-sm-t bg-grey-ultralight bg-hover-grey-ultralight color-grey-dark color-hover-grey-darkest active bg-active-indigo color-active-white">Button</a>
			<a href="#tabs-2-pane-2" class="button size-md bg-grey-lightest bg-hover-grey-lightest color-grey-dark color-hover-grey-darkest bg-active-purple color-active-white">Button</a>
			<a href="#tabs-2-pane-3" class="button size-md rounded-bl rounded-sm-none bg-grey-ultralight bg-hover-grey-ultralight color-grey-dark color-hover-grey-darkest bg-active-pink color-active-white">Button</a>
		</div>
		<div class="tab-panes col w-9/12 w-lg-full rounded-tr rounded-br rounded-bl rounded-lg-b bg-white">
			<div id="tabs-2-pane-1" class="active animate-in">
				<div class="tab-content">
					<p>Content pane 1</p>
				</div>
			</div>
			<div id="tabs-2-pane-2">
				<div class="tab-content">
					<p>Content pane 2</p>
				</div>
			</div>
			<div id="tabs-2-pane-3">
				<div class="tab-content">
					<p>Content pane 3</p>
				</div>
			</div>
		</div>
	</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Customized With Utitliy Classes</h3>
        <div class="p-30 rounded border-1 border-grey-ultralight">
          <div class="tabs rounded">
            <div class="tab-nav button-nav">
              <a href="#tabs-4-pane-1" class="button pl-0 pr-40 text-normal bg-transparent bg-hover-transparent border-2 border-b border-lg border-grey-lightest border-hover-grey-lightest color-grey-dark color-hover-grey-darkest active border-active-teal color-active-teal"><span class="icon-material left">dashboard</span> Dashboard</a>
              <a href="#tabs-4-pane-2" class="button pl-0 pr-40 text-normal bg-transparent bg-hover-transparent border-2 border-b border-lg border-grey-lightest border-hover-grey-lightest color-grey-dark color-hover-grey-darkest border-active-teal color-active-teal"><span class="icon-material left">person</span> User</a>
              <a href="#tabs-4-pane-3" class="button pl-0 pr-40 text-normal bg-transparent bg-hover-transparent border-2 border-b border-lg border-grey-lightest border-hover-grey-lightest color-grey-dark color-hover-grey-darkest border-active-teal color-active-teal"><span class="icon-material left">settings</span> Settings</a>
            </div>
            <div class="tab-panes border-none pl-0 pr-0">
              <div id="tabs-4-pane-1" class="active animate-in">
                <div class="tab-content">
                  <p class="lead">Much like accordions, tabs are a great way for presenting information in a limited amount of space.</p>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                </div>
              </div>
              <div id="tabs-4-pane-2">
                <div class="tab-content">
                  <p class="lead">Much like accordions, tabs are a great way for presenting information in a limited amount of space.</p>
                  <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.</p>
                </div>
              </div>
              <div id="tabs-4-pane-3">
                <div class="tab-content">
                  <p class="lead">Much like accordions, tabs are a great way for presenting information in a limited amount of space.</p>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="tabs rounded">
	<div class="tab-nav button-nav">
		<a href="#tabs-4-pane-1" class="button pl-0 pr-40 text-normal bg-transparent bg-hover-transparent border-2 border-b border-lg border-grey-lightest border-hover-grey-lightest color-grey-dark color-hover-grey-darkest active border-active-teal color-active-teal"><span class="icon-material left">dashboard</span> Dashboard</a>
		<a href="#tabs-4-pane-2" class="button pl-0 pr-40 text-normal bg-transparent bg-hover-transparent border-2 border-b border-lg border-grey-lightest border-hover-grey-lightest color-grey-dark color-hover-grey-darkest border-active-teal color-active-teal"><span class="icon-material left">person</span> User</a>
		<a href="#tabs-4-pane-3" class="button pl-0 pr-40 text-normal bg-transparent bg-hover-transparent border-2 border-b border-lg border-grey-lightest border-hover-grey-lightest color-grey-dark color-hover-grey-darkest border-active-teal color-active-teal"><span class="icon-material left">settings</span> Settings</a>
	</div>
	<div class="tab-panes border-none pl-0 pr-0">
		<div id="tabs-4-pane-1" class="active animate-in">
			<div class="tab-content">
				<p>Content pane 1</p>
			</div>
		</div>
		<div id="tabs-4-pane-2">
			<div class="tab-content">
				<p>Content pane 2</p>
			</div>
		</div>
		<div id="tabs-4-pane-3">
			<div class="tab-content">
				<p>Content pane 3</p>
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
