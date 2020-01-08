---
title: Layout - Object Fit
menu_label: Object Fit
layout: documentation
category: ["Utilities", "Layout"]
markup_language: html
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <!-- Content Inner -->
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Utility: Object Fit</h1>
      <p>Controls the how a replaced element's content shuold be resized.</p>
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
              <th class="color-indigo">.object-contain</th>
              <td> object-fit: contain; </td>
            </tr>
             <tr>
              <th class="color-indigo">.object-cover</th>
              <td> object-fit: cover; </td>
            </tr>
             <tr>
              <th class="color-indigo">.object-fill</th>
              <td> object-fit: fill; </td>
            </tr>
             <tr>
              <th class="color-indigo">.object-none</th>
              <td> object-fit: none; </td>
            </tr>
             <tr>
              <th class="color-indigo">.object-scale-down</th>
              <td> object-fit: scale-down; </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Classes End -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Contain</h3>
        <div class="p-30 rounded bg-grey-ultralight">
          <img class="w-full h-200 object-contain" src="https://images.unsplash.com/photo-1570023736098-515af38886ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80" alt="">
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="p-30 rounded bg-grey-ultralight">
      <img class="w-full h-200 object-contain" src="https://images.unsplash.com/photo-1570023736098-515af38886ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80" alt="">
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Cover</h3>
        <div class="p-30 rounded bg-grey-ultralight">
          <img class="w-full h-200 object-cover" src="https://images.unsplash.com/photo-1570023736098-515af38886ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80" alt="">
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="p-30 rounded bg-grey-ultralight">
      <img class="w-full h-200 object-cover" src="https://images.unsplash.com/photo-1570023736098-515af38886ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80" alt="">
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Fill</h3>
        <div class="p-30 rounded bg-grey-ultralight">
          <img class="w-full h-200 object-fill" src="https://images.unsplash.com/photo-1570023736098-515af38886ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80" alt="">
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="p-30 rounded bg-grey-ultralight">
      <img class="w-full h-200 object-fill" src="https://images.unsplash.com/photo-1570023736098-515af38886ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80" alt="">
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">None</h3>
        <div class="p-30 rounded bg-grey-ultralight">
          <img class="w-full h-200 object-cover" src="https://images.unsplash.com/photo-1570023736098-515af38886ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80" alt="">
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="p-30 rounded bg-grey-ultralight">
      <img class="w-full h-200 object-cover" src="https://images.unsplash.com/photo-1570023736098-515af38886ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80" alt="">
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Scale Down</h3>
        <div class="p-30 rounded bg-grey-ultralight">
          <img class="w-full h-200 object-scale-down" src="https://images.unsplash.com/photo-1570023736098-515af38886ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80" alt="">
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="p-30 rounded bg-grey-ultralight">
      <img class="w-full h-200 object-scale-down" src="https://images.unsplash.com/photo-1570023736098-515af38886ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80" alt="">
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Responsive</h3>
        <p>Use the obect fit responsive utility classes for specific breakpoints by adding the breakpoint name to the class, for example: <code class="color-indigo font-bold">.object-md-fit</code>. Object fit utitlity classes are created for the breakpoints listed below, but can be customised in <strong>_variables_timber.scss</strong> to include all breakpoints.</p>
        <ul class="list-none">
          <li><strong>lg</strong>: 1200px,</li>
          <li><strong>md</strong>: 992px,</li>
          <li><strong>sm</strong>: 768px</li>
        </ul>
        <div class="p-30 rounded bg-grey-ultralight">
          <img class="w-full h-200 object-contain object-lg-fill object-md-contain object-sm-none" src="https://images.unsplash.com/photo-1570023736098-515af38886ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80" alt="">
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="p-30 rounded bg-grey-ultralight">
      <img class="w-full h-200 object-contain object-lg-fill object-md-contain object-sm-none" src="https://images.unsplash.com/photo-1570023736098-515af38886ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80" alt="">
</div>
--></code></pre>
      </div>
      <!-- code -->
    </div>
    <!-- Content Inner End -->
		<!-- {{ sidebar }} -->
  </div>
</div>
