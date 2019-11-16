---
title: Color - Background Color Utility
menu_label: Background Color
layout: documentation
category: ["Utilities","Color"]
markup_language: html
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Utility: Background Color</h1>
      <p>Controls the background color of an element. Background color classes are provided for four states: base, hover, active and focus. Update the colors and states directly in <strong>_variables_timber.scss</strong></p>
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
              <th class="color-indigo">.bg-{color}</th>
              <td> background-color: {color}; </td>
            </tr>
            <tr>
              <th class="color-indigo">.bg-hover-{color}:hover</th>
              <td> background-color: {color}; </td>
            </tr>
            <tr>
              <th class="color-indigo">.bg-active-{color}.active</th>
              <td> background-color: {color}; </td>
            </tr>
            <tr>
              <th class="color-indigo">.bg-focus-{color}:focus</th>
              <td> background-color: {color}; </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Classes End -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Background Colors</h3>
        <p>Adding <code class="color-indigo font-bold">.bg-{color}</code> sets the background color of an element.</p>
        <div class="p-30 flex flex-wrap justify-around rounded bg-grey-ultralight">
          <div class="w-full py-20 m-1 rounded center bg-black color-white">.bg-black</div>
          <div class="w-full py-20 m-1 rounded center bg-grey-darkest color-white">.bg-grey-darkest</div>
          <div class="w-full py-20 m-1 rounded center bg-grey-darker color-white">.bg-grey-darker</div>
          <div class="w-full py-20 m-1 rounded center bg-grey-dark color-white">.bg-grey-dark</div>
          <div class="w-full py-20 m-1 rounded center bg-grey color-white">.bg-grey</div>
          <div class="w-full py-20 m-1 rounded center bg-grey-light color-white">.bg-grey-light</div>
          <div class="w-full py-20 m-1 rounded center bg-grey-lighter color-white">.bg-grey-lighter</div>
          <div class="w-full py-20 m-1 rounded center bg-grey-lightest color-white">.bg-grey-lightest</div>
          <div class="w-full py-20 m-1 rounded center bg-grey-ultralight color-grey">.bg-grey-ultralight</div>
          <div class="w-full py-20 m-1 rounded center bg-white color-grey">.bg-white</div>
          <div class="w-full py-20 m-1 rounded center bg-blue color-white">.bg-blue</div>
          <div class="w-full py-20 m-1 rounded center bg-indigo color-white">.bg-indigo</div>
          <div class="w-full py-20 m-1 rounded center bg-purple color-white">.bg-purple</div>
          <div class="w-full py-20 m-1 rounded center bg-pink color-white">.bg-pink</div>
          <div class="w-full py-20 m-1 rounded center bg-red color-white">.bg-red</div>
          <div class="w-full py-20 m-1 rounded center bg-orange color-white">.bg-orange</div>
          <div class="w-full py-20 m-1 rounded center bg-yellow color-white">.bg-yellow</div>
          <div class="w-full py-20 m-1 rounded center bg-green color-white">.bg-green</div>
          <div class="w-full py-20 m-1 rounded center bg-teal color-white">.bg-teal</div>
          <div class="w-full py-20 m-1 rounded center bg-cyan color-white">.bg-cyan</div>
          <div class="w-full py-20 m-1 rounded center bg-success color-white">.bg-success</div>
          <div class="w-full py-20 m-1 rounded center bg-warning color-white">.bg-warning</div>
          <div class="w-full py-20 m-1 rounded center bg-info color-white">.bg-info</div>
          <div class="w-full py-20 m-1 rounded center bg-danger color-white">.bg-danger</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="w-full py-20 m-1 rounded center bg-black color-white">.bg-black</div>
