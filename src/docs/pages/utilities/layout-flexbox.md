---
title: Layout - Flexbox
menu_label: Flexbox
layout: documentation
category: ["Utilities","Layout"]
markup_language: html
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <!-- Content Inner -->
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Utility: Flexbox</h1>
      <p>Controls the appearance of a flexbox.</p>
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
                <h5 class="pt-20 mb-0 font-sans">Flex Direction</h5>
              </th>
            </tr>
            <tr>
              <th class="color-indigo">.flex-row</th>
              <td> flex-direction: row; </td>
            </tr>
            <tr>
              <th class="color-indigo">.flex-row-reverse</th>
              <td> flex-direction: row-reverse; </td>
            </tr>
            <tr>
              <th class="color-indigo">.flex-col</th>
              <td> flex-direction: column; </td>
            </tr>
            <tr>
              <th class="color-indigo">.flex-col-reverse</th>
              <td> flex-direction: column-reverse; </td>
            </tr>
            <tr>
              <th class="border-none">
                <h5 class="pt-20 mb-0 font-sans">Flex Wrap</h5>
              </th>
            </tr>
            <tr>
              <th class="color-indigo">.flex-wrap</th>
              <td> flex-wrap: wrap; </td>
            </tr>
            <tr>
              <th class="color-indigo">.flex-no-wrap</th>
              <td> flex-wrap: nowrap; </td>
            </tr>
            <tr>
              <th class="color-indigo">.flex-wrap-reverse</th>
              <td> flex-wrap: wrap-reverse; </td>
            </tr>
            <tr>
              <th class="border-none">
                <h5 class="pt-20 mb-0 font-sans">Align Items</h5>
              </th>
            </tr>
            <tr>
              <th class="color-indigo">.items-stretch</th>
              <td> align-items: stretch; </td>
            </tr>
            <tr>
              <th class="color-indigo">.items-start</th>
              <td> align-items: flex-start; </td>
            </tr>
            <tr>
              <th class="color-indigo">.items-center</th>
              <td> align-items: center; </td>
            </tr>
            <tr>
              <th class="color-indigo">.items-end</th>
              <td> align-items: flex-end; </td>
            </tr>
            <tr>
              <th class="color-indigo">.items-baseline</th>
              <td> align-items: baseline; </td>
            </tr>
            <tr>
              <th class="border-none">
                <h5 class="pt-20 mb-0 font-sans">Align Content</h5>
              </th>
            </tr>
            <tr>
              <th class="color-indigo">.content-start</th>
              <td> align-content: flex-start; </td>
            </tr>
            <tr>
              <th class="color-indigo">.content-center</th>
              <td> align-content: center; </td>
            </tr>
            <tr>
              <th class="color-indigo">.content-end</th>
              <td> align-content: flex-end; </td>
            </tr>
            <tr>
              <th class="color-indigo">.content-between</th>
              <td> align-content: space-between; </td>
            </tr>
            <tr>
              <th class="color-indigo">.content-around</th>
              <td> align-content: space-around; </td>
            </tr>
            <tr>
              <th class="border-none">
                <h5 class="pt-20 mb-0 font-sans">Align Self</h5>
              </th>
            </tr>
            <tr>
              <th class="color-indigo">.self-auto</th>
              <td> align-self: auto; </td>
            </tr>
            <tr>
              <th class="color-indigo">.self-start</th>
              <td> align-self: flex-start; </td>
            </tr>
            <tr>
              <th class="color-indigo">.self-center</th>
              <td> align-self: center; </td>
            </tr>
            <tr>
              <th class="color-indigo">.self-end</th>
              <td> align-self: flex-end; </td>
            </tr>
            <tr>
              <th class="color-indigo">.self-stretch</th>
              <td> align-self: stretch; </td>
            </tr>
            <tr>
              <th class="border-none">
                <h5 class="pt-20 mb-0 font-sans">Justify</h5>
              </th>
            </tr>
            <tr>
              <th class="color-indigo">.justify-start</th>
              <td> justify-content: flex-start; </td>
            </tr>
            <tr>
              <th class="color-indigo">.justify-center</th>
              <td> justify-content: center; </td>
            </tr>
            <tr>
              <th class="color-indigo">.justify-end</th>
              <td> justify-content: flex-end; </td>
            </tr>
            <tr>
              <th class="color-indigo">.justify-between</th>
              <td> justify-content: space-between; </td>
            </tr>
            <tr>
              <th class="color-indigo">.justify-around</th>
              <td> justify-content: space-around; </td>
            </tr>
            <tr>
              <th class="border-none">
                <h5 class="pt-20 mb-0 font-sans">Flex</h5>
              </th>
            </tr>
            <tr>
              <th class="color-indigo">.flex-initial</th>
              <td> flex: 1 1 0%; </td>
            </tr>
            <tr>
              <th class="color-indigo">.flex-1</th>
              <td> flex: 1 1 0%; </td>
            </tr>
            <tr>
              <th class="color-indigo">.flex-auto</th>
              <td> flex: 1 1 auto; </td>
            </tr>
            <tr>
              <th class="color-indigo">.flex-none</th>
              <td> flex: none; </td>
            </tr>
            <tr>
              <th class="border-none">
                <h5 class="pt-20 mb-0 font-sans">Flex Grow</h5>
              </th>
            </tr>
            <tr>
              <th class="color-indigo">.flex-grow</th>
              <td> flex-grow: 1; </td>
            </tr>
            <tr>
              <th class="color-indigo">.flex-no-grow</th>
              <td> flex-grow: 0; </td>
            </tr>
            <tr>
              <th class="border-none">
                <h5 class="pt-20 mb-0 font-sans">Flex Shrink</h5>
              </th>
            </tr>
            <tr>
              <th class="color-indigo">.flex-shrink</th>
              <td> flex-shrink: 1; </td>
            </tr>
            <tr>
              <th class="color-indigo">.flex-no-shrink</th>
              <td> flex-shrink: 0; </td>
            </tr>
            <tr>
              <th class="border-none">
                <h5 class="pt-20 mb-0 font-sans">Order</h5>
              </th>
            </tr>
            <tr>
              <th class="color-indigo">.order-first</th>
              <td> order: -1; </td>
            </tr>
            <tr>
              <th class="color-indigo">.order-last</th>
              <td> order: 13; </td>
            </tr>
            <tr>
              <th class="color-indigo">.order-0</th>
              <td> order: 0; </td>
            </tr>
            <tr>
              <th class="color-indigo">.order-1</th>
              <td> order: 1; </td>
            </tr>
            <tr>
              <th class="color-indigo">.order-2</th>
              <td> order: 2; </td>
            </tr>
            <tr>
              <th class="color-indigo">.order-3</th>
              <td> order: 3; </td>
            </tr>
            <tr>
              <th class="color-indigo">.order-4</th>
              <td> order: 4; </td>
            </tr>
            <tr>
              <th class="color-indigo">.order-5</th>
              <td> order: 5; </td>
            </tr>
            <tr>
              <th class="color-indigo">.order-6</th>
              <td> order: 6; </td>
            </tr>
            <tr>
              <th class="color-indigo">.order-7</th>
              <td> order: 7; </td>
            </tr>
            <tr>
              <th class="color-indigo">.order-8</th>
              <td> order: 8; </td>
            </tr>
            <tr>
              <th class="color-indigo">.order-9</th>
              <td> order: 9; </td>
            </tr>
            <tr>
              <th class="color-indigo">.order-10</th>
              <td> order: 10; </td>
            </tr>
            <tr>
              <th class="color-indigo">.order-11</th>
              <td> order: 11; </td>
            </tr>
            <tr>
              <th class="color-indigo">.order-12</th>
              <td> order: 12; </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Classes End -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h2 class="font-light">Flex Direction</h2>
        <h3 class="font-light">Row</h3>
        <p>Add <code class="color-indigo font-bold">.flex-row</code> to define the direction that flex items appear in a flex container. Adding <code class="color-indigo font-bold">.flex-row</code> to a container means items will appear from left to right in ltr; and right to left in rtl.</p>
        <div class="flex flex-row p-30 rounded bg-grey-ultralight">
          <div class="center p-20 mx-1 bg-grey-lighter color-white">1</div>
          <div class="center p-20 mx-1 bg-grey color-white">2</div>
          <div class="center p-20 mx-1 bg-grey-darker color-white">3</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="flex flex-row">
	<div class="center p-20 mx-1 bg-grey-lighter color-white">1</div>
	<div class="center p-20 mx-1 bg-grey color-white">2</div>
	<div class="center p-20 mx-1 bg-grey-darker color-white">3</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Row-reverse</h3>
        <p>Add <code class="border-grey-ultralight color-indigo font-bold">.flex-row-reverse</code> to position items in a flex container in the opposite direction. Adding <code class="border-grey-ultralight color-indigo font-bold">.flex-row-reverse</code> to a container means items will appear from right to left in ltr; and left to right in rtl.</p>
        <div class="flex flex-row-reverse p-30 rounded bg-grey-ultralight">
          <div class="center p-20 mx-1 bg-grey-lighter color-white">1</div>
          <div class="center p-20 mx-1 bg-grey color-white">2</div>
          <div class="center p-20 mx-1 bg-grey-darker color-white">3</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="flex flex-row-reverse">
	<div class="center p-20 mx-1 bg-grey-lighter color-white">1</div>
	<div class="center p-20 mx-1 bg-grey color-white">2</div>
	<div class="center p-20 mx-1 bg-grey-darker color-white">3</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Column</h3>
        <p>Add <code class="color-indigo font-bold">.flex-col</code> to position items in a flex container from top to bottom.</p>
        <div class="flex flex-col p-30 rounded bg-grey-ultralight">
          <div class="center p-20 m-1 bg-grey-lighter color-white">1</div>
          <div class="center p-20 m-1 bg-grey color-white">2</div>
          <div class="center p-20 m-1 bg-grey-darker color-white">3</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="flex flex-col">
	<div class="center p-20 m-1 bg-grey-lighter color-white">1</div>
	<div class="center p-20 m-1 bg-grey color-white">2</div>
	<div class="center p-20 m-1 bg-grey-darker color-white">3</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Column Reverse</h3>
        <p>Add <code class="color-indigo font-bold">.flex-col-reverse</code> to position items in a flex container in the opposite direction, bottom to top.</p>
        <div class="flex flex-col-reverse p-30 rounded bg-grey-ultralight">
          <div class="center p-20 m-1 bg-grey-lighter color-white">1</div>
          <div class="center p-20 m-1 bg-grey color-white">2</div>
          <div class="center p-20 m-1 bg-grey-darker color-white">3</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="flex flex-col-reverse">
	<div class="center p-20 m-1 bg-grey-lighter color-white">1</div>
	<div class="center p-20 m-1 bg-grey color-white">2</div>
	<div class="center p-20 m-1 bg-grey-darker color-white">3</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Responsive</h3>
        <p>Use the flex directional responsive utility classes for specific breakpoints by adding the breakpoint name to the class: <code class="color-indigo font-bold">.flex-md-row</code>. Flex directional responsive classes are created for the breakpoints listed below, but can be customised directly in <strong>_variables_timber.scss</strong> to include all breakpoints.</p>
        <ul class="list-none">
          <li><strong>lg</strong>: 1200px,</li>
          <li><strong>md</strong>: 992px,</li>
          <li><strong>sm</strong>: 768px</li>
        </ul>
        <div class="flex flex-row flex-lg-row-reverse flex-md-row flex-sm-col p-30 rounded bg-grey-ultralight">
          <div class="center p-20 m-1 bg-grey-lighter color-white">1</div>
          <div class="center p-20 m-1 bg-grey color-white">2</div>
          <div class="center p-20 m-1 bg-grey-darker color-white">3</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="flex flex-row flex-lg-row-reverse flex-md-row flex-sm-col">
	<div class="center p-20 m-1 bg-grey-lighter color-white">1</div>
	<div class="center p-20 m-1 bg-grey color-white">2</div>
	<div class="center p-20 m-1 bg-grey-darker color-white">3</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <hr class="mt-80">
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h2 class="font-light">Flex Wrap</h2>
        <h3 class="font-light">Wrap</h3>
        <p>By default flex items in a flex container will try to fit on one line. Add <code class="color-indigo font-bold">.flex-wrap</code> to allow items to wrap as needed onto a new line.</p>
        <div class="flex flex-row flex-wrap p-30 rounded bg-grey-ultralight">
          <div class="w-5/12 center p-20 m-1 bg-grey-lighter color-white">1</div>
          <div class="w-5/12 center p-20 m-1 bg-grey color-white">2</div>
          <div class="w-5/12 center p-20 m-1 bg-grey-darker color-white">3</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="flex flex-row flex-wrap">
	<div class="w-5/12 center p-20 m-1 bg-grey-lighter color-white">1</div>
	<div class="w-5/12 center p-20 m-1 bg-grey color-white">2</div>
	<div class="w-5/12 center p-20 m-1 bg-grey-darker color-white">3</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">No Wrap</h3>
        <p>Add <code class="color-indigo font-bold">.flex-no-wrap</code> to force items in a flex container to stay on one line.</p>
        <div class="flex flex-row flex-no-wrap p-30 rounded bg-grey-ultralight">
          <div class="w-4/12 center p-20 m-1 bg-grey-lighter color-white">1</div>
          <div class="w-4/12 center p-20 m-1 bg-grey color-white">2</div>
          <div class="w-4/12 center p-20 m-1 bg-grey-darker color-white">3</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="flex flex-row flex-no-wrap">
	<div class="w-4/12 center p-20 m-1 bg-grey-lighter color-white">1</div>
	<div class="w-4/12 center p-20 m-1 bg-grey color-white">2</div>
	<div class="w-4/12 center p-20 m-1 bg-grey-darker color-white">3</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Wrap Reverse</h3>
        <p>Add <code class="color-indigo font-bold">.flex-wrap-reverse</code> to force items to wrap onto multiple lines from bottom to top.</p>
        <div class="flex flex-row flex-wrap-reverse p-30 rounded bg-grey-ultralight">
          <div class="w-4/12 center p-20 m-1 bg-grey-lighter color-white">1</div>
          <div class="w-4/12 center p-20 m-1 bg-grey color-white">2</div>
          <div class="w-4/12 center p-20 m-1 bg-grey-darker color-white">3</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="flex flex-row flex-wrap-reverse">
	<div class="w-4/12 center p-20 m-1 bg-grey-lighter color-white">1</div>
	<div class="w-4/12 center p-20 m-1 bg-grey color-white">2</div>
	<div class="w-4/12 center p-20 m-1 bg-grey-darker color-white">3</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Responsive</h3>
        <p>Use the flex wrap responsive utility classes for specific breakpoints by adding the breakpoint name to the class: <code class="color-indigo font-bold">.flex-md-wrap</code>. Flex wrap responsive classes are created for the breakpoints listed below, but can be customised directly in <strong>_variables_timber.scss</strong> to include all breakpoints.</p>
        <ul class="list-none">
          <li><strong>lg</strong>: 1200px,</li>
          <li><strong>md</strong>: 992px,</li>
          <li><strong>sm</strong>: 768px</li>
        </ul>
        <div class="flex flex-row flex-lg-wrap flex-md-wrap-reverse flex-sm-no-wrap p-30 rounded bg-grey-ultralight">
          <div class="w-4/12 center p-20 m-1 bg-grey-lighter color-white">1</div>
          <div class="w-4/12 center p-20 m-1 bg-grey color-white">2</div>
          <div class="w-4/12 center p-20 m-1 bg-grey-darker color-white">3</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="flex flex-row flex-lg-wrap flex-md-wrap-reverse flex-sm-no-wrap">
	<div class="w-4/12 center p-20 m-1 bg-grey-lighter color-white">1</div>
	<div class="w-4/12 center p-20 m-1 bg-grey color-white">2</div>
	<div class="w-4/12 center p-20 m-1 bg-grey-darker color-white">3</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <hr class="mt-80">
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h2 class="font-light">Align Items</h2>
        <h3 class="font-light">Start</h3>
        <p>Add <code class="color-indigo font-bold">.items-start</code> to make items in a flex container align to the start of the flex container's cross axis.</p>
        <div class="flex items-start h-min-200 p-30 rounded bg-grey-ultralight">
          <div class="flex-1 center p-20 m-1 bg-grey-lighter color-white">1</div>
          <div class="flex-1 center p-20 m-1 bg-grey color-white">2</div>
          <div class="flex-1 center p-20 m-1 bg-grey-darker color-white">3</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="flex items-start h-min-200">
	<div class="flex-1 center p-20 m-1 bg-grey-lighter color-white">1</div>
	<div class="flex-1 center p-20 m-1 bg-grey color-white">2</div>
	<div class="flex-1 center p-20 m-1 bg-grey-darker color-white">3</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Center</h3>
        <p>Add <code class="color-indigo font-bold">.items-center</code> to make items in a flex container align along the center of the flex container's cross axis.</p>
        <div class="flex items-center h-min-200 p-30 rounded bg-grey-ultralight">
          <div class="flex-1 center p-20 m-1 bg-grey-lighter color-white">1</div>
          <div class="flex-1 center p-20 m-1 bg-grey color-white">2</div>
          <div class="flex-1 center p-20 m-1 bg-grey-darker color-white">3</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="flex items-center h-min-200">
	<div class="flex-1 center p-20 m-1 bg-grey-lighter color-white">1</div>
	<div class="flex-1 center p-20 m-1 bg-grey color-white">2</div>
	<div class="flex-1 center p-20 m-1 bg-grey-darker color-white">3</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">End</h3>
        <p>Add <code class="color-indigo font-bold">.items-end</code> to make items in a flex container align at the end of the flex container's cross axis.</p>
        <div class="flex items-end h-min-200 p-30 rounded bg-grey-ultralight">
          <div class="flex-1 center p-20 m-1 bg-grey-lighter color-white">1</div>
          <div class="flex-1 center p-20 m-1 bg-grey color-white">2</div>
          <div class="flex-1 center p-20 m-1 bg-grey-darker color-white">3</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="flex items-end h-min-200">
	<div class="flex-1 center p-20 m-1 bg-grey-lighter color-white">1</div>
	<div class="flex-1 center p-20 m-1 bg-grey color-white">2</div>
	<div class="flex-1 center p-20 m-1 bg-grey-darker color-white">3</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Stretch</h3>
        <p>Add <code class="color-indigo font-bold">.items-stretch</code> to make items stretch to fill the flex container.</p>
        <div class="flex items-stretch h-min-200 p-30 rounded bg-grey-ultralight">
          <div class="flex-1 center p-20 m-1 bg-grey-lighter color-white">1</div>
          <div class="flex-1 center p-20 m-1 bg-grey color-white">2</div>
          <div class="flex-1 center p-20 m-1 bg-grey-darker color-white">3</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="flex items-stretch h-min-200">
	<div class="flex-1 center p-20 m-1 bg-grey-lighter color-white">1</div>
	<div class="flex-1 center p-20 m-1 bg-grey color-white">2</div>
	<div class="flex-1 center p-20 m-1 bg-grey-darker color-white">3</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Responsive</h3>
        <p>Use the align items responsive utility classes for specific breakpoints by adding the breakpoint name to the class: <code class="color-indigo font-bold">.items-md-center</code>. Align items responsive classes are created for the breakpoints listed below, but can be customised directly in <strong>_variables_timber.scss</strong> to include all breakpoints.</p>
        <ul class="list-none">
          <li><strong>lg</strong>: 1200px,</li>
          <li><strong>md</strong>: 992px,</li>
          <li><strong>sm</strong>: 768px</li>
        </ul>
        <div class="flex flex-row items-start items-lg-end items-md-center items-sm-start h-min-200 p-30 rounded bg-grey-ultralight">
          <div class="flex-1 center p-20 m-1 bg-grey-lighter color-white">1</div>
          <div class="flex-1 center p-20 m-1 bg-grey color-white">2</div>
          <div class="flex-1 center p-20 m-1 bg-grey-darker color-white">3</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="flex flex-row items-start items-lg-end items-md-center items-sm-start h-min-200">
	<div class="flex-1 center p-20 m-1 bg-grey-lighter color-white">1</div>
	<div class="flex-1 center p-20 m-1 bg-grey color-white">2</div>
	<div class="flex-1 center p-20 m-1 bg-grey-darker color-white">3</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <hr class="mt-80">
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h2 class="font-light">Align Content</h2>
        <h3 class="font-light">Start</h3>
        <p>Add <code class="color-indigo font-bold">.content-start</code> to pack lines to the start of the container.</p>
        <div class="flex flex-wrap content-start h-min-300 p-30 rounded bg-grey-ultralight">
          <div class="w-4/12 center p-20 bg-grey-lighter color-white">1</div>
          <div class="w-4/12 center p-20 bg-grey color-white">2</div>
          <div class="w-4/12 center p-20 bg-grey-darker color-white">3</div>
          <div class="w-4/12 center p-20 bg-grey-darkest color-white">4</div>
          <div class="w-4/12 center p-20 bg-black color-white">5</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="flex flex-wrap content-start h-min-300">
	<div class="w-4/12 center p-20 bg-grey-lighter color-white">1</div>
	<div class="w-4/12 center p-20 bg-grey color-white">2</div>
	<div class="w-4/12 center p-20 bg-grey-darker color-white">3</div>
	<div class="w-4/12 center p-20 bg-grey-darkest color-white">4</div>
	<div class="w-4/12 center p-20 bg-black color-white">5</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Center</h3>
        <p>Add <code class="color-indigo font-bold">.content-center</code> to pack lines to the center of the container.</p>
        <div class="flex flex-wrap content-center h-min-300 p-30 rounded bg-grey-ultralight">
          <div class="w-4/12 center p-20 bg-grey-lighter color-white">1</div>
          <div class="w-4/12 center p-20 bg-grey color-white">2</div>
          <div class="w-4/12 center p-20 bg-grey-darker color-white">3</div>
          <div class="w-4/12 center p-20 bg-grey-darkest color-white">4</div>
          <div class="w-4/12 center p-20 bg-black color-white">5</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="flex flex-wrap content-center h-min-300">
	<div class="w-4/12 center p-20 bg-grey-lighter color-white">1</div>
	<div class="w-4/12 center p-20 bg-grey color-white">2</div>
	<div class="w-4/12 center p-20 bg-grey-darker color-white">3</div>
	<div class="w-4/12 center p-20 bg-grey-darkest color-white">4</div>
	<div class="w-4/12 center p-20 bg-black color-white">5</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">End</h3>
        <p>Add <code class="color-indigo font-bold">.content-center</code> to pack lines to the end of the container.</p>
        <div class="flex flex-wrap content-end h-min-300 p-30 rounded bg-grey-ultralight">
          <div class="w-4/12 center p-20 bg-grey-lighter color-white">1</div>
          <div class="w-4/12 center p-20 bg-grey color-white">2</div>
          <div class="w-4/12 center p-20 bg-grey-darker color-white">3</div>
          <div class="w-4/12 center p-20 bg-grey-darkest color-white">4</div>
          <div class="w-4/12 center p-20 bg-black color-white">5</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="flex flex-wrap content-end h-min-300">
	<div class="w-4/12 center p-20 bg-grey-lighter color-white">1</div>
	<div class="w-4/12 center p-20 bg-grey color-white">2</div>
	<div class="w-4/12 center p-20 bg-grey-darker color-white">3</div>
	<div class="w-4/12 center p-20 bg-grey-darkest color-white">4</div>
	<div class="w-4/12 center p-20 bg-black color-white">5</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Space Between</h3>
        <p>Add <code class="color-indigo font-bold">.content-center</code> to make lines evenly distributed; the first line is at the start of the container while the last one is at the end.</p>
        <div class="flex flex-wrap content-between h-min-300 p-30 rounded bg-grey-ultralight">
          <div class="w-4/12 center p-20 bg-grey-lighter color-white">1</div>
          <div class="w-4/12 center p-20 bg-grey color-white">2</div>
          <div class="w-4/12 center p-20 bg-grey-darker color-white">3</div>
          <div class="w-4/12 center p-20 bg-grey-darkest color-white">4</div>
          <div class="w-4/12 center p-20 bg-black color-white">5</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="flex flex-wrap content-between h-min-300">
	<div class="w-4/12 center p-20 bg-grey-lighter color-white">1</div>
	<div class="w-4/12 center p-20 bg-grey color-white">2</div>
	<div class="w-4/12 center p-20 bg-grey-darker color-white">3</div>
	<div class="w-4/12 center p-20 bg-grey-darkest color-white">4</div>
	<div class="w-4/12 center p-20 bg-black color-white">5</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Space Around</h3>
        <p>Add <code class="color-indigo font-bold">.content-center</code> to make lines evenly distributed with equal space around each line.</p>
        <div class="flex flex-wrap content-around h-min-300 p-30 rounded bg-grey-ultralight">
          <div class="w-4/12 center p-20 bg-grey-lighter color-white">1</div>
          <div class="w-4/12 center p-20 bg-grey color-white">2</div>
          <div class="w-4/12 center p-20 bg-grey-darker color-white">3</div>
          <div class="w-4/12 center p-20 bg-grey-darkest color-white">4</div>
          <div class="w-4/12 center p-20 bg-black color-white">5</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="flex flex-wrap content-around h-min-300">
	<div class="w-4/12 center p-20 bg-grey-lighter color-white">1</div>
	<div class="w-4/12 center p-20 bg-grey color-white">2</div>
	<div class="w-4/12 center p-20 bg-grey-darker color-white">3</div>
	<div class="w-4/12 center p-20 bg-grey-darkest color-white">4</div>
	<div class="w-4/12 center p-20 bg-black color-white">5</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Stretch</h3>
        <p>Add <code class="color-indigo font-bold">.content-stretch</code> to make lines stretch to take up the remaining space.</p>
        <div class="flex flex-wrap content-stretch h-min-300 p-30 rounded bg-grey-ultralight">
          <div class="w-4/12 center p-20 bg-grey-lighter color-white">1</div>
          <div class="w-4/12 center p-20 bg-grey color-white">2</div>
          <div class="w-4/12 center p-20 bg-grey-darker color-white">3</div>
          <div class="w-4/12 center p-20 bg-grey-darkest color-white">4</div>
          <div class="w-4/12 center p-20 bg-black color-white">5</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="flex flex-wrap content-stretch h-min-300">
	<div class="w-4/12 center p-20 bg-grey-lighter color-white">1</div>
	<div class="w-4/12 center p-20 bg-grey color-white">2</div>
	<div class="w-4/12 center p-20 bg-grey-darker color-white">3</div>
	<div class="w-4/12 center p-20 bg-grey-darkest color-white">4</div>
	<div class="w-4/12 center p-20 bg-black color-white">5</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Responsive</h3>
        <p>Use the align items responsive utility classes for specific breakpoints by adding the breakpoint name to the class: <code class="color-indigo font-bold">.content-md-start</code>. Align items responsive classes are created for the breakpoints listed below, but can be customised directly in <strong>_variables_timber.scss</strong> to include all breakpoints.</p>
        <ul class="list-none">
          <li><strong>lg</strong>: 1200px,</li>
          <li><strong>md</strong>: 992px,</li>
          <li><strong>sm</strong>: 768px</li>
        </ul>
        <div class="flex flex-wrap content-start content-lg-start content-md-center content-sm-end h-min-300 p-30 rounded bg-grey-ultralight">
          <div class="w-4/12 center p-20 bg-grey-lighter color-white">1</div>
          <div class="w-4/12 center p-20 bg-grey color-white">2</div>
          <div class="w-4/12 center p-20 bg-grey-darker color-white">3</div>
          <div class="w-4/12 center p-20 bg-grey-darkest color-white">4</div>
          <div class="w-4/12 center p-20 bg-black color-white">5</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="flex flex-wrap content-start content-lg-start content-md-center content-sm-end h-min-300">
	<div class="w-4/12 center p-20 bg-grey-lighter color-white">1</div>
	<div class="w-4/12 center p-20 bg-grey color-white">2</div>
	<div class="w-4/12 center p-20 bg-grey-darker color-white">3</div>
	<div class="w-4/12 center p-20 bg-grey-darkest color-white">4</div>
	<div class="w-4/12 center p-20 bg-black color-white">5</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <hr class="mt-80">
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h2 class="font-light">Align Self</h2>
        <h3 class="font-light">Auto</h3>
        <p>Add <code class="color-indigo font-bold">.self-auto</code> to align an item in a flex container to the parent's align item property.</p>
        <div class="flex items-stretch content-start h-min-200 p-30 rounded bg-grey-ultralight">
          <div class="flex-1 center p-20 m-1 bg-grey-lighter color-white">1</div>
          <div class="flex-1 self-auto center p-20 m-1 bg-grey color-white">2</div>
          <div class="flex-1 center p-20 m-1 bg-grey-darker color-white">3</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="flex items-stretch content-start h-min-200">
	<div class="flex-1 center p-20 m-1 bg-grey-lighter color-white">1</div>
	<div class="flex-1 self-auto center p-20 m-1 bg-grey color-white">2</div>
	<div class="flex-1 center p-20 m-1 bg-grey-darker color-white">3</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Start</h3>
        <p>Add <code class="color-indigo font-bold">.self-start</code> to align an item to the start of the flex container.</p>
        <div class="flex items-stretch content-start h-min-200 p-30 rounded bg-grey-ultralight">
          <div class="flex-1 center p-20 m-1 bg-grey-lighter color-white">1</div>
          <div class="flex-1 self-start center p-20 m-1 bg-grey color-white">2</div>
          <div class="flex-1 center p-20 m-1 bg-grey-darker color-white">3</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="flex items-stretch content-start h-min-200">
	<div class="flex-1 center p-20 m-1 bg-grey-lighter color-white">1</div>
	<div class="flex-1 self-start center p-20 m-1 bg-grey color-white">2</div>
	<div class="flex-1 center p-20 m-1 bg-grey-darker color-white">3</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Center</h3>
        <p>Add <code class="color-indigo font-bold">.self-center</code> to align an item to the center of the flex container.</p>
        <div class="flex items-stretch content-start h-min-200 p-30 rounded bg-grey-ultralight">
          <div class="flex-1 center p-20 m-1 bg-grey-lighter color-white">1</div>
          <div class="flex-1 self-center center p-20 m-1 bg-grey color-white">2</div>
          <div class="flex-1 center p-20 m-1 bg-grey-darker color-white">3</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="flex items-stretch content-start h-min-200">
	<div class="flex-1 center p-20 m-1 bg-grey-lighter color-white">1</div>
	<div class="flex-1 self-center center p-20 m-1 bg-grey color-white">2</div>
	<div class="flex-1 center p-20 m-1 bg-grey-darker color-white">3</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">End</h3>
        <p>Add <code class="color-indigo font-bold">.self-end</code> to align an item to the end of the flex container.</p>
        <div class="flex items-stretch content-start h-min-200 p-30 rounded bg-grey-ultralight">
          <div class="flex-1 center p-20 m-1 bg-grey-lighter color-white">1</div>
          <div class="flex-1 self-end center p-20 m-1 bg-grey color-white">2</div>
          <div class="flex-1 center p-20 m-1 bg-grey-darker color-white">3</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="flex items-stretch content-start h-min-200">
	<div class="flex-1 center p-20 m-1 bg-grey-lighter color-white">1</div>
	<div class="flex-1 self-end center p-20 m-1 bg-grey color-white">2</div>
	<div class="flex-1 center p-20 m-1 bg-grey-darker color-white">3</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Stretch</h3>
        <p>Add <code class="color-indigo font-bold">.self-stretch</code> to stretch an item to the height of the flex container.</p>
        <div class="flex items-stretch content-start h-min-200 p-30 rounded bg-grey-ultralight">
          <div class="flex-1 self-start center p-20 m-1 bg-grey-lighter color-white">1</div>
          <div class="flex-1 self-stretch self-start center p-20 m-1 bg-grey color-white">2</div>
          <div class="flex-1 self-start center p-20 m-1 bg-grey-darker color-white">3</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="flex items-stretch content-start h-min-200">
	<div class="flex-1 self-start center p-20 m-1 bg-grey-lighter color-white">1</div>
	<div class="flex-1 self-stretch self-start center p-20 m-1 bg-grey color-white">2</div>
	<div class="flex-1 self-start center p-20 m-1 bg-grey-darker color-white">3</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Responsive</h3>
        <p>Use the align self responsive utility classes for specific breakpoints by adding the breakpoint name to the class: <code class="color-indigo font-bold">.align-md-start</code>. Align self responsive classes are created for the breakpoints listed below, but can be customised directly in <strong>_variables_timber.scss</strong> to include all breakpoints.</p>
        <ul class="list-none">
          <li><strong>lg</strong>: 1200px,</li>
          <li><strong>md</strong>: 992px,</li>
          <li><strong>sm</strong>: 768px</li>
        </ul>
        <div class="flex content-start h-min-200 p-30 rounded bg-grey-ultralight">
          <div class="flex-1 self-lg-start self-md-center self-sm-end center p-20 m-1 bg-grey-lighter color-white">1</div>
          <div class="flex-1 self-lg-end self-md-center self-sm-start center p-20 m-1 bg-grey color-white">2</div>
          <div class="flex-1 self-lg-start self-md-stretch self-sm-end center p-20 m-1 bg-grey-darker color-white">3</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="flex content-start h-min-200">
	<div class="flex-1 self-lg-start self-md-center self-sm-end center p-20 m-1 bg-grey-lighter color-white">1</div>
	<div class="flex-1 self-lg-end self-md-center self-sm-start center p-20 m-1 bg-grey color-white">2</div>
	<div class="flex-1 self-lg-start self-md-stretch self-sm-end center p-20 m-1 bg-grey-darker color-white">3</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <hr class="mt-80">
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h2 class="font-light">Justify Content</h2>
        <h3 class="font-light">Start</h3>
        <p>Add <code class="color-indigo font-bold">.justify-start</code> to pack items in a flex container toward the start line.</p>
        <div class="flex justify-start p-30 rounded bg-grey-ultralight">
          <div class="center p-20 m-1 bg-grey-lighter color-white">1</div>
          <div class="center p-20 m-1 bg-grey color-white">2</div>
          <div class="center p-20 m-1 bg-grey-darker color-white">3</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="flex justify-start">
	<div class="center p-20 m-1 bg-grey-lighter color-white">1</div>
	<div class="center p-20 m-1 bg-grey color-white">2</div>
	<div class="center p-20 m-1 bg-grey-darker color-white">3</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Center</h3>
        <p>Add <code class="color-indigo font-bold">.justify-center</code> to center items in a flex container along the line.</p>
        <div class="flex justify-center p-30 rounded bg-grey-ultralight">
          <div class="center p-20 m-1 bg-grey-lighter color-white">1</div>
          <div class="center p-20 m-1 bg-grey color-white">2</div>
          <div class="center p-20 m-1 bg-grey-darker color-white">3</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="flex justify-center">
	<div class="center p-20 m-1 bg-grey-lighter color-white">1</div>
	<div class="center p-20 m-1 bg-grey color-white">2</div>
	<div class="center p-20 m-1 bg-grey-darker color-white">3</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">End</h3>
        <p>Add <code class="color-indigo font-bold">.justify-end</code> to pack items in a flex container toward the end line.</p>
        <div class="flex justify-end p-30 rounded bg-grey-ultralight">
          <div class="center p-20 m-1 bg-grey-lighter color-white">1</div>
          <div class="center p-20 m-1 bg-grey color-white">2</div>
          <div class="center p-20 m-1 bg-grey-darker color-white">3</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="flex justify-end">
	<div class="center p-20 m-1 bg-grey-lighter color-white">1</div>
	<div class="center p-20 m-1 bg-grey color-white">2</div>
	<div class="center p-20 m-1 bg-grey-darker color-white">3</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Between</h3>
        <p>Add <code class="color-indigo font-bold">.justify-between</code> to evenly distribute items in a flex container; first item is on the start line, last item on the end line, and other evenly in the middle.</p>
        <div class="flex justify-between p-30 rounded bg-grey-ultralight">
          <div class="center p-20 m-1 bg-grey-lighter color-white">1</div>
          <div class="center p-20 m-1 bg-grey color-white">2</div>
          <div class="center p-20 m-1 bg-grey-darker color-white">3</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="flex justify-between">
	<div class="center p-20 m-1 bg-grey-lighter color-white">1</div>
	<div class="center p-20 m-1 bg-grey color-white">2</div>
	<div class="center p-20 m-1 bg-grey-darker color-white">3</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Around</h3>
        <p>Add <code class="color-indigo font-bold">.justify-around</code> to evenly distribute items in a flex container with equal space around them. Note that visually the spaces aren't equal, since all the items have equal space on both sides. The first item will have one unit of space against the container edge, but two units of space between the next item because that next item has its own spacing that applies.</p>
        <div class="flex justify-around p-30 rounded bg-grey-ultralight">
          <div class="center p-20 m-1 bg-grey-lighter color-white">1</div>
          <div class="center p-20 m-1 bg-grey color-white">2</div>
          <div class="center p-20 m-1 bg-grey-darker color-white">3</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="flex justify-around">
	<div class="center p-20 m-1 bg-grey-lighter color-white">1</div>
	<div class="center p-20 m-1 bg-grey color-white">2</div>
	<div class="center p-20 m-1 bg-grey-darker color-white">3</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Responsive</h3>
        <p>Use the justify responsive utility classes for specific breakpoints by adding the breakpoint name to the class: <code class="color-indigo font-bold">.justify-md-between</code>. Justify responsive classes are created for the breakpoints listed below, but can be customised directly in <strong>_variables_timber.scss</strong> to include all breakpoints.</p>
        <ul class="list-none">
          <li><strong>lg</strong>: 1200px,</li>
          <li><strong>md</strong>: 992px,</li>
          <li><strong>sm</strong>: 768px</li>
        </ul>
        <div class="flex justify-start justify-md-between justify-sm-around p-30 rounded bg-grey-ultralight">
          <div class="center p-20 m-1 bg-grey-lighter color-white">1</div>
          <div class="center p-20 m-1 bg-grey color-white">2</div>
          <div class="center p-20 m-1 bg-grey-darker color-white">3</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="flex justify-start justify-md-between justify-sm-around">
	<div class="center p-20 m-1 bg-grey-lighter color-white">1</div>
	<div class="center p-20 m-1 bg-grey color-white">2</div>
	<div class="center p-20 m-1 bg-grey-darker color-white">3</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <hr class="mt-80">
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h2 class="font-light">Flex</h2>
        <h3 class="font-light">Initial</h3>
        <p>Add <code class="color-indigo font-bold">.flex-initial</code> to make a flex item grow and shrink as needed, ignoring its initial size.</p>
        <div class="flex p-30 rounded bg-grey-ultralight">
          <div class="flex-initial center p-20 m-1 bg-grey-lighter color-white">1. Some content</div>
          <div class="flex-initial center p-20 m-1 bg-grey color-white">2. And event more content.</div>
          <div class="flex-initial center p-20 m-1 bg-grey-darker color-white">3. And much much more content. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="flex">
	<div class="flex-initial center p-20 m-1 bg-grey-lighter color-white">1. Some content</div>
	<div class="flex-initial center p-20 m-1 bg-grey color-white">2. And event more content.</div>
	<div class="flex-initial center p-20 m-1 bg-grey-darker color-white">3. And much much more content. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Flex-1</h3>
        <p>Add <code class="color-indigo font-bold">.flex-1</code> to make a flex item to grow and shrink as needed, ignoring its initial size.</p>
        <div class="flex p-30 rounded bg-grey-ultralight">
          <div class="flex-1 center p-20 m-1 bg-grey-lighter color-white">1. Some content</div>
          <div class="flex-1 center p-20 m-1 bg-grey color-white">2. And event more content.</div>
          <div class="flex-1 center p-20 m-1 bg-grey-darker color-white">3. And much much more content. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="flex">
	<div class="flex-1 center p-20 m-1 bg-grey-lighter color-white">1. Some content</div>
	<div class="flex-1 center p-20 m-1 bg-grey color-white">2. And event more content.</div>
	<div class="flex-1 center p-20 m-1 bg-grey-darker color-white">3. And much much more content. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Auto</h3>
        <p>Add <code class="color-indigo font-bold">.flex-auto</code> to allow a flex item to grow and shrink, taking into account its initial size.</p>
        <div class="flex p-30 rounded bg-grey-ultralight">
          <div class="flex-auto center p-20 m-1 bg-grey-lighter color-white">1. Some content</div>
          <div class="flex-auto center p-20 m-1 bg-grey color-white">2. And even more content.</div>
          <div class="flex-auto center p-20 m-1 bg-grey-darker color-white">3. And much much more content. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="flex">
	<div class="flex-auto center p-20 m-1 bg-grey-lighter color-white">1. Some content</div>
	<div class="flex-auto center p-20 m-1 bg-grey color-white">2. And even more content.</div>
	<div class="flex-auto center p-20 m-1 bg-grey-darker color-white">3. And much much more content. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">None</h3>
        <p>Add <code class="color-indigo font-bold">.flex-none</code> to prevent a flex item from growing or shrinking.</p>
        <div class="flex p-30 rounded bg-grey-ultralight">
          <div class="flex-1 center p-20 m-1 bg-grey-lighter color-white">1. Item will grow or shrink as needed</div>
          <div class="flex-none center p-20 m-1 bg-grey color-white">2. Item will not grow nor shrink.</div>
          <div class="flex-1 center p-20 m-1 bg-grey-darker color-white">3. Item will grow or shrink as needed</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="flex">
	<div class="flex-1 center p-20 m-1 bg-grey-lighter color-white">1. Item will grow or shrink as needed</div>
	<div class="flex-none center p-20 m-1 bg-grey color-white">2. Item will not grow nor shrink.</div>
	<div class="flex-1 center p-20 m-1 bg-grey-darker color-white">3. Item will grow or shrink as needed</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Responsive</h3>
        <p>Use the flex responsive utility classes for specific breakpoints by adding the breakpoint name to the class: <code class="color-indigo font-bold">.flex-md-1</code>. Flex responsive classes are created for the breakpoints listed below, but can be customised directly in <strong>_variables_timber.scss</strong> to include all breakpoints.</p>
        <ul class="list-none">
          <li><strong>lg</strong>: 1200px,</li>
          <li><strong>md</strong>: 992px,</li>
          <li><strong>sm</strong>: 768px</li>
        </ul>
        <div class="flex p-30 rounded bg-grey-ultralight">
          <div class="flex-1 center p-20 m-1 bg-grey-lighter color-white">1</div>
          <div class="flex-lg-none flex-md-1 flex-sm-auto center p-20 m-1 bg-grey color-white">2. And more content, lorem ipsum dolor sit amet</div>
          <div class="flex-1 center p-20 m-1 bg-grey-darker color-white">3</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="flex">
	<div class="flex-1 center p-20 m-1 bg-grey-lighter color-white">1</div>
	<div class="flex-lg-none flex-md-1 flex-sm-auto center p-20 m-1 bg-grey color-white">2. And more content, lorem ipsum dolor sit amet</div>
	<div class="flex-1 center p-20 m-1 bg-grey-darker color-white">3</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <hr class="mt-80">
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h2 class="font-light">Flex Grow</h2>
        <h3 class="font-light">Grow</h3>
        <p>Add <code class="color-indigo font-bold">.flex-grow</code> to items in a flex container to force them to grow and fill any available space.</p>
        <div class="flex p-30 rounded bg-grey-ultralight">
          <div class="flex-grow center p-20 m-1 bg-grey-lighter color-white">1. This item will grow</div>
          <div class="flex-none center p-20 m-1 bg-grey color-white">2. This item won't grow</div>
          <div class="flex-grow center p-20 m-1 bg-grey-darker color-white">3. This item will grow</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="flex">
	<div class="flex-grow center p-20 m-1 bg-grey-lighter color-white">1. This item will grow</div>
	<div class="flex-none center p-20 m-1 bg-grey color-white">2. This item won't grow</div>
	<div class="flex-grow center p-20 m-1 bg-grey-darker color-white">3. This item will  grow</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">No Grow</h3>
        <p>Add <code class="color-indigo font-bold">.flex-no-grow</code> to flex items in a flex container to prevent them from growing.</p>
        <div class="flex p-30 rounded bg-grey-ultralight">
          <div class="flex-no-grow center p-20 m-1 bg-grey-lighter color-white">1. This item won't grow</div>
          <div class="flex-grow center p-20 m-1 bg-grey color-white">2. This item will grow</div>
          <div class="flex-no-grow center p-20 m-1 bg-grey-darker color-white">3. This item won't grow</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="flex">
	<div class="flex-no-grow center p-20 m-1 bg-grey-lighter color-white">1. This item won't grow</div>
	<div class="flex-grow center p-20 m-1 bg-grey color-white">2. This item will grow</div>
	<div class="flex-no-grow center p-20 m-1 bg-grey-darker color-white">3. This item won't grow</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Responsive</h3>
        <p>Use the flex grow responsive utility classes for specific breakpoints by adding the breakpoint name to the class: <code class="color-indigo font-bold">.flex-md-grow</code>. Flex grow responsive classes are created for the breakpoints listed below, but can be customised directly in <strong>_variables_timber.scss</strong> to include all breakpoints.</p>
        <ul class="list-none">
          <li><strong>lg</strong>: 1200px,</li>
          <li><strong>md</strong>: 992px,</li>
          <li><strong>sm</strong>: 768px</li>
        </ul>
        <div class="flex p-30 rounded bg-grey-ultralight">
          <div class="flex-lg-grow flex-md-no-grow flex-sm-grow center p-20 m-1 bg-grey-lighter color-white">1. This item will grow in some breakpoints, but not in others</div>
          <div class="flex-none center p-20 m-1 bg-grey color-white">2. This item won't grow</div>
          <div class="flex-none center p-20 m-1 bg-grey-darker color-white">3. This item won't grow</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="flex">
	<div class="flex-lg-grow flex-md-no-grow flex-sm-grow center p-20 m-1 bg-grey-lighter color-white">1. This item will grow in some breakpoints, but not in others</div>
	<div class="flex-none center p-20 m-1 bg-grey color-white">2. This item won't grow</div>
	<div class="flex-none center p-20 m-1 bg-grey-darker color-white">3. This item won't grow</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <hr class="mt-80">
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h2 class="font-light">Flex Shrink</h2>
        <h3 class="font-light">Shrink</h3>
        <p>Add <code class="color-indigo font-bold">.flex-shrink</code> to items in a flex container to allow them to shrink when needed.</p>
        <div class="flex p-30 rounded bg-grey-ultralight">
          <div class="flex-none center p-20 m-1 bg-grey-lighter color-white">1. This item will won't shrink</div>
          <div class="flex-shrink center p-20 m-1 bg-grey color-white">2. This item will shrink</div>
          <div class="flex-none center p-20 m-1 bg-grey-darker color-white">3. This item will won't shrink</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="flex">
	<div class="flex-none center p-20 m-1 bg-grey-lighter color-white">1. This item will won't shrink</div>
	<div class="flex-shrink center p-20 m-1 bg-grey color-white">2. This item will shrink</div>
	<div class="flex-none center p-20 m-1 bg-grey-darker color-white">3. This item will won't shrink</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">No Shrink</h3>
        <p>Add <code class="color-indigo font-bold">.flex-no-shrink</code> to flex items in a flex container to prevent them from shrinking.</p>
        <div class="flex p-30 rounded bg-grey-ultralight">
          <div class="flex-none center p-20 m-1 bg-grey-lighter color-white">1. This item will shrink</div>
          <div class="flex-no-shrink center p-20 m-1 bg-grey color-white">2. This item won't shrink</div>
          <div class="flex-none center p-20 m-1 bg-grey-darker color-white">3. This item will shrink</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="flex">
	<div class="flex-none center p-20 m-1 bg-grey-lighter color-white">1. This item will shrink</div>
	<div class="flex-no-shrink center p-20 m-1 bg-grey color-white">2. This item won't shrink</div>
	<div class="flex-none center p-20 m-1 bg-grey-darker color-white">3. This item will shrink</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Responsive</h3>
        <p>Use the flex shrink responsive utility classes for specific breakpoints by adding the breakpoint name to the class: <code class="color-indigo font-bold">.flex-md-shrink</code>. Flex shrink responsive classes are created for the breakpoints listed below, but can be customised directly in <strong>_variables_timber.scss</strong> to include all breakpoints.</p>
        <ul class="list-none">
          <li><strong>lg</strong>: 1200px,</li>
          <li><strong>md</strong>: 992px,</li>
          <li><strong>sm</strong>: 768px</li>
        </ul>
        <div class="flex p-30 rounded bg-grey-ultralight">
          <div class="flex-lg-shrink flex-md-no-shrink flex-sm-shrink center p-20 m-1 bg-grey-lighter color-white">1. This item will shrink in some breakpoints, but not in others</div>
          <div class="flex-none center p-20 m-1 bg-grey color-white">2. This item won't shrink</div>
          <div class="flex-none center p-20 m-1 bg-grey-darker color-white">3. This item won't shrink</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="flex">
	<div class="flex-lg-shrink flex-md-no-shrink flex-sm-shrink center p-20 m-1 bg-grey-lighter color-white">1. This item will shrink in some breakpoints, but not in others</div>
	<div class="flex-none center p-20 m-1 bg-grey color-white">2. This item won't shrink</div>
	<div class="flex-none center p-20 m-1 bg-grey-darker color-white">3. This item won't shrink</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <hr class="mt-80">
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h2 class="font-light">Flex Order</h2>
        <h3 class="font-light">Order</h3>
        <p>Add <code class="color-indigo font-bold">.order-x</code> to reorganize items in a flex container in a different order then they appear in the DOM.</p>
        <div class="flex h-min-300 p-30 rounded bg-grey-ultralight">
          <div class="order-2 w-3/12 center p-20 bg-grey-lighter color-white">1</div>
          <div class="order-4 w-3/12 center p-20 bg-grey color-white">2</div>
          <div class="order-1 w-3/12 center p-20 bg-grey-darker color-white">3</div>
          <div class="order-3 w-3/12 center p-20 bg-grey-darkest color-white">4</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="flex h-min-300">
	<div class="order-2 w-3/12 center p-20 bg-grey-lighter color-white">1</div>
	<div class="order-4 w-3/12 center p-20 bg-grey color-white">2</div>
	<div class="order-1 w-3/12 center p-20 bg-grey-darker color-white">3</div>
	<div class="order-3 w-3/12 center p-20 bg-grey-darkest color-white">4</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Responsive</h3>
        <p>Use the flex order responsive utility classes for specific breakpoints by adding the breakpoint name to the class: <code class="color-indigo font-bold">.order-md-x</code>. Flex order responsive classes are created for the breakpoints listed below, but can be customised directly in <strong>_variables_timber.scss</strong> to include all breakpoints.</p>
        <ul class="list-none">
          <li><strong>lg</strong>: 1200px,</li>
          <li><strong>md</strong>: 992px,</li>
          <li><strong>sm</strong>: 768px</li>
        </ul>
        <div class="flex flex-sm-none h-min-300 p-30 rounded bg-grey-ultralight">
          <div class="order-2 order-lg-3 order-md-1 order-sm-4 w-3/12 center p-20 bg-grey-lighter color-white">1</div>
          <div class="order-4 order-lg-1 order-md-2 order-sm-3 w-3/12 center p-20 bg-grey color-white">2</div>
          <div class="order-1 order-lg-4 order-md-3 order-sm-2 w-3/12 center p-20 bg-grey-darker color-white">3</div>
          <div class="order-3 order-lg-2 order-md-4 order-sm-1 w-3/12 center p-20 bg-grey-darkest color-white">4</div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="flex flex-sm-none h-min-300">
	<div class="order-2 order-lg-3 order-md-1 order-sm-4 w-3/12 center p-20 bg-grey-lighter color-white">1</div>
	<div class="order-4 order-lg-1 order-md-2 order-sm-3 w-3/12 center p-20 bg-grey color-white">2</div>
	<div class="order-1 order-lg-4 order-md-3 order-sm-2 w-3/12 center p-20 bg-grey-darker color-white">3</div>
	<div class="order-3 order-lg-2 order-md-4 order-sm-1 w-3/12 center p-20 bg-grey-darkest color-white">4</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
    </div>
    <!-- Content Inner End -->
  </div>
</div>
