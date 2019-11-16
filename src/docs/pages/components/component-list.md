---
title: Component - List
menu_label: List Group
layout: documentation
category: ["Components"]
markup_language: html
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <!-- Content Inner -->
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Component: List</h1>
      <p>Lists come with a few modifier classes that turn them into list groups.</p>
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
              <th class="color-indigo">.list-group</th>
              <td> Sets table padding to small. </td>
            </tr>
            <tr>
              <th class="color-indigo">.list-group-item</th>
              <td> Sets table padding to medium. </td>
            </tr>
            <tr>
              <th class="color-indigo">.flush</th>
              <td> Sets table padding to large. </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Classes End -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Basic</h3>
        <p>Add the class <code class="color-indigo font-bold">.list-group</code> to any unordered list and <code class="color-indigo font-bold">.list-group-item</code> to the its' list items to create a list group. Use Timber's padding utility classes for padding.</p>
        <div class="row">
          <div class="col w-6/12 w-lg-full">
            <ul class="list-group rounded mb-0">
              <li class="list-group-item py-10 px-20">List Item</li>
              <li class="list-group-item py-10 px-20">List Item</li>
              <li class="list-group-item py-10 px-20">List Item</li>
              <li class="list-group-item py-10 px-20">List Item</li>
            </ul>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<ul class="list-group rounded mb-0">
	<li class="list-group-item py-10 px-20">List Item</li>
	<li class="list-group-item py-10 px-20">List Item</li>
	<li class="list-group-item py-10 px-20">List Item</li>
	<li class="list-group-item py-10 px-20">List Item</li>
</ul>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Navigation</h3>
        <p>Add Timber's button component (<code class="color-indigo font-bold">a</code> or <code class="color-indigo font-bold">button</code>) to any list group to create actionable list groups with :hover, :focus, disabled and active states.</p>
        <div class="row">
          <div class="col w-6/12 w-lg-full">
            <ul class="list-group rounded mb-0">
              <li><a class="list-group-item button size-md active" href="#">Active Item</a></li>
              <li><a class="list-group-item button size-md" href="#">Regular Item</a></li>
              <li><a class="list-group-item button size-md" href="#">Regular Item</a></li>
              <li><a class="list-group-item button size-md" href="#">Regular Item</a></li>
            </ul>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<ul class="list-group rounded mb-0">
	<li><a class="list-group-item button size-md active" href="#">Active Item</a></li>
	<li><a class="list-group-item button size-md" href="#">Regular Item</a></li>
	<li><a class="list-group-item button size-md" href="#">Regular Item</a></li>
	<li><a class="list-group-item button size-md" href="#">Regular Item</a></li>
</ul>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Flush</h3>
        <p>Add the class <code class="color-indigo font-bold">.flush</code> to remove some left/right borders and rounded corners to render list group items edge-to-edge in a parent container.</p>
        <div class="row">
          <div class="col w-6/12 w-lg-full">
            <ul class="list-group flush rounded mb-0">
              <li><a class="list-group-item button size-md active" href="#">Active Item</a></li>
              <li><a class="list-group-item button size-md" href="#">Regular Item</a></li>
              <li><a class="list-group-item button size-md" href="#">Regular Item</a></li>
              <li><a class="list-group-item button size-md" href="#">Regular Item</a></li>
            </ul>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<ul class="list-group flush rounded mb-0">
	<li><a class="list-group-item button size-md active" href="#">Active Item</a></li>
	<li><a class="list-group-item button size-md" href="#">Regular Item</a></li>
	<li><a class="list-group-item button size-md" href="#">Regular Item</a></li>
	<li><a class="list-group-item button size-md" href="#">Regular Item</a></li>
</ul>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Disabled</h3>
        <p>Add the class <code class="color-indigo font-bold">.disabled</code> to any list time or button to make it disabled.</p>
        <div class="row">
          <div class="col w-6/12 w-lg-full">
            <ul class="list-group rounded mb-0">
              <li><a class="list-group-item button size-md active" href="#">Active Item</a></li>
              <li><a class="list-group-item button size-md disabled" href="#">Disabled Item</a></li>
              <li><a class="list-group-item button size-md" href="#">Regular Item</a></li>
              <li><a class="list-group-item button size-md" href="#">Disabled Item</a></li>
            </ul>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<ul class="list-group rounded mb-0">
	<li><a class="list-group-item button size-md active" href="#">Active Item</a></li>
	<li><a class="list-group-item button size-md disabled" href="#">Disabled Item</a></li>
	<li><a class="list-group-item button size-md" href="#">Regular Item</a></li>
	<li><a class="list-group-item button size-md" href="#">Disabled Item</a></li>
</ul>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Customized With Utitlity Classes</h3>
        <p>Create custom looking list groups using Timber's utitlity classes.</p>
        <div class="row">
          <div class="col w-6/12 w-lg-full">
            <ul class="list-group rounded">
              <li><a class="list-group-item button size-md bg-grey-ultralight bg-hover-grey-light color-grey-dark color-hover-white active bg-active-grey-darkest color-active-white" href="#"><span class="icon-material">dashboard</span> Active Item</a></li>
              <li><a class="list-group-item button size-md bg-grey-ultralight bg-hover-grey-light color-grey-dark color-hover-white bg-active-teal color-active-white" href="#"><span class="icon-material">person</span> Just An Item</a></li>
              <li><a class="list-group-item button size-md bg-grey-ultralight bg-hover-grey-light color-grey-dark color-hover-white bg-active-blue color-active-white" href="#"><span class="icon-material">settings</span> Just An Item</a></li>
              <li><a class="list-group-item button size-md bg-grey-lightest bg-hover-grey-light color-grey-dark color-hover-white border-4 border-t border-grey-lighter disabled" href="#"><span class="icon-material">exit_to_app</span> Disabled</a></li>
            </ul>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<ul class="list-group rounded">
	<li><a class="list-group-item button size-md bg-grey-ultralight bg-hover-grey-light color-grey-dark color-hover-white active bg-active-grey-darkest color-active-white" href="#"><span class="icon-material">dashboard</span> Active Item</a></li>
	<li><a class="list-group-item button size-md bg-grey-ultralight bg-hover-grey-light color-grey-dark color-hover-white bg-active-teal color-active-white" href="#"><span class="icon-material">person</span> Just An Item</a></li>
	<li><a class="list-group-item button size-md bg-grey-ultralight bg-hover-grey-light color-grey-dark color-hover-white bg-active-blue color-active-white" href="#"><span class="icon-material">settings</span> Just An Item</a></li>
	<li><a class="list-group-item button size-md bg-grey-lightest bg-hover-grey-light color-grey-dark color-hover-white border-4 border-t border-grey-lighter disabled" href="#"><span class="icon-material">exit_to_app</span> Disabled</a></li>
</ul>
--></code></pre>
      </div>
      <!-- code -->
    </div>
    <!-- Content Inner End -->
  </div>
</div>
