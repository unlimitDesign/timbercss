---
title: Interactivity - Pointer Events Utility
menu_label: Pointer Events
layout: documentation
category: ["Utilities", "Interactivity"]
markup_language: html
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Utility: Pointer Events</h1>
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
              <th class="color-indigo">.pointer-events-none</th>
              <td> pointer-events: none; </td>
            </tr>
            <tr>
              <th class="color-indigo">.pointer-events-auto</th>
              <td> pointer-events: auto; </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Classes End -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Events None</h3>
        <p>Adding <code class="color-indigo font-bold">.pointer-events-none</code> prevents all click, state and cursor options on the specified HTML element</p>
        <div class="p-30 center rounded relative bg-grey-ultralight">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div class="pointer-events-none w-200 h-full pst-0 p-10 absolute bg-black color-white opacity-60">Try selecting text through this block</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="pointer-events-none w-200 h-full pst-0 p-10 absolute bg-black color-white opacity-60">Try selecting text through this block</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Events Auto</h3>
        <p>Adding <code class="color-indigo font-bold">.pointer-events-auto</code> restores the default functionality (useful for use on child elements of an element with pointer-events: none; specified.</p>
        <div class="p-30 center rounded relative bg-grey-ultralight">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div class="pointer-events-auto w-200 h-full pst-0 p-10 absolute bg-black color-white opacity-60">Try selecting text through this block</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="pointer-events-auto w-200 h-full pst-0 p-10 absolute bg-black color-white opacity-60">Try selecting text through this block</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Responsive</h3>
        <p>Use the pointer event responsive utility classes for specific breakpoints by adding the breakpoint name to the class, for example: <code class="color-indigo font-bold">.pointer-md-events-none</code>. Pointer event utitlity classes are created for the breakpoints listed below, but can be customised in <strong>_variables_timber.scss</strong> to add all breakpoints.</p>
        <ul class="list-none">
          <li><strong>lg</strong>: 1200px,</li>
          <li><strong>md</strong>: 992px,</li>
          <li><strong>sm</strong>: 768px</li>
        </ul>
        <div class="p-30 center rounded relative bg-grey-ultralight">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div class="pointer-events-none pointer-lg-events-auto pointer-md-events-none pointer-sm-events-auto w-200 h-full pst-0 p-10 absolute bg-black color-white opacity-60">Try selecting text through this block</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="pointer-events-none pointer-lg-events-auto pointer-md-events-none pointer-sm-events-auto w-200 h-full pst-0 p-10 absolute bg-black color-white opacity-60">Try selecting text through this block</div>
--></code></pre>
      </div>
      <!-- code -->
    </div>
    <!-- Content Inner End -->
		<!-- {{ sidebar }} -->
  </div>
</div>
