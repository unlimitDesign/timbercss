---
title: Interactivity - Select Utility
menu_label: Select
layout: documentation
category: ["Utilities","Interactivity"]
markup_language: html
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Utility: Select</h1>
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
              <th class="color-indigo">.select-none</th>
              <td> user-select: none; </td>
            </tr>
            <tr>
              <th class="color-indigo">.select-text</th>
              <td> user-select: text; </td>
            </tr>
            <tr>
              <th class="color-indigo">.select-all</th>
              <td> user-select: all; </td>
            </tr>
            <tr>
              <th class="color-indigo">.select-auto</th>
              <td> user-select: auto; </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Classes End -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">None</h3>
        <p>Adding <code class="color-indigo font-bold">.select-none</code> prevents text in an element and its children from being selected.</p>
        <div class="p-30 center rounded bg-grey-ultralight">
          <div class="select-none py-10 px-20 inline-block bg-grey-darkest color-white">This text is not selectable</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="select-none py-10 px-20 inline-block bg-grey-darkest color-white">This text is not selectable</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Text</h3>
        <p>Adding <code class="color-indigo font-bold">.select-text</code> allows text in an element and its children to be selected.</p>
        <div class="p-30 center rounded bg-grey-ultralight">
          <div class="select-text py-10 px-20 inline-block bg-grey-darkest color-white">This text is selectable</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="select-text py-10 px-20 inline-block bg-grey-darkest color-white">This text is selectable</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">All</h3>
        <p>Adding <code class="color-indigo font-bold">.select-all</code> selects all text in an element when clicked.</p>
        <div class="p-30 center rounded bg-grey-ultralight">
          <div class="select-all py-10 px-20 inline-block bg-grey-darkest color-white">This text is not selectable</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="select-all py-10 px-20 inline-block bg-grey-darkest color-white">This text is not selectable</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Auto</h3>
        <p>Adding <code class="color-indigo font-bold">.select-auto</code> allows the browser to determine what is selectable. Useful for reversing <code class="color-indigo font-bold">.select-none</code>,<code class="color-indigo font-bold">.select-text</code> and <code class="color-indigo font-bold">.select-all</code>.</p>
        <div class="p-30 center rounded bg-grey-ultralight">
          <div class="select-auto py-10 px-20 inline-block bg-grey-darkest color-white">This text is not selectable</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="select-auto py-10 px-20 inline-block bg-grey-darkest color-white">This text is not selectable</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Responsive</h3>
        <p>Use the select responsive utility classes for specific breakpoints by adding the breakpoint name to the class, for example: <code class="color-indigo font-bold">.select-md-auto</code>. Select utitlity classes are created for the breakpoints listed below, but can be customised in <strong>_variables_timber.scss</strong> to add all breakpoints.</p>
        <ul class="list-none">
          <li><strong>lg</strong>: 1200px,</li>
          <li><strong>md</strong>: 992px,</li>
          <li><strong>sm</strong>: 768px</li>
        </ul>
        <div class="p-30 center rounded bg-grey-ultralight">
          <div class="select-none select-lg-text select-md-all select-sm-auto py-10 px-20 inline-block bg-grey-darkest color-white">This text is not selectable</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="select-none select-lg-text select-md-all select-sm-auto py-10 px-20 inline-block bg-grey-darkest color-white">This text is not selectable</div>
--></code></pre>
      </div>
      <!-- code -->
    </div>
    <!-- Content Inner End -->
  </div>
</div>
