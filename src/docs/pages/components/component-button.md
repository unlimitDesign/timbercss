---
title: Component - Button
menu_label: Button
layout: documentation
category: ["Components"]
markup_language: html
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <!-- Content Inner -->
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Component: Button</h1>
      <p>Buttons come with a four modifier classes that regulate size. Use these to quickly size buttons on the fly, or, use Timber's padding utility classes for custom sizes.</p>
      <!-- Classes -->
      <div class="table-scrollable">
        <table class="table size-md rounded bg-white">
          <thead>
            <tr>
              <th> Class </th>
              <th> Value </th>
            </tr>
          </thead>
          <tbody class="font-mono">
            <tr>
              <th class="color-indigo">.size-sm</th>
              <td> Sets table padding to small. </td>
            </tr>
            <tr>
              <th class="color-indigo">.size-md</th>
              <td> Sets table padding to medium. </td>
            </tr>
            <tr>
              <th class="color-indigo">.size-lg</th>
              <td> Sets table padding to large. </td>
            </tr>
            <tr>
              <th class="color-indigo">.size-xl</th>
              <td> Sets table padding to extra large. </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Classes End -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Default</h3>
        <a href="#" class="button size-sm rounded">SM Button</a>
        <a href="#" class="button size-md rounded">MD Button</a>
        <a href="#" class="button size-lg rounded">LG Button</a>
        <a href="#" class="button size-xl rounded">XL Button</a>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<a href="#" class="button size-sm rounded">SM Button</a>
<a href="#" class="button size-md rounded">MD Button</a>
<a href="#" class="button size-lg rounded">LG Button</a>
<a href="#" class="button size-xl rounded">XL Button</a>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">With Icons</h3>
        <a href="#" class="button size-md rounded"><span class="icon-brands apple left"></span>AppStore</a>
        <a href="#" class="button size-md rounded"><span class="icon-brands google-play left"></span>Google Play</a>
        <a href="#" class="button size-md rounded"><span class="icon-brands dribbble left"></span>I'm on Dribbble</a>
        <a href="#" class="button size-md rounded"><span class="icon-brands facebook left"></span>Share on Facebook</a>
        <a href="#" class="button size-md rounded"><span class="icon-brands twitter left"></span>Tweet Me</a>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<a href="#" class="button size-md rounded"><span class="icon-brands apple left"></span>AppStore</a>
<a href="#" class="button size-md rounded"><span class="icon-brands google-play left"></span>Google Play</a>
<a href="#" class="button size-md rounded"><span class="icon-brands dribbble left"></span>I'm on Dribbble</a>
<a href="#" class="button size-md rounded"><span class="icon-brands facebook left"></span>Share on Facebook</a>
<a href="#" class="button size-md rounded"><span class="icon-brands twitter left"></span>Tweet Me</a>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Customised With Utility Classes</h3>
        <a href="#" class="button size-md bg-indigo bg-hover-transparent border-hover-indigo color-white color-hover-indigo  shadow-x4">With Shadow</a>
        <a href="#" class="button size-md shadow-hover-x4">Shadow On Hover</a>
        <a href="#" class="button size-md rounded bg-purple bg-hover-indigo color-white color-hover-white">Round Corners</a>
        <a href="#" class="button size-md rounded-full bg-grey-darker bg-hover-grey-light color-white color-hover-grey-white">Pill Shaped</a>
        <a href="#" class="button size-md rounded"><span class="icon-material left">toys</span>Icon On Left</a>
        <a href="#" class="button size-md rounded">Icon On Right <span class="icon-material right">fingerprint</span></a>
        <a href="#" class="button size-md rounded border-green bg-transparent bg-hover-green color-green color-hover-white">Bordered Button</a>
        <a href="#" class="button size-md rounded bg-grey-darkest bg-hover-transparent border-hover-grey-darkest color-white color-hover-grey-darkest">Bordered On Hover</a>
        <a href="#" class="button size-md rounded loading bg-pink bg-hover-transparent border-hover-pink color-white color-hover-pink"><span class="preloader"><svg id="circle" viewBox="25 25 50 50">
              <circle class="stroke" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"></circle>
            </svg></span> loading</a>
        <a href="#" class="button size-md rounded border-4 border-teal bg-transparent bg-hover-teal color-teal color-hover-white">Thick Bordered Button</a>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<a href="#" class="button size-md bg-indigo bg-hover-transparent border-hover-indigo color-white color-hover-indigo  shadow-x4">With Shadow</a>
