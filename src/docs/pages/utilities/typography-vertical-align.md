---
title: Typography - Vertical Align
menu_label: Vertical Align
layout: documentation
category: ["Utilities","Typography"]
markup_language: html
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Utility: Vertical Align</h1>
      <p class="mb-10">Controls the vertical alignment of an element.</p>
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
              <th class="color-indigo">.alignt-baseline</th>
              <td> vertical-align: baseline; </td>
            </tr>
            <tr>
              <th class="color-indigo">.alignt-top</th>
              <td> vertical-align: top; </td>
            </tr>
            <tr>
              <th class="color-indigo">.alignt-middle</th>
              <td> vertical-align: middle; </td>
            </tr>
            <tr>
              <th class="color-indigo">.alignt-bottom</th>
              <td> vertical-align: bottom; </td>
            </tr>
            <tr>
              <th class="color-indigo">.alignt-text-top</th>
              <td> vertical-align: text-top; </td>
            </tr>
            <tr>
              <th class="color-indigo">.alignt-text-bottom</th>
              <td> vertical-align: text-bottom; </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Classes End -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Baseline</h3>
        <p>Adding <code class="color-indigo font-bold">.align-baseline</code> to align the baseline of an element with the baseline of its parent.</p>
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="relative">
            <span class="align-baseline w-50 h-50 inline-block mr-20 rounded bg-grey-darker color-white"></span>
            <span class="absolute w-full border-1 border-dashed border-grey-darker opacity-60 psl-0 pst-25"></span>
            <span class="align-baseline">This paragraph is vertically aligned top</span>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="relative">
	<span class="align-baseline w-50 h-50 inline-block mr-20 rounded bg-grey-darker color-white"></span>
	<span class="absolute w-full border-1 border-dashed border-grey-darker opacity-60 psl-0 pst-25"></span>
	<span class="align-baseline">This paragraph is vertically aligned top</span>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Top</h3>
        <p>Add <code class="color-indigo font-bold">.align-top</code> to align the top of the element and its descendants with the top of the entire line</p>
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="relative">
            <span class="align-top w-50 h-50 inline-block mr-20 rounded bg-grey-darker color-white"></span>
            <span class="absolute w-full border-1 border-dashed border-grey-darker opacity-60 psl-0 pst-25"></span>
            <span class="align-top">This paragraph is vertically aligned top</span>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="relative">
	<span class="align-top w-50 h-50 inline-block mr-20 rounded bg-grey-darker color-white"></span>
	<span class="absolute w-full border-1 border-dashed border-grey-darker opacity-60 psl-0 pst-25"></span>
	<span class="align-top">This paragraph is vertically aligned top</span>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Middle</h3>
        <p>Add <code class="color-indigo font-bold">.align-middle</code> to align the middle of the element with the middle of lowercase letters in the parent.</p>
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="relative">
            <span class="align-middle w-50 h-50 inline-block mr-20 rounded bg-grey-darker color-white"></span>
            <span class="absolute w-full border-1 border-dashed border-grey-darker opacity-60 psl-0 pst-25"></span>
            <span class="align-middle">This paragraph is vertically aligned top</span>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="relative">
	<span class="align-middle w-50 h-50 inline-block mr-20 rounded bg-grey-darker color-white"></span>
	<span class="absolute w-full border-1 border-dashed border-grey-darker opacity-60 psl-0 pst-25"></span>
	<span class="align-middle">This paragraph is vertically aligned top</span>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Bottom</h3>
        <p>Adding <code class="color-indigo font-bold">.align-bottom</code> to align the bottom of the element and its descendants with the bottom of the entire line.</p>
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="relative">
            <span class="align-bottom w-50 h-50 inline-block mr-20 rounded bg-grey-darker color-white"></span>
            <span class="absolute w-full border-1 border-dashed border-grey-darker opacity-60 psl-0 pst-25"></span>
            <span class="align-bottom">This paragraph is vertically aligned top</span>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="relative">
	<span class="align-bottom w-50 h-50 inline-block mr-20 rounded bg-grey-darker color-white"></span>
	<span class="absolute w-full border-1 border-dashed border-grey-darker opacity-60 psl-0 pst-25"></span>
	<span class="align-bottom">This paragraph is vertically aligned top</span>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Text Top</h3>
        <p>Adding <code class="color-indigo font-bold">.text-top</code> to align the top of the element with the top of the parent element's font.</p>
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="relative">
            <span class="text-bottom w-50 h-50 inline-block mr-20 rounded bg-grey-darker color-white"></span>
            <span class="absolute w-full border-1 border-dashed border-grey-darker opacity-60 psl-0 pst-25"></span>
            <span class="text-bottom">This paragraph is vertically aligned top</span>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="relative">
	<span class="text-bottom w-50 h-50 inline-block mr-20 rounded bg-grey-darker color-white"></span>
	<span class="absolute w-full border-1 border-dashed border-grey-darker opacity-60 psl-0 pst-25"></span>
	<span class="text-bottom">This paragraph is vertically aligned top</span>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Text Bottom</h3>
        <p>Adding <code class="color-indigo font-bold">.text-bottom</code> to align the bottom of the element with the bottom of the parent element's font.</p>
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="relative">
            <span class="text-bottom w-50 h-50 inline-block mr-20 rounded bg-grey-darker color-white"></span>
            <span class="absolute w-full border-1 border-dashed border-grey-darker opacity-60 psl-0 pst-25"></span>
            <span class="text-bottom">This paragraph is vertically aligned top</span>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="relative">
	<span class="text-bottom w-50 h-50 inline-block mr-20 rounded bg-grey-darker color-white"></span>
	<span class="absolute w-full border-1 border-dashed border-grey-darker opacity-60 psl-0 pst-25"></span>
	<span class="text-bottom">This paragraph is vertically aligned top</span>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Responsive</h3>
        <p>Use the vertical align responsive utility classes for specific breakpoints by adding the breakpoint name to the class, for example: <code class="color-indigo font-bold">.align-middle-md</code>. Vertical align utitlity classes are created for the breakpoints listed below, but can be customised in <strong>_variables_timber.scss</strong> to include all breakpoints.</p>
        <ul class="list-none">
          <li><strong>lg</strong>: 1200px,</li>
          <li><strong>md</strong>: 992px,</li>
          <li><strong>sm</strong>: 768px</li>
        </ul>
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="relative">
            <span class="align-top align-lg-middle align-md-bottom text-sm-top w-50 h-50 inline-block mr-20 rounded bg-grey-darker color-white"></span>
            <span class="absolute w-full border-1 border-dashed border-grey-darker opacity-60 psl-0 pst-25"></span>
            <span class="align-top align-lg-middle align-md-bottom text-sm-top">This paragraph is vertically aligned top</span>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="relative">
	<span class="align-top align-lg-middle align-md-bottom text-sm-top w-50 h-50 inline-block mr-20 rounded bg-grey-darker color-white"></span>
	<span class="absolute w-full border-1 border-dashed border-grey-darker opacity-60 psl-0 pst-25"></span>
	<span class="align-top align-lg-middle align-md-bottom text-sm-top">This paragraph is vertically aligned top</span>
</div>
--></code></pre>
      </div>
      <!-- code -->
    </div>
    <!-- Content Inner End -->
  </div>
</div>
