---
title: Typography - Font Style
menu_label: Font Style
layout: documentation
category: ["Utilities","Typography"]
markup_language: html
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Utility: Font Style</h1>
      <p class="mb-10">Controls the font style of an element.</p>
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
              <th class="color-indigo">.italic</th>
              <td> font-style: italic; </td>
            </tr>
            <tr>
              <th class="color-indigo">.roman</th>
              <td> font-style: normal; </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Classes End -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Italic</h3>
        <p>Adding <code class="color-indigo font-bold">.italic</code> sets the font style of an element to <em>italic</em>.</p>
        <div class="p-30 rounded bg-grey-ultralight">
          <p class="italic center p-30 mb-0 rounded bg-grey-darkest color-white">The quick brown fox jumped over the lazy dog.</p>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<p class="italic">The quick brown fox jumped over the lazy dog.</p>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Roman</h3>
        <p>Adding <code class="color-indigo font-bold">.roman</code> sets the font style of an element to normal.</p>
        <div class="p-30 rounded bg-grey-ultralight">
          <p class="roman center p-30 mb-0 rounded bg-grey-darkest color-white">The quick brown fox jumped over the lazy dog.</p>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<p class="roman">The quick brown fox jumped over the lazy dog.</p>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Responsive</h3>
        <p>Use font style responsive utility classes for specific breakpoints by adding the breakpoint name to the class, for example: <code class="color-indigo font-bold">.roman-md</code>. Font style utitlity classes are created for the breakpoints listed below, but can be customised in <strong>_variables_timber.scss</strong> to include all breakpoints.</p>
        <ul class="list-none">
          <li><strong>lg</strong>: 1200px,</li>
          <li><strong>md</strong>: 992px,</li>
          <li><strong>sm</strong>: 768px</li>
        </ul>
        <div class="p-30 rounded bg-grey-ultralight">
          <p class="roman italic-lg roman-md italic-sm center p-30 mb-0 rounded bg-grey-darkest color-white">The quick brown fox jumped over the lazy dog.</p>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<p class="roman italic-lg roman-md italic-sm">The quick brown fox jumped over the lazy dog.</p>
--></code></pre>
      </div>
      <!-- code -->
    </div>
    <!-- Content Inner End -->
  </div>
</div>
