---
title: Component - Form
menu_label: Forms
layout: documentation
category: ["Components"]
markup_language: html
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <!-- Content Inner -->
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Component: Form</h1>
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Input</h3>
        <input type="test" placeholder="Placeholder text" class="form-element rounded">
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<input type="test" placeholder="Placeholder text" class="form-element rounded">
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Input Group</h3>
        <div class="row">
          <div class="col w-4/12">
            <div class="input-group">
              <input type="text" name="user_name" placeholder="Name" class="form-element size-md rounded-l">
              <div class="form-element input-icon size-md rounded-r"><span class="icon-material">person</span></div>
            </div>
          </div>
          <div class="col w-4/12">
            <div class="input-group">
              <input type="text" name="user_password" placeholder="Password" class="form-element size-md rounded-l">
              <div class="form-element input-icon size-md rounded-r"><span class="icon-material">lock</span></div>
            </div>
          </div>
          <div class="col w-4/12">
            <div class="input-group">
              <input type="email" name="user_email" placeholder="name@yourdomain.com" class="form-element size-md rounded-l">
              <div class="form-element input-icon size-md rounded-r"><span class="icon-material">email</span></div>
            </div>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="input-group">
	<input type="text" name="user_name" placeholder="Name" class="form-element size-md rounded-l">
	<div class="form-element input-icon size-md rounded-r"><span class="icon-material">person</span></div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Input Group Reversed</h3>
        <div class="row">
          <div class="col w-4/12">
            <div class="input-group reverse">
              <input type="text" name="user_name" placeholder="Name" class="form-element size-md rounded-r">
              <div class="form-element input-icon size-md rounded-l"><span class="icon-material">person</span></div>
            </div>
          </div>
          <div class="col w-4/12">
            <div class="input-group reverse">
              <input type="text" name="user_password" placeholder="Password" class="form-element size-md rounded-r">
              <div class="form-element input-icon size-md rounded-l"><span class="icon-material">lock</span></div>
            </div>
          </div>
          <div class="col w-4/12">
            <div class="input-group reverse">
              <input type="email" name="user_email" placeholder="name@yourdomain.com" class="form-element size-md rounded-r">
              <div class="form-element input-icon size-md rounded-l"><span class="icon-material">email</span></div>
            </div>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="input-group reverse">
	<input type="text" name="user_name" placeholder="Name" class="form-element size-md rounded-r">
	<div class="form-element input-icon size-md rounded-l"><span class="icon-material">person</span></div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Select</h3>
        <div class="form-select size-md">
          <select name="budget" class="form-element rounded" data-label="Project Budget">
            <option selected="selected" value="Project Budget">Project Budget</option>
            <option value="">$500-$1000</option>
            <option value="">$1000-$2000</option>
            <option value="">$2000-$3500</option>
            <option value="">$5000+</option>
          </select>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="form-select size-md">
	<select name="budget" class="form-element rounded" data-label="Project Budget">
		<option selected="selected" value="Project Budget">Project Budget</option>
		<option value="">$500-$1000</option>
		<option value="">$1000-$2000</option>
		<option value="">$2000-$3500</option>
		<option value="">$5000+</option>
	</select>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Select Group</h3>
        <div class="row">
          <div class="col w-4/12">
            <div class="input-group reverse">
              <div class="form-select size-md">
                <select name="budget" class="form-element rounded-r" data-label="Project Budget">
                  <option selected="selected" value="Project Budget">Project Budget</option>
                  <option value="">$500-$1000</option>
                  <option value="">$1000-$2000</option>
                  <option value="">$2000-$3500</option>
                  <option value="">$5000+</option>
                </select>
              </div>
              <div class="form-element input-icon size-md rounded-l"><span class="icon-material">sort</span></div>
            </div>
          </div>
          <div class="col w-4/12">
            <div class="input-group">
              <div class="form-select size-md">
                <select name="budget" class="form-element rounded-l" data-label="Project Budget">
                  <option selected="selected" value="Project Budget">Project Budget</option>
                  <option value="">$500-$1000</option>
                  <option value="">$1000-$2000</option>
                  <option value="">$2000-$3500</option>
                  <option value="">$5000+</option>
                </select>
              </div>
              <div class="form-element input-icon size-md rounded-r"><span class="icon-material">flag</span></div>
            </div>
          </div>
          <div class="col w-4/12">
            <div class="input-group">
              <div class="form-select size-md">
                <select name="budget" class="form-element rounded-l" data-label="Project Budget" multiple="">
                  <option selected="selected" value="Project Budget">Project Budget</option>
                  <option value="">$500-$1000</option>
                  <option value="">$1000-$2000</option>
                  <option value="">$2000-$3500</option>
                  <option value="">$5000+</option>
                </select>
              </div>
              <div class="form-element input-icon size-md rounded-r"><span class="icon-material">flag</span></div>
            </div>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="input-group reverse">
	<div class="form-select size-md">
		<select name="budget" class="form-element rounded-r" data-label="Project Budget">
			<option selected="selected" value="Project Budget">Project Budget</option>
			<option value="">$500-$1000</option>
			<option value="">$1000-$2000</option>
			<option value="">$2000-$3500</option>
			<option value="">$5000+</option>
		</select>
	</div>
	<div class="form-element input-icon size-md rounded-l"><span class="icon-material">sort</span></div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Input Outline</h3>
        <input type="test" placeholder="With shadow outline" class="form-element rounded shadow-focus-outline">
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<input type="test" placeholder="With shadow outline" class="form-element rounded shadow-focus-outline">
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Ready Only</h3>
        <input type="test" placeholder="A ready only input" class="form-element rounded" readonly="">
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<input type="test" placeholder="A ready only input" class="form-element rounded" readonly>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Labels</h3>
        <div class="row">
          <div class="col w-full">
            <label for="user_email">E-mail</label>
            <input type="email" name="user_email" placeholder="name@yourdomain.com" class="form-element rounded">
          </div>
        </div>
        <div class="row input-group label">
          <label for="user_email" class="col w-2/12 w-md-3/12">Your Name</label>
          <div class="col w-10/12 w-md-9/12">
            <input type="text" name="user_name" placeholder="Your Name" class="form-element rounded">
          </div>
        </div>
        <div class="row input-group label">
          <label for="user_email" class="col w-2/12 w-md-3/12">Your E-mail</label>
          <div class="col w-10/12 w-md-9/12">
            <input type="email" name="user_email" placeholder="name@yourdomain.com" class="form-element rounded">
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<label for="user_email">E-mail</label>
<input type="email" name="user_email" placeholder="name@yourdomain.com" class="form-element rounded">
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Radio Buttons</h3>
        <input id="radio-1" class="form-element radio active" name="radio-group" type="radio" checked="">
        <label for="radio-1" class="radio-label form-radio">I need my website reworked</label>
        <input id="radio-2" class="form-element radio" name="radio-group" type="radio">
        <label for="radio-2" class="radio-label form-radio">I need a new website</label>
        <input id="radio-3" class="form-element radio" name="radio-group" type="radio">
        <label for="radio-3" class="radio-label form-radio">I need a new website</label>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<input id="radio-1" class="form-element radio active" name="radio-group" type="radio" checked>
