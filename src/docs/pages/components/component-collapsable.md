---
title: Component - Collapsable
menu_label: Collapsable
layout: documentation
category: ["Components"]
markup_language: html
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <!-- Content Inner -->
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Component: Collapsable</h1>
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
              <p class="mb-0">The collapsable component requires <code class="color-indigo font-bold">_tm.collapsable.js</code>. Accordions are by default imported in <code class="color-indigo font-bold">_tm.core.js</code>, which means creating an instance of the core creates an instance of the collapsable component. To exclude collapsable, open<code class="color-indigo font-bold">_tm.core.js</code> and comment <code class="color-indigo font-bold">import tmAccordion from './components/_tm.collapsable.js';</code>.</p>
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
                <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--let collapsable = new tmCollapsable('.collapsable');
collapsable.method();
--></code></pre>
              </div>
              <!-- code -->
              <!-- code -->
              <h6 class="uppercase">As a part of the core</h6>
              <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
                <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--timber.collapsable.method();
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
                <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--let collapsable = new tmCollapsable('.collapsable',{
	callback:function(){}
});
--></code></pre>
              </div>
              <!-- code -->
              <!-- code -->
              <h6 class="uppercase">As a part of the core</h6>
              <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
                <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--timber.module.collapsable.settings.callback = function(){};
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
                      <th class="color-indigo">.collapsable</th>
                      <td> Class for which the dismissible instance is created. </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">.active</th>
                      <td> Class added to active collapsable links and collapsable target. Can be added manually to collapsable links and targets to show content by default. </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">data-include-margin</th>
                      <td> Whether collapsable child margins should be included in the height calculation of the collapsable parent. Added to div.collapsable. </td>
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
        <h3 class="font-light">Content Hidden</h3>
        <p>Add the class <code class="color-indigo font-bold">.collapsabe</code> to any link and define the target using the <code class="color-indigo font-bold">href</code> attribute (where the value is the id of the section you want to toggle). To include margins in the height calculation of the content, add the attribute <code class="color-indigo font-bold">data-include-margin</code> to the collapsable link.</p>
        <a href="#collapsable-content-1" class="button rounded collapsable mb-30" data-include-margin="">Hide/Show Content</a>
        <div id="collapsable-content-1" class="collapsable-target">
          <div class="row">
            <div class="col w-4/12">
              <div class="thumbnail">
                <img src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=934&amp;q=80" alt="">
              </div>
            </div>
            <div class="col w-8/12">
              <h3>A title</h3>
              <p class="text-large font-light">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur</p>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<a href="#collapsable-content-1" class="button rounded collapsable mb-30" data-include-margin>Hide/Show Content</a>
<div id="collapsable-content-1" class="collapsable-target">
	<p>Content</p>
<div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Content Shown</h3>
        <a href="#collapsable-content-2" class="button rounded collapsable active mb-30" data-include-margin="">Hide/Show Content</a>
        <div id="collapsable-content-2" class="collapsable-target active">
          <div class="row">
            <div class="col w-4/12">
              <div class="thumbnail">
                <img src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=934&amp;q=80" alt="">
              </div>
            </div>
            <div class="col w-8/12">
              <h3>A title</h3>
              <p class="text-large font-light">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur</p>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<a href="#collapsable-content-1" class="button rounded collapsable mb-30" data-include-margin>Hide/Show Content</a>
<div id="collapsable-content-1" class="collapsable-target active">
	<p>Content</p>
