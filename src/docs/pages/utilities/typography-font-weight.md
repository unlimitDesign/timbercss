---
title: Typography - Font Weight
menu_label: Font Weight
layout: documentation
category: ["Utilities", "Typography"]
markup_language: html
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Utility: Font Weight</h1>
      <p class="mb-10">Controls the font weight of an element.</p>
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
              <th class="color-indigo">.font-thin</th>
              <td> font-weight: 100; </td>
            </tr>
            <tr>
              <th class="color-indigo">.font-extra-light</th>
              <td> font-weight: 200; </td>
            </tr>
            <tr>
              <th class="color-indigo">.font-light</th>
              <td> font-weight: 300; </td>
            </tr>
            <tr>
              <th class="color-indigo">.font-normal</th>
              <td> font-weight: 400; </td>
            </tr>
            <tr>
              <th class="color-indigo">.font-medium</th>
              <td> font-weight: 500; </td>
            </tr>
            <tr>
              <th class="color-indigo">.font-demi-bold</th>
              <td> font-weight: 600; </td>
            </tr>
            <tr>
              <th class="color-indigo">.font-bold</th>
              <td> font-weight: 700; </td>
            </tr>
            <tr>
              <th class="color-indigo">.font-heavy</th>
              <td> font-weight: 800; </td>
            </tr>
            <tr>
              <th class="color-indigo">.font-black</th>
              <td> font-weight: 900; </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Classes End -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Font Weight</h3>
        <p>Adding <code class="color-indigo font-bold">.font-{weight}</code> sets the font weight of an element.</p>
        <div class="p-30 rounded lead bg-grey-ultralight">
          <p class="font-thin">The quick brown fox jumped over the lazy dog.</p>
          <p class="font-extra-light">The quick brown fox jumped over the lazy dog.</p>
          <p class="font-light">The quick brown fox jumped over the lazy dog.</p>
          <p class="font-normal">The quick brown fox jumped over the lazy dog.</p>
          <p class="font-medium">The quick brown fox jumped over the lazy dog.</p>
          <p class="font-demi-bold">The quick brown fox jumped over the lazy dog.</p>
          <p class="font-bold">The quick brown fox jumped over the lazy dog.</p>
          <p class="font-heavy">The quick brown fox jumped over the lazy dog.</p>
          <p class="font-black">The quick brown fox jumped over the lazy dog.</p>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<p class="font-thin">The quick brown fox jumped over the lazy dog.</p>
<p class="font-extra-light">The quick brown fox jumped over the lazy dog.</p>
<p class="font-light">The quick brown fox jumped over the lazy dog.</p>
<p class="font-normal">The quick brown fox jumped over the lazy dog.</p>
<p class="font-medium">The quick brown fox jumped over the lazy dog.</p>
<p class="font-demi-bold">The quick brown fox jumped over the lazy dog.</p>
<p class="font-bold">The quick brown fox jumped over the lazy dog.</p>
<p class="font-heavy">The quick brown fox jumped over the lazy dog.</p>
<p class="font-black">The quick brown fox jumped over the lazy dog.</p>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Responsive</h3>
        <p>Use font weight responsive utility classes for specific breakpoints by adding the breakpoint name to the class, for example: <code class="color-indigo font-bold">.font-md-bold</code>. Font weight utitlity classes are created for the breakpoints listed below, but can be customised in <strong>_variables_timber.scss</strong> to include all breakpoints.</p>
        <ul class="list-none">
          <li><strong>lg</strong>: 1200px,</li>
          <li><strong>md</strong>: 992px,</li>
          <li><strong>sm</strong>: 768px</li>
        </ul>
        <div class="p-30 rounded bg-grey-ultralight">
          <p class="font-thin font-lg-light font-md-medium font-sm-bold lead center p-30 mb-0 rounded bg-grey-darkest color-white">The quick brown fox jumped over the lazy dog.</p>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<p class="font-thin font-lg-light font-md-medium font-sm-bold">The quick brown fox jumped over the lazy dog.</p>
--></code></pre>
      </div>
      <!-- code -->
    </div>
    <!-- Content Inner End -->
		<!-- {{ sidebar }} -->
  </div>
</div>
