---
title: Interactivity - Cursor Utility
menu_label: Cursor
layout: documentation
category: ["Utilities","Interactivity"]
markup_language: html
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Utility: Cursor</h1>
      <p>Controls the cursor style when hovering an element.</p>
      <!-- Classes -->
      <div class="table-scrollable h-400">
        <table class="table size-md rounded bg-white">
          <thead>
            <tr>
              <th> Class </th>
              <th> Value </th>
            </tr>
          </thead>
          <tbody class="font-mono">
            <tr>
              <th class="color-indigo">.cursor-auto</th>
              <td> cursor: auto; </td>
            </tr>
            <tr>
              <th class="color-indigo">.cursor-default</th>
              <td> cursor: default; </td>
            </tr>
            <tr>
              <th class="color-indigo">.cursor-pointer</th>
              <td> cursor: pointer; </td>
            </tr>
            <tr>
              <th class="color-indigo">.cursor-wait</th>
              <td> cursor: wait; </td>
            </tr>
            <tr>
              <th class="color-indigo">.cursor-text</th>
              <td> cursor: text; </td>
            </tr>
            <tr>
              <th class="color-indigo">.cursor-move</th>
              <td> cursor: move; </td>
            </tr>
            <tr>
              <th class="color-indigo">.cursor-not-allowed</th>
              <td> cursor: not-allowed; </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Classes End -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Auto</h3>
        <p>Adding <code class="color-indigo font-bold">.cursor-auto</code> allows the browser to change the cursor based on the content.</p>
        <div class="p-30 center rounded bg-grey-ultralight">
          <div class="cursor-auto py-10 px-20 inline-block rounded bg-grey-darkest color-white">Hover the text</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="cursor-auto py-10 px-20 inline-block rounded bg-grey-darkest color-white">Hover the text</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Default</h3>
        <p>Adding <code class="color-indigo font-bold">.cursor-default</code> forces the browser to use the default cursor.</p>
        <div class="p-30 center rounded bg-grey-ultralight">
          <div class="cursor-default py-10 px-20 inline-block rounded bg-grey-darkest color-white">Hover the text</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="cursor-default py-10 px-20 inline-block rounded bg-grey-darkest color-white">Hover the text</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Cursor</h3>
        <p>Adding <code class="color-indigo font-bold">.cursor-pointer</code> forces the browser to change the cursor to show an interactive element.</p>
        <div class="p-30 center rounded bg-grey-ultralight">
          <div class="cursor-pointer py-10 px-20 inline-block rounded bg-grey-darkest color-white">Hover this block</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="cursor-pointer py-10 px-20 inline-block rounded bg-grey-darkest color-white">Hover this block</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Wait</h3>
        <p>Adding <code class="color-indigo font-bold">.cursor-wait</code> forces the browser to change the cursor to show that something is going on in the background, commonly an hourglass.</p>
        <div class="p-30 center rounded bg-grey-ultralight">
          <div class="cursor-wait py-10 px-20 inline-block rounded bg-grey-darkest color-white">Hover this block</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="cursor-wait py-10 px-20 inline-block rounded bg-grey-darkest color-white">Hover this block</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Text</h3>
        <p>Adding <code class="color-indigo font-bold">.cursor-text</code> forces the browser to change the cursor to show that text can be selected.</p>
        <div class="p-30 center rounded bg-grey-ultralight">
          <div class="cursor-text py-10 px-20 inline-block rounded bg-grey-darkest color-white">Hover this block</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="cursor-text py-10 px-20 inline-block rounded bg-grey-darkest color-white">Hover this block</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Move</h3>
        <p>Adding <code class="color-indigo font-bold">.cursor-move</code> forces the browser to change the cursor to show that an element can be moved.</p>
        <div class="p-30 center rounded bg-grey-ultralight">
          <div class="cursor-move py-10 px-20 inline-block rounded bg-grey-darkest color-white">Hover this block</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="cursor-move py-10 px-20 inline-block rounded bg-grey-darkest color-white">Hover this block</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Not Allowed</h3>
        <p>Adding <code class="color-indigo font-bold">.cursor-not-allowed</code> forces the browser to change the cursor to show that an element cannot be clicked or interacted with.</p>
        <div class="p-30 center rounded bg-grey-ultralight">
          <div class="cursor-not-allowed py-10 px-20 inline-block rounded bg-grey-darkest color-white">Hover this block</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="cursor-not-allowed py-10 px-20 inline-block rounded bg-grey-darkest color-white">Hover this block</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Responsive</h3>
        <p>Use the cursor responsive utility classes for specific breakpoints by adding the breakpoint name to the class, for example: <code class="color-indigo font-bold">.cursor-md-wait</code>. Cursor utitlity classes are created for the breakpoints listed below, but can be customised in <strong>_variables_timber.scss</strong> to add all breakpoints.</p>
        <ul class="list-none">
          <li><strong>lg</strong>: 1200px,</li>
          <li><strong>md</strong>: 992px,</li>
          <li><strong>sm</strong>: 768px</li>
        </ul>
        <div class="p-30 center rounded bg-grey-ultralight">
          <div class="cursor-default cursor-lg-not-allowed cursor-md-wait cursor-sm-pointer py-10 px-20 inline-block rounded bg-grey-darkest color-white">Hover this block</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="cursor-default cursor-lg-not-allowed cursor-md-wait cursor-sm-pointer py-10 px-20 inline-block rounded bg-grey-darkest color-white">Hover this block</div>
--></code></pre>
      </div>
      <!-- code -->
    </div>
    <!-- Content Inner End -->
  </div>
</div>
