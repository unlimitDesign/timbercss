---
title: Color - Color Utility
menu_label: Font Color
layout: documentation
category: ["Utilities", "Color"]
markup_language: html
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Utility: Color</h1>
      <p>Controls the color of an element. Color classes are provided for four states: base, hover, active and focus. Update the colors and states directly in <strong>_variables_timber.scss</strong></p>
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
              <th class="color-indigo">.color-{color}</th>
              <td> color: {color}; </td>
            </tr>
            <tr>
              <th class="color-indigo">.color-hover-{color}:hover</th>
              <td> color: {color}; </td>
            </tr>
            <tr>
              <th class="color-indigo">.color-active-{color}.active</th>
              <td> color: {color}; </td>
            </tr>
            <tr>
              <th class="color-indigo">.color-focus-{color}:focus</th>
              <td> color: {color}; </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Classes End -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Colors</h3>
        <p>Adding <code class="color-indigo font-bold">.color-{color}</code> sets the color of an element.</p>
        <div class="p-30 flex flex-wrap justify-around rounded bg-grey-ultralight">
          <div class="w-full py-20 m-1 rounded center bg-white color-black color-darkest">.color-black</div>
          <div class="w-full py-20 m-1 rounded center bg-white color-grey-darkest color-darkest">.color-grey-darkest</div>
          <div class="w-full py-20 m-1 rounded center bg-white color-grey-darker color-darkest">.color-grey-darker</div>
          <div class="w-full py-20 m-1 rounded center bg-white color-grey-dark color-darkest">.color-grey-dark</div>
          <div class="w-full py-20 m-1 rounded center bg-white color-grey color-darkest">.color-grey</div>
          <div class="w-full py-20 m-1 rounded center bg-white color-grey-light color-darkest">.color-grey-light</div>
          <div class="w-full py-20 m-1 rounded center bg-white color-grey-lighter color-darkest">.color-grey-lighter</div>
          <div class="w-full py-20 m-1 rounded center bg-white color-grey-lightest color-darkest">.color-grey-lightest</div>
          <div class="w-full py-20 m-1 rounded center bg-grey-light color-grey-ultralight color-darkest">.color-grey-ultralight</div>
          <div class="w-full py-20 m-1 rounded center bg-grey color-white color-darkest">.color-white</div>
          <div class="w-full py-20 m-1 rounded center bg-white color-blue color-darkest">.color-blue</div>
          <div class="w-full py-20 m-1 rounded center bg-white color-indigo color-darkest">.color-indigo</div>
          <div class="w-full py-20 m-1 rounded center bg-white color-purple color-darkest">.color-purple</div>
          <div class="w-full py-20 m-1 rounded center bg-white color-pink color-darkest">.color-pink</div>
          <div class="w-full py-20 m-1 rounded center bg-white color-red color-darkest">.color-red</div>
          <div class="w-full py-20 m-1 rounded center bg-white color-orange color-darkest">.color-orange</div>
          <div class="w-full py-20 m-1 rounded center bg-white color-yellow color-darkest">.color-yellow</div>
          <div class="w-full py-20 m-1 rounded center bg-white color-green color-darkest">.color-green</div>
          <div class="w-full py-20 m-1 rounded center bg-white color-teal color-darkest">.color-teal</div>
          <div class="w-full py-20 m-1 rounded center bg-white color-cyan color-darkest">.color-cyan</div>
          <div class="w-full py-20 m-1 rounded center bg-white color-success color-darkest">.color-success</div>
          <div class="w-full py-20 m-1 rounded center bg-white color-warning color-darkest">.color-warning</div>
          <div class="w-full py-20 m-1 rounded center bg-white color-info color-darkest">.color-info</div>
          <div class="w-full py-20 m-1 rounded center bg-white color-danger color-darkest">.color-danger</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="w-full py-20 m-1 rounded center bg-white color-black color-darkest">.color-black</div>
