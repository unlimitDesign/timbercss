---
title: Effects - Box Shadow Utility
menu_label: Box Shadow
layout: documentation
category: ["Utilities", "Effects"]
markup_language: html
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Utility: Box Shadow</h1>
      <p>Controls the box shadow of an element.</p>
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
              <th class="color-indigo">.shadow</th>
              <td> box-shadow: 0 0.2rem 0.4rem 0 rgba(0, 0, 0, 0.1); </td>
            </tr>
            <tr>
              <th class="color-indigo">.shadow-x2</th>
              <td> box-shadow: 0 0.4rem 0.8rem 0 rgba(0, 0, 0, 0.12), 0 0.2rem 0.4rem 0 rgba(0, 0, 0, 0.08); </td>
            </tr>
            <tr>
              <th class="color-indigo">.shadow-x3</th>
              <td> box-shadow: 0 1.5rem 3rem 0 rgba(0, 0, 0, 0.11), 0 0.5rem 1.5rem 0 rgba(0, 0, 0, 0.08); </td>
            </tr>
            <tr>
              <th class="color-indigo">.shadow-x4</th>
              <td> box-shadow: 0 2rem 4rem 0 rgba(0, 0, 0, 0.16), 0 0.8rem 2rem 0 rgba(0, 0, 0, 0.08); </td>
            </tr>
            <tr>
              <th class="color-indigo">.shadow-inner</th>
              <td> box-shadow: inset 0 0.2rem 0.4rem 0 rgba(0, 0, 0, 0.1); </td>
            </tr>
            <tr>
              <th class="color-indigo">.shadow-outline</th>
              <td> box-shadow: 0 0 0 0.3rem rgba(52, 144, 220, 0.3);<br> position: relative;<br> z-index: 2; </td>
            </tr>
            <tr>
              <th class="color-indigo">.shadow-hover</th>
              <td> box-shadow: 0 0.2rem 0.4rem 0 rgba(0, 0, 0, 0.1); </td>
            </tr>
            <tr>
              <th class="color-indigo">.shadow-hover-x2</th>
              <td> box-shadow: 0 0.4rem 0.8rem 0 rgba(0, 0, 0, 0.12), 0 0.2rem 0.4rem 0 rgba(0, 0, 0, 0.08); </td>
            </tr>
            <tr>
              <th class="color-indigo">.shadow-hover-x3</th>
              <td> box-shadow: 0 1.5rem 3rem 0 rgba(0, 0, 0, 0.11), 0 0.5rem 1.5rem 0 rgba(0, 0, 0, 0.08); </td>
            </tr>
            <tr>
              <th class="color-indigo">.shadow-hover-x4</th>
              <td> box-shadow: 0 2rem 4rem 0 rgba(0, 0, 0, 0.16), 0 0.8rem 2rem 0 rgba(0, 0, 0, 0.08); </td>
            </tr>
            <tr>
              <th class="color-indigo">.shadow-hover-inner</th>
              <td> box-shadow: inset 0 0.2rem 0.4rem 0 rgba(0, 0, 0, 0.1); </td>
            </tr>
            <tr>
              <th class="color-indigo">.shadow-hover-outline</th>
              <td> box-shadow: 0 0 0 0.3rem rgba(52, 144, 220, 0.3);<br> position: relative;<br> z-index: 2; </td>
            </tr>
            <tr>
              <th class="color-indigo">.shadow-active.active</th>
              <td> box-shadow: 0 0.2rem 0.4rem 0 rgba(0, 0, 0, 0.1); </td>
            </tr>
            <tr>
              <th class="color-indigo">.shadow-active-x2.active</th>
              <td> box-shadow: 0 0.4rem 0.8rem 0 rgba(0, 0, 0, 0.12), 0 0.2rem 0.4rem 0 rgba(0, 0, 0, 0.08); </td>
            </tr>
            <tr>
              <th class="color-indigo">.shadow-active-x3.active</th>
              <td> box-shadow: 0 1.5rem 3rem 0 rgba(0, 0, 0, 0.11), 0 0.5rem 1.5rem 0 rgba(0, 0, 0, 0.08); </td>
            </tr>
            <tr>
              <th class="color-indigo">.shadow-active-x4.active</th>
              <td> box-shadow: 0 2rem 4rem 0 rgba(0, 0, 0, 0.16), 0 0.8rem 2rem 0 rgba(0, 0, 0, 0.08); </td>
            </tr>
            <tr>
              <th class="color-indigo">.shadow-active-inner.active</th>
              <td> box-shadow: inset 0 0.2rem 0.4rem 0 rgba(0, 0, 0, 0.1); </td>
            </tr>
            <tr>
              <th class="color-indigo">.shadow-active-outline.active</th>
              <td> box-shadow: 0 0 0 0.3rem rgba(52, 144, 220, 0.3);<br> position: relative;<br> z-index: 2; </td>
            </tr>
            <tr>
              <th class="color-indigo">.shadow-focus</th>
              <td> box-shadow: 0 0.2rem 0.4rem 0 rgba(0, 0, 0, 0.1); </td>
            </tr>
            <tr>
              <th class="color-indigo">.shadow-focus-x2</th>
              <td> box-shadow: 0 0.4rem 0.8rem 0 rgba(0, 0, 0, 0.12), 0 0.2rem 0.4rem 0 rgba(0, 0, 0, 0.08); </td>
            </tr>
            <tr>
              <th class="color-indigo">.shadow-focus-x3</th>
              <td> box-shadow: 0 1.5rem 3rem 0 rgba(0, 0, 0, 0.11), 0 0.5rem 1.5rem 0 rgba(0, 0, 0, 0.08); </td>
            </tr>
            <tr>
              <th class="color-indigo">.shadow-focus-x4</th>
              <td> box-shadow: 0 2rem 4rem 0 rgba(0, 0, 0, 0.16), 0 0.8rem 2rem 0 rgba(0, 0, 0, 0.08); </td>
            </tr>
            <tr>
              <th class="color-indigo">.shadow-focus-inner</th>
              <td> box-shadow: inset 0 0.2rem 0.4rem 0 rgba(0, 0, 0, 0.1); </td>
            </tr>
            <tr>
              <th class="color-indigo">.shadow-focus-outline</th>
              <td> box-shadow: 0 0 0 0.3rem rgba(52, 144, 220, 0.3);<br> position: relative;<br> z-index: 2; </td>
            </tr>
            <tr>
              <th class="color-indigo">.shadow-focus</th>
              <td> box-shadow: 0 0.2rem 0.4rem 0 rgba(0, 0, 0, 0.1); </td>
            </tr>
            <tr>
              <th class="color-indigo">.shadow-focus-x2</th>
              <td> box-shadow: 0 0.4rem 0.8rem 0 rgba(0, 0, 0, 0.12), 0 0.2rem 0.4rem 0 rgba(0, 0, 0, 0.08); </td>
            </tr>
            <tr>
              <th class="color-indigo">.shadow-focus-x3</th>
              <td> box-shadow: 0 1.5rem 3rem 0 rgba(0, 0, 0, 0.11), 0 0.5rem 1.5rem 0 rgba(0, 0, 0, 0.08); </td>
            </tr>
            <tr>
              <th class="color-indigo">.shadow-focus-x4</th>
              <td> box-shadow: 0 2rem 4rem 0 rgba(0, 0, 0, 0.16), 0 0.8rem 2rem 0 rgba(0, 0, 0, 0.08); </td>
            </tr>
            <tr>
              <th class="color-indigo">.shadow-focus-inner</th>
              <td> box-shadow: inset 0 0.2rem 0.4rem 0 rgba(0, 0, 0, 0.1); </td>
            </tr>
            <tr>
              <th class="color-indigo">.shadow-focus-outline</th>
              <td> box-shadow: 0 0 0 0.3rem rgba(52, 144, 220, 0.3);<br> position: relative;<br> z-index: 2; </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Classes End -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Outer</h3>
        <p>Adding <code class="color-indigo font-bold">.shadow</code> or <code class="color-indigo font-bold">.shadow-x{x}</code> sets the outer shadow of an element.</p>
        <div class="p-30 flex justify-around rounded bg-grey-ultralight">
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="w-100 h-100 shadow inline-flex items-center rounded bg-white color-grey-darkest"><span class="mx-auto"></span></div>
<div class="w-100 h-100 shadow-x2 inline-flex items-center rounded bg-white color-grey-darkest"><span class="mx-auto">x2</span></div>
<div class="w-100 h-100 shadow-x3 inline-flex items-center rounded bg-white color-grey-darkest"><span class="mx-auto">x3</span></div>
<div class="w-100 h-100 shadow-x4 inline-flex items-center rounded bg-white color-grey-darkest"><span class="mx-auto">x4</span></div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Inner</h3>
        <p>Adding <code class="color-indigo font-bold">.shadow-inner</code> sets the inner shadow of an element.</p>
        <div class="p-30 flex justify-around rounded bg-grey-ultralight">
          <div class="w-200 h-100 shadow-inner inline-flex items-center rounded bg-white color-grey-darkets"><span class="mx-auto">.shadow-inner</span></div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="w-200 h-100 shadow-inner inline-flex items-center rounded bg-white color-grey-darkets"><span class="mx-auto">.shadow-inner</span></div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Outline</h3>
        <p>Adding <code class="color-indigo font-bold">.shadow-outline</code> sets a shadow outline of an element.</p>
        <div class="p-30 center rounded bg-grey-ultralight">
          <button class="button rounded bg-grey-darkest bg-hover-teal">Button</button>
          <button class="button rounded bg-grey-darkest bg-hover-teal shadow-outline">Button</button>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<button class="button rounded bg-grey-darkest bg-hover-teal">Button</button>
