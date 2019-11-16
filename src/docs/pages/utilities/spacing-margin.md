---
title: Spacing - Margin Utility
menu_label: Margin
layout: documentation
category: ["Utilities","Spacing"]
markup_language: html
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Utility: Margin</h1>
      <p class="mb-10">Controls the margin of an element, where x represents a number in the following scale:</p>
      <p><code class="color-indigo font-bold">auto, 0,1,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100</code></p>
      <p>Update the scale values in <strong>_variables_timber.scss</strong></p>
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
              <th class="color-indigo">.m-{x}</th>
              <td> margin: {x}rem; </td>
            </tr>
            <tr>
              <th class="color-indigo">.my-{x}</th>
              <td> margin-top: {x}rem;<br> margin-bottom: {x}rem; </td>
            </tr>
            <tr>
              <th class="color-indigo">.mx-{x}</th>
              <td> margin-right: {x}rem;<br> margin-left: {x}rem; </td>
            </tr>
            <tr>
              <th class="color-indigo">.mt-{x}</th>
              <td> margin-top: {x}rem; </td>
            </tr>
            <tr>
              <th class="color-indigo">.mr-{x}</th>
              <td> margin-right: {x}rem; </td>
            </tr>
            <tr>
              <th class="color-indigo">.mb-{x}</th>
              <td> margin-bottom: {x}rem; </td>
            </tr>
            <tr>
              <th class="color-indigo">.ml-{x}</th>
              <td> margin-left: {x}rem; </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Classes End -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Margin</h3>
        <p>Adding <code class="color-indigo font-bold">.m{side}-{x}</code> sets the margin of all sides, top or bottom, or a specific side of an element.</p>
        <div class="p-30 flex flex-wrap justify-around rounded bg-grey-ultralight">
          <div class="m-5 relative rounded bg-green color-white">
            <div class="w-100 h-100 m-30 rounded bg-grey-darkest color-white center"><span class="text-small">.m-30</span></div>
          </div>
          <div class="w-150 m-5 relative rounded bg-green color-white">
            <div class="w-full h-100 my-30 bg-grey-darkest color-white center"><span class="text-small">.my-30</span></div>
          </div>
          <div class="h-150 m-5 relative rounded bg-green color-white">
            <div class="w-100 h-full mx-30 bg-grey-darkest color-white center"><span class="text-small">.mx-30</span></div>
          </div>
          <div class="w-150 h-150 m-5 relative rounded bg-green color-white">
            <div class="w-120 h-full mr-30 rounded-l bg-grey-darkest color-white center"><span class="text-small">.mr-30</span></div>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="m-5 relative rounded bg-green color-white"><div class="w-100 h-100 m-30 rounded bg-grey-darkest color-white center"><span class="text-small">.m-30</span></div></div>
<div class="w-150 m-5 relative rounded bg-green color-white"><div class="w-full h-100 my-30 bg-grey-darkest color-white center"><span class="text-small">.my-30</span></div></div>
<div class="h-150 m-5 relative rounded bg-green color-white"><div class="w-100 h-full mx-30 bg-grey-darkest color-white center"><span class="text-small">.mx-30</span></div></div>
<div class="w-150 h-150 m-5 relative rounded bg-green color-white"><div class="w-120 h-full mr-30 rounded-l bg-grey-darkest color-white center"><span class="text-small">.mr-30</span></div></div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Responsive</h3>
        <p>Use the margin responsive utility classes for specific breakpoints by adding the breakpoint name to the class, for example: <code class="color-indigo font-bold">.m-md-0</code>. Margin utitlity classes are created for the breakpoints listed below, but can be customised in <strong>_variables_timber.scss</strong> to add all breakpoints.</p>
        <ul class="list-none">
          <li><strong>lg</strong>: 1200px,</li>
          <li><strong>md</strong>: 992px,</li>
          <li><strong>sm</strong>: 768px</li>
        </ul>
        <div class="p-30 flex flex-wrap justify-around rounded bg-grey-ultralight">
          <div class="relative rounded bg-green color-white">
            <div class="w-min-200 p-5 h-min-200 p-5 mt-30 m-lg-0 mr-lg-30 m-md-0 mb-md-30 m-sm-0 ml-sm-30 rounded-b rounded-lg-l rounded-md-t rounded-sm-r bg-grey-darkest color-white"><span class="text-small">.mt-30<br>.m-lg-0<br>.mr-lg-30<br>.m-md-0<br>.mb-md-30<br>.m-sm-0<br>.ml-sm-30</span></div>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="w-min-200 p-5 h-min-200 p-5 mt-30 m-lg-0 mr-lg-30 m-md-0 mb-md-30 m-sm-0 ml-sm-30 rounded-b rounded-lg-l rounded-md-t rounded-sm-r bg-grey-darkest color-white"><span class="text-small">.mt-30<br>.m-lg-0<br>.mr-lg-30<br>.m-md-0<br>.mb-md-30<br>.m-sm-0<br>.ml-sm-30</span></div>
--></code></pre>
      </div>
      <!-- code -->
    </div>
    <!-- Content Inner End -->
  </div>
</div>
