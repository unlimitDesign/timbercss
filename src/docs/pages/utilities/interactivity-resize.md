---
title: Interactivity - Resize Utility
menu_label: Resize
layout: documentation
category: ["Utilities","Interactivity"]
markup_language: html
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Utility: Resize</h1>
      <p>Controls the opacity of an element.</p>
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
              <th class="color-indigo">.resize-none</th>
              <td> resize: none; </td>
            </tr>
            <tr>
              <th class="color-indigo">.resize-both</th>
              <td> resize: both; </td>
            </tr>
            <tr>
              <th class="color-indigo">.resize-y</th>
              <td> resize: vertical; </td>
            </tr>
            <tr>
              <th class="color-indigo">.resize-x</th>
              <td> resize: horizontal; </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Classes End -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">None</h3>
        <p>Adding <code class="color-indigo font-bold">.resize-none</code> prevents an element from being resized.</p>
        <div class="p-30 flex flex-wrap justify-around rounded bg-grey-ultralight">
          <textarea class="resize-none h-min-100 mb-0" placeholder="Try resizing me" required=""></textarea>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<textarea class="resize-none h-min-100 mb-0" placeholder="Try resizing me" required></textarea>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Both</h3>
        <p>Adding <code class="color-indigo font-bold">.resize-both</code> allows an element to be resized both vertically and horizontally.</p>
        <div class="p-30 flex flex-wrap justify-around rounded bg-grey-ultralight">
          <textarea class="resize-both h-min-100 mb-0" placeholder="Try resizing me" required=""></textarea>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<textarea class="resize-both h-min-100 mb-0" placeholder="Try resizing me" required></textarea>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Vertically</h3>
        <p>Adding <code class="color-indigo font-bold">.resize-y</code> allows an element to be resized vertically only.</p>
        <div class="p-30 flex flex-wrap justify-around rounded bg-grey-ultralight">
          <textarea class="resize-y h-min-100 mb-0" placeholder="Try resizing me" required=""></textarea>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<textarea class="resize-y h-min-100 mb-0" placeholder="Try resizing me" required></textarea>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Horizontally</h3>
        <p>Adding <code class="color-indigo font-bold">.resize-x</code> allows an element to be resized horizontally only.</p>
        <div class="p-30 flex flex-wrap justify-around rounded bg-grey-ultralight">
          <textarea class="resize-x h-min-100 mb-0" placeholder="Try resizing me" required=""></textarea>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<textarea class="resize-x h-min-100 mb-0" placeholder="Try resizing me" required></textarea>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Responsive</h3>
        <p>Use the resize responsive utility classes for specific breakpoints by adding the breakpoint name to the class, for example: <code class="color-indigo font-bold">.resize-md-none</code>. Resize utitlity classes are created for the breakpoints listed below, but can be customised in <strong>_variables_timber.scss</strong> to add all breakpoints.</p>
        <ul class="list-none">
          <li><strong>lg</strong>: 1200px,</li>
          <li><strong>md</strong>: 992px,</li>
          <li><strong>sm</strong>: 768px</li>
        </ul>
        <div class="p-30 flex flex-wrap justify-around rounded bg-grey-ultralight">
          <textarea class="resize-both resize-lg-y resize-md-x resize-both h-min-100 mb-0" placeholder="Try resizing me" required=""></textarea>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<textarea class="resize-both resize-lg-y resize-md-x resize-both h-min-100 mb-0" placeholder="Try resizing me" required></textarea>
--></code></pre>
      </div>
      <!-- code -->
    </div>
    <!-- Content Inner End -->
  </div>
</div>
