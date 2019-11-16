---
title: Typography - Text Transform
menu_label: Text Transform
layout: documentation
category: ["Utilities","Typography"]
markup_language: html
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Utility: Text Transform</h1>
      <p class="mb-10">Controls the text transform of an element.</p>
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
              <th class="color-indigo">.normalcase</th>
              <td> text-transform: none; </td>
            </tr>
            <tr>
              <th class="color-indigo">.lowercase</th>
              <td> text-transform: lowercase; </td>
            </tr>
            <tr>
              <th class="color-indigo">.uppercase</th>
              <td> text-transform: uppercase; </td>
            </tr>
            <tr>
              <th class="color-indigo">.capitalize</th>
              <td> text-transform: capitalize; </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Classes End -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Normal</h3>
        <p>Use <code class="color-indigo font-bold">.normalcase</code> to make text normal.</p>
        <div class="p-30 rounded bg-grey-ultralight">
          <p class="normal lead center p-30 mb-0 rounded bg-grey-darkest color-white">The quick brown fox jumped over the lazy dog.</p>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<p class="normal">The quick brown fox jumped over the lazy dog.</p>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Lowercase</h3>
        <p>Use <code class="color-indigo font-bold">.lowercase</code> to make text lowercase.</p>
        <div class="p-30 rounded bg-grey-ultralight">
          <p class="lowercase lead center p-30 mb-0 rounded bg-grey-darkest color-white">The quick brown fox jumped over the lazy dog.</p>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<p class="lowercase">The quick brown fox jumped over the lazy dog.</p>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Uppercase</h3>
        <p>Use <code class="color-indigo font-bold">.uppercase</code> to make text uppercase.</p>
        <div class="p-30 rounded bg-grey-ultralight">
          <p class="uppercase lead center p-30 mb-0 rounded bg-grey-darkest color-white">The quick brown fox jumped over the lazy dog.</p>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<p class="uppercase">The quick brown fox jumped over the lazy dog.</p>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Capitalize</h3>
        <p>Use <code class="color-indigo font-bold">.capitalize</code> to make text capitalized.</p>
        <div class="p-30 rounded bg-grey-ultralight">
          <p class="capitalize lead center p-30 mb-0 rounded bg-grey-darkest color-white">The quick brown fox jumped over the lazy dog.</p>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<p class="capitalize">The quick brown fox jumped over the lazy dog.</p>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Responsive</h3>
        <p>Use the text transform responsive utility classes for specific breakpoints by adding the breakpoint name to the class, for example: <code class="color-indigo font-bold">.uppercase-md</code>. Text transform utitlity classes are created for the breakpoints listed below, but can be customised in <strong>_variables_timber.scss</strong> to include all breakpoints.</p>
        <ul class="list-none">
          <li><strong>lg</strong>: 1200px,</li>
          <li><strong>md</strong>: 992px,</li>
          <li><strong>sm</strong>: 768px</li>
        </ul>
        <div class="p-30 rounded bg-grey-ultralight">
          <p class="normalcase capitalize-lg uppercase-md lowercase-sm lead center p-30 mb-0 rounded bg-grey-darkest color-white">The quick brown fox jumped over the lazy dog.</p>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<p class="decoration-none underline-lg line-through-md underline-sm">The quick brown fox jumped over the lazy dog.</p>
--></code></pre>
      </div>
      <!-- code -->
    </div>
    <!-- Content Inner End -->
  </div>
</div>
