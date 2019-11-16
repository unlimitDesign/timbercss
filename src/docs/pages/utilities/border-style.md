---
title: Border - Borde Style Utility
menu_label: Border Style
layout: documentation
category: ["Utilities","Border"]
markup_language: html
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Utility: Borde Style</h1>
      <p>Controls the border style of an element.</p>
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
              <th class="color-indigo">.border-solid</th>
              <td> border-style: solid; </td>
            </tr>
            <tr>
              <th class="color-indigo">.border-dashed</th>
              <td> border-style: dashed; </td>
            </tr>
            <tr>
              <th class="color-indigo">.border-dotted</th>
              <td> border-style: dotted; </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Classes End -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Solid</h3>
        <p>Adding <code class="color-indigo font-bold">.border-solid</code> sets the border style of an element to solid.</p>
        <div class="p-30 flex justify-around rounded bg-grey-ultralight">
          <div class="w-150 h-150 border-solid border-2 border-green inline-flex items-center rounded bg-grey-darkest color-white"><span class="mx-auto">.border-solid</span></div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="flex justify-around">
	<div class="w-150 h-150 border-solid border-2 border-green inline-flex items-center rounded bg-grey-darkest color-white"><span class="mx-auto">.border-solid</span></div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Dashed</h3>
        <p>Adding <code class="color-indigo font-bold">.border-dashed</code> sets the border style of an element to dashed.</p>
        <div class="p-30 flex justify-around rounded bg-grey-ultralight">
          <div class="w-150 h-150 border-dashed border-2 border-green inline-flex items-center rounded bg-grey-darkest color-white"><span class="mx-auto">.border-dashed</span></div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="flex justify-around">
	<div class="w-150 h-150 border-dashed border-2 border-green inline-flex items-center rounded bg-grey-darkest color-white"><span class="mx-auto">.border-dashed</span></div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Dotted</h3>
        <p>Adding <code class="color-indigo font-bold">.border-dotted</code> sets the border style of an element to dotted.</p>
        <div class="p-30 flex justify-around rounded bg-grey-ultralight">
          <div class="w-150 h-150 border-dotted border-2 border-green inline-flex items-center rounded bg-grey-darkest color-white"><span class="mx-auto">.border-dotted</span></div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="flex justify-around">
	<div class="w-150 h-150 border-dotted border-2 border-green inline-flex items-center rounded bg-grey-darkest color-white"><span class="mx-auto">.border-dotted</span></div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Responsive</h3>
        <p>Use the border style responsive utility classes for specific breakpoints by adding the breakpoint name to the class, for example: <code class="color-indigo font-bold">.border-md-dashed</code>. Border style utitlity classes are created for the breakpoints listed below, but can be customised in <strong>_variables_timber.scss</strong> to include all breakpoints.</p>
        <ul class="list-none">
          <li><strong>lg</strong>: 1200px,</li>
          <li><strong>md</strong>: 992px,</li>
          <li><strong>sm</strong>: 768px</li>
        </ul>
        <div class="p-30 flex justify-around rounded bg-grey-ultralight">
          <div class="w-150 h-150 border-solid border-md-dashed border-sm-dotted border-2 border-green inline-flex items-center rounded bg-grey-darkest color-white"><span class="mx-auto">.border-solid<br>.border-md-dashed<br>.border-sm-dotted</span></div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="flex justify-around">
	<div class="w-150 h-150 border-solid border-md-dashed border-sm-dotted border-2 border-green inline-flex items-center rounded bg-grey-darkest color-white"><span class="mx-auto">.border-dotted</span></div>
</div>
--></code></pre>
      </div>
      <!-- code -->
    </div>
    <!-- Content Inner End -->
  </div>
</div>
