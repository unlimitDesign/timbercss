---
title: Layout - Display Utility
menu_label: Display
layout: documentation
category: ["Utilities", "Layout"]
markup_language: html
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <!-- Content Inner -->
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Utility: Display</h1>
      <p>Controls the display of an element.</p>
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
              <th class="color-indigo">.block</th>
              <td> display: block; </td>
            </tr>
            <tr>
              <th class="color-indigo">.inline-block</th>
              <td> display: inline-block; </td>
            </tr>
            <tr>
              <th class="color-indigo">.inline</th>
              <td> display: inline; </td>
            </tr>
            <tr>
              <th class="color-indigo">.flex</th>
              <td> display: flex; </td>
            </tr>
            <tr>
              <th class="color-indigo">.inline-flex</th>
              <td> display: inline-flex; </td>
            </tr>
            <tr>
              <th class="color-indigo">.hidden</th>
              <td> display: hidden; </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Classes End -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Block</h3>
        <div class="p-30 rounded bg-grey-ultralight">
          <span class="block p-20 m-10 bg-grey-darker color-white center"> 1. span.block </span>
          <span class="block p-20 m-10 bg-grey-darkest color-white center"> 2. span.block </span>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<span class="block p-20 m-10 bg-grey-darker color-white center">
	1. span.block
</span>
<span class="block p-20 m-10 bg-grey-darkest color-white center">
	2. span.block
</span>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Inline Block</h3>
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="inline-block p-20 m-10 bg-grey-darker color-white center"> 1. div.inline-block </div>
          <div class="inline-block p-20 m-10 bg-grey-darkest color-white center"> 2. div.inline-block </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="inline-block p-20 m-10 bg-grey-darker color-white center">
	1. div.inline-block
</div>
<div class="inline-block p-20 m-10 bg-grey-darkest color-white center">
	2. div.inline-block
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Inline</h3>
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="inline p-20 m-10 bg-grey-darker color-white center"> 1. div.inline </div>
          <div class="inline p-20 m-10 bg-grey-darkest color-white center"> 2. div.inline </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="inline p-20 m-10 bg-grey-darker color-white center">
	1. div.inline
</div>
<div class="inline p-20 m-10 bg-grey-darkest color-white center">
	2. div.inline
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Flex</h3>
        <div class="flex p-30 rounded bg-grey-ultralight">
          <div class="flex-1 p-20 m-10 bg-grey-darker color-white center"> 1. div.flex-1 </div>
          <div class="flex-1 p-20 m-10 bg-grey-darkest color-white center"> 2. div.flex-1 </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="flex">
	<div class="flex-1 p-20 m-10 bg-grey-darker color-white center">
		1. div.flex-1
	</div>
	<div class="flex-1 p-20 m-10 bg-grey-darkest color-white center">
		2. div.flex-1
	</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Inline Flex</h3>
        <div class="inline-flex p-30 rounded bg-grey-ultralight">
          <div class="p-20 m-10 bg-grey-darker color-white center"> 1. div.flex-1 </div>
          <div class="p-20 m-10 bg-grey-darkest color-white center"> 2. div.flex-1 </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="inline-flex">
	<div class="p-20 m-10 bg-grey-darker color-white center">
		1. div.flex-1
	</div>
	<div class="p-20 m-10 bg-grey-darkest color-white center">
		2. div.flex-1
	</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Hidden</h3>
        <div class="inline-flex p-30 rounded bg-grey-ultralight">
          <div class="hidden p-20 m-10 bg-grey-darker color-white center"> 1. div.flex-1 </div>
          <div class="p-20 m-10 bg-grey-darkest color-white center"> 2. div.flex-1 </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="inline-flex">
	<div class="hidden p-20 m-10 bg-grey-darker color-white center">
		1. div.flex-1
	</div>
	<div class="p-20 m-10 bg-grey-darkest color-white center">
		2. div.flex-1
	</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Responsive</h3>
        <p>Use the display responsive utility classes for specific breakpoints by adding the breakpoint name to the class, for example: <code class="color-indigo font-bold">.inline-block-md</code>. Display utitlity classes are created for each breakpoint listed below, but can be customised in <strong>_variables_timber.scss</strong>.</p>
        <ul class="list-none">
          <li><strong>lg</strong>: 1200px,</li>
          <li><strong>md</strong>: 992px,</li>
          <li><strong>sm</strong>: 768px</li>
        </ul>
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="block inline-block-lg hidden-md flex-sm p-20 m-10 bg-grey-darker color-white center"> 1. div.block.inline-block-lg.hidden-md.flex-sm.inline-flex-xs </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="block inline-block-lg hidden-md flex-sm p-20 m-10 bg-grey-darker color-white center">
	1. div.block-xl.inline-block-lg.hidden-md.flex-sm.inline-flex-xs
</div>
--></code></pre>
      </div>
      <!-- code -->
    </div>
    <!-- Content Inner End -->
		<!-- {{ sidebar }} -->
  </div>
</div>
