---
title: Component - Card
menu_label: Card
layout: documentation
category: ["Components"]
markup_language: html
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <!-- Content Inner -->
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Component: Card</h1>
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
              <p class="mb-0">The card component does not require any JS unless it needs to be made dismissible; for this, it requires <code class="color-indigo font-bold">_tm.dismissible.js</code>. Dismisisbles are by default imported in <code class="color-indigo font-bold">_tm.core.js</code>, which means creating an instance of the core creates an instance of the dismissible component. To exclude dismissibles, open<code class="color-indigo font-bold">_tm.core.js</code> and comment <code class="color-indigo font-bold">import tmDismissible from './components/_tm.dismissible.js';</code>.</p>
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
                <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--let dismissible = new tmDismissible('.dismissible');
dismissible.method();
--></code></pre>
              </div>
              <!-- code -->
              <!-- code -->
              <h6 class="uppercase">As a part of the core</h6>
              <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
                <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--timber.dismissible.method();
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
                <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--let accordion = new tmAccordion('.dismissible',{
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
                      <th> Classes </th>
                      <th> Description </th>
                    </tr>
                  </thead>
                  <tbody class="font-mono">
                    <tr>
                      <th class="color-indigo">.dismissible</th>
                      <td> Class for which the dismissible instance is created. </td>
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
        <h3 class="font-light">Contextual</h3>
        <div class="card rounded size-sm bg-success color-white"> This is a <strong>success</strong> card </div>
        <div class="card rounded size-sm bg-info color-white"> This is an <strong>info</strong> card </div>
        <div class="card rounded size-sm bg-warning color-white"> This is a <strong>warning</strong> card </div>
        <div class="card rounded size-sm bg-danger color-white"> This is a <strong>danger</strong> card </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="card rounded size-sm bg-success color-white">
	This is a <strong>success</strong> card
</div>
<div class="card rounded size-sm bg-info color-white">
	This is an <strong>info</strong> card
</div>
<div class="card rounded size-sm bg-warning color-white">
	This is a <strong>warning</strong> card
</div>
<div class="card rounded size-sm bg-danger color-white">
	This is a <strong>danger</strong> card
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Dismissable</h3>
        <p>Make any card or element dismissible by adding the class <code class="color-indigo font-bold">.dismissable</code> to the wrapper. </p>
        <div class="card rounded size-sm dismissable bg-black color-white"> This is a <strong>dismissable</strong> card </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="card rounded size-sm dismissable bg-black color-white">
	This is a <strong>dismissable</strong> card
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Nested</h3>
        <div class="row pt-0">
          <div class="col w-6/12">
            <div>
              <div class="card rounded p-0 bg-white border-white shadow-3x">
                <div class="card size-xl mb-0 bg-grey-ultralight">
                  <h4>Accept Any Cards</h4>
                  <p class="lead">Discover, understand, and select the right payment methods to reach a broader audience.</p>
                </div>
                <div class="card size-xl mb-0 bg-grey-darker color-white">
                  <h4>Read the Docs</h4>
                  <p class="opacity-70">We’re working to add many more payment types. Request the ones you need and we’ll reach out when they’re ready:</p>
                  <a href="#" class="button rounded size-sm bg-theme bg-hover-theme color-white color-hover-white">View Docs</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col w-6/12">
            <div>
              <div class="card rounded p-0 bg-white border-white shadow-3x">
                <div class="card size-xl mb-0 bg-blue color-white dismissable">
                  <h4>Reminder</h4>
                  <p class="opacity-70">You can make parent or child boxes dismissable by simply adding the dismissable class to them.</p>
                </div>
                <div class="card size-xl mb-0">
                  <h4>Accept Any Cards</h4>
                  <p class="lead">Discover, understand, and select the right payment methods to reach a broader audience.</p>
                  <a href="#" class="button rounded size-sm bg-theme bg-hover-theme color-white color-hover-white">View Docs</a>
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
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="card rounded p-0 bg-white border-white shadow-3x">
	<div class="card size-xl mb-0 bg-blue color-white dismissable">
		<h4>Reminder</h4>
		<p class="opacity-70">You can make parent or child boxes dismissable by simply adding the dismissable class to them.</p>
	</div>
	<div class="card size-xl mb-0">
		<h4>Accept Any Cards</h4>
		<p class="lead">Discover, understand, and select the right payment methods to reach a broader audience.</p>
		<a href="#" class="button rounded size-sm bg-theme bg-hover-theme color-white color-hover-white">View Docs</a>
	</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Customised With Utility Classes</h3>
        <div class="card rounded p-0 flex flex-md-wrap justify-between shadow-4x border-none bg-black">
          <div class="thumbnail bg-cover rounded-l rounded-md-t w-400 w-md-full h-min-300 mb-0" style="background-image:url(https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=934&amp;q=80)">
          </div>
          <div class="p-30">
            <h4 class="color-white">Accept Any Cards</h4>
            <p class="lead color-white opacity-70">Discover, understand, and select the right payment methods to reach a broader audience.</p>
            <div class="mb-20 border-1 border-t border-white opacity-10"></div>
            <div class="flex items-center">
              <div class="thumbnail rounded-full mr-10 shadow">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1400&amp;q=80" width="80" alt="Avatar">
              </div>
              <div class="color-white">
                <div class="name">by <a href="#">John Adams</a></div>
                <p class="author-title">WordPress Evangelist, JS Guru and Beer Lover</p>
              </div>
            </div>
            <hr class="mt-0">
            <a href="#" class="button rounded size-md">Read More</a>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="card rounded p-0 flex flex-md-wrap justify-between shadow-4x border-none bg-black">
	<div class="thumbnail bg-cover rounded-l rounded-md-t w-400 w-md-full h-min-300 mb-0" style="background-image:url(https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80)">
	</div>
	<div class="p-30">
		<h4 class="color-white">Accept Any Cards</h4>
		<p class="lead color-white opacity-70">Discover, understand, and select the right payment methods to reach a broader audience.</p>
		<div class="mb-20 border-1 border-t border-white opacity-10"></div>
		<div class="flex items-center">
			<div class="thumbnail rounded-full mr-10 shadow">
				<img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80" width="80" alt="Avatar">
			</div>
			<div class="color-white">
				<div class="name">by <a href="#">John Adams</a></div>
				<p class="author-title">WordPress Evangelist, JS Guru and Beer Lover</p>
			</div>
		</div>
		<hr class="mt-0">
		<a href="#" class="button rounded size-md">Read More</a>
	</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
    </div>
    <!-- Content Inner End -->
  </div>
</div>