<a href="#" class="button size-md shadow-hover-x4">Shadow On Hover</a>
<a href="#" class="button size-md rounded bg-purple bg-hover-indigo color-white color-hover-white">Round Corners</a>
<a href="#" class="button size-md rounded-full bg-grey-darker bg-hover-grey-light color-white color-hover-grey-white">Pill Shaped</a>
<a href="#" class="button size-md rounded"><span class="icon-material left">toys</span>Icon On Left</a>
<a href="#" class="button size-md rounded">Icon On Right <span class="icon-material right">fingerprint</span></a>
<a href="#" class="button size-md rounded border-green bg-transparent bg-hover-green color-green color-hover-white">Bordered Button</a>
<a href="#" class="button size-md rounded bg-grey-darkest bg-hover-transparent border-hover-grey-darkest color-white color-hover-grey-darkest">Bordered On Hover</a>
<a href="#" class="button size-md rounded loading bg-pink bg-hover-transparent border-hover-pink color-white color-hover-pink"><span class="preloader"><svg id="circle" viewBox="25 25 50 50"><circle class="stroke" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></span> loading</a>
<a href="#" class="button size-md rounded border-4 border-teal bg-transparent bg-hover-teal color-teal color-hover-white">Thick Bordered Button</a>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Navigation</h3>
        <div class="row pt-0">
          <div class="col w-6/12 center-sm">
            <div class="button-nav">
              <button class="rounded active">Button</button>
              <button class="rounded">Button</button>
              <button class="rounded">Button</button>
            </div>
          </div>
          <div class="col w-6/12 center-sm">
            <div class="button-nav inline-flex">
              <a href="#" class="button rounded-l bg-grey-dark color-white active">Button</a>
              <a href="#" class="button bg-grey-darkest color-white">Button</a>
              <a href="#" class="button rounded-r bg-black color-white">Button</a>
            </div>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="button-nav">
	<button class="rounded active">Button</button>
	<button class="rounded">Button</button>
	<button class="rounded">Button</button>
</div>
<div class="button-nav inline-flex">
	<a href="#" class="button rounded-l bg-grey-dark color-white active">Button</a>
	<a href="#" class="button bg-grey-darkest color-white">Button</a>
	<a href="#" class="button rounded-r bg-black color-white">Button</a>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">App Buttons</h3>
        <a class="button rounded size-md bg-black bg-hover-grey-dark color-white color-hover-white shadow-hover left">
          <span class="button-content">
            <span class="icon-brands apple size-md left"></span>
            <span>
              <small>Download On The</small>AppStore </span>
          </span>
        </a>
        <a class="button rounded size-md bg-black bg-hover-grey-dark color-white color-hover-white shadow-hover left">
          <span class="button-content">
            <span class="icon-brands google-play size-md left"></span>
            <span>
              <small>Download On</small>Google Play </span>
          </span>
        </a>
        <a class="button rounded size-md bg-black bg-hover-grey-dark color-white color-hover-white shadow-hover left">
          <span class="button-content">
            <span class="icon-brands chrome size-md left"></span>
            <span>
              <small>V.72.0.3626.119</small>Download Chrome </span>
          </span>
        </a>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<a class="button rounded size-md bg-black bg-hover-grey-dark color-white color-hover-white shadow-hover left">
	<span class="button-content">
		<span class="icon-brands apple size-md left"></span>
		<span>
			<small>Download On The</small>AppStore
		</span>
	</span>
</a>
<a class="button rounded size-md bg-black bg-hover-grey-dark color-white color-hover-white shadow-hover left">
	<span class="button-content">
		<span class="icon-brands google-play size-md left"></span>
		<span>
			<small>Download On</small>Google Play
		</span>
	</span>
</a>
<a class="button rounded size-md bg-black bg-hover-grey-dark color-white color-hover-white shadow-hover left">
	<span class="button-content">
		<span class="icon-brands chrome size-md left"></span>
		<span>
			<small>V.72.0.3626.119</small>Download Chrome
		</span>
	</span>
</a>
--></code></pre>
      </div>
      <!-- code -->
    </div>
    <!-- Content Inner End -->
  </div>
</div>