<div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Radio Buttons</h3>
        <div class="center mb-20">
          <input id="radio-1" class="form-element radio collapsable active" data-toggle-content="" data-include-margin="" data-target-content="#toggable" name="radio-group" type="radio" checked="">
          <label for="radio-1" class="radio-label form-radio">Pay Monthly</label>
          <input id="radio-2" class="form-element radio collapsable" name="radio-group" type="radio" data-toggle-content="" data-include-margin="" data-target-content="#toggable-2">
          <label for="radio-2" class="radio-label form-radio">Pay Yearly</label>
        </div>
        <div id="toggable" class="collapsable-target active">
          <div class="pricing-table row rounded">
            <div class="pricing-table-column column w-6/12 w-md-full bg-grey-ultralight">
              <div class="pricing-table-header color-black">
                <h3>FireFly</h3>
              </div>
              <div class="pricing-table-price h1">
                <span class="price">
                  <sup class="currency">€</sup></span>2,90 <span class="interval">/month</span>
              </div>
              <div class="pricing-table-options with-icon">
                <ul class="list-unstyled">
                  <li>Free UK current account</li>
                  <li>Free Euro IBAN account</li>
                  <li class="del"><del>&gt;Interbank FX rates</del></li>
                  <li class="del"><del>&gt;Transfers in 25 currencies</del></li>
                </ul>
              </div>
              <div class="pricing-table-footer">
                <a href="#" class="button rounded size-md bg-blue-light bg-hover-blue-light color-white color-hover-white mb-mobile-40">Select Option</a>
              </div>
            </div>
            <div class="pricing-table-column column w-6/12 w-md-full bg-white">
              <div class="pricing-table-header color-black">
                <h3>Peacock</h3>
              </div>
              <div class="pricing-table-price h1">
                <span class="price">
                  <sup class="currency">€</sup></span>5,90 <span class="interval">/month</span>
              </div>
              <div class="pricing-table-options with-icon">
                <ul class="list-unstyled">
                  <li>Free UK current account</li>
                  <li>Free Euro IBAN account</li>
                  <li>Interbank FX rates</li>
                  <li>Transfers in 25 currencies</li>
                </ul>
              </div>
              <div class="pricing-table-footer">
                <a href="#" class="button rounded size-md bg-blue bg-hover-blue color-white color-hover-white mb-mobile-40">Select Option</a>
              </div>
            </div>
          </div>
        </div>
        <div id="toggable-2" class="collapsable-target">
          <div class="pricing-table row rounded">
            <div class="pricing-table-column column w-6/12 bg-grey-ultralight">
              <div class="pricing-table-header color-black">
                <h3>FireFly</h3>
              </div>
              <div class="pricing-table-price h1">
                <span class="price">
                  <sup class="currency">€</sup></span>29,00 <span class="interval">/month</span>
              </div>
              <div class="pricing-table-options with-icon">
                <ul class="list-unstyled">
                  <li>Free UK current account</li>
                  <li>Free Euro IBAN account</li>
                  <li class="del"><del>&gt;Interbank FX rates</del></li>
                  <li class="del"><del>&gt;Transfers in 25 currencies</del></li>
                </ul>
              </div>
              <div class="pricing-table-footer">
                <a href="#" class="button rounded size-md bg-blue-light bg-hover-blue-light color-white color-hover-white mb-mobile-40">Select Option</a>
              </div>
            </div>
            <div class="pricing-table-column column w-6/12 bg-white">
              <div class="pricing-table-header color-black">
                <h3>Peacock</h3>
              </div>
              <div class="pricing-table-price h1">
                <span class="price">
                  <sup class="currency">€</sup></span>49,00 <span class="interval">/month</span>
              </div>
              <div class="pricing-table-options with-icon">
                <ul class="list-unstyled">
                  <li>Free UK current account</li>
                  <li>Free Euro IBAN account</li>
                  <li>Interbank FX rates</li>
                  <li>Transfers in 25 currencies</li>
                </ul>
              </div>
              <div class="pricing-table-footer">
                <a href="#" class="button rounded size-md bg-blue bg-hover-blue color-white color-hover-white mb-mobile-40">Select Option</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="center mb-20">
	<input id="radio-1" class="form-element radio collapsable active" data-toggle-content data-include-margin data-target-content="#toggable" name="radio-group" type="radio" checked="">
	<label for="radio-1" class="radio-label form-radio">Pay Monthly</label>
	<input id="radio-2" class="form-element radio collapsable" name="radio-group" type="radio" data-toggle-content data-include-margin data-target-content="#toggable-2">
	<label for="radio-2" class="radio-label form-radio">Pay Yearly</label>
</div>
<div id="toggable" class="collapsable-target active">
	<p>Content 1</p>
</div>
<div id="toggable-2" class="collapsable-target">
	<p>Content 2</p>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Checkbox</h3>
        <input id="checkbox-1" class="form-element checkbox collapsable" name="checkbox-1" type="checkbox" data-toggle-content="" data-include-margin="" data-target-content="#collapsable-content-3">
        <label for="checkbox-1" class="checkbox-label">I agree to the terms</label>
        <div id="collapsable-content-3" class="table-scrollable collapsable-target">
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur</p>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<input id="checkbox-1" class="form-element checkbox collapsable" name="checkbox-1" type="checkbox" data-toggle-content data-include-margin data-target-content="#collapsable-content-3">
<label for="checkbox-1" class="checkbox-label">I agree to the terms</label>
<div id="collapsable-content-3" class="table-scrollable collapsable-target">
	<p>Content</p>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Navigation</h3>
        <p>Use the utility classes <code class="color-indigo font-bold">.active-{breakpoint}</code> and <code class="color-indigo font-bold">.inactive-{breakpoint}</code> to hide/show navigation in different breakpoints. This menu is hidden from 992px and down and a hamburger icon shown in its place.</p>
        <a href="#collapsable-content-4" class="navigation-show collapsable hidden block-md"></a>
        <div id="collapsable-content-4" class="table-scrollable collapsable-target active-md inactive-md">
          <ul class="list-horizontal py-10 px-20 rounded bg-grey-darkest">
            <li class="block-md"><a href="#" class="color-grey-light color-hover-white color-active-white active">Nav Item 1</a></li>
            <li class="block-md"><a href="#" class="color-grey-light color-hover-white color-active-white">Nav Item 2</a></li>
            <li class="block-md"><a href="#" class="color-grey-light color-hover-white color-active-white">Nav Item 3</a></li>
            <li class="block-md"><a href="#" class="color-grey-light color-hover-white color-active-white">Nav Item 4</a></li>
            <li class="block-md"><a href="#" class="color-grey-light color-hover-white color-active-white">Nav Item 5</a></li>
          </ul>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<a href="#collapsable-content-4" class="navigation-show collapsable hidden block-md"></a>
<div id="collapsable-content-4" class="table-scrollable collapsable-target active-md inactive-md">
	 <ul class="list-horizontal py-10 px-20 rounded bg-grey-darkest">
	 	<li class="block-md"><a href="#" class="color-grey-light color-hover-white color-active-white active">Nav Item 1</a></li>
	 	<li class="block-md"><a href="#" class="color-grey-light color-hover-white color-active-white">Nav Item 2</a></li>
	 	<li class="block-md"><a href="#" class="color-grey-light color-hover-white color-active-white">Nav Item 3</a></li>
	 	<li class="block-md"><a href="#" class="color-grey-light color-hover-white color-active-white">Nav Item 4</a></li>
	 	<li class="block-md"><a href="#" class="color-grey-light color-hover-white color-active-white">Nav Item 5</a></li>
	 </ul>
</div>
--></code></pre>
      </div>
      <!-- code -->
    </div>
    <!-- Content Inner End -->
		<!-- {{ sidebar }} -->
  </div>
</div>
