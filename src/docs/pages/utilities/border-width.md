---
title: Border - Border Width Utility
menu_label: Border Width
layout: documentation
category: ["Utilities","Border"]
markup_language: html
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Utility: Border Width</h1>
      <p>Controls the border width of an element.</p>
      <!-- Classes -->
      <div class="table-scrollable h-400">
        <table class="table size-md rounded bg-white">
          <thead>
            <tr>
              <th> Class </th>
              <th> Value </th>
            </tr>
          </thead>
          <tbody class="font-mono">
            <tr>
              <th class="color-indigo">.border</th>
              <td> border-width: 1px; </td>
            </tr>
            <tr>
              <th class="color-indigo">.border-2</th>
              <td> border-width: 2px; </td>
            </tr>
            <tr>
              <th class="color-indigo">.border-4</th>
              <td> border-width: 4px; </td>
            </tr>
            <tr>
              <th class="color-indigo">.border-8</th>
              <td> border-width: 8px; </td>
            </tr>
            <tr>
              <th class="color-indigo">.border-t</th>
              <td> border-right-width: 0;<br> border-bottom-width: 0;<br> border-left-width: 0; </td>
            </tr>
            <tr>
              <th class="color-indigo">.border-r</th>
              <td> border-right-width: 0;<br> border-bottom-width: 0;<br> border-left-width: 0; </td>
            </tr>
            <tr>
              <th class="color-indigo">.border-b</th>
              <td> border-top-width: 0;<br> border-right-width: 0;<br> border-left-width: 0; </td>
            </tr>
            <tr>
              <th class="color-indigo">.border-l</th>
              <td> border-top-width: 0;<br> border-right-width: 0;<br> border-bottom-width: 0; </td>
            </tr>
            <tr>
              <th class="color-indigo">.border-t-none</th>
              <td> border-top: none; </td>
            </tr>
            <tr>
              <th class="color-indigo">.border-r-none</th>
              <td> border-right: none; </td>
            </tr>
            <tr>
              <th class="color-indigo">.border-b-none</th>
              <td> border-bottom: none; </td>
            </tr>
            <tr>
              <th class="color-indigo">.border-l-none</th>
              <td> border-left: none; </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Classes End -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Width</h3>
        <p>Adding <code class="color-indigo font-bold">.border</code> or <code class="color-indigo font-bold">.border-{x}</code> sets the border width of all sides of an element. Border widths provided by default include <code class="color-indigo font-bold">1, 2, 4, 8</code>, but these can be customised directly in <strong>_variables_timber.scss</strong>. Use <code class="color-indigo font-bold">.border-{side}</code> to control which sides receives a border.</p>
        <div class="p-30 flex flex-wrap justify-around rounded bg-grey-ultralight">
          <div class="w-150 h-150 m-5 border-2 border-solid border-green inline-flex items-center rounded bg-grey-darkest color-white"><span class="mx-auto">.border-2</span></div>
          <div class="w-150 h-150 m-5 border-4 border-t border-solid border-green inline-flex items-center rounded bg-grey-darkest color-white"><span class="mx-auto">.border-4<br>.border-t</span></div>
          <div class="w-150 h-150 m-5 border-8 border-l border-solid border-green inline-flex items-center rounded bg-grey-darkest color-white"><span class="mx-auto">.border-8<br>.border-l</span></div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="flex flex-wrap justify-around">
	<div class="w-150 h-150 m-5 border-2 border-solid border-green inline-flex items-center rounded bg-grey-darkest color-white"><span class="mx-auto">.border-2</span></div>
	<div class="w-150 h-150 m-5 border-4 border-t border-solid border-green inline-flex items-center rounded bg-grey-darkest color-white"><span class="mx-auto">.border-4<br>.border-t</span></div>
	<div class="w-150 h-150 m-5 border-8 border-l border-solid border-green inline-flex items-center rounded bg-grey-darkest color-white"><span class="mx-auto">.border-8<br>.border-l</span></div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Responsive</h3>
        <p>Use the border width responsive utility classes for specific breakpoints by adding the breakpoint name to the class, for example: <code class="color-indigo font-bold">.border-md-{x}</code> and <code class="color-indigo font-bold">.border-md-{size}</code>. Border width utitlity classes are created for the breakpoints listed below, but can be customised in <strong>_variables_timber.scss</strong> to include all breakpoints.</p>
        <ul class="list-none">
          <li><strong>lg</strong>: 1200px,</li>
          <li><strong>md</strong>: 992px,</li>
          <li><strong>sm</strong>: 768px</li>
        </ul>
        <div class="p-30 flex justify-around rounded bg-grey-ultralight">
          <div class="w-150 h-150 m-5 border-1 border-lg-2 border-md-4 border-sm-8 border-t border-lg-r border-md-b border-sm-l border-solid border-green inline-flex items-center rounded bg-grey-darkest color-white"><span class="mx-auto">.border-1<br>.border-lg-2<br>.border-md-4<br>.border-sm-8</span></div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="flex justify-around">
	<div class="w-150 h-150 m-5 border-1 border-lg-2 border-md-4 border-sm-8 border-t border-lg-r border-md-b border-sm-l border-solid border-green inline-flex items-center rounded bg-grey-darkest color-white"><span class="mx-auto">.border-1<br>.border-lg-2<br>.border-md-4<br>.border-sm-8</span></div>
</div>
--></code></pre>
      </div>
      <!-- code -->
    </div>
    <!-- Content Inner End -->
  </div>
</div>