<button class="button rounded bg-grey-darkest bg-hover-teal shadow-outline">Button</button>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Hover</h3>
        <p>Adding <code class="color-indigo font-bold">.shadow-hover-x{x}</code> sets an outer shadow on :hover of an element.</p>
        <div class="p-30 center rounded bg-grey-ultralight">
          <button class="button shadow-hover-x3 rounded bg-grey-darkest bg-hover-teal">.shadow-hover-x3</button>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<button class="button shadow-hover-x3 rounded bg-grey-darkest bg-hover-teal">.shadow-hover-x3</button>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Active</h3>
        <p>Adding <code class="color-indigo font-bold">.shadow-active-x{x}.active</code> sets an outer shadow when element is active.</p>
        <div class="p-30 center rounded bg-grey-ultralight">
          <button class="button shadow-active-x3 active rounded bg-grey-darkest bg-hover-teal bg-active-teal">.shadow-active-x3.active</button>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<button class="button shadow-active-x3 active rounded bg-grey-darkest bg-hover-teal bg-active-teal">.shadow-active-x3.active</button>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Focus</h3>
        <p>Adding <code class="color-indigo font-bold">.shadow-focus-x{x}</code> sets an outer shadow on :focus of an element.</p>
        <div class="p-30 center rounded bg-grey-ultralight">
          <button class="button shadow-focus-x3 rounded bg-grey-darkest bg-hover-teal bg-focus-teal">.shadow-focus-x3</button>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<button class="button shadow-focus-x3 rounded bg-grey-darkest bg-hover-teal bg-focus-teal">.shadow-focus-x3</button>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Responsive</h3>
        <p>Use the shadow responsive utility classes for specific breakpoints by adding the breakpoint name to the class, for example: <code class="color-indigo font-bold">.shadow-md-x2</code>. Shadow utitlity classes are created for the breakpoints listed below, but can be customised in <strong>_variables_timber.scss</strong> to add all breakpoints.</p>
        <ul class="list-none">
          <li><strong>lg</strong>: 1200px,</li>
          <li><strong>md</strong>: 992px,</li>
          <li><strong>sm</strong>: 768px</li>
        </ul>
        <div class="p-30 flex flex-wrap justify-around rounded bg-grey-ultralight">
          <div class="w-200 h-200 shadow-x4 shadow-lg-x3 shadow-md-x2 shadow-sm inline-flex items-center rounded bg-white color-grey-darkest"><span class="mx-auto">.shadow-x4<br>.shadow-lg-x3<br>.shadow-md-x2<br>.shadow-sm</span></div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="w-200 h-200 shadow-x4 shadow-lg-x3 shadow-md-x2 shadow-sm inline-flex items-center rounded bg-white color-grey-darkest"><span class="mx-auto">.shadow-x4<br>.shadow-lg-x3<br>.shadow-md-x2<br>.shadow-sm</span></div>
--></code></pre>
      </div>
      <!-- code -->
    </div>
    <!-- Content Inner End -->
		<!-- {{ sidebar }} -->
  </div>
</div>
