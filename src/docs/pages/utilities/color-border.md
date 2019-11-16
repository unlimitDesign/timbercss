---
title: Color - Background Color Utility
menu_label: Border Color
layout: documentation
category: ["Utilities","Color"]
markup_language: html
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Utility: Border Color</h1>
      <p>Controls the border color of an element. Border color classes are provided for four states: base, hover, active and focus. Update the colors and states directly in <strong>_variables_timber.scss</strong></p>
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
              <th class="color-indigo">.border-{color}</th>
              <td> border-color: {color}; </td>
            </tr>
            <tr>
              <th class="color-indigo">.border-hover-{color}:hover</th>
              <td> border-color: {color}; </td>
            </tr>
            <tr>
              <th class="color-indigo">.border-active-{color}.active</th>
              <td> border-color: {color}; </td>
            </tr>
            <tr>
              <th class="color-indigo">.border-focus-{color}:focus</th>
              <td> border-color: {color}; </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Classes End -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Border Colors</h3>
        <p>Adding <code class="color-indigo font-bold">.border-{color}</code> sets the border color of an element.</p>
        <div class="p-30 flex flex-wrap justify-around rounded bg-grey-ultralight">
          <div class="w-full py-20 m-1 rounded center border-2 border-black color-darkest">.border-2.border-black</div>
          <div class="w-full py-20 m-1 rounded center border-2 border-grey-darkest color-darkest">.border-2.border-grey-darkest</div>
          <div class="w-full py-20 m-1 rounded center border-2 border-grey-darker color-darkest">.border-2.border-grey-darker</div>
          <div class="w-full py-20 m-1 rounded center border-2 border-grey-dark color-darkest">.border-2.border-grey-dark</div>
          <div class="w-full py-20 m-1 rounded center border-2 border-grey color-darkest">.border-2.border-grey</div>
          <div class="w-full py-20 m-1 rounded center border-2 border-grey-light color-darkest">.border-2.border-grey-light</div>
          <div class="w-full py-20 m-1 rounded center border-2 border-grey-lighter color-darkest">.border-2.border-grey-lighter</div>
          <div class="w-full py-20 m-1 rounded center border-2 border-grey-lightest color-darkest">.border-2.border-grey-lightest</div>
          <div class="w-full py-20 m-1 rounded center border-2 border-grey-ultralight color-darkest">.border-2.border-grey-ultralight</div>
          <div class="w-full py-20 m-1 rounded center border-2 border-white color-darkest">.border-2.border-white</div>
          <div class="w-full py-20 m-1 rounded center border-2 border-blue color-darkest">.border-2.border-blue</div>
          <div class="w-full py-20 m-1 rounded center border-2 border-indigo color-darkest">.border-2.border-indigo</div>
          <div class="w-full py-20 m-1 rounded center border-2 border-purple color-darkest">.border-2.border-purple</div>
          <div class="w-full py-20 m-1 rounded center border-2 border-pink color-darkest">.border-2.border-pink</div>
          <div class="w-full py-20 m-1 rounded center border-2 border-red color-darkest">.border-2.border-red</div>
          <div class="w-full py-20 m-1 rounded center border-2 border-orange color-darkest">.border-2.border-orange</div>
          <div class="w-full py-20 m-1 rounded center border-2 border-yellow color-darkest">.border-2.border-yellow</div>
          <div class="w-full py-20 m-1 rounded center border-2 border-green color-darkest">.border-2.border-green</div>
          <div class="w-full py-20 m-1 rounded center border-2 border-teal color-darkest">.border-2.border-teal</div>
          <div class="w-full py-20 m-1 rounded center border-2 border-cyan color-darkest">.border-2.border-cyan</div>
          <div class="w-full py-20 m-1 rounded center border-2 border-success color-darkest">.border-2.border-success</div>
          <div class="w-full py-20 m-1 rounded center border-2 border-warning color-darkest">.border-2.border-warning</div>
          <div class="w-full py-20 m-1 rounded center border-2 border-info color-darkest">.border-2.border-info</div>
          <div class="w-full py-20 m-1 rounded center border-2 border-danger color-darkest">.border-2.border-danger</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="w-full py-20 m-1 rounded center border-2 border-black color-darkest">.border-2.border-black</div>
