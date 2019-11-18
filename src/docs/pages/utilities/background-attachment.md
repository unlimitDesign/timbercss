---
title: Background - Background Attachment Utility
menu_label: Background Attachment
layout: documentation
category: ["Utilities", "Background"]
markup_language: html
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Utility: Background Attachment</h1>
      <p>Controls the background attachment of an element.</p>
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
              <th class="color-indigo">.bg-fixed</th>
              <td> background-attachment: fixed; </td>
            </tr>
            <tr>
              <th class="color-indigo">.bg-local</th>
              <td> background-attachment: local; </td>
            </tr>
            <tr>
              <th class="color-indigo">.bg-scroll</th>
              <td> background-attachment: scroll; </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Classes End -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Fixed</h3>
        <p>Adding <code class="color-indigo font-bold">.bg-fixed</code> sets the background attachment of an element to fixed.</p>
        <div class="bg-fixed bg-center h-min-250 p-30 rounded bg-grey-ultralight" style="background-image:url(https://images.unsplash.com/photo-1564928275797-a7ab0852021d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2341&amp;q=80f1a522d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=934&amp;q=80)">
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="bg-fixed bg-center h-min-250" style="background-image:url(https://images.unsplash.com/photo-1564928275797-a7ab0852021d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2341&q=80f1a522d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80)">
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Local</h3>
        <p>Adding <code class="color-indigo font-bold">.bg-local</code> sets the background attachment of an element to local. This mean it scrolls both with the main view and the local view. </p>
        <div class="bg-local bg-center overflow-y-scroll h-250 p-30 rounded bg-grey-ultralight" style="background-image:url(https://images.unsplash.com/photo-1564928275797-a7ab0852021d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2341&amp;q=80f1a522d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=934&amp;q=80)">
          <div class="h-400"></div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="bg-local bg-center overflow-y-scroll h-250" style="background-image:url(https://images.unsplash.com/photo-1564928275797-a7ab0852021d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2341&q=80f1a522d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80)">
	<div class="h-400"></div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Scroll</h3>
        <p>Adding <code class="color-indigo font-bold">.bg-scroll</code> sets the background attachment of an element to scroll. This mean it will scrolls with the main view, but stay fixed inside the local view.</p>
        <div class="bg-scroll bg-center overflow-y-scroll h-250 p-30 rounded bg-grey-ultralight" style="background-image:url(https://images.unsplash.com/photo-1564928275797-a7ab0852021d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2341&amp;q=80f1a522d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=934&amp;q=80)">
          <div class="h-400"></div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="bg-scroll bg-center overflow-y-scroll h-250 style="background-image:url(https://images.unsplash.com/photo-1564928275797-a7ab0852021d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2341&q=80f1a522d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80)">
	<div class="h-400"></div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Responsive</h3>
        <p>Use the background attachement responsive utility classes for specific breakpoints by adding the breakpoint name to the class, for example: <code class="color-indigo font-bold">.bg-md-scroll</code>. Background attachement utitlity classes are created for the breakpoints listed below, but can be customised in <strong>_variables_timber.scss</strong> to include all breakpoints.</p>
        <ul class="list-none">
          <li><strong>lg</strong>: 1200px,</li>
          <li><strong>md</strong>: 992px,</li>
          <li><strong>sm</strong>: 768px</li>
        </ul>
        <div class="bg-scroll bg-lg-fixed bg-md-local bg-sm-fixed bg-center overflow-y-scroll h-250 p-30 rounded bg-grey-ultralight" style="background-image:url(https://images.unsplash.com/photo-1564928275797-a7ab0852021d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2341&amp;q=80f1a522d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=934&amp;q=80)">
          <div class="h-400"></div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="bg-scroll bg-lg-fixed bg-md-local bg-sm-fixed bg-center overflow-y-scroll h-250" style="background-image:url(https://images.unsplash.com/photo-1564928275797-a7ab0852021d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2341&q=80f1a522d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80)">
	<div class="h-400"></div>
</div>
--></code></pre>
      </div>
      <!-- code -->
    </div>
    <!-- Content Inner End -->
		<!-- {{ sidebar }} -->
  </div>
</div>
