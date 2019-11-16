---
title: Typography - Word Break
menu_label: Word Break
layout: documentation
category: ["Utilities","Typography"]
markup_language: html
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Utility: Word Break</h1>
      <p class="mb-10">Controls the white space property of an element.</p>
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
              <th class="color-indigo">.break-normal</th>
              <td> word-break: normal; </td>
            </tr>
            <tr>
              <th class="color-indigo">.break-words</th>
              <td> word-break: break-word; </td>
            </tr>
            <tr>
              <th class="color-indigo">.break-all</th>
              <td> word-break: all; </td>
            </tr>
            <tr>
              <th class="color-indigo">.truncate</th>
              <td> overflow: hidden;<br> text-overflow: ellipsis;<br> white-space: nowrap; </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Classes End -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Normal</h3>
        <p>Add <code class="color-indigo font-bold">.break-normal</code> to use the default rules for word breaking.</p>
        <div class="p-30 rounded bg-grey-ultralight">
          <p class="break-normal lead w-300 p-30 mb-0 rounded bg-grey-lighter"><strong>Methionylthreonylthreonylglutaminylarginyl</strong> isoleucine' is the chemical name of 'titin' (also known as 'connectin') - the largest known protein.</p>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<p class="break-normal w-300"><strong>Methionylthreonylthreonylglutaminylarginyl</strong> isoleucine' is the chemical name of 'titin' (also known as 'connectin') - the largest known protein.</p>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Break Words</h3>
        <p>Add <code class="color-indigo font-bold">.break-words</code> to break words when needed.</p>
        <div class="p-30 rounded bg-grey-ultralight">
          <p class="break-words lead w-300 p-30 mb-0 rounded bg-grey-lighter"><strong>Methionylthreonylthreonylglutaminylarginyl</strong> isoleucine' is the chemical name of 'titin' (also known as 'connectin') - the largest known protein.</p>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<p class="break-words w-300"><strong>Methionylthreonylthreonylglutaminylarginyl</strong> isoleucine' is the chemical name of 'titin' (also known as 'connectin') - the largest known protein.</p>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Break All</h3>
        <p>Add <code class="color-indigo font-bold">.break-all</code> to break any word/letter onto the next line.</p>
        <div class="p-30 rounded bg-grey-ultralight">
          <p class="break-words lead w-300 p-30 mb-0 rounded bg-grey-lighter"><strong>Methionylthreonylthreonylglutaminylarginyl</strong> isoleucine' is the chemical name of 'titin' (also known as 'connectin') - the largest known protein.</p>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<p class="break-words w-300"><strong>Methionylthreonylthreonylglutaminylarginyl</strong> isoleucine' is the chemical name of 'titin' (also known as 'connectin') - the largest known protein.</p>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Truncate</h3>
        <p>Add <code class="color-indigo font-bold">.truncate</code> to truncate overflowing text.</p>
        <div class="p-30 rounded bg-grey-ultralight">
          <p class="truncate lead w-300 p-30 mb-0 rounded bg-grey-lighter"><strong>Methionylthreonylthreonylglutaminylarginyl</strong> isoleucine' is the chemical name of 'titin' (also known as 'connectin') - the largest known protein..</p>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<p class="truncate w-300"><strong>Methionylthreonylthreonylglutaminylarginyl</strong> isoleucine' is the chemical name of 'titin' (also known as 'connectin') - the largest known protein..</p>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Responsive</h3>
        <p>Use the wordbreak responsive utility classes for specific breakpoints by adding the breakpoint name to the class, for example: <code class="color-indigo font-bold">.break-md-words</code>. Wordbreak utitlity classes are created for the breakpoints listed below, but can be customised in <strong>_variables_timber.scss</strong> to include all breakpoints.</p>
        <ul class="list-none">
          <li><strong>lg</strong>: 1200px,</li>
          <li><strong>md</strong>: 992px,</li>
          <li><strong>sm</strong>: 768px</li>
        </ul>
        <div class="p-30 rounded bg-grey-ultralight">
          <p class="break-normal break-lg-words break-md-all truncate-sm lead w-300 p-30 mb-0 rounded bg-grey-lighter"><strong>Methionylthreonylthreonylglutaminylarginyl</strong> isoleucine' is the chemical name of 'titin' (also known as 'connectin') - the largest known protein.</p>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<p class="break-normal break-lg-words break-md-all truncate-sm w-300"><strong>Methionylthreonylthreonylglutaminylarginyl</strong> isoleucine' is the chemical name of 'titin' (also known as 'connectin') - the largest known protein.</p>
--></code></pre>
      </div>
      <!-- code -->
    </div>
    <!-- Content Inner End -->
  </div>
</div>