<div class="w-full py-20 m-1 rounded center border-2 border-grey-darkest color-darkest">.border-2.border-grey-darkest</div>
<div class="w-full py-20 m-1 rounded center border-2 border-grey-darker color-darkest">.border-2.border-grey-darker</div>
<div class="w-full py-20 m-1 rounded center border-2 border-grey-dark color-darkest">.border-2.border-grey-dark</div>
<div class="w-full py-20 m-1 rounded center border-2 border-grey color-darkest">.border-2.border-grey</div>
<div class="w-full py-20 m-1 rounded center border-2 border-grey-light color-darkest">.border-2.border-grey-light</div>
<div class="w-full py-20 m-1 rounded center border-2 border-grey-lighter color-darkest">.border-2.border-grey-lighter</div>
<div class="w-full py-20 m-1 rounded center border-2 border-grey-lightest color-darkest">.border-2.border-grey-lightest</div>
<div class="w-full py-20 m-1 rounded center border-2 border-grey-ultralight color-darkest">.border-2.border-grey-ultralight</div>
<div class="w-full py-20 m-1 rounded center border-2 border-white color-darkest">.border-2.border-white</div>
<div class="w-full py-20 m-1 rounded center border-2 border-blue color-darkest">.border-2.border-blue</div>
<div class="w-full py-20 m-1 rounded center border-2 border-indigo color-darkest">.border-2.border-indigo</div>
<div class="w-full py-20 m-1 rounded center border-2 border-purple color-darkest">.border-2.border-purple</div>
<div class="w-full py-20 m-1 rounded center border-2 border-pink color-darkest">.border-2.border-pink</div>
<div class="w-full py-20 m-1 rounded center border-2 border-red color-darkest">.border-2.border-red</div>
<div class="w-full py-20 m-1 rounded center border-2 border-orange color-darkest">.border-2.border-orange</div>
<div class="w-full py-20 m-1 rounded center border-2 border-yellow color-darkest">.border-2.border-yellow</div>
<div class="w-full py-20 m-1 rounded center border-2 border-green color-darkest">.border-2.border-green</div>
<div class="w-full py-20 m-1 rounded center border-2 border-teal color-darkest">.border-2.border-teal</div>
<div class="w-full py-20 m-1 rounded center border-2 border-cyan color-darkest">.border-2.border-cyan</div>
<div class="w-full py-20 m-1 rounded center border-2 border-success color-darkest">.border-2.border-success</div>
<div class="w-full py-20 m-1 rounded center border-2 border-warning color-darkest">.border-2.border-warning</div>
<div class="w-full py-20 m-1 rounded center border-2 border-info color-darkest">.border-2.border-info</div>
<div class="w-full py-20 m-1 rounded center border-2 border-danger color-darkest">.border-2.border-danger</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Usage</h3>
        <p>Adding <code class="color-indigo font-bold">.border-{color}</code>, <code class="color-indigo font-bold">.border-hover-{color}</code>, <code class="color-indigo font-bold">.border-active-{color}</code>, <code class="color-indigo font-bold">.border-focus-{color}</code> to control the border color and states of an element.</p>
        <div class="p-30 flex flex-md-wrap justify-around rounded bg-grey-ultralight">
          <a href="#" class="button size-md rounded border-2 bg-transparent bg-hover-transparent border-blue color-grey-darkest color-hover-grey-darkest">.button.border-2 border-grey-dark</a>
          <a href="#" class="button size-md rounded border-2 bg-transparent bg-hover-transparent border-grey-dark border-2 border-hover-green color-grey-darkest color-hover-grey-darkest">.button.border-2 border-hover-green</a>
          <a href="#" class="button size-md rounded border-2 bg-transparent bg-hover-transparent border-active-pink active border-2 border-hover-green color-grey-darkest color-hover-grey-darkest">.button.border-2 border-active-pink.active</a>
          <a href="#" class="button size-md rounded border-2 bg-transparent bg-hover-transparent border-black border-focus-teal color-grey-darkest color-hover-grey-darkest">.button.bg-focus-teal</a>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<a href="#" class="button size-md rounded border-2 bg-transparent bg-hover-transparent border-blue color-grey-darkest color-hover-grey-darkest">.button.border-2 border-grey-dark</a>
<a href="#" class="button size-md rounded border-2 bg-transparent bg-hover-transparent border-grey-dark border-2 border-hover-green color-grey-darkest color-hover-grey-darkest">.button.border-2 border-hover-green</a>
<a href="#" class="button size-md rounded border-2 bg-transparent bg-hover-transparent border-active-pink active border-2 border-hover-green color-grey-darkest color-hover-grey-darkest">.button.border-2 border-active-pink.active</a>
<a href="#" class="button size-md rounded border-2 bg-transparent bg-hover-transparent border-black border-focus-teal color-grey-darkest color-hover-grey-darkest">.button.bg-focus-teal</a>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Responsive</h3>
        <p>Use the border color responsive utility classes for specific breakpoints by adding the breakpoint name to the class, for example: <code class="color-indigo font-bold">.border-md-pink</code>. Border color utitlity classes are created for the breakpoints listed below, but can be customised in <strong>_variables_timber.scss</strong> to add all breakpoints.</p>
        <ul class="list-none">
          <li><strong>lg</strong>: 1200px,</li>
          <li><strong>md</strong>: 992px,</li>
          <li><strong>sm</strong>: 768px</li>
        </ul>
        <div class="p-30 flex flex-wrap justify-around rounded bg-grey-ultralight">
          <div class="w-full py-20 m-1 rounded center border-2 border-solid border-black border-lg-green border-md-pink border-sm-indigo">.border-black<br>.border-lg-green<br>.border-md-pink<br>.border-sm-indigo</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="w-full py-20 m-1 rounded center border-2 border-solid border-black border-lg-green border-md-pink border-sm-indigo">.border-black<br>.border-lg-green<br>.border-md-pink<br>.border-sm-indigo</div>
--></code></pre>
      </div>
      <!-- code -->
    </div>
    <!-- Content Inner End -->
  </div>
</div>
