---
title: Component - Dropdown
menu_label: Dropdown
layout: documentation
category: ["Components"]
markup_language: html
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <!-- Content Inner -->
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Component: Dropdown</h1>
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
              <p class="mb-0">The dropdown component requires <code class="color-indigo font-bold">_tm.dropdown.js</code>. Dropdowns are by default imported in <code class="color-indigo font-bold">_tm.core.js</code>, which means creating an instance of the core creates an instance of the dropdown component. To exclude the dropdown, open<code class="color-indigo font-bold">_tm.core.js</code> and comment <code class="color-indigo font-bold">import tmAccordion from './components/_tm.dropdown.js';</code>.</p>
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
                      <th class="color-indigo">updateListHeight()</th>
                      <td> Updates the dropdown height. Useful if additional items are added when dropdown is active. </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">closeAllDropdowns()</th>
                      <td> Closes all active dropdowns. </td>
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
                <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--let dropdown = new tmDropdown('.dropdown');
dropdown.method();
--></code></pre>
              </div>
              <!-- code -->
              <!-- code -->
              <h6 class="uppercase">As a part of the core</h6>
              <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
                <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--timber.dropdown.method();
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
                      <th class="color-indigo">menuVisible: function(){}</th>
                      <td> Called once an dropdown is visble and active. </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">menuHidden: function(){}</th>
                      <td> Called once an dropdown is hidden and inactive. </td>
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
                <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--let dropdown = new tmDropdown('.dropdown',{
    callback:function(){}
});
--></code></pre>
              </div>
              <!-- code -->
              <!-- code -->
              <h6 class="uppercase">As a part of the core</h6>
              <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
                <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--timber.module.dropdown.settings.callback = function(){};
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
                      <th class="color-indigo">.dropdown</th>
                      <td> Class for which the dismissible instance is created. </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">.menu-up</th>
                      <td> Class to force the dropdown menu to open upwards. Added to div.dropdown. </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">data-update-selection</th>
                      <td> Data attribute added to div.dropdown to allow dropdown button text to update based on dropdown menu selection. Added to div.dropdown. </td>
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
        <h3 class="font-light">Dropdown/Dropup</h3>
        <p>Swap dropdown menu direction by adding the class <code class="color-indigo font-bold">.menu-up</code> to the dropdown wrapper.</p>
        <div class="dropdown menu-left">
          <a href="#" class="button size-md rounded"><span>Dropdown</span> <span class="icon-material right">keyboard_arrow_down</span></a>
          <ul class="dropdown-menu">
            <li><a href="#" class="dropdown-item active">Dropdown item 1</a></li>
            <li><a href="#" class="dropdown-item">Dropdown item 2</a></li>
            <li><a href="#" class="dropdown-item">Dropdown item 3</a></li>
            <li><a href="#" class="dropdown-item">Dropdown item 4</a></li>
            <li><a href="#" class="dropdown-item">Dropdown item 5</a></li>
          </ul>
        </div>
        <div class="dropdown menu-up">
          <a href="#" class="button size-md rounded"><span>Dropup</span> <span class="icon-material right">keyboard_arrow_up</span></a>
          <ul class="dropdown-menu">
            <li><a href="#" class="dropdown-item active">Dropdown item 1</a></li>
            <li><a href="#" class="dropdown-item">Dropdown item 2</a></li>
            <li><a href="#" class="dropdown-item">Dropdown item 3</a></li>
            <li><a href="#" class="dropdown-item">Dropdown item 4</a></li>
            <li><a href="#" class="dropdown-item">Dropdown item 5</a></li>
          </ul>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="dropdown menu-left">
	<a href="#" class="button size-md rounded"><span>Dropdown</span> <span class="icon-material right">keyboard_arrow_down</span></a>
	<ul class="dropdown-menu">
		<li><a href="#" class="dropdown-item active">Dropdown item 1</a></li>
		<li><a href="#" class="dropdown-item">Dropdown item 2</a></li>
		<li><a href="#" class="dropdown-item">Dropdown item 3</a></li>
		<li><a href="#" class="dropdown-item">Dropdown item 4</a></li>
		<li><a href="#" class="dropdown-item">Dropdown item 5</a></li>
	</ul>
