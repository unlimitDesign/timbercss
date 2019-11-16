---
title: Typography - Letter Spacing
menu_label: Letter Spacing
layout: documentation
category: ["Utilities","Typography"]
markup_language: html
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Utility: Letter Spacing</h1>
      <p class="mb-10">Controls the letter spacing of an element.</p>
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
              <th class="color-indigo">.tracking-tighter</th>
              <td> letter-spacing: -0.05em; </td>
            </tr>
            <tr>
              <th class="color-indigo">.tracking-tight</th>
              <td> letter-spacing: -0.025em; </td>
            </tr>
            <tr>
              <th class="color-indigo">.tracking-normal</th>
              <td> letter-spacing: 0; </td>
            </tr>
            <tr>
              <th class="color-indigo">.tracking-wide</th>
              <td> letter-spacing: 0.025em; </td>
            </tr>
            <tr>
              <th class="color-indigo">.tracking-wider</th>
              <td> letter-spacing: 0.05em; </td>
            </tr>
            <tr>
              <th class="color-indigo">.tracking-widest</th>
              <td> letter-spacing: 0.1em; </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Classes End -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Tracking</h3>
        <p>Adding <code class="color-indigo font-bold">.tracking-{spacing}</code> sets the letter spacing of an element.</p>
        <div class="p-30 rounded lead bg-grey-ultralight">
          <p class="tracking-tighter">The quick brown fox jumped over the lazy dog.</p>
          <p class="tracking-tight">The quick brown fox jumped over the lazy dog.</p>
          <p class="tracking-normal">The quick brown fox jumped over the lazy dog.</p>
          <p class="tracking-wide">The quick brown fox jumped over the lazy dog.</p>
          <p class="tracking-wider">The quick brown fox jumped over the lazy dog.</p>
          <p class="tracking-widest mb-0">The quick brown fox jumped over the lazy dog.</p>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<p class="tracking-tighter">The quick brown fox jumped over the lazy dog.</p>
<p class="tracking-tight">The quick brown fox jumped over the lazy dog.</p>
<p class="tracking-normal">The quick brown fox jumped over the lazy dog.</p>
<p class="tracking-wide">The quick brown fox jumped over the lazy dog.</p>
<p class="tracking-wider">The quick brown fox jumped over the lazy dog.</p>
<p class="tracking-widest mb-0">The quick brown fox jumped over the lazy dog.</p>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Responsive</h3>
        <p>Use the tracking responsive utility classes for specific breakpoints by adding the breakpoint name to the class, for example: <code class="color-indigo font-bold">.tracking-md-wider</code>. Tracking utitlity classes are created for each breakpoint listed below, but can be customised in <strong>_variables_timber.scss</strong> to include all breakpoints.</p>
        <ul class="list-none">
          <li><strong>lg</strong>: 1200px,</li>
          <li><strong>md</strong>: 992px,</li>
          <li><strong>sm</strong>: 768px</li>
        </ul>
        <div class="p-30 rounded lead bg-grey-ultralight">
          <p class="tracking-widest tracking-lg-wider tracking-md-wide tracking-sm-normal tracking-xs-tight mb-0">The quick brown fox jumped over the lazy dog.</p>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<p class="tracking-widest tracking-lg-wider tracking-md-wide tracking-sm-normal tracking-xs-tight">The quick brown fox jumped over the lazy dog.</p>
--></code></pre>
      </div>
      <!-- code -->
    </div>
    <!-- Content Inner End -->
  </div>
</div>
