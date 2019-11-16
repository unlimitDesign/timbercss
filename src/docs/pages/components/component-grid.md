---
title: Component - Grid
menu_label: Grid
layout: documentation
category: ["Components"]
markup_language: html
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <!-- Content Inner -->
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Component: Grid</h1>
      <p>Timber comes with a 12 column grid built using flexbox. The number of columns and column widths can be modified directly in <strong>_variables_timber.scss</strong>.</p>
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
              <th class="border-none">
                <h5 class="pt-20 mb-0 font-sans">Column Widths</h5>
              </th>
            </tr>
            <tr>
              <th class="color-indigo">.w-1/12</th>
              <td> width: 8.333333%; </td>
            </tr>
            <tr>
              <th class="color-indigo">.w-2/12</th>
              <td> width: 16.666667%; </td>
            </tr>
            <tr>
              <th class="color-indigo">.w-3/12</th>
              <td> width: 25%; </td>
            </tr>
            <tr>
              <th class="color-indigo">.w-4/12</th>
              <td> width: 33.333333%; </td>
            </tr>
            <tr>
              <th class="color-indigo">.w-5/12</th>
              <td> width: 41.666667%; </td>
            </tr>
            <tr>
              <th class="color-indigo">.w-6/12</th>
              <td> width: 50%; </td>
            </tr>
            <tr>
              <th class="color-indigo">.w-7/12</th>
              <td> width: 58.333333%; </td>
            </tr>
            <tr>
              <th class="color-indigo">.w-8/12</th>
              <td> width: 66.666667%, </td>
            </tr>
            <tr>
              <th class="color-indigo">.w-9/12</th>
              <td> width: 75%; </td>
            </tr>
            <tr>
              <th class="color-indigo">.w-10/12</th>
              <td> width: 83.333333%; </td>
            </tr>
            <tr>
              <th class="color-indigo">.w-11/12</th>
              <td> width: 91.666667%; </td>
            </tr>
            <tr>
              <th class="color-indigo">.w-full</th>
              <td> width: 100%; </td>
            </tr>
            <tr>
              <th class="border-none">
                <h5 class="pt-20 mb-0 font-sans">Column Offsets</h5>
              </th>
            </tr>
            <tr>
              <th class="color-indigo">.offset-1</th>
              <td> width: 8.333333%; </td>
            </tr>
            <tr>
              <th class="color-indigo">.offset-2</th>
              <td> width: 16.666667%; </td>
            </tr>
            <tr>
              <th class="color-indigo">.offset-3</th>
              <td> width: 25%; </td>
            </tr>
            <tr>
              <th class="color-indigo">.offset-4</th>
              <td> width: 33.333333%; </td>
            </tr>
            <tr>
              <th class="color-indigo">.offset-5</th>
              <td> width: 41.666667%; </td>
            </tr>
            <tr>
              <th class="color-indigo">.offset-6</th>
              <td> width: 50%; </td>
            </tr>
            <tr>
              <th class="color-indigo">.offset-7</th>
              <td> width: 58.333333%; </td>
            </tr>
            <tr>
              <th class="color-indigo">.offset-8</th>
              <td> width: 66.666667%, </td>
            </tr>
            <tr>
              <th class="color-indigo">.offset-9</th>
              <td> width: 75%; </td>
            </tr>
            <tr>
              <th class="color-indigo">.offset-10</th>
              <td> width: 83.333333%; </td>
            </tr>
            <tr>
              <th class="color-indigo">.offset-11</th>
              <td> width: 91.666667%; </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Classes End -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Grid</h3>
        <div class="p-30 rounded border-1 border-grey-lightest">
          <div class="row mb-30">
            <div class="col w-full">
              <div class="bg-grey-ultralight p-10 center">.w-full</div>
            </div>
          </div>
          <div class="row mb-30">
            <div class="col w-6/12">
              <div class="bg-grey-ultralight p-10 center">.w-6/12</div>
            </div>
            <div class="col w-6/12">
              <div class="bg-grey-lightest p-10 center">.w-6/12</div>
            </div>
          </div>
          <div class="row mb-30">
            <div class="col w-4/12">
              <div class="bg-grey-ultralight p-10 center">.w-4/12</div>
            </div>
            <div class="col w-4/12">
              <div class="bg-grey-lightest p-10 center">.w-4/12</div>
            </div>
            <div class="col w-4/12">
              <div class="bg-grey-ultralight p-10 center">.w-4/12</div>
            </div>
          </div>
          <div class="row mb-30">
            <div class="col w-3/12">
              <div class="bg-grey-ultralight p-10 center">.w-3/12</div>
            </div>
            <div class="col w-3/12">
              <div class="bg-grey-lightest p-10 center">.w-3/12</div>
            </div>
            <div class="col w-3/12">
              <div class="bg-grey-ultralight p-10 center">.w-3/12</div>
            </div>
            <div class="col w-3/12">
              <div class="bg-grey-lightest p-10 center">.w-3/12</div>
            </div>
          </div>
          <div class="row">
            <div class="col w-2/12">
              <div class="bg-grey-ultralight p-10 center">.w-2/12</div>
            </div>
            <div class="col w-2/12">
              <div class="bg-grey-lightest p-10 center">.w-2/12</div>
            </div>
            <div class="col w-2/12">
              <div class="bg-grey-ultralight p-10 center">.w-2/12</div>
            </div>
            <div class="col w-2/12">
              <div class="bg-grey-lightest p-10 center">.w-2/12</div>
            </div>
            <div class="col w-2/12">
              <div class="bg-grey-ultralight p-10 center">.w-2/12</div>
            </div>
            <div class="col w-2/12">
              <div class="bg-grey-ultralight p-10 center">.w-2/12</div>
            </div>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="row mb-30">
	<div class="col w-6/12"><div class="bg-grey-ultralight p-10 center">.w-6/12</div></div>
	<div class="col w-6/12"><div class="bg-grey-lightest p-10 center">.w-6/12</div></div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Responsive Columns</h3>
        <p>Use the column width responsive utility classes for specific breakpoints by adding the breakpoint name to the class, for example: <code class="color-indigo font-bold">.w-md-6/12</code>. Column width utitlity classes are created for the breakpoints listed below, but can be customised in <strong>_variables_timber.scss</strong> to include all breakpoints.</p>
        <ul class="list-none">
          <li><strong>lg</strong>: 1200px,</li>
          <li><strong>md</strong>: 992px,</li>
          <li><strong>sm</strong>: 768px</li>
        </ul>
        <div class="pt-30 px-30 rounded border-1 border-grey-lightest">
          <div class="row">
            <div class="col mb-30 w-2/12 w-lg-3/12 w-md-4/12 w-sm-full">
              <div class="bg-grey-ultralight p-10 center">.w-2/12</div>
            </div>
            <div class="col mb-30 w-2/12 w-lg-3/12 w-md-4/12 w-sm-full">
              <div class="bg-grey-lightest p-10 center">.w-2/12</div>
            </div>
            <div class="col mb-30 w-2/12 w-lg-3/12 w-md-4/12 w-sm-full">
              <div class="bg-grey-ultralight p-10 center">.w-2/12</div>
            </div>
            <div class="col mb-30 w-2/12 w-lg-3/12 w-md-4/12 w-sm-full">
              <div class="bg-grey-lightest p-10 center">.w-2/12</div>
            </div>
            <div class="col mb-30 w-2/12 w-lg-3/12 w-md-4/12 w-sm-full">
              <div class="bg-grey-ultralight p-10 center">.w-2/12</div>
            </div>
            <div class="col mb-30 w-2/12 w-lg-3/12 w-md-4/12 w-sm-full">
              <div class="bg-grey-lightest p-10 center">.w-2/12</div>
            </div>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="row">
	<div class="col mb-30 w-2/12 w-lg-3/12 w-md-4/12 w-sm-full"><div class="bg-grey-ultralight p-10 center">.w-2/12</div></div>
	<div class="col mb-30 w-2/12 w-lg-3/12 w-md-4/12 w-sm-full"><div class="bg-grey-lightest p-10 center">.w-2/12</div></div>
	<div class="col mb-30 w-2/12 w-lg-3/12 w-md-4/12 w-sm-full"><div class="bg-grey-ultralight p-10 center">.w-2/12</div></div>
	<div class="col mb-30 w-2/12 w-lg-3/12 w-md-4/12 w-sm-full"><div class="bg-grey-lightest p-10 center">.w-2/12</div></div>
	<div class="col mb-30 w-2/12 w-lg-3/12 w-md-4/12 w-sm-full"><div class="bg-grey-ultralight p-10 center">.w-2/12</div></div>
	<div class="col mb-30 w-2/12 w-lg-3/12 w-md-4/12 w-sm-full"><div class="bg-grey-lightest p-10 center">.w-2/12</div></div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Mixed Columns</h3>
        <p>Use different column width to build complex layouts.</p>
        <div class="pt-30 px-30 rounded border-1 border-grey-lightest">
          <div class="row">
            <div class="col mb-30 w-3/12">
              <div class="bg-grey-ultralight p-10 center">.w-3/12</div>
            </div>
            <div class="col mb-30 w-5/12">
              <div class="bg-grey-lightest p-10 center">.w-5/12</div>
            </div>
            <div class="col mb-30 w-4/12">
              <div class="bg-grey-ultralight p-10 center">.w-4/12</div>
            </div>
          </div>
          <div class="row">
            <div class="col mb-30 w-4/12">
              <div class="bg-grey-lightest p-10 center">.w-4/12</div>
            </div>
            <div class="col mb-30 w-8/12">
              <div class="bg-grey-ultralight p-10 center">.w-8/12</div>
            </div>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="row">
	<div class="col mb-30 w-3/12"><div class="bg-grey-ultralight p-10 center">.w-3/12</div></div>
	<div class="col mb-30 w-5/12"><div class="bg-grey-lightest p-10 center">.w-5/12</div></div>
	<div class="col mb-30 w-4/12"><div class="bg-grey-ultralight p-10 center">.w-4/12</div></div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Offset</h3>
        <p>Nudge columns using offset classes. Use the offset responsive utility classes for specific breakpoints by adding the breakpoint name to the class, for example: <code class="color-indigo font-bold">.offset-md-2</code>. Offset utitlity classes are created for the breakpoints listed below, but can be customised in <strong>_variables_timber.scss</strong> to include all breakpoints.</p>
        <ul class="list-none">
          <li><strong>lg</strong>: 1200px,</li>
          <li><strong>md</strong>: 992px,</li>
          <li><strong>sm</strong>: 768px</li>
        </ul>
        <div class="pt-30 px-30 rounded border-1 border-grey-lightest">
          <div class="row">
            <div class="col mb-30 w-4/12 offset-2">
              <div class="bg-grey-ultralight p-10 center">.w-4/12.offset-2</div>
            </div>
            <div class="col mb-30 w-4/12">
              <div class="bg-grey-lightest p-10 center">.w-4/12</div>
            </div>
          </div>
          <div class="row">
            <div class="col mb-30 w-5/12 offset-1">
              <div class="bg-grey-ultralight p-10 center">.w-5/12.offset-1</div>
            </div>
            <div class="col mb-30 w-5/12">
              <div class="bg-grey-lightest p-10 center">.w-5/12</div>
            </div>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="row">
	<div class="col mb-30 w-4/12 offset-2"><div class="bg-grey-ultralight p-10 center">.w-4/12.offset-2</div></div>
	<div class="col mb-30 w-4/12"><div class="bg-grey-lightest p-10 center">.w-4/12</div></div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Order</h3>
        <p>Move columns around using flexbox order classes. Use the order responsive utility classes for specific breakpoints by adding the breakpoint name to the class, for example: <code class="color-indigo font-bold">.order-md-2</code>. Order utitlity classes are created for the breakpoints listed below, but can be customised in <strong>_variables_timber.scss</strong> to include all breakpoints.</p>
        <ul class="list-none">
          <li><strong>lg</strong>: 1200px,</li>
          <li><strong>md</strong>: 992px,</li>
          <li><strong>sm</strong>: 768px</li>
        </ul>
        <div class="pt-30 px-30 rounded border-1 border-grey-lightest">
          <div class="row">
            <div class="col mb-30 w-4/12 order-2">
              <div class="bg-grey-ultralight p-10 center">1</div>
            </div>
            <div class="col mb-30 w-8/12">
              <div class="bg-grey-lightest p-10 center">2</div>
            </div>
          </div>
          <div class="row">
            <div class="col mb-30 w-8/12 order-2">
              <div class="bg-grey-lightest p-10 center">1</div>
            </div>
            <div class="col mb-30 w-4/12 order-1">
              <div class="bg-grey-ultralight p-10 center">2</div>
            </div>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="row">
	<div class="col mb-30 w-4/12 order-2"><div class="bg-grey-ultralight p-10 center">1</div></div>
	<div class="col mb-30 w-8/12"><div class="bg-grey-lightest p-10 center">2</div></div>
</div>
--></code></pre>
      </div>
      <!-- code -->
    </div>
    <!-- Content Inner End -->
  </div>
</div>