<div class="w-full py-20 m-1 rounded center bg-grey-darkest color-white">.bg-grey-darkest</div>
<div class="w-full py-20 m-1 rounded center bg-grey-darker color-white">.bg-grey-darker</div>
<div class="w-full py-20 m-1 rounded center bg-grey-dark color-white">.bg-grey-dark</div>
<div class="w-full py-20 m-1 rounded center bg-grey color-white">.bg-grey</div>
<div class="w-full py-20 m-1 rounded center bg-grey-light color-white">.bg-grey-light</div>
<div class="w-full py-20 m-1 rounded center bg-grey-lighter color-white">.bg-grey-lighter</div>
<div class="w-full py-20 m-1 rounded center bg-grey-lightest color-white">.bg-grey-lightest</div>
<div class="w-full py-20 m-1 rounded center bg-grey-ultralight color-grey">.bg-grey-ultralight</div>
<div class="w-full py-20 m-1 rounded center bg-white color-grey">.bg-white</div>
<div class="w-full py-20 m-1 rounded center bg-blue color-white">.bg-blue</div>
<div class="w-full py-20 m-1 rounded center bg-indigo color-white">.bg-indigo</div>
<div class="w-full py-20 m-1 rounded center bg-purple color-white">.bg-purple</div>
<div class="w-full py-20 m-1 rounded center bg-pink color-white">.bg-pink</div>
<div class="w-full py-20 m-1 rounded center bg-red color-white">.bg-red</div>
<div class="w-full py-20 m-1 rounded center bg-orange color-white">.bg-orange</div>
<div class="w-full py-20 m-1 rounded center bg-yellow color-white">.bg-yellow</div>
<div class="w-full py-20 m-1 rounded center bg-green color-white">.bg-green</div>
<div class="w-full py-20 m-1 rounded center bg-teal color-white">.bg-teal</div>
<div class="w-full py-20 m-1 rounded center bg-cyan color-white">.bg-cyan</div>
<div class="w-full py-20 m-1 rounded center bg-success color-white">.bg-success</div>
<div class="w-full py-20 m-1 rounded center bg-warning color-white">.bg-warning</div>
<div class="w-full py-20 m-1 rounded center bg-info color-white">.bg-info</div>
<div class="w-full py-20 m-1 rounded center bg-danger color-white">.bg-danger</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Usage</h3>
        <p>Adding <code class="color-indigo font-bold">.bg-{color}</code>, <code class="color-indigo font-bold">.bg-hover-{color}</code>, <code class="color-indigo font-bold">.bg-active-{color}</code>, <code class="color-indigo font-bold">.bg-focus-{color}</code> to control the background color and states of an element.</p>
        <div class="p-30 flex flex-md-wrap justify-around rounded bg-grey-ultralight">
          <a href="#" class="button size-md rounded bg-grey-darker color-white">.button.bg-grey-dark</a>
          <a href="#" class="button size-md rounded bg-grey-dark bg-hover-green color-white">.button.bg-hover-green</a>
          <a href="#" class="button size-md rounded bg-active-pink active bg-hover-green color-white">.button.bg-active-pink.active</a>
          <a href="#" class="button size-md rounded bg-black bg-focus-teal color-white">.button.bg-focus-teal</a>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<a href="#" class="button size-md rounded bg-grey-darker color-white">.button.bg-grey-dark</a>
<a href="#" class="button size-md rounded bg-grey-dark bg-hover-green color-white">.button.bg-hover-green</a>
<a href="#" class="button size-md rounded bg-active-pink active bg-hover-green color-white">.button.bg-active-pink.active</a>
<a href="#" class="button size-md rounded bg-black bg-focus-teal color-white">.button.bg-focus-teal</a>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Responsive</h3>
        <p>Use the background color responsive utility classes for specific breakpoints by adding the breakpoint name to the class, for example: <code class="color-indigo font-bold">.bg-md-pink</code>. Background color utitlity classes are created for the breakpoints listed below, but can be customised in <strong>_variables_timber.scss</strong> to add all breakpoints.</p>
        <ul class="list-none">
          <li><strong>lg</strong>: 1200px,</li>
          <li><strong>md</strong>: 992px,</li>
          <li><strong>sm</strong>: 768px</li>
        </ul>
        <div class="p-30 flex flex-wrap justify-around rounded bg-grey-ultralight">
          <div class="w-full py-20 m-1 rounded center bg-black bg-lg-green bg-md-pink bg-sm-indigo color-white">.bg-black<br>.bg-lg-green<br>.bg-md-pink<br>.bg-sm-indigo</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="w-full py-20 m-1 rounded center bg-black bg-lg-green bg-md-pink bg-sm-indigo color-white">.bg-black<br>.bg-lg-green<br>.bg-md-pink<br>.bg-sm-indigo</div>
--></code></pre>
      </div>
      <!-- code -->
    </div>
    <!-- Content Inner End -->
  </div>
</div>
