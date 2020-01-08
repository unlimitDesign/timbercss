---
title: Component - Pagination
menu_label: Pagination
layout: documentation
category: ["Components"]
markup_language: html
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <!-- Content Inner -->
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Component: Pagination</h1>
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Basic</h3>
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="row pt-0">
            <div class="col w-full pagination justify-center">
              <a href="#" title="Previous Page" class="pagination-link button"><span class="icon-material">chevron_left</span></a>
              <span class="page-links hidden-sm">
                <a href="#" title="Page X" class="pagination-link button active"><span>1</span></a>
                <a href="#" title="Page X" class="pagination-link button"><span>2</span></a>
                <a href="#" title="Page X" class="pagination-link button"><span>3</span></a>
                <a href="#" title="Page X" class="pagination-link button"><span>4</span></a>
                <a href="#" title="More Pages" class="pagination-link button"><span>...</span></a>
                <a href="#" title="Page X" class="pagination-link button"><span>12</span></a>
              </span>
              <a href="#" title="Next Page" class="pagination-link button"><span class="icon-material">chevron_right</span></a>
            </div>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="row pt-0">
	<div class="col w-full pagination justify-center">
		<a href="#" title="Previous Page" class="pagination-link button"><span class="icon-material">chevron_left</span></a>
		<span class="page-links hidden-sm">
			<a href="#" title="Page X" class="pagination-link button active"><span>1</a>
			<a href="#" title="Page X" class="pagination-link button"><span>2</a>
			<a href="#" title="Page X" class="pagination-link button"><span>3</a>
			<a href="#" title="Page X" class="pagination-link button"><span>4</a>
			<a href="#" title="More Pages" class="pagination-link button"><span>...</a>
			<a href="#" title="Page X" class="pagination-link button"><span>12</a>
		</span>
		<a href="#" title="Next Page" class="pagination-link button"><span class="icon-material">chevron_right</span></a>
	</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">With Labels</h3>
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="row pt-0">
            <div class="col w-full pagination justify-between justify-sm-center">
              <a href="#" title="Previous Page" class="pagination-link button with-label"><span class="icon-material">chevron_left</span><span>Prev</span></a>
              <span class="page-links hidden-sm">
                <a href="#" title="Page X" class="pagination-link button active"><span>1</span></a>
                <a href="#" title="Page X" class="pagination-link button"><span>2</span></a>
                <a href="#" title="Page X" class="pagination-link button"><span>3</span></a>
                <a href="#" title="Page X" class="pagination-link button"><span>4</span></a>
                <a href="#" title="More Pages" class="pagination-link button"><span>...</span></a>
                <a href="#" title="Page X" class="pagination-link button"><span>12</span></a>
              </span>
              <a href="#" title="Next Page" class="pagination-link button with-label"><span>Next</span><span class="icon-material">chevron_right</span></a>
            </div>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="row pt-0">
	<div class="col w-full pagination justify-between justify-sm-center">
		<a href="#" title="Previous Page" class="pagination-link button with-label"><span class="icon-material">chevron_left</span><span>Prev</span></a>
		<span class="page-links hidden-sm">
			<a href="#" title="Page X" class="pagination-link button active"><span>1</a>
			<a href="#" title="Page X" class="pagination-link button"><span>2</a>
			<a href="#" title="Page X" class="pagination-link button"><span>3</a>
			<a href="#" title="Page X" class="pagination-link button"><span>4</a>
			<a href="#" title="More Pages" class="pagination-link button"><span>...</a>
			<a href="#" title="Page X" class="pagination-link button"><span>12</a>
		</span>
		<a href="#" title="Next Page" class="pagination-link button with-label"><span>Next</span><span class="icon-material">chevron_right</span></a>
	</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Customised With Utitlity Classes</h3>
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="row pt-0">
            <div class="col w-full pagination justify-center">
              <a href="#" title="Previous Page" class="pagination-link button m-0 rounded-l bg-grey-lightest color-grey bg-hover-green color-hover-white"><span class="icon-material">chevron_left</span></a>
              <span class="page-links">
                <a href="#" title="Page X" class="pagination-link button m-0 rounded-none bg-grey-lightest color-grey bg-hover-green color-hover-white bg-active-indigo color-active-white active"><span>1</span></a>
                <a href="#" title="Page X" class="pagination-link button m-0 rounded-none bg-grey-lightest color-grey bg-hover-green color-hover-white"><span>2</span></a>
                <a href="#" title="Page X" class="pagination-link button m-0 rounded-none bg-grey-lightest color-grey bg-hover-green color-hover-white"><span>3</span></a>
                <a href="#" title="Page X" class="pagination-link button m-0 rounded-none bg-grey-lightest color-grey bg-hover-green color-hover-white"><span>4</span></a>
                <a href="#" title="More Pages" class="pagination-link button m-0 rounded-none bg-grey-lightest color-grey bg-hover-green color-hover-white"><span>...</span></a>
                <a href="#" title="Page X" class="pagination-link button m-0 rounded-none bg-grey-lightest color-grey bg-hover-green color-hover-white"><span>12</span></a>
              </span>
              <a href="#" title="Next Page" class="pagination-link button m-0 rounded-r bg-grey-lightest color-grey bg-hover-green color-hover-white"><span class="icon-material">chevron_right</span></a>
            </div>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="row pt-0">
	<div class="col w-full pagination justify-center">
		<a href="#" title="Previous Page" class="pagination-link button m-0 rounded-l bg-grey-lightest color-grey bg-hover-green color-hover-white"><span class="icon-material">chevron_left</span></a>
		<span class="page-links">
			<a href="#" title="Page X" class="pagination-link button m-0 rounded-none bg-grey-lightest color-grey bg-hover-green color-hover-white bg-active-indigo color-active-white active"><span>1</a>
			<a href="#" title="Page X" class="pagination-link button m-0 rounded-none bg-grey-lightest color-grey bg-hover-green color-hover-white"><span>2</a>
			<a href="#" title="Page X" class="pagination-link button m-0 rounded-none bg-grey-lightest color-grey bg-hover-green color-hover-white"><span>3</a>
			<a href="#" title="Page X" class="pagination-link button m-0 rounded-none bg-grey-lightest color-grey bg-hover-green color-hover-white"><span>4</a>
			<a href="#" title="More Pages" class="pagination-link button m-0 rounded-none bg-grey-lightest color-grey bg-hover-green color-hover-white"><span>...</a>
			<a href="#" title="Page X" class="pagination-link button m-0 rounded-none bg-grey-lightest color-grey bg-hover-green color-hover-white"><span>12</a>
		</span>
		<a href="#" title="Next Page" class="pagination-link button m-0 rounded-r bg-grey-lightest color-grey bg-hover-green color-hover-white"><span class="icon-material">chevron_right</span></a>
	</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="row">
            <div class="col w-full pagination py-40">
              <div class="row pt-0">
                <div class="col w-6/12">
                  <a href="#" title="Previous Page" class="pagination-link button border-none flex flex-sm-row-reverse justify-start justify-sm-between w-auto m-0 left bg-transparent bg-hover-transparent color-grey color-hover-grey-darkest">
                    <span class="icon-material">chevron_left</span>
                    <span class="mt-0 ml-20 ml-sm-0">
                      <span class="leading-none text-tiny uppercase">Previous</span>
                      <span class="w-200 block text-large truncate">Discover the history of Paris</span>
                    </span>
                  </a>
                </div>
                <div class="col w-full hidden block-sm">
                  <hr>
                </div>
                <div class="col w-6/12">
                  <a href="#" title="Next Page" class="pagination-link button border-none flex flex-row-reverse justify-start justify-sm-between w-auto m-0 right bg-transparent bg-hover-transparent left-sm color-grey color-hover-grey-darkest">
                    <span class="icon-material mr-0 ml-10">chevron_right</span>
                    <span class="mt-0 mr-20">
                      <span class="leading-none text-tiny uppercase">Next</span>
                      <span class="w-200 block text-large truncate">What to do in stormy weather</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="row">
	<div class="col w-full pagination py-40">
		<div class="row pt-0">
			<div class="col w-6/12">
				<a href="#" title="Previous Page" class="pagination-link button border-none flex flex-sm-row-reverse justify-start justify-sm-between w-auto m-0 left bg-transparent bg-hover-transparent color-grey color-hover-grey-darkest">
					<span class="icon-material">chevron_left</span>
					<span class="mt-0 ml-20 ml-sm-0">
						<span class="leading-none text-tiny uppercase">Previous</span>
						<span class="w-200 block text-large truncate">Discover the history of Paris</span>
					</span>
				</a>
			</div>
			<div class="col w-full hidden block-sm">
				<hr>
			</div>
			<div class="col w-6/12">
				<a href="#" title="Next Page" class="pagination-link button border-none flex flex-row-reverse justify-start justify-sm-between w-auto m-0 right bg-transparent bg-hover-transparent left-sm color-grey color-hover-grey-darkest">
					<span class="icon-material mr-0 ml-10">chevron_right</span>
					<span class="mt-0 mr-20">
						<span class="leading-none text-tiny uppercase">Next</span>
						<span class="w-200 block text-large truncate">What to do in stormy weather</span>
					</span>
				</a>
			</div>
		</div>
	</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <div class="bg-grey-ultralight">
          <div class="row">
            <div class="col w-full pagination">
              <div class="row fluid collapse">
                <div class="col w-5/12">
                  <a href="#" title="Previous Page" class="pagination-link button rounded-none py-60 px-60 flex flex-sm-row-reverse justify-end justify-sm-between w-auto m-0 right left-sm bg-grey-ultralight bg-hover-grey-darkest color-grey-darker color-hover-white">
                    <span class="icon-material">chevron_left</span>
                    <span class="mt-0 ml-20 ml-sm-0">
                      <span class="block text-small font-bold">Discover the history of Paris</span>
                      <span class="opacity-60">Previous</span>
                    </span>
                  </a>
                </div>
                <div class="col w-2/12">
                  <a href="#" title="Return Home" class="pagination-link button rounded-none py-60 px-60 flex w-full m-0 justify-sm-start bg-grey-lightest bg-hover-grey-darkest color-grey-darker color-hover-white">
                    <span class="h3">
                      <span class="block text-small font-bold">Return</span>
                      <span class="opacity-60">Home</span>
                    </span>
                  </a>
                </div>
                <div class="col w-5/12">
                  <a href="#" title="Next Page" class="pagination-link button rounded-none py-60 px-60 flex flex-row-reverse justify-end justify-sm-between w-auto m-0 left bg-grey-ultralight bg-hover-grey-darkest color-grey-darker color-hover-white">
                    <span class="icon-material mr-0 ml-10">chevron_right</span>
                    <span class="mt-0 mr-20">
                      <span class="block text-small font-bold">Stormy weather practices</span>
                      <span class="opacity-60">Next</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="row">
	<div class="col w-full pagination">
		<div class="row fluid collapse">
			<div class="col w-5/12">
				<a href="#" title="Previous Page" class="pagination-link button rounded-none py-60 px-60 flex flex-sm-row-reverse justify-end justify-sm-between w-auto m-0 right left-sm bg-grey-ultralight bg-hover-indigo color-grey color-hover-white">
					<span class="icon-material">chevron_left</span>
					<span class="text-large mt-0 ml-20">
						<small>Discover the history of Paris</small>
						<span>Previous</span>
					</span>
				</a>
			</div>
			<div class="col w-2/12">
				<a href="#" title="Return Home" class="pagination-link button rounded-none py-60 px-60 flex w-full m-0 justify-sm-start bg-grey-lightest bg-hover-indigo color-grey color-hover-white">
					<span class="h3">
						<small>Return</small>
						Home
					</span>
				</a>
			</div>
			<div class="col w-5/12">
				<a href="#" title="Next Page" class="pagination-link button rounded-none py-60 px-60 flex flex-row-reverse justify-end justify-sm-between w-auto m-0 left bg-grey-ultralight bg-hover-indigo color-grey color-hover-white">
					<span class="icon-material mr-0 ml-10">chevron_right</span>
					<span class="text-large mt-0 mr-20">
						<small>What to do in stormy weather</small>
						<span>Next</span>
					</span>
				</a>
			</div>
		</div>
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