<label for="radio-1" class="radio-label form-radio">I need my website reworked</label>
<input id="radio-2" class="form-element radio" name="radio-group" type="radio">
<label for="radio-2" class="radio-label form-radio">I need a new website</label>
<input id="radio-3" class="form-element radio" name="radio-group" type="radio">
<label for="radio-3" class="radio-label form-radio">I need a new website</label>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Checkboxes</h3>
        <input id="checkbox-1" class="form-element checkbox" name="checkbox-1" type="checkbox" required="">
        <label for="checkbox-1" class="checkbox-label">I agree to the terms</label>
        <input id="checkbox-2" class="form-element checkbox" name="checkbox-2" type="checkbox" required="">
        <label for="checkbox-2" class="checkbox-label">I love candy</label>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<input id="checkbox-1" class="form-element checkbox"name="checkbox-1" type="checkbox" required>
<label for="checkbox-1" class="checkbox-label">I agree to the terms</label>
<input id="checkbox-2" class="form-element checkbox" name="checkbox-2" type="checkbox" required>
<label for="checkbox-2" class="checkbox-label">I love candy</label>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Customized With Utility Classes</h3>
        <div class="row">
          <div class="col w-8/12 pr-0">
            <input type="test" placeholder="yourname@yourdomain.com" class="form-element pl-0 border-b border-2 text-large">
          </div>
          <div class="col w-4/12 pl-0">
            <input type="submit" value="Send" class="button m-0 bg-transparent bg-hover-transparent border-b border-2 border-grey-dark border-hover-primary color-grey-dark color-hover-primary text-large">
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="row">
	<div class="col w-8/12 pr-0">
		<input type="test" placeholder="yourname@yourdomain.com" class="form-element pl-0 border-b border-2 text-large">
	</div>
	<div class="col w-4/12 pl-0">
		<input type="submit" value="Send" class="button m-0 bg-transparent bg-hover-transparent border-b border-2 border-grey-dark border-hover-primary color-grey-dark color-hover-primary text-large">
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
