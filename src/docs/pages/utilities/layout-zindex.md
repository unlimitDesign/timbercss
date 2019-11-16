---
title: Layout - Z-index Utility
menu_label: Z-Index
layout: documentation
category: ["Utilities","Layout"]
markup_language: html
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Utility: Z-index</h1>
      <p class="mb-10">Controls the z-index of an element, where x represents a number in the following scale:</p>
      <p><code class="color-indigo font-bold">auto, 0, 10, 20, 30, 40</code></p>
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
              <th class="color-indigo">.z-{x}</th>
              <td> z-index: x; </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Classes End -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Z-index</h3>
        <p>Adding <code class="color-indigo font-bold">.z-{x}</code> sets the z-index of an element. The z-index property controls the vertical stacking order of elements that overlap, i.e. it determines which one will be physically closer to you. Z-index only affects elements that have a position value other than static (the default).</p>
        <div class="relative h-min-250 p-30 rounded bg-grey-ultralight">
          <div class="w-150 relative z-0 center p-30 rounded bg-grey-darkest color-white">1.<br>.z-0</div>
          <div class="w-150 absolute z-10 center p-30 pst-100 psl-100 rounded bg-grey-darker color-white">2.<br>.z-10</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="relative h-min-250">
	<div class="w-150 relative z-0 center p-30 rounded bg-grey-darkest color-white">1.<br>.z-0</div>
	<div class="w-150 absolute z-10 center p-30 pst-100 psl-100 rounded bg-grey-darker color-white">2.<br>.z-10</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Responsive</h3>
        <p>Use the z-index responsive utility classes for specific breakpoints by adding the breakpoint name to the class, for example: <code class="color-indigo font-bold">.z-md-10</code>. Z-index utitlity classes are created for the breakpoints listed below, but can be customised in <strong>_variables_timber.scss</strong> to include all breakpoints.</p>
        <ul class="list-none">
          <li><strong>lg</strong>: 1200px,</li>
          <li><strong>md</strong>: 992px,</li>
          <li><strong>sm</strong>: 768px</li>
        </ul>
        <div class="relative h-min-250 p-30 rounded bg-grey-ultralight">
          <div class="w-150 relative z-10 center p-30 rounded bg-grey-darkest color-white">1.<br>.z-10</div>
          <div class="w-250 absolute z-0 z-lg-20 z-md-0 z-sm-30 center p-30 pst-100 psl-100 rounded bg-grey-darker color-white">2.<br>.z-0.z-lg-20.z-md-0.z-sm-30</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="relative h-min-250">
	<div class="w-150 relative z-10 center p-30 rounded bg-grey-darkest color-white">1.<br>.z-10</div>
	<div class="w-250 absolute z-lg-20 z-md-0 z-sm-30 center p-30 pst-100 psl-100 rounded bg-grey-darker color-white">2.<br>.z-lg-20.z-md-0.z-sm-30</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
    </div>
    <!-- Content Inner End -->
  </div>
</div>
