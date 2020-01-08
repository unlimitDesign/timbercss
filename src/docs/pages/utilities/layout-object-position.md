---
title: Layout - Object Position
menu_label: Object Position
layout: documentation
category: ["Utilities", "Layout"]
markup_language: html
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <!-- Content Inner -->
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Utility: Object Position</h1>
      <p>Controls the how a replaced element's content shuold be positioned within its' container.</p>
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
              <th class="color-indigo">.object-bottom</th>
              <td> object-position: bottom; </td>
            </tr>
            <tr>
              <th class="color-indigo">.object-center</th>
              <td> object-position: center; </td>
            </tr>
            <tr>
              <th class="color-indigo">.object-left-bottom</th>
              <td> object-position: left bottom; </td>
            </tr>
            <tr>
              <th class="color-indigo">.object-left-top</th>
              <td> object-position: left top; </td>
            </tr>
            <tr>
              <th class="color-indigo">.object-right</th>
              <td> object-position: right; </td>
            </tr>
            <tr>
              <th class="color-indigo">.object-right-bottom</th>
              <td> object-position: right bottom; </td>
            </tr>
            <tr>
              <th class="color-indigo">.object-right-top</th>
              <td> object-position: right top; </td>
            </tr>
            <tr>
              <th class="color-indigo">.object-top</th>
              <td> object-position: top; </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Classes End -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Positions</h3>
        <div class="flex flex-wrap justify-between p-30 bg-grey-ultralight">
          <div class="w-200 h-min-100 mb-10 rounded relative inline-block">
            <div class="h-full ml-100 absolute border-1 border-l border-solid border-white"></div>
            <div class="w-full mt-50 absolute border-1 border-t border-solid border-white"></div>
            <img class="w-full h-100 object-none bg-grey-light" src="https://images.unsplash.com/photo-1570023736098-515af38886ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80" alt="">
            <p class="text-tiny">Original</p>
          </div>
          <div class="w-200 h-min-100 mb-10 rounded relative inline-block">
            <div class="h-full ml-100 absolute border-1 border-l border-solid border-white"></div>
            <div class="w-full mt-50 absolute border-1 border-t border-solid border-white"></div>
            <img class="w-full h-100 object-none object-bottom bg-grey-light" src="https://images.unsplash.com/photo-1570023736098-515af38886ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80" alt="">
            <p class="text-tiny">.object-bottom</p>
          </div>
          <div class="w-200 h-min-100 mb-10 rounded relative inline-block">
            <div class="h-full ml-100 absolute border-1 border-l border-solid border-white"></div>
            <div class="w-full mt-50 absolute border-1 border-t border-solid border-white"></div>
            <img class="w-full h-100 object-none object-center bg-grey-light" src="https://images.unsplash.com/photo-1570023736098-515af38886ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80" alt="">
            <p class="text-tiny">.object-center</p>
          </div>
          <div class="w-200 h-min-100 mb-10 rounded relative inline-block">
            <div class="h-full ml-100 absolute border-1 border-l border-solid border-white"></div>
            <div class="w-full mt-50 absolute border-1 border-t border-solid border-white"></div>
            <img class="w-full h-100 object-none object-left-bottom bg-grey-light" src="https://images.unsplash.com/photo-1570023736098-515af38886ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80" alt="">
            <p class="text-tiny">.object-left-bottom</p>
          </div>
          <div class="w-200 h-min-100 mb-10 rounded relative inline-block">
            <div class="h-full ml-100 absolute border-1 border-l border-solid border-white"></div>
            <div class="w-full mt-50 absolute border-1 border-t border-solid border-white"></div>
            <img class="w-full h-100 object-none object-left-top bg-grey-light" src="https://images.unsplash.com/photo-1570023736098-515af38886ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80" alt="">
            <p class="text-tiny">.object-left-top</p>
          </div>
          <div class="w-200 h-min-100 mb-10 rounded relative inline-block">
            <div class="h-full ml-100 absolute border-1 border-l border-solid border-white"></div>
            <div class="w-full mt-50 absolute border-1 border-t border-solid border-white"></div>
            <img class="w-full h-100 object-none object-right bg-grey-light" src="https://images.unsplash.com/photo-1570023736098-515af38886ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80" alt="">
            <p class="text-tiny">.object-right</p>
          </div>
           <div class="w-200 h-min-100 mb-10 rounded relative inline-block">
            <div class="h-full ml-100 absolute border-1 border-l border-solid border-white"></div>
            <div class="w-full mt-50 absolute border-1 border-t border-solid border-white"></div>
            <img class="w-full h-100 object-none object-right-bottom bg-grey-light" src="https://images.unsplash.com/photo-1570023736098-515af38886ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80" alt="">
            <p class="text-tiny">.object-right-bottom</p>
          </div>
           <div class="w-200 h-min-100 mb-10 rounded relative inline-block">
            <div class="h-full ml-100 absolute border-1 border-l border-solid border-white"></div>
            <div class="w-full mt-50 absolute border-1 border-t border-solid border-white"></div>
            <img class="w-full h-100 object-none object-right-top bg-grey-light" src="https://images.unsplash.com/photo-1570023736098-515af38886ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80" alt="">
            <p class="text-tiny">.object-right-top</p>
          </div>
           <div class="w-200 h-min-100 mb-10 rounded relative inline-block">
            <div class="h-full ml-100 absolute border-1 border-l border-solid border-white"></div>
            <div class="w-full mt-50 absolute border-1 border-t border-solid border-white"></div>
            <img class="w-full h-100 object-none object-top bg-grey-light" src="https://images.unsplash.com/photo-1570023736098-515af38886ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80" alt="">
            <p class="text-tiny">.object-top</p>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<<img class="w-full h-100 object-none object-center bg-grey-light" src="https://images.unsplash.com/photo-1570023736098-515af38886ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80" alt="">
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Responsive</h3>
        <p>Use the object position responsive utility classes for specific breakpoints by adding the breakpoint name to the class, for example: <code class="border-grey-ultralight color-indigo font-bold">.object-md-top</code>. Object position utitlity classes are created for each breakpoint listed below, but can be customised in <strong>_variables_timber.scss</strong>.</p>
        <ul class="list-none">
          <li><strong>lg</strong>: 1200px,</li>
          <li><strong>md</strong>: 992px,</li>
          <li><strong>sm</strong>: 768px</li>
        </ul>
        <div class="flex flex-wrap justify-between p-30 bg-grey-ultralight">
          <div class="w-400 h-min-100 mb-10 rounded relative inline-block">
            <img class="w-full h-200 object-none object-top object-lg-bottom object-md-top-left object-sm-right-bottom bg-grey-light" src="https://images.unsplash.com/photo-1570023736098-515af38886ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80" alt="">
            <p class="text-tiny">.object-top.object-lg-bottom.object-md-top-left.object-sm-right-bottom</p>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<img class="w-full h-200 object-none object-top object-lg-bottom object-md-top-left object-sm-right-bottom bg-grey-light" src="https://images.unsplash.com/photo-1570023736098-515af38886ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80" alt="">
--></code></pre>
      </div>
      <!-- code -->
    </div>
    <!-- Content Inner End -->
		<!-- {{ sidebar }} -->
  </div>
</div>
