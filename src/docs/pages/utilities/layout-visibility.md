---
title: Layout - Visibility Utility
menu_label: Visibility
layout: documentation
category: ["Utilities","Layout"]
markup_language: html
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Utility: Visibilty</h1>
      <p>Controls the visibilty of an element.</p>
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
              <th class="color-indigo">.visible</th>
              <td> visibility: visible; </td>
            </tr>
            <tr>
              <th class="color-indigo">.invisible</th>
              <td> visibility: hidden; </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Classes End -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Visible</h3>
        <p>Adding <code class="color-indigo font-bold">.visible</code> sets the visibility of an element to visible.</p>
        <div class="relative h-min-150 p-30 rounded bg-grey-ultralight">
          <div class="w-150 visible center p-30 rounded bg-grey-darkest color-white">Visible</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="w-150 visible center p-30 rounded bg-grey-darkest color-white">Visible</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Hidden</h3>
        <p>Adding <code class="color-indigo font-bold">.invisible</code> sets the visibility of an element to invisible. The element still appears in the document flow, but is not visible.</p>
        <div class="relative h-min-150 p-30 rounded bg-grey-ultralight">
          <div class="w-150 invisible center p-30 rounded bg-grey-darkest color-white">Visible</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="w-150 invisible center p-30 rounded bg-grey-darkest color-white">Visible</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Responsive</h3>
        <p>Use the visibility responsive utility classes for specific breakpoints by adding the breakpoint name to the class, for example: <code class="color-indigo font-bold">.visible-md</code>. Visibility utitlity classes are created for the breakpoints listed below, but can be customised in <strong>_variables_timber.scss</strong> to include all breakpoints.</p>
        <ul class="list-none">
          <li><strong>lg</strong>: 1200px,</li>
          <li><strong>md</strong>: 992px,</li>
          <li><strong>sm</strong>: 768px</li>
        </ul>
        <div class="relative h-min-150 p-30 rounded bg-grey-ultralight">
          <div class="visible invisible-lg visible-md invisible-sm visible-xs center p-30 rounded bg-grey-darkest color-white">.visible.invisible-lg.visible-md.invisible-sm</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="visible invisible-lg visible-md invisible-sm visible-xs center p-30 rounded bg-grey-darkest color-white">Visible</div>
--></code></pre>
      </div>
      <!-- code -->
    </div>
    <!-- Content Inner End -->
  </div>
</div>
