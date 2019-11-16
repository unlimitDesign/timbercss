---
title: Typography - Font Family
menu_label: Font Family
layout: documentation
category: ["Utilities","Typography"]
markup_language: html
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Utility: Font Family</h1>
      <p class="mb-10">Controls the font family of an element.</p>
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
              <th class="color-indigo">.font-sans</th>
              <td> font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; </td>
            </tr>
            <tr>
              <th class="color-indigo">.font-serif</th>
              <td> font-family: Georgia, Cambria, "Times New Roman", Times, serif; </td>
            </tr>
            <tr>
              <th class="color-indigo">.font-mono</th>
              <td> font-family: "Courier New", Courier, monospace, sans-serif; </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Classes End -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Sans Serif</h3>
        <p>Adding <code class="color-indigo font-bold">.font-sans</code> sets the font family of an element to a sans serif font family.</p>
        <div class="p-30 rounded bg-grey-ultralight">
          <p class="font-sans center p-30 mb-0 rounded bg-grey-darkest color-white">Sans serif font family is applied to this paragraph.</p>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<p class="font-sans center p-30 mb-0 rounded bg-grey-darkest color-white">Sans serif font family is applied to this paragraph.</p>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Serif</h3>
        <p>Adding <code class="color-indigo font-bold">.font-serif</code> sets the font family of an element to a serif font family.</p>
        <div class="p-30 rounded bg-grey-ultralight">
          <p class="font-serif center p-30 mb-0 rounded bg-grey-darkest color-white">Sans serif font family is applied to this paragraph.</p>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<p class="font-serif center p-30 mb-0 rounded bg-grey-darkest color-white">Sans serif font family is applied to this paragraph.</p>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Mono</h3>
        <p>Adding <code class="color-indigo font-bold">.font-mono</code> sets the font family of an element to a mono font family.</p>
        <div class="p-30 rounded bg-grey-ultralight">
          <p class="font-mono center p-30 mb-0 rounded bg-grey-darkest color-white">Mono font family is applied to this paragraph.</p>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<p class="font-mono center p-30 mb-0 rounded bg-grey-darkest color-white">Mono font family is applied to this paragraph.</p>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Responsive</h3>
        <p>Use the font family responsive utility classes for specific breakpoints by adding the breakpoint name to the class, for example: <code class="color-indigo font-bold">.font-md-mono</code>. Font family utitlity classes are created for the breakpoints listed below, but can be customised in <strong>_variables_timber.scss</strong> to include all breakpoints.</p>
        <ul class="list-none">
          <li><strong>lg</strong>: 1200px,</li>
          <li><strong>md</strong>: 992px,</li>
          <li><strong>sm</strong>: 768px</li>
        </ul>
        <div class="p-30 rounded bg-grey-ultralight">
          <p class="font-mono font-lg-serif font-md-sans font-sm-mono center p-30 mb-0 rounded bg-grey-darkest color-white">Mono font family is applied to this paragraph.<br>.font-mono.font-lg-serif.font-md-sans.font-sm-mono</p>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<p class="font-mono font-lg-serif font-md-sans font-sm-mono center p-30 mb-0 rounded bg-grey-darkest color-white">Mono font family is applied to this paragraph.<br>.font-mono.font-lg-serif.font-md-sans.font-sm-mono</p>
--></code></pre>
      </div>
      <!-- code -->
    </div>
    <!-- Content Inner End -->
  </div>
</div>
