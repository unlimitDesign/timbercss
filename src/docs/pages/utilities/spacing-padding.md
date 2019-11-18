---
title: Spacing - Padding Utility
menu_label: Padding
layout: documentation
category: ["Utilities", "Spacing"]
markup_language: html
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Utility: Padding</h1>
      <p class="mb-10">Controls the padding of an element, where x represents a number in the following scale:</p>
      <p><code class="color-indigo font-bold">0,1,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100</code></p>
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
              <th class="color-indigo">.p-{x}</th>
              <td> padding: {x}rem; </td>
            </tr>
            <tr>
              <th class="color-indigo">.py-{x}</th>
              <td> padding-top: {x}rem;<br> padding-bottom: {x}rem; </td>
            </tr>
            <tr>
              <th class="color-indigo">.px-{x}</th>
              <td> padding-right: {x}rem;<br> padding-left: {x}rem; </td>
            </tr>
            <tr>
              <th class="color-indigo">.pt-{x}</th>
              <td> padding-top: {x}rem; </td>
            </tr>
            <tr>
              <th class="color-indigo">.pr-{x}</th>
              <td> padding-right: {x}rem; </td>
            </tr>
            <tr>
              <th class="color-indigo">.pb-{x}</th>
              <td> padding-bottom: {x}rem; </td>
            </tr>
            <tr>
              <th class="color-indigo">.pl-{x}</th>
              <td> padding-left: {x}rem; </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Classes End -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Padding</h3>
        <p>Adding <code class="color-indigo font-bold">.p{side}-{x}</code> sets the padding of all sides, top or bottom, or a specific side of an element.</p>
        <div class="p-30 flex flex-wrap justify-around rounded bg-grey-ultralight">
          <div class="w-150 h-150 m-5 p-30 relative rounded bg-green color-white"><span class="absolute pst-5 text-small">.p-30</span>
            <div class="w-full h-full rounded bg-grey-darkest color-white"></div>
          </div>
          <div class="w-150 h-150 m-5 py-30 relative rounded bg-green color-white"><span class="absolute pst-5 psl-30 text-small">.py-30</span>
            <div class="w-full h-full bg-grey-darkest color-white"></div>
          </div>
          <div class="w-150 h-150 m-5 px-30 relative rounded bg-green color-white"><span class="absolute pst-5 psl-5 text-small">.px-30</span>
            <div class="w-full h-full bg-grey-darkest color-white"></div>
          </div>
          <div class="w-150 h-150 m-5 pb-30 relative rounded bg-green color-white"><span class="absolute psb-5 psl-30 text-small">.pb-30</span>
            <div class="w-full h-full rounded-t bg-grey-darkest color-white"></div>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="w-150 h-150 m-5 p-30 relative rounded bg-green color-white"><span class="absolute pst-5 text-small">.p-30</span><div class="w-full h-full rounded bg-grey-darkest color-white"></div></div>
<div class="w-150 h-150 m-5 py-30 relative rounded bg-green color-white"><span class="absolute pst-5 psl-30 text-small">.py-30</span><div class="w-full h-full bg-grey-darkest color-white"></div></div>
<div class="w-150 h-150 m-5 px-30 relative rounded bg-green color-white"><span class="absolute pst-5 psl-5 text-small">.px-30</span><div class="w-full h-full bg-grey-darkest color-white"></div></div>
<div class="w-150 h-150 m-5 pb-30 relative rounded bg-green color-white"><span class="absolute psb-5 psl-30 text-small">.pb-30</span><div class="w-full h-full rounded-t bg-grey-darkest color-white"></div></div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Responsive</h3>
        <p>Use the padding responsive utility classes for specific breakpoints by adding the breakpoint name to the class, for example: <code class="color-indigo font-bold">.pt-md-0</code>. Padding utitlity classes are created for the breakpoints listed below, but can be customised in <strong>_variables_timber.scss</strong> to add all breakpoints.</p>
        <ul class="list-none">
          <li><strong>lg</strong>: 1200px,</li>
          <li><strong>md</strong>: 992px,</li>
          <li><strong>sm</strong>: 768px</li>
        </ul>
        <div class="p-30 flex flex-wrap justify-around rounded bg-grey-ultralight">
          <div class="w-250 h-250 pt-30 p-lg-0 pr-lg-30 p-md-0 pb-md-30 p-sm-0 pl-sm-30 relative rounded bg-green color-white"><span class="absolute pst-30 psb-30 psl-30 psr-30 text-small">.pt-30<br>.p-lg-0<br>.pr-lg-30<br>.p-md-0<br>.pb-md-30<br>.p-sm-0<br>.pl-sm-30</span>
            <div class="w-full h-full rounded-b bg-grey-darkest color-white"></div>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="w-250 h-250 pt-30 p-lg-0 pr-lg-30 p-md-0 pb-md-30 p-sm-0 pl-sm-30 relative rounded bg-green color-white"><span class="absolute pst-30 psb-30 psl-30 psr-30 text-small">.pt-30<br>.p-lg-0<br>.pr-lg-30<br>.p-md-0<br>.pb-md-30<br>.p-sm-0<br>.pl-sm-30</span><div class="w-full h-full rounded-b bg-grey-darkest color-white"></div></div>
--></code></pre>
      </div>
      <!-- code -->
    </div>
    <!-- Content Inner End -->
		<!-- {{ sidebar }} -->
  </div>
</div>
