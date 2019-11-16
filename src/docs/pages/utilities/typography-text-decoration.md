---
title: Typography - Text Decoration
menu_label: Text Decoration
layout: documentation
category: ["Utilities","Typography"]
markup_language: html
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Utility: Decoration</h1>
      <p class="mb-10">Controls the text decoration of an element.</p>
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
              <th class="color-indigo">.underline</th>
              <td> text-decoration: underline; </td>
            </tr>
            <tr>
              <th class="color-indigo">.line-through</th>
              <td> text-decoration: line-through; </td>
            </tr>
            <tr>
              <th class="color-indigo">.decoration-none</th>
              <td> text-decoration: none; </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Classes End -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Underline</h3>
        <p>Use <code class="color-indigo font-bold">.underline</code> to make text underlined.</p>
        <div class="p-30 rounded bg-grey-ultralight">
          <p class="underline lead center p-30 mb-0 rounded bg-grey-darkest color-white">The quick brown fox jumped over the lazy dog.</p>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<p class="underline">The quick brown fox jumped over the lazy dog.</p>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Line Through</h3>
        <p>Use <code class="color-indigo font-bold">.line-through</code> to strike out text.</p>
        <div class="p-30 rounded bg-grey-ultralight">
          <p class="line-through lead center p-30 mb-0 rounded bg-grey-darkest color-white">The quick brown fox jumped over the lazy dog.</p>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<p class="line-through">The quick brown fox jumped over the lazy dog.</p>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">No Decoration</h3>
        <p>Use <code class="color-indigo font-bold">.decoration-none</code> to remove text doecoration.</p>
        <div class="p-30 rounded bg-grey-ultralight">
          <p class="decoration-none lead center p-30 mb-0 rounded bg-grey-darkest color-white">The quick brown fox jumped over the lazy dog.</p>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<p class="decoration-none">The quick brown fox jumped over the lazy dog.</p>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Responsive</h3>
        <p>Use the text decoration responsive utility classes for specific breakpoints by adding the breakpoint name to the class, for example: <code class="color-indigo font-bold">.line-through-md</code>. Text decoration utitlity classes are created for the breakpoints listed below, but can be customised in <strong>_variables_timber.scss</strong> to include all breakpoints.</p>
        <ul class="list-none">
          <li><strong>lg</strong>: 1200px,</li>
          <li><strong>md</strong>: 992px,</li>
          <li><strong>sm</strong>: 768px</li>
        </ul>
        <div class="p-30 rounded bg-grey-ultralight">
          <p class="decoration-none underline-lg line-through-md underline-sm lead center p-30 mb-0 rounded bg-grey-darkest color-white">The quick brown fox jumped over the lazy dog.</p>
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
