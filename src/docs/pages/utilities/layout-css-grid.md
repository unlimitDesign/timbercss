---
title: Layout - CSS Grid
menu_label: CSS Grid
layout: documentation
category: ["Utilities","Layout"]
markup_language: html
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <!-- Content Inner -->
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Utility: CSS Grid</h1>
      <p>Controls the appearance of a CSS grid.</p>
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
              <th class="color-indigo">.grid-cols-x</th>
              <td> grid-template-columns: repeat(x, 1fr); </td>
            </tr>
            <tr>
              <th class="color-indigo">.grid-gutter-x</th>
              <td> grid-gap: x; </td>
            </tr>
            <tr>
              <th class="color-indigo">.span-cols-x</th>
              <td> grid-column-end: span x; </td>
            </tr>
            <tr>
              <th class="color-indigo">.span-rows-x</th>
              <td> grid-row-end: span x; </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Classes End -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Columns</h3>
        <p>Use the grid column utility classes to set the number of grid columns available, for example: <code class="color-indigo font-bold">.grid-cols-5</code>. Grid column utitlity classes are created with up to 6 columns by default, but the number of columns can be customised directly in <strong>_variables_timber.scss</strong>.</p>
        <div class="p-30 rounded border-1 border-grey-lightest">
          <div class="grid grid-cols-5 grid-md-cols-2 grid-sm-cols-1">
            <div class="grid-item bg-grey-ultralight"></div>
            <div class="grid-item bg-grey-lightest"></div>
            <div class="grid-item bg-grey-ultralight"></div>
            <div class="grid-item bg-grey-lightest"></div>
            <div class="grid-item bg-grey-ultralight"></div>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="grid grid-cols-5 grid-md-cols-2 grid-sm-cols-1">
	<div class="grid-item bg-grey-ultralight"></div>
	<div class="grid-item bg-grey-lightest"></div>
	<div class="grid-item bg-grey-ultralight"></div>
	<div class="grid-item bg-grey-lightest"></div>
	<div class="grid-item bg-grey-ultralight"></div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Gutters</h3>
        <p>Use the grid gutter utility classes to set the gutter of the grid, for example: <code class="color-indigo font-bold">.grid-gutter-3</code>. Grid gutter utitlity classes are created for <code class="color-indigo font-bold">0, 3, 15, 30px</code> by default, but gutter amount and number of gutter variations can be customised directly in <strong>_variables_timber.scss</strong>.</p>
        <div class="p-30 rounded border-1 border-grey-lightest">
          <div class="grid grid-cols-5 grid-md-cols-2 grid-sm-cols-1 grid-gutter-3">
            <div class="grid-item bg-grey-ultralight"></div>
            <div class="grid-item bg-grey-lightest"></div>
            <div class="grid-item bg-grey-ultralight"></div>
            <div class="grid-item bg-grey-lightest"></div>
            <div class="grid-item bg-grey-ultralight"></div>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="grid grid-cols-5 grid-md-cols-2 grid-sm-cols-1 grid-gutter-3">
	<div class="grid-item bg-grey-ultralight"></div>
	<div class="grid-item bg-grey-lightest"></div>
	<div class="grid-item bg-grey-ultralight"></div>
	<div class="grid-item bg-grey-lightest"></div>
	<div class="grid-item bg-grey-ultralight"></div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Span Columns</h3>
        <p>Use the grid span column utility classes to force a grid item to span more than one column, for example: <code class="color-indigo font-bold">.span-cols-2</code>. Grid span column utitlity classes are created with up to 3 columns by default, but the number of columns can be customised directly in <strong>_variables_timber.scss</strong>.</p>
        <div class="p-30 rounded border-1 border-grey-lightest">
          <div class="grid grid-cols-5 grid-md-cols-2 grid-sm-cols-1">
            <div class="grid-item bg-grey-darker color-white span-cols-2 flex items-center"><span class="mx-auto">.grid-item.span-cols-2</span></div>
            <div class="grid-item bg-grey-lightest"></div>
            <div class="grid-item bg-grey-ultralight"></div>
            <div class="grid-item bg-grey-lightest"></div>
            <div class="grid-item bg-grey-ultralight"></div>
            <div class="grid-item bg-grey-darkest color-white span-cols-3 span-md-cols-2 flex items-center"><span class="mx-auto">.grid-item.span-cols-3.span-md-cols-2</span></div>
            <div class="grid-item bg-grey-ultralight"></div>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="grid grid-cols-5 grid-md-cols-2 grid-sm-cols-1">
	<div class="grid-item bg-green color-white span-cols-2 flex items-center"><span class="mx-auto">.grid-item.span-cols-2</span></div>
	<div class="grid-item bg-grey-lightest"></div>
	<div class="grid-item bg-grey-ultralight"></div>
	<div class="grid-item bg-grey-lightest"></div>
	<div class="grid-item bg-grey-ultralight"></div>
	<div class="grid-item bg-green color-white span-cols-3 span-md-cols-2 flex items-center"><span class="mx-auto">.grid-item.span-cols-3.span-md-cols-2</span></div>
	<div class="grid-item bg-grey-ultralight"></div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Span Rows</h3>
        <p>Use the grid span row utility classes to force a grid item to span more than one row, for example: <code class="color-indigo font-bold">.span-row-2</code>. Grid span row utitlity classes are created with up to 2 rows by default, but the number of rows can be customised directly in <strong>_variables_timber.scss</strong>.</p>
        <div class="p-30 rounded border-1 border-grey-lightest">
          <div class="grid grid-cols-3 grid-md-cols-2">
            <div class="grid-item bg-grey-darker color-white span-rows-2 flex items-center"><span class="mx-auto">.grid-item.span-rows-2</span></div>
            <div class="grid-item bg-grey-lightest"></div>
            <div class="grid-item bg-grey-ultralight"></div>
            <div class="grid-item bg-grey-lightest"></div>
            <div class="grid-item bg-grey-ultralight"></div>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="grid grid-cols-3 grid-md-cols-2">
	<div class="grid-item bg-green color-white span-rows-2 flex items-center"><span class="mx-auto">.grid-item.span-rows-2</span></div>
	<div class="grid-item bg-grey-lightest"></div>
	<div class="grid-item bg-grey-ultralight"></div>
	<div class="grid-item bg-grey-lightest"></div>
	<div class="grid-item bg-grey-ultralight"></div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Responsive</h3>
        <p>Use the grid column responsive utility classes for specific breakpoints by adding the breakpoint name to the class: <code class="color-indigo font-bold">.grid-md-cols-2</code>. Grid column utitlity classes are created for the breakpoints listed below, but can be customised directly in <strong>_variables_timber.scss</strong> to include all breakpoints.</p>
        <ul class="list-none">
          <li><strong>lg</strong>: 1200px,</li>
          <li><strong>md</strong>: 992px,</li>
          <li><strong>sm</strong>: 768px </li>
        </ul>
        <div class="p-30 rounded border-1 border-grey-lightest">
          <div class="grid grid-cols-6 grid-lg-cols-5 grid-md-cols-4 grid-sm-cols-3">
            <div class="grid-item bg-grey-ultralight"></div>
            <div class="grid-item bg-grey-lightest"></div>
            <div class="grid-item bg-grey-ultralight"></div>
            <div class="grid-item bg-grey-lightest"></div>
            <div class="grid-item bg-grey-ultralight"></div>
            <div class="grid-item bg-grey-lightest"></div>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="grid grid-cols-6 grid-lg-cols-5 grid-md-cols-4 grid-sm-cols-3">
	<div class="grid-item bg-grey-ultralight"></div>
	<div class="grid-item bg-grey-lightest"></div>
	<div class="grid-item bg-grey-ultralight"></div>
	<div class="grid-item bg-grey-lightest"></div>
	<div class="grid-item bg-grey-ultralight"></div>
	<div class="grid-item bg-grey-lightest"></div>
</div>
--></code></pre>
      </div>
      <!-- code -->
    </div>
    <!-- Content Inner End -->
  </div>
</div>
