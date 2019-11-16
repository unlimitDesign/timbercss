---
title: Sizing - Height Utility
menu_label: Height
layout: documentation
category: ["Utilities","Sizing"]
markup_language: html
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Utility: Height</h1>
      <p class="mb-10">Controls the height of an element, where x represents a number in the following scale:</p>
      <p><code class="color-indigo font-bold">auto, 0, 1, 25, 50, 80, 100, 150, 200, 250, 300, 350, 400</code></p>
      <p>Update the scale values in <strong>_variables_timber.scss</strong></p>
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
              <th class="color-indigo">.h-{x}</th>
              <td> height: {x}rem; </td>
            </tr>
            <tr>
              <th class="color-indigo">.h-min-{x}</th>
              <td> min-height: {x}rem; </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Classes End -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Height</h3>
        <p>Adding <code class="color-indigo font-bold">.h-{x}</code> sets the height of an element. Adding <code class="color-indigo font-bold">.h-min-{x}</code> sets the minimum height of an element, allowing it to expand as need.</p>
        <div class="p-30 flex flex-wrap justify-around rounded bg-grey-ultralight">
          <div class="w-100 h-50 m-5 rounded center bg-grey-darkest color-white">.h-50</div>
          <div class="w-100 h-100 m-5 rounded center bg-grey-darkest color-white">.h-100</div>
          <div class="w-100 h-150 m-5 rounded center bg-grey-darkest color-white">.h-150</div>
          <div class="w-100 h-min-200 m-5 rounded center bg-grey-darkest color-white">.h-min-200</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="p-30 flex flex-wrap justify-around rounded bg-grey-ultralight">
	<div class="w-100 h-50 m-5 rounded center bg-grey-darkest color-white">.h-50</div>
	<div class="w-100 h-100 m-5 rounded center bg-grey-darkest color-white">.h-100</div>
	<div class="w-100 h-150 m-5 rounded center bg-grey-darkest color-white">.h-150</div>
	<div class="w-100 h-min-200 m-5 rounded center bg-grey-darkest color-white">.h-min-200</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Responsive</h3>
        <p>Use the height responsive utility classes for specific breakpoints by adding the breakpoint name to the class, for example: <code class="color-indigo font-bold">.h-md-100</code>. Height utitlity classes are created for the breakpoints listed below, but can be customised in <strong>_variables_timber.scss</strong> to add all breakpoints.</p>
        <ul class="list-none">
          <li><strong>lg</strong>: 1200px,</li>
          <li><strong>md</strong>: 992px,</li>
          <li><strong>sm</strong>: 768px</li>
        </ul>
        <div class="p-30 flex flex-wrap justify-around rounded bg-grey-ultralight">
          <div class="h-min-400 h-min-lg-300 h-min-md-200 h-min-sm-100 m-5 rounded center bg-grey-darkest color-white">.h-min-400<br>.h-min-lg-300<br>.h-min-md-200<br>.h-min-sm-100</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="p-30 flex flex-wrap justify-around rounded bg-grey-ultralight">
	<div class="h-min-400 h-min-lg-300 h-min-md-200 h-min-sm-100 m-5 rounded center bg-grey-darkest color-white">.h-min-400<br>.h-min-lg-300<br>.h-min-md-200<br>.h-min-sm-100</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
    </div>
    <!-- Content Inner End -->
  </div>
</div>
