---
title: Layout - Position Utility
menu_label: Position
layout: documentation
category: ["Utilities", "Layout"]
markup_language: html
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <!-- Content Inner -->
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Utility: Position</h1>
      <p class="mb-10">Controls the position of an element, where x represents a number in the following scale:</p>
      <p><code class="color-indigo font-bold">auto, 0,1,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100</code></p>
      <p>Update the scale and switch from pixel to percentage values in <strong>_variables_timber.scss</strong></p>
      <!-- Classes -->
      <div class="table-scrollable h-350">
        <table class="table size-md rounded bg-white">
          <thead>
            <tr>
              <th> Class </th>
              <th> Value </th>
            </tr>
          </thead>
          <tbody class="font-mono">
            <tr>
              <th class="color-indigo">.relative</th>
              <td> position: relative; </td>
            </tr>
            <tr>
              <th class="color-indigo">.absolute</th>
              <td> position: absolute; </td>
            </tr>
            <tr>
              <th class="color-indigo">.fixed</th>
              <td> position: fixed; </td>
            </tr>
            <tr>
              <th class="color-indigo">.sticky</th>
              <td> position: sticky; </td>
            </tr>
            <tr>
              <th class="color-indigo">.pst-x</th>
              <td> position-top: x; </td>
            </tr>
            <tr>
              <th class="color-indigo">.psr-x</th>
              <td> position-right: x; </td>
            </tr>
            <tr>
              <th class="color-indigo">.psb-x</th>
              <td> position-bottom: x; </td>
            </tr>
            <tr>
              <th class="color-indigo">.psl-x</th>
              <td> position-left: x; </td>
            </tr>
            <tr>
              <th class="color-indigo">.-pst-x</th>
              <td> position-top: -x; </td>
            </tr>
            <tr>
              <th class="color-indigo">.-psr-x</th>
              <td> position-bottom: -x; </td>
            </tr>
            <tr>
              <th class="color-indigo">.-psb-x</th>
              <td> position-right: -x; </td>
            </tr>
            <tr>
              <th class="color-indigo">.-psl-x</th>
              <td> position-left: -x; </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Classes End -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Static</h3>
        <p>Adding <code class="color-indigo font-bold">.static</code> to an element means it will stick to the normal page flow. It also means, that position classes will have no effect on that element.</p>
        <div class="relative h-min-150 p-30 rounded bg-grey-ultralight">
          <div class="h-min-150 bg-grey-lighter rounded">
            <div class="w-150 static center p-30 rounded-tl bg-grey-darker color-white">Static</div>
            <div class="w-150 static center p-30 rounded-bl bg-grey-darkest color-white">Static</div>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="relative h-min-150">
	<div class="h-min-150 bg-grey-lighter rounded">
		<div class="w-150 static center p-30 rounded-tl bg-grey-darkest color-white">Static</div>
		<div class="w-150 static center p-30 rounded-bl bg-grey-darkest color-white">Static</div>
	</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Relative</h3>
        <p>Adding <code class="color-indigo font-bold">.relative</code> to an element means it maintains its' original position and remains in the flow of the document, just like the static value. Position classes can be added to move a relative element from its' original position.</p>
        <div class="relative h-min-150 p-30 rounded bg-grey-ultralight">
          <div class="h-min-150 bg-grey-lighter rounded">
            <div class="w-150 relative center p-30 psl-40 rounded bg-grey-darker color-white">Relative .psl-40</div>
            <div class="w-150 relative center p-30 psl-80 rounded bg-grey-darkest color-white">Relative .psl-80</div>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="relative h-min-150">
	<div class="h-min-150 bg-grey-lighter rounded">
		<div class="w-150 relative center p-30 psl-40 rounded bg-grey-darkest color-white">Relative .psl-40</div>
		<div class="w-150 relative center p-30 psl-80 rounded bg-grey-darkest color-white">Relative .psl-80</div>
	</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Absolute</h3>
        <p>Adding <code class="color-indigo font-bold">.absolute</code> means the element is removed from the flow of the document and other elements will behave as if it’s not there. Position classes can be added to move an absolute element from its' original position.</p>
        <div class="relative h-min-150 p-30 rounded bg-grey-ultralight">
          <div class="h-min-150 bg-grey-lighter rounded">
            <div class="w-150 static center p-30 rounded-tl bg-grey-dark color-white">Static</div>
            <div class="w-150 absolute center p-30 pst-100 psl-100 rounded bg-grey-darker color-white">Absolute .pst-100 .psl-100</div>
            <div class="w-150 static center p-30 rounded-bl bg-grey-darkest color-white">Static</div>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="relative h-min-150">
	<div class="h-min-150 bg-grey-lighter rounded">
		<div class="w-150 static center p-30 rounded-tl bg-grey-darkest color-white">Static</div>
		<div class="w-150 absolute center p-30 pst-100 psl-100 rounded bg-grey-darkest color-white">Absolute .pst-100 .psl-100</div>
		<div class="w-150 static center p-30 rounded-bl bg-green color-white">Static</div>
	</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Fixed</h3>
        <p>Adding <code class="color-indigo font-bold">.fixed</code> means the element is removed from the flow of the document like absolutely positioned elements. Fixed positioned elements are relative to the document, not any particular parent, and are unaffected by scrolling. Position classes can be added to move a fixed element from its' original position.</p>
        <div class="relative h-min-250 overflow-hidden rounded">
          <div class="h-250 bg-grey-ultralight rounded overflow-y-scroll">
            <div class="h-min-400">
              <div class="w-full absolute center p-30 z-40 rounded-tl rounded-tr bg-grey-darkest color-white">Fixed</div>
              <div class="relative pst-100 p-30">
                <h4>Scroll down</h4>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="relative h-min-250 overflow-hidden">
	<div class="h-250 bg-grey-ultralight rounded overflow-y-scroll">
		<div class="h-min-400">
			<div class="w-full absolute center p-30 z-40 rounded-tl rounded-tr bg-grey-darkest color-white">Fixed</div>
			<div class="relative pst-100 p-30">
				<h4>Scroll down</h4>
				<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
				<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
			</div>
		</div>
	</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Sticky</h3>
        <p>Adding <code class="color-indigo font-bold">.sticky</code> means the element is treated like a relative value until the scroll location of the viewport reaches a specified threshold, at which point the element takes a fixed position where it is told to stick. Position classes can be added to stick the element at a particular position.</p>
        <div class="relative h-min-150 p-30 rounded bg-grey-ultralight">
          <div class="h-300 rounded overflow-y-scroll">
            <div>
              <div class="sticky center p-30 rounded-t bg-grey-dark color-white">Sticky</div>
              <h4>Scroll down</h4>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
            </div>
            <div>
              <div class="sticky center p-30 bg-grey-darker color-white">Sticky</div>
              <p class="mt-20">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
            </div>
            <div>
              <div class="sticky center p-30 bg-grey-darkest color-white">Sticky</div>
              <p class="mt-20">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="relative h-min-150">
	<div class="h-300 rounded overflow-y-scroll">
		<div>
			<div class="sticky center p-30 rounded-t bg-grey-darkest color-white">Sticky</div>
			<h4>Scroll down</h4>
			<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
		</div>
		<div>
			<div class="sticky center p-30 bg-green color-white">Sticky</div>
			<p class="mt-20">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
		</div>
		<div>
			<div class="sticky center p-30 bg-grey-darkest color-white">Sticky</div>
			<p class="mt-20">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
		</div>
	</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Responsive</h3>
        <p>Use the position responsive utility classes for specific breakpoints by adding the breakpoint name to the class, for example: <code class="color-indigo font-bold">.sticky-md</code>. Position utitlity classes are created for the breakpoints listed below, but can be customised in <strong>_variables_timber.scss</strong> to include all breakpoints. Pixel position utility classes are not created by default for the breakpoints below, but can be added in _variable.scss</p>
        <ul class="list-none">
          <li><strong>lg</strong>: 1200px,</li>
          <li><strong>md</strong>: 992px,</li>
          <li><strong>sm</strong>: 768px</li>
        </ul>
        <div class="relative h-min-150 p-30 rounded bg-grey-ultralight">
          <div class="h-min-150 rounded">
            <div class="w-150 static center p-30 rounded-tl bg-grey-dark color-white">Static</div>
            <div class="w-400 sticky absolute-lg static-md absolute-sm center p-30 pst-100 psl-100 rounded bg-grey-darker color-white">.sticky.absolute-lg.static-md.absolute-sm</div>
            <div class="w-150 static center p-30 rounded-bl bg-grey-darkest color-white">Static</div>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="relative h-min-150">
	<div class="h-min-150 bg-grey-lighter rounded">
		<div class="w-150 static center p-30 rounded-tl bg-grey-darkest color-white">Static</div>
		<div class="w-400 sticky absolute-lg static-md absolute-sm center p-30 pst-100 psl-100 rounded bg-grey-darkest color-white">.sticky.absolute-lg.static-md.absolute-sm</div>
		<div class="w-150 static center p-30 rounded-bl bg-green color-white">Static</div>
	</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
    </div>
    <!-- Content Inner End -->
		<!-- {{ sidebar }} -->
  </div>
</div>