<div class="w-full py-20 m-1 rounded center bg-white color-grey-darkest color-darkest">.color-grey-darkest</div>
<div class="w-full py-20 m-1 rounded center bg-white color-grey-darker color-darkest">.color-grey-darker</div>
<div class="w-full py-20 m-1 rounded center bg-white color-grey-dark color-darkest">.color-grey-dark</div>
<div class="w-full py-20 m-1 rounded center bg-white color-grey color-darkest">.color-grey</div>
<div class="w-full py-20 m-1 rounded center bg-white color-grey-light color-darkest">.color-grey-light</div>
<div class="w-full py-20 m-1 rounded center bg-white color-grey-lighter color-darkest">.color-grey-lighter</div>
<div class="w-full py-20 m-1 rounded center bg-white color-grey-lightest color-darkest">.color-grey-lightest</div>
<div class="w-full py-20 m-1 rounded center bg-grey-light color-grey-ultralight color-darkest">.color-grey-ultralight</div>
<div class="w-full py-20 m-1 rounded center bg-grey color-white color-darkest">.color-white</div>
<div class="w-full py-20 m-1 rounded center bg-white color-blue color-darkest">.color-blue</div>
<div class="w-full py-20 m-1 rounded center bg-white color-indigo color-darkest">.color-indigo</div>
<div class="w-full py-20 m-1 rounded center bg-white color-purple color-darkest">.color-purple</div>
<div class="w-full py-20 m-1 rounded center bg-white color-pink color-darkest">.color-pink</div>
<div class="w-full py-20 m-1 rounded center bg-white color-red color-darkest">.color-red</div>
<div class="w-full py-20 m-1 rounded center bg-white color-orange color-darkest">.color-orange</div>
<div class="w-full py-20 m-1 rounded center bg-white color-yellow color-darkest">.color-yellow</div>
<div class="w-full py-20 m-1 rounded center bg-white color-green color-darkest">.color-green</div>
<div class="w-full py-20 m-1 rounded center bg-white color-teal color-darkest">.color-teal</div>
<div class="w-full py-20 m-1 rounded center bg-white color-cyan color-darkest">.color-cyan</div>
<div class="w-full py-20 m-1 rounded center bg-white color-success color-darkest">.color-success</div>
<div class="w-full py-20 m-1 rounded center bg-white color-warning color-darkest">.color-warning</div>
<div class="w-full py-20 m-1 rounded center bg-white color-info color-darkest">.color-info</div>
<div class="w-full py-20 m-1 rounded center bg-white color-danger color-darkest">.color-danger</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Usage</h3>
        <p>Adding <code class="color-indigo font-bold">.color-{color}</code>, <code class="color-indigo font-bold">.color-hover-{color}</code>, <code class="color-indigo font-bold">.color-active-{color}</code>, <code class="color-indigo font-bold">.color-focus-{color}</code> to control the color and states of an element.</p>
        <div class="p-30 flex flex-md-wrap justify-around rounded bg-grey-ultralight">
          <a href="#" class="button size-md rounded bg-white bg-hover-white color-green color-hover-green">.button.color-green</a>
          <a href="#" class="button size-md rounded bg-white bg-hover-white color-grey-darkest color-hover-pink">.button.color-hover-pink</a>
          <a href="#" class="button size-md rounded bg-white bg-hover-white color-grey-darkest color-active-blue active">.button.color-hover-blue.active</a>
          <a href="#" class="button size-md rounded bg-white bg-hover-white color-grey-darkest color-hover-grey-darkest color-focus-teal">.button.color-focus-teal</a>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<a href="#" class="button size-md rounded bg-white bg-hover-white color-green color-hover-green">.button.color-green</a>
<a href="#" class="button size-md rounded bg-white bg-hover-white color-grey-darkest color-hover-pink">.button.color-hover-pink</a>
<a href="#" class="button size-md rounded bg-white bg-hover-white color-grey-darkest color-active-blue active">.button.color-hover-blue.active</a>
<a href="#" class="button size-md rounded bg-white bg-hover-white color-grey-darkest color-hover-grey-darkest color-focus-teal">.button.color-focus-teal</a>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Responsive</h3>
        <p>Use the font color responsive utility classes for specific breakpoints by adding the breakpoint name to the class, for example: <code class="color-indigo font-bold">.color-md-pink</code>. Font color utitlity classes are created for the breakpoints listed below, but can be customised in <strong>_variables_timber.scss</strong> to add all breakpoints.</p>
        <ul class="list-none">
          <li><strong>lg</strong>: 1200px,</li>
          <li><strong>md</strong>: 992px,</li>
          <li><strong>sm</strong>: 768px</li>
        </ul>
        <div class="p-30 flex flex-wrap justify-around rounded bg-grey-ultralight">
          <div class="w-full py-20 m-1 rounded center color-black color-lg-green color-md-pink color-sm-indigo text-large">.color-black<br>.color-lg-green<br>.color-md-pink<br>.color-sm-indigo</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="w-full py-20 m-1 rounded center color-black color-lg-green color-md-pink color-sm-indigo text-large">.color-black<br>.color-lg-green<br>.color-md-pink<br>.color-sm-indigo</div>
--></code></pre>
      </div>
      <!-- code -->
    </div>
    <!-- Content Inner End -->
		<!-- {{ sidebar }} -->
  </div>
</div>
