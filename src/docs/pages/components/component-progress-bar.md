---
title: Component - Progress Bar
menu_label: Progress Bar
layout: documentation
category: ["Components"]
markup_language: html
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <!-- Content Inner -->
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Component: Progress Bar</h1>
      <p>Timber provides simple progress bars, which employs <code class="color-indigo font-bold">_tm.horizon.js</code> to animate the bars and set the percentage widths. Using Horizon is not a requirement, and progress bar widths can instead be set using width utitlity classes. Read more on the Horizon component <a href="../components/component-animation.html">here</a>.</p>
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Basic</h3>
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="progress-bar-group">
            <span class="progress-bar-label">Photoshop - 40%</span>
            <div class="progress-bar rounded bg-grey-lightest">
              <div class="progress-bar-inner color-white" style="width:40%;"></div>
            </div>
            <span class="progress-bar-label">Illustrator - 80%</span>
            <div class="progress-bar rounded bg-grey-lightest">
              <div class="progress-bar-inner color-white" style="width:80%;"></div>
            </div>
            <span class="progress-bar-label">inDesign - 60%</span>
            <div class="progress-bar rounded bg-grey-lightest">
              <div class="progress-bar-inner color-white" style="width:60%;"></div>
            </div>
            <span class="progress-bar-label">Final Cut - 80%</span>
            <div class="progress-bar rounded bg-grey-lightest">
              <div class="progress-bar-inner color-white" style="width:80%;"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="p-30 rounded bg-grey-ultralight">
	<div class="progress-bar-group">
		<span class="progress-bar-label">Photoshop - 40%</span>
		<div class="progress-bar rounded bg-grey-lightest">
			<div class="progress-bar-inner color-white" style="width:40%;"></div>
		</div>
		<span class="progress-bar-label">Illustrator - 80%</span>
		<div class="progress-bar rounded bg-grey-lightest">
			<div class="progress-bar-inner color-white" style="width:80%;"></div>
		</div>
		<span class="progress-bar-label">inDesign - 60%</span>
		<div class="progress-bar rounded bg-grey-lightest">
			<div class="progress-bar-inner color-white" style="width:60%;"></div>
		</div>
		<span class="progress-bar-label">Final Cut - 80%</span>
		<div class="progress-bar rounded bg-grey-lightest">
			<div class="progress-bar-inner color-white" style="width:80%;"></div>
		</div>
	</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Enhanced With Utility Classes &amp; Horizon.js</h3>
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="progress-bar-group mb-0">
            <span class="progress-bar-label">Photoshop</span>
            <div class="progress-bar rounded bg-grey-lightest">
              <div class="progress-bar-inner horizon bg-pink color-white" data-animate-in="width:40%;duration:1000ms;easing:easeIn;"> 40% </div>
            </div>
            <span class="progress-bar-label">Illustrator</span>
            <div class="progress-bar rounded-full bg-grey-lightest">
              <div class="progress-bar-inner horizon bg-gradient-purple-haze color-white" data-animate-in="width:80%;duration:1000ms;easing:easeIn;"> 80% </div>
            </div>
            <span class="progress-bar-label">inDesign</span>
            <div class="progress-bar h-auto rounded bg-grey-darkest">
              <div class="progress-bar-inner py-5 px-20 horizon border-4 border-teal bg-transparent text-large color-teal font-bold" data-animate-in="width:78%;duration:1000ms;easing:easeIn;">
                <span class="horizon" data-animate-in="preset:slideInUpShort;duration:500ms;delay:1000ms;">78%</span>
              </div>
            </div>
            <span class="progress-bar-label">Final Cut</span>
            <div class="progress-bar h-auto rounded-full bg-grey-lightest">
              <div class="progress-bar-inner py-5 px-20 horizon justify-center bg-green text-large font-light color-white" data-animate-in="width:60.5%;duration:1000ms;easing:easeIn;">
                <span class="horizon" data-animate-in="preset:scaleOut;duration:500ms;delay:1000ms;">60.5%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="p-30 rounded bg-grey-ultralight">
	<div class="progress-bar-group mb-0">
		<span class="progress-bar-label">Photoshop</span>
		<div class="progress-bar rounded bg-grey-lightest">
			<div class="progress-bar-inner horizon bg-pink color-white"
				data-animate-in="width:40%;duration:1000ms;easing:easeIn;">
				40%
			</div>
		</div>
		<span class="progress-bar-label">Illustrator</span>
		<div class="progress-bar rounded-full bg-grey-lightest">
			<div class="progress-bar-inner horizon bg-gradient-purple-haze color-white"
				data-animate-in="width:80%;duration:1000ms;easing:easeIn;">
				80%
			</div>
		</div>
		<span class="progress-bar-label">inDesign</span>
		<div class="progress-bar h-auto rounded bg-grey-darkest">
			<div class="progress-bar-inner py-5 px-20 horizon border-4 border-teal bg-transparent text-large color-teal font-bold"
				data-animate-in="width:78%;duration:1000ms;easing:easeIn;">
				<span class="horizon" data-animate-in="preset:slideInUpShort;duration:500ms;delay:1000ms;">78%</span>
			</div>
		</div>
		<span class="progress-bar-label">Final Cut</span>
		<div class="progress-bar h-auto rounded-full bg-grey-lightest">
			<div class="progress-bar-inner py-5 px-20 horizon justify-center bg-green text-large font-light color-white"
				data-animate-in="width:60.5%;duration:1000ms;easing:easeIn;">
				<span class="horizon" data-animate-in="preset:scaleOut;duration:500ms;delay:1000ms;">60.5%</span>
			</div>
		</div>
	</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Multiple Bars</h3>
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="progress-bar-group hide-md">
            <div>
              <span class="progress-bar-label text-large">Breakdown</span>
            </div>
            <div class="progress-bar h-auto rounded bg-white hidden-md">
              <div class="progress-bar-inner py-20 bg-pink color-white horizon" data-animate-in="width:60%;duration:1000ms;easing:easeIn;">
                <span class="absolute horizon" data-animate-in="preset:slideInRightShort;duration:500ms;delay:800ms;">60% Human</span>
              </div>
              <div class="progress-bar-inner py-20 bg-teal color-white horizon" data-animate-in="width:30%;duration:1000ms;easing:easeIn;">
                <span class="absolute horizon" data-animate-in="preset:slideInRightShort;duration:500ms;delay:800ms;">30% Android</span>
              </div>
            </div>
          </div>
          <div class="progress-bar-group hidden block-md">
            <div class="progress-bar h-auto rounded bg-white">
              <div class="progress-bar-inner py-20 bg-pink color-white horizon" data-animate-in="width:60%;duration:1000ms;easing:easeIn;">
                <span class="absolute horizon" data-animate-in="preset:slideInRightShort;duration:500ms;delay:800ms;">60% Human</span>
              </div>
            </div>
            <div class="progress-bar h-auto rounded bg-white">
              <div class="progress-bar-inner py-20 bg-teal color-white horizon" data-animate-in="width:30%;duration:1000ms;easing:easeIn;">
                <span class="absolute horizon" data-animate-in="preset:slideInRightShort;duration:500ms;delay:800ms;">30% Android</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="p-30 rounded bg-grey-ultralight">
	<div class="progress-bar-group hide-md">
		<div>
			<span class="progress-bar-label text-large">Breakdown</span>
		</div>
		<div class="progress-bar h-auto rounded bg-white hidden-md">
			<div class="progress-bar-inner py-20 bg-pink color-white horizon" data-animate-in="width:60%;duration:1000ms;easing:easeIn;">
				<span class="absolute horizon" data-animate-in="preset:slideInRightShort;duration:500ms;delay:800ms;">60% Human</span>
			</div>
			<div class="progress-bar-inner py-20 bg-teal color-white horizon" data-animate-in="width:30%;duration:1000ms;easing:easeIn;">
				<span class="absolute horizon" data-animate-in="preset:slideInRightShort;duration:500ms;delay:800ms;">30% Android</span>
			</div>
		</div>
	</div>
	<div class="progress-bar-group hidden block-md">
		<div class="progress-bar h-auto rounded bg-white">
			<div class="progress-bar-inner py-20 bg-pink color-white horizon" data-animate-in="width:60%;duration:1000ms;easing:easeIn;">
				<span class="absolute horizon" data-animate-in="preset:slideInRightShort;duration:500ms;delay:800ms;">60% Human</span>
			</div>
		</div>
		<div class="progress-bar h-auto rounded bg-white">
			<div class="progress-bar-inner py-20 bg-teal color-white horizon" data-animate-in="width:30%;duration:1000ms;easing:easeIn;">
				<span class="absolute horizon" data-animate-in="preset:slideInRightShort;duration:500ms;delay:800ms;">30% Android</span>
			</div>
		</div>
	</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
    </div>
    <!-- Content Inner End -->
  </div>
</div>
