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
      <h1 class="font-light">Utility: Float</h1>
      <p>Controls the float of an element.</p>
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
              <th class="color-indigo">.float-l</th>
              <td> float: left; </td>
            </tr>
            <tr>
              <th class="color-indigo">.float-r</th>
              <td> float: right; </td>
            </tr>
            <tr>
              <th class="color-indigo">.clearfix</th>
              <td> &amp;:after {content: ""; display: table; clear: both;} </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Classes End -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Float Left</h3>
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="w-100 h-100 flex items-center float-l mr-20 rounded bg-grey-darkest color-white"><span class="mx-auto">.float-l</span></div>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et.</p>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="p-30 rounded bg-grey-ultralight">
	<div class="w-100 h-100 flex items-center float-l mr-20 rounded bg-grey-darkest color-white"><span class="mx-auto">.float-l</span></div>
	<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et.</p>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Float Right</h3>
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="w-100 h-100 flex items-center float-r mr-20 rounded bg-grey-darkest color-white"><span class="mx-auto">.float-r</span></div>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et.</p>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="p-30 rounded bg-grey-ultralight">
	<div class="w-100 h-100 flex items-center float-r mr-20 rounded bg-grey-darkest color-white"><span class="mx-auto">.float-r</span></div>
	<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et.</p>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Float None</h3>
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="w-100 h-100 flex items-center float-none mr-20 mb-20 rounded bg-grey-darkest color-white"><span class="mx-auto">.float-none</span></div>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et.</p>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="p-30 rounded bg-grey-ultralight">
	<div class="w-100 h-100 flex items-center float-none mr-20 mb-20 rounded bg-grey-darkest color-white"><span class="mx-auto">.float-none</span></div>
	<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et.</p>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Clearfix</h3>
        <p>Use .clearfix to force an element to self-clear floated children.</p>
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="p-10 rounded bg-grey-lightest">
            <div class="w-100 h-100 flex items-center float-l mr-20 rounded bg-grey-darker color-white"></div>
            <p>Without clearfix. Sed ut perspiciatis unde omnis iste natus error sit voluptatem .</p>
          </div>
        </div>
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="clearfix p-10 rounded bg-grey-lightest">
            <div class="w-100 h-100 flex items-center float-l mr-20 rounded bg-grey-darkest color-white"><span class="mx-auto">.clearfix</span></div>
            <p>With clearfix. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="p-30 rounded bg-grey-ultralight">
	<div class="p-10 rounded bg-grey-lightest">
		<div class="w-100 h-100 flex items-center float-l mr-20 rounded bg-grey-darkest color-white"></div>
		<p>Without clearfix. Sed ut perspiciatis unde omnis iste natus error sit voluptatem .</p>
	</div>
</div>
<div class="p-30 rounded bg-grey-ultralight">
	<div class="clearfix p-10 rounded bg-grey-lightest">
		<div class="w-100 h-100 flex items-center float-l mr-20 rounded bg-grey-darkest color-white"><span class="mx-auto">.clearfix</span></div>
		<p>With clearfix. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
	</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Responsive</h3>
        <p>Use the float responsive utility classes for specific breakpoints by adding the breakpoint name to the class, for example: <code class="border-grey-ultralight color-indigo font-bold">.float-md-none</code>. Float utitlity classes are created for each breakpoint listed below, but can be customised in <strong>_variables_timber.scss</strong>.</p>
        <ul class="list-none">
          <li><strong>lg</strong>: 1200px,</li>
          <li><strong>md</strong>: 992px,</li>
          <li><strong>sm</strong>: 768px</li>
        </ul>
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="w-100 h-100 flex items-center float-l float-lg-r float-md-none float-sm-l mr-20 mr-lg-0 ml-lg-20 mx-md-0 mr-sm-20 mb-10 rounded bg-grey-darkest color-white"></div>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et.</p>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="p-30 rounded bg-grey-ultralight">
	<div class="w-100 h-100 flex items-center float-l float-lg-r float-md-none float-sm-l mr-20 mr-lg-0 ml-lg-20 mx-md-0 mr-sm-20 mb-10 rounded bg-grey-darkest color-white"></div>
	<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et.</p>
</div>
--></code></pre>
      </div>
      <!-- code -->
    </div>
    <!-- Content Inner End -->
		<!-- {{ sidebar }} -->
  </div>
</div>