</div>
<div class="dropdown menu-up">
	<a href="#" class="button size-md rounded"><span>Dropup</span> <span class="icon-material right">keyboard_arrow_up</span></a>
	<ul class="dropdown-menu">
		<li><a href="#" class="dropdown-item active">Dropdown item 1</a></li>
		<li><a href="#" class="dropdown-item">Dropdown item 2</a></li>
		<li><a href="#" class="dropdown-item">Dropdown item 3</a></li>
		<li><a href="#" class="dropdown-item">Dropdown item 4</a></li>
		<li><a href="#" class="dropdown-item">Dropdown item 5</a></li>
	</ul>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Selection Update</h3>
        <p>Adding the data attribute <code class="color-indigo font-bold">data-update-selection</code> will update the selected item of the dropdown.</p>
        <div class="dropdown menu-left" data-update-selection="">
          <a href="#" class="button size-md rounded"><span>Dropdown item 1</span><span class="icon-material right">keyboard_arrow_down</span></a>
          <ul class="dropdown-menu">
            <li><a href="#" class="dropdown-item active">Dropdown item 1</a></li>
            <li><a href="#" class="dropdown-item">Dropdown item 2</a></li>
            <li><a href="#" class="dropdown-item">Dropdown item 3</a></li>
            <li><a href="#" class="dropdown-item">Dropdown item 4</a></li>
            <li><a href="#" class="dropdown-item">Dropdown item 5</a></li>
          </ul>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="dropdown menu-left" data-update-selection>
	<a href="#" class="button size-md rounded"><span>Dropdown item 1</span><span class="icon-material right">keyboard_arrow_down</span></a>
	<ul class="dropdown-menu">
		<li><a href="#" class="dropdown-item active">Dropdown item 1</a></li>
		<li><a href="#" class="dropdown-item">Dropdown item 2</a></li>
		<li><a href="#" class="dropdown-item">Dropdown item 3</a></li>
		<li><a href="#" class="dropdown-item">Dropdown item 4</a></li>
		<li><a href="#" class="dropdown-item">Dropdown item 5</a></li>
	</ul>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Customised With Utility Classes</h3>
        <p>Customize the dropdown further by using Timber's utility classes.</p>
        <div class="dropdown list-right">
          <a href="#" class="flex items-center py-10 pl-10 pr-15 mb-20 color-grey-darker color-hover-grey-darkest color-active-white bg-grey-ultralight bg-active-grey-darkest rounded-full">
            <span class="thumbnail rounded-full mr-10 mb-0">
              <img width="30" height="30" class="avatar" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1400&amp;q=80" alt="">
            </span> My Account<span class="icon-material m-0">expand_more</span>
          </a>
          <div class="dropdown-menu w-300 p-20">
            <h5>Access Your Account</h5>
            <div class="login-form-container">
              <form class="login-form" action="#" method="post" novalidate="">
                <div class="row">
                  <div class="col w-full">
                    <div class="field-wrapper">
                      <input type="text" name="login-email" class="form-name form-element rounded size-sm set-focus" placeholder="E-mail" tabindex="1" required="">
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col w-full">
                    <div class="field-wrapper">
                      <input type="password" name="login-password" class="form-email form-element rounded size-sm" placeholder="Password" tabindex="2" required="">
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col w-full">
                    <div class="row flex">
                      <div class="col w-6/12">
                        <input type="submit" value="Sign In" class="form-submit button size-sm rounded bg-blue bg-hover-blue color-white color-hover-white" tabindex="3">
                      </div>
                      <div class="col w-6/12 flex items-center">
                        <a class="recuperate-password ml-auto text-small" href="">Forgot password?</a>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <div class="form-response"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="dropdown list-right">
	<a href="#" class="flex items-center py-10 pl-10 pr-15 mb-20 color-grey-darker color-hover-grey-darkest color-active-white bg-grey-ultralight bg-active-grey-darkest rounded-full">
		<span class="thumbnail rounded-full mr-10 mb-0">
			<img width="30" height="30" class="avatar" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80" alt="">
		</span>
		My Account<span class="icon-material m-0">expand_more</span>
	</a>
	<div class="dropdown-menu w-300 p-20">
		<h5>Access Your Account</h5>
		<div class="login-form-container">
			<form class="login-form" action="#" method="post" novalidate="">
				<div class="row">
					<div class="col w-full">
						<div class="field-wrapper">
							<input type="text" name="login-email" class="form-name form-element rounded size-sm set-focus" placeholder="E-mail" tabindex="1" required="">
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col w-full">
						<div class="field-wrapper">
							<input type="password" name="login-password" class="form-email form-element rounded size-sm" placeholder="Password" tabindex="2" required="">
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col w-full">
						<div class="row flex">
							<div class="col w-6/12">
								<input type="submit" value="Sign In" class="form-submit button size-sm rounded bg-blue bg-hover-blue color-white color-hover-white" tabindex="3">
							</div>
							<div class="col w-6/12 flex items-center">
								<a class="recuperate-password ml-auto text-small" href="">Forgot password?</a>
							</div>
						</div>
					</div>
				</div>
			</form>
			<div class="form-response"></div>
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
