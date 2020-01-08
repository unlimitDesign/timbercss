---
title: Border - Border Radius Utility
menu_label: Border Radius
layout: documentation
category: ["Utilities", "Border"]
markup_language: html
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Utility: Border Radius</h1>
      <p>Controls the border radius of an element.</p>
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
              <th class="color-indigo">.rounded</th>
              <td> border-radius: 0.4rem; </td>
            </tr>
            <tr>
              <th class="color-indigo">.rounded-t</th>
              <td> border-radius: 0.4rem 0.4rem 0 0; </td>
            </tr>
            <tr>
              <th class="color-indigo">.rounded-tl</th>
              <td> border-top-left-radius: 0.4rem; </td>
            </tr>
            <tr>
              <th class="color-indigo">.rounded-r</th>
              <td> border-radius: 0 0.4rem 0.4rem 0; </td>
            </tr>
            <tr>
              <th class="color-indigo">.rounded-tr</th>
              <td> border-top-right-radius: 0.4rem; </td>
            </tr>
            <tr>
              <th class="color-indigo">.rounded-b</th>
              <td> border-radius: 0 0 0.4rem 0.4rem; </td>
            </tr>
            <tr>
              <th class="color-indigo">.rounded-br</th>
              <td> border-bottom-right-radius: 0.4rem; </td>
            </tr>
            <tr>
              <th class="color-indigo">.rounded-l</th>
              <td> border-radius: 0.4rem 0 0 0.4rem; </td>
            </tr>
            <tr>
              <th class="color-indigo">.rounded-bl</th>
              <td> border-bottom-left-radius: 0.4rem; </td>
            </tr>
            <tr>
              <th class="color-indigo">.rounded-full</th>
              <td> border-radius: 999rem; </td>
            </tr>
            <tr>
              <th class="color-indigo">.rounded-none</th>
              <td> border-radius: 0; </td>
            </tr>
            <tr>
              <th class="color-indigo">.rounded-inherit</th>
              <td> border-radius: inherit; </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Classes End -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Rounded</h3>
        <p>Adding <code class="color-indigo font-bold">.rounded</code>, <code class="color-indigo font-bold">.rounded-full</code>, or <code class="color-indigo font-bold">.rounded-none</code> sets the border radius of all sides of an element.</p>
        <div class="p-30 flex justify-around rounded bg-grey-ultralight">
          <div class="w-150 h-150 inline-flex items-center rounded bg-grey-darkest color-white"><span class="mx-auto">.rounded</span></div>
          <div class="w-150 h-150 inline-flex items-center rounded-full bg-grey-darkest color-white"><span class="mx-auto">.rounded-full</span></div>
          <div class="w-150 h-150 inline-flex items-center rounded-none bg-grey-darkest color-white"><span class="mx-auto">.rounded-none</span></div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="flex justify-around">
	<div class="w-150 h-150 inline-flex items-center rounded bg-grey-darkest color-white"><span class="mx-auto">.rounded</span></div>
	<div class="w-150 h-150 inline-flex items-center rounded-full bg-grey-darkest color-white"><span class="mx-auto">.rounded-full</span></div>
	<div class="w-150 h-150 inline-flex items-center rounded-none bg-grey-darkest color-white"><span class="mx-auto">.rounded-none</span></div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Invidual Sides</h3>
        <p>Adding <code class="color-indigo font-bold">.rounded-{side}</code> sets the border radius of a specified side of an element.</p>
        <div class="p-30 flex flex-wrap justify-around rounded bg-grey-ultralight">
          <div class="w-80 h-80 m-5 inline-flex items-center rounded-tl bg-grey-darkest color-white relative relative"><span class="w-25 h-25 rounded-inherit block absolute bg-green pst-0 psl-0"></span></div>
          <div class="w-80 h-80 m-5 inline-flex items-center rounded-t bg-grey-darkest color-white relative"><span class="w-full h-25 rounded-inherit block absolute bg-green pst-0 psl-0"></span></div>
          <div class="w-80 h-80 m-5 inline-flex items-center rounded-tr bg-grey-darkest color-white relative"><span class="w-25 h-25 rounded-inherit block absolute bg-green pst-0 psr-0"></span></div>
          <div class="w-80 h-80 m-5 inline-flex items-center rounded-r bg-grey-darkest color-white relative"><span class="w-25 h-full rounded-inherit block absolute bg-green pst-0 psr-0"></span></div>
          <div class="w-80 h-80 m-5 inline-flex items-center rounded-br bg-grey-darkest color-white relative"><span class="w-25 h-25 rounded-inherit block absolute bg-green psb-0 psr-0"></span></div>
          <div class="w-80 h-80 m-5 inline-flex items-center rounded-b bg-grey-darkest color-white relative"><span class="w-full h-25 rounded-inherit block absolute bg-green psb-0 psl-0"></span></div>
          <div class="w-80 h-80 m-5 inline-flex items-center rounded-bl bg-grey-darkest color-white relative"><span class="w-25 h-25 rounded-inherit block absolute bg-green psb-0 psl-0"></span></div>
          <div class="w-80 h-80 m-5 inline-flex items-center rounded-l bg-grey-darkest color-white relative"><span class="w-25 h-full rounded-inherit block absolute bg-green pst-0 psl-0"></span></div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="flex flex-wrap justify-around">
		<div class="w-80 h-80 m-5 inline-flex items-center rounded-tl bg-grey-darkest color-white relative relative"><span class="w-25 h-25 rounded-inherit block absolute bg-green pst-0 psl-0"></span></div>
		<div class="w-80 h-80 m-5 inline-flex items-center rounded-t bg-grey-darkest color-white relative"><span class="w-full h-25 rounded-inherit block absolute bg-green pst-0 psl-0"></span></div>
		<div class="w-80 h-80 m-5 inline-flex items-center rounded-tr bg-grey-darkest color-white relative"><span class="w-25 h-25 rounded-inherit block absolute bg-green pst-0 psr-0"></span></div>
		<div class="w-80 h-80 m-5 inline-flex items-center rounded-r bg-grey-darkest color-white relative"><span class="w-25 h-full rounded-inherit block absolute bg-green pst-0 psr-0"></span></div>
		<div class="w-80 h-80 m-5 inline-flex items-center rounded-br bg-grey-darkest color-white relative"><span class="w-25 h-25 rounded-inherit block absolute bg-green psb-0 psr-0"></span></div>
		<div class="w-80 h-80 m-5 inline-flex items-center rounded-b bg-grey-darkest color-white relative"><span class="w-full h-25 rounded-inherit block absolute bg-green psb-0 psl-0"></span></div>
		<div class="w-80 h-80 m-5 inline-flex items-center rounded-bl bg-grey-darkest color-white relative"><span class="w-25 h-25 rounded-inherit block absolute bg-green psb-0 psl-0"></span></div>
		<div class="w-80 h-80 m-5 inline-flex items-center rounded-l bg-grey-darkest color-white relative"><span class="w-25 h-full rounded-inherit block absolute bg-green pst-0 psl-0"></span></div>
	</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Responsive</h3>
        <p>Use the border radius responsive utility classes for specific breakpoints by adding the breakpoint name to the class, for example: <code class="color-indigo font-bold">.rounded-md-full</code>. Border radius utitlity classes are created for the breakpoints listed below, but can be customised in <strong>_variables_timber.scss</strong> to include all breakpoints.</p>
        <ul class="list-none">
          <li><strong>lg</strong>: 1200px,</li>
          <li><strong>md</strong>: 992px,</li>
          <li><strong>sm</strong>: 768px</li>
        </ul>
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="relative rounded-lg-tl rounded-md-none rounded-md-tr rounded-sm-none rounded-sm-br rounded-xs-none rounded-xs-bl flex-sm inline-flex-xs p-20 m-10 bg-grey-darkest color-white center">
            <span class="w-25 h-25 rounded-inherit absolute bg-green pst-0 psl-0 hidden block-lg hidden-md"></span>
            <span class="w-25 h-25 rounded-inherit absolute bg-green pst-0 psr-0 hidden block-md hidden-sm"></span>
            <span class="w-25 h-25 rounded-inherit absolute bg-green psb-0 psr-0 hidden block-sm hidden-xs"></span>
            <span class="w-25 h-25 rounded-inherit absolute bg-green psb-0 psl-0 hidden block-xs"></span> .rounded-xl-tl.rounded-lg-tr.rounded-md-br.rounded-sm-bl.rounded-xs </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="relative rounded-lg-tl rounded-md-none rounded-md-tr rounded-sm-none rounded-sm-br rounded-xs-none rounded-xs-bl flex-sm inline-flex-xs">
	<span class="w-25 h-25 rounded-inherit absolute bg-green pst-0 psl-0 hidden block-lg hidden-md"></span>
	<span class="w-25 h-25 rounded-inherit absolute bg-green pst-0 psr-0 hidden block-md hidden-sm"></span>
	<span class="w-25 h-25 rounded-inherit absolute bg-green psb-0 psr-0 hidden block-sm hidden-xs"></span>
	<span class="w-25 h-25 rounded-inherit absolute bg-green psb-0 psl-0 hidden block-xs"></span>
	.rounded-xl-tl.rounded-lg-tr.rounded-md-br.rounded-sm-bl.rounded-xs
</div>
--></code></pre>
      </div>
      <!-- code -->
    </div>
    <!-- Content Inner End -->
		<!-- {{ sidebar }} -->
  </div>
</div>
