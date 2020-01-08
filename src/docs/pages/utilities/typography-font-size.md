---
title: Typography - Font Size
menu_label: Font Size
layout: documentation
category: ["Utilities", "Typography"]
markup_language: html
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Utility: Font Size</h1>
      <p>Controls the font size of an element.</p>
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
              <th class="color-indigo">.text-tiny</th>
              <td> font-size: 0.947rem; </td>
            </tr>
            <tr>
              <th class="color-indigo">.text-small</th>
              <td> font-size: 1.231rem; </td>
            </tr>
            <tr>
              <th class="color-indigo">.text-normal</th>
              <td> font-size: 1.6rem; </td>
            </tr>
            <tr>
              <th class="color-indigo">.text-large</th>
              <td> font-size: 2.08rem; </td>
            </tr>
            <tr>
              <th class="color-indigo">.text-huge</th>
              <td> font-size: 2.704rem; </td>
            </tr>
            <tr>
              <th class="color-indigo">.text-huge-x2</th>
              <td> font-size: 3.515rem; </td>
            </tr>
            <tr>
              <th class="color-indigo">.text-huge-x3</th>
              <td> font-size: 4.57rem; </td>
            </tr>
            <tr>
              <th class="color-indigo">.text-huge-x4</th>
              <td> font-size: 5.941rem; </td>
            </tr>
            <tr>
              <th class="color-indigo">.text-huge-x5</th>
              <td> font-size: 7.723rem; </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Classes End -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Font Size</h3>
        <p>Adding <code class="color-indigo font-bold">.text-{size}</code> sets the font weight of an element.</p>
        <div class="p-30 rounded lead bg-grey-ultralight">
          <p class="text-tiny mb-10 truncate">The quick brown fox jumped over the lazy dog.</p>
          <p class="text-small mb-10 truncate">The quick brown fox jumped over the lazy dog.</p>
          <p class="text-normal mb-10 truncate">The quick brown fox jumped over the lazy dog.</p>
          <p class="text-large mb-10 truncate">The quick brown fox jumped over the lazy dog.</p>
          <p class="text-huge mb-10 truncate">The quick brown fox jumped over the lazy dog.</p>
          <p class="text-huge-x2 mb-10 truncate">The quick brown fox jumped over the lazy dog.</p>
          <p class="text-huge-x3 mb-10 truncate">The quick brown fox jumped over the lazy dog.</p>
          <p class="text-huge-x4 mb-10 truncate">The quick brown fox jumped over the lazy dog.</p>
          <p class="text-huge-x5 mb-10 truncate">The quick brown fox jumped over the lazy dog.</p>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<p class="text-tiny">The quick brown fox jumped over the lazy dog.</p>
<p class="text-small">The quick brown fox jumped over the lazy dog.</p>
<p class="text-normal">The quick brown fox jumped over the lazy dog.</p>
<p class="text-large">The quick brown fox jumped over the lazy dog.</p>
<p class="text-huge">The quick brown fox jumped over the lazy dog.</p>
<p class="text-huge-x2">The quick brown fox jumped over the lazy dog.</p>
<p class="text-huge-x3">The quick brown fox jumped over the lazy dog.</p>
<p class="text-huge-x4">The quick brown fox jumped over the lazy dog.</p>
<p class="text-huge-x5">The quick brown fox jumped over the lazy dog.</p>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Responsive</h3>
        <p>Use font size responsive utility classes for specific breakpoints by adding the breakpoint name to the class, for example: <code class="color-indigo font-bold">.text-md-huge</code>. Font size utitlity classes are created for the breakpoints listed below, but can be customised in <strong>_variables_timber.scss</strong> to include all breakpoints.</p>
        <ul class="list-none">
          <li><strong>lg</strong>: 1200px,</li>
          <li><strong>md</strong>: 992px,</li>
          <li><strong>sm</strong>: 768px</li>
        </ul>
        <div class="relative p-30 rounded bg-grey-ultralight">
          <p class="text-huge-x3 text-md-huge text-sm-large mb-0 truncate">The quick brown fox jumped over the lazy dog.</p>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<p class="text-huge-x3 text-md-huge text-sm-large">The quick brown fox jumped over the lazy dog.</p>
--></code></pre>
      </div>
      <!-- code -->
    </div>
    <!-- Content Inner End -->
		<!-- {{ sidebar }} -->
  </div>
</div>
