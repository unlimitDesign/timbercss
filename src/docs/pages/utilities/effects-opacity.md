---
title: Effects - Opacity Utility
menu_label: Opacity
layout: documentation
category: ["Utilities","Effects"]
markup_language: html
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Utility: Opacity</h1>
      <p>Controls the opacity of an element.</p>
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
              <th class="color-indigo">.opacity-0</th>
              <td> opacity: 0; </td>
            </tr>
            <tr>
              <th class="color-indigo">.opacity-10</th>
              <td> opacity: 10; </td>
            </tr>
            <tr>
              <th class="color-indigo">.opacity-20</th>
              <td> opacity: 20; </td>
            </tr>
            <tr>
              <th class="color-indigo">.opacity-30</th>
              <td> opacity: 30; </td>
            </tr>
            <tr>
              <th class="color-indigo">.opacity-0</th>
              <td> opacity: 0; </td>
            </tr>
            <tr>
              <th class="color-indigo">.opacity-0</th>
              <td> opacity: 0; </td>
            </tr>
            <tr>
              <th class="color-indigo">.opacity-40</th>
              <td> opacity: 40; </td>
            </tr>
            <tr>
              <th class="color-indigo">.opacity-50</th>
              <td> opacity: 50; </td>
            </tr>
            <tr>
              <th class="color-indigo">.opacity-60</th>
              <td> opacity: 60; </td>
            </tr>
            <tr>
              <th class="color-indigo">.opacity-70</th>
              <td> opacity: 70; </td>
            </tr>
            <tr>
              <th class="color-indigo">.opacity-80</th>
              <td> opacity: 80; </td>
            </tr>
            <tr>
              <th class="color-indigo">.opacity-90</th>
              <td> opacity: 90; </td>
            </tr>
            <tr>
              <th class="color-indigo">.opacity-100</th>
              <td> opacity: 100; </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Classes End -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Usage</h3>
        <p>Adding <code class="color-indigo font-bold">.opacity-{x}</code> sets the opacity of an element.</p>
        <div class="p-30 flex flex-wrap justify-around rounded bg-grey-ultralight">
          <div class="w-150 py-20 m-1 opacity-10 rounded center bg-black color-white">.opacity-10</div>
          <div class="w-150 py-20 m-1 opacity-20 rounded center bg-black color-white">.opacity-20</div>
          <div class="w-150 py-20 m-1 opacity-30 rounded center bg-black color-white">.opacity-30</div>
          <div class="w-150 py-20 m-1 opacity-40 rounded center bg-black color-white">.opacity-40</div>
          <div class="w-150 py-20 m-1 opacity-50 rounded center bg-black color-white">.opacity-50</div>
          <div class="w-150 py-20 m-1 opacity-60 rounded center bg-black color-white">.opacity-60</div>
          <div class="w-150 py-20 m-1 opacity-70 rounded center bg-black color-white">.opacity-70</div>
          <div class="w-150 py-20 m-1 opacity-80 rounded center bg-black color-white">.opacity-80</div>
          <div class="w-150 py-20 m-1 opacity-90 rounded center bg-black color-white">.opacity-90</div>
          <div class="w-150 py-20 m-1 opacity-100 rounded center bg-black color-white">.opacity-100</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="w-150 py-20 m-1 opacity-10 rounded center bg-black color-white">.opacity-10</div>
<div class="w-150 py-20 m-1 opacity-20 rounded center bg-black color-white">.opacity-20</div>
<div class="w-150 py-20 m-1 opacity-30 rounded center bg-black color-white">.opacity-30</div>
<div class="w-150 py-20 m-1 opacity-40 rounded center bg-black color-white">.opacity-40</div>
<div class="w-150 py-20 m-1 opacity-50 rounded center bg-black color-white">.opacity-50</div>
<div class="w-150 py-20 m-1 opacity-60 rounded center bg-black color-white">.opacity-60</div>
<div class="w-150 py-20 m-1 opacity-70 rounded center bg-black color-white">.opacity-70</div>
<div class="w-150 py-20 m-1 opacity-80 rounded center bg-black color-white">.opacity-80</div>
<div class="w-150 py-20 m-1 opacity-90 rounded center bg-black color-white">.opacity-90</div>
<div class="w-150 py-20 m-1 opacity-100 rounded center bg-black color-white">.opacity-100</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Responsive</h3>
        <p>Use the opacity responsive utility classes for specific breakpoints by adding the breakpoint name to the class, for example: <code class="color-indigo font-bold">.opacity-md-50</code>. Opacity utitlity classes are created for the breakpoints listed below, but can be customised in <strong>_variables_timber.scss</strong> to add all breakpoints.</p>
        <ul class="list-none">
          <li><strong>lg</strong>: 1200px,</li>
          <li><strong>md</strong>: 992px,</li>
          <li><strong>sm</strong>: 768px</li>
        </ul>
        <div class="p-30 flex flex-wrap justify-around rounded bg-grey-ultralight">
          <div class="w-200 h-200 opacity-100 opacity-lg-80 opacity-md-40 opacity-sm-20 inline-flex items-center rounded bg-black color-white"><span class="mx-auto">.opacity-100<br>.opacity-lg-80<br>.opacity-md-40<br>.opacity-sm-20</span></div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="w-200 h-200 opacity-100 opacity-lg-80 opacity-md-40 opacity-sm-20 inline-flex items-center rounded bg-black color-white"><span class="mx-auto">.opacity-100<br>.opacity-lg-80<br>.opacity-md-40<br>.opacity-sm-20</span></div>
--></code></pre>
      </div>
      <!-- code -->
    </div>
    <!-- Content Inner End -->
  </div>
</div>
