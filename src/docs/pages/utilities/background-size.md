---
title: Background - Background Size Utility
menu_label: Background Size
layout: documentation
category: ["Utilities", "Background"]
markup_language: html
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Utility: Background Size</h1>
      <p>Controls the background size of an element.</p>
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
              <th class="color-indigo">.bg-auto</th>
              <td> background-size: auto; </td>
            </tr>
            <tr>
              <th class="color-indigo">.bg-cover</th>
              <td> background-size: cover; </td>
            </tr>
            <tr>
              <th class="color-indigo">.bg-contain</th>
              <td> background-size: contain; </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Classes End -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Auto</h3>
        <p>Adding <code class="color-indigo font-bold">.bg-auto</code> tells the browser to automatically calculate the size based on the actual size of the image and the aspect ratio.</p>
        <div class="bg-auto bg-center h-min-250 p-30 rounded bg-grey-ultralight" style="background-image:url(https://images.unsplash.com/photo-1564928275797-a7ab0852021d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2341&amp;q=80f1a522d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=934&amp;q=80)">
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="bg-auto bg-center h-min-250" style="background-image:url(https://images.unsplash.com/photo-1564928275797-a7ab0852021d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2341&q=80f1a522d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80)">
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Cover</h3>
        <p>Adding <code class="color-indigo font-bold">.bg-cover</code> tells the browser to make sure the image always covers the entire container, even if it has to stretch the image or crop it.</p>
        <div class="bg-cover bg-center h-min-250 p-30 rounded bg-grey-ultralight" style="background-image:url(https://images.unsplash.com/photo-1564928275797-a7ab0852021d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2341&amp;q=80f1a522d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=934&amp;q=80)">
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="bg-cover bg-center h-min-250" style="background-image:url(https://images.unsplash.com/photo-1564928275797-a7ab0852021d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2341&q=80f1a522d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80)">
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Contain</h3>
        <p>Adding <code class="color-indigo font-bold">.bg-contain</code> tells the browser to make sure the image always remains fully visible within its container.</p>
        <div class="bg-contain bg-no-repeat bg-center h-min-250 p-30 rounded bg-grey-ultralight" style="background-image:url(https://images.unsplash.com/photo-1564928275797-a7ab0852021d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2341&amp;q=80f1a522d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=934&amp;q=80)">
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="bg-contain bg-center h-min-250" style="background-image:url(https://images.unsplash.com/photo-1564928275797-a7ab0852021d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2341&q=80f1a522d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80)">
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Responsive</h3>
        <p>Use the background size responsive utility classes for specific breakpoints by adding the breakpoint name to the class, for example: <code class="color-indigo font-bold">.bg-md-scroll</code>. Background size utitlity classes are created for the breakpoints listed below, but can be customised in <strong>_variables_timber.scss</strong> to include all breakpoints.</p>
        <ul class="list-none">
          <li><strong>lg</strong>: 1200px,</li>
          <li><strong>md</strong>: 992px,</li>
          <li><strong>sm</strong>: 768px</li>
        </ul>
        <div class="bg-auto bg-lg-cover bg-md-contain bg-sm-auto bg-center bg-no-repeat h-min-250 p-30 rounded bg-grey-ultralight" style="background-image:url(https://images.unsplash.com/photo-1564928275797-a7ab0852021d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2341&amp;q=80f1a522d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=934&amp;q=80)">
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="bg-auto bg-lg-cover bg-md-contain bg-sm-auto bg-center bg-no-repeat h-min-250" style="background-image:url(https://images.unsplash.com/photo-1564928275797-a7ab0852021d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2341&q=80f1a522d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80)">
</div>
--></code></pre>
      </div>
      <!-- code -->
    </div>
    <!-- Content Inner End -->
		<!-- {{ sidebar }} -->
  </div>
</div>
