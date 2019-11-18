---
title: Installing Timber
menu_label: Installation &amp; Build Process
layout: documentation
category: ["Getting Started"]
markup_language: html
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <!-- Content Inner -->
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Intstalling Timber</h1>
      <h3 class="font-light">Prerequisites</h3>
      <h5>Node.js and NPM</h5>
      <p>In order to use Timber for your project you need a few tools installed that help with the development and build process. This includes tools tha help with such tasks as compiling CSS, removing unused CSS, and minifying and bundling JavaScript files. You'll need <a href="https://nodejs.org/en/download/">Node.js</a> and NPM installed (Note that installing Node.js also installs NPM). To check if they're installed, open terminal and use these commands:</p>
      <!-- code -->
      <div class="rounded p-20 overflow-y-scroll mb-20 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--node -v
--></code></pre>
      </div>
      <!-- code -->
      <p>and</p>
      <!-- code -->
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--npm -v
--></code></pre>
      </div>
      <!-- code -->
      <h5>Git</h5>
      <p>To clone the Timber repo you need <a href="https://help.github.com/en/articles/set-up-git#setting-up-git">Git</a> installed, check if you have it, by running this command:</p>
      <!-- code -->
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--git --version
--></code></pre>
      </div>
      <!-- code -->
      <h3 class="font-light">Install</h3>
      <p>Timber consists of:</p>
      <ul>
        <li>a CLI tool</li>
        <li>The framework</li>
      </ul>
      <h5>Clone Timber</h5>
      <!-- code -->
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--git clone https://github.com/ThemeMountain/timbercss
--></code></pre>
      </div>
      <!-- code -->
      <h5>Change Directory</h5>
      <p>Go to the timbercss directory.</p>
      <!-- code -->
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--cd timbercss
--></code></pre>
      </div>
      <!-- code -->
      <h5>Install Dependencies</h5>
      <!-- code -->
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--npm install
--></code></pre>
      </div>
      <!-- code -->
      <h3 class="font-light">Development</h3>
      <p>Running the following command to launches the development server at <code class="color-indigo font-bold">http://0.0.0.0:3000/</code> and allows for live reloading in your browser. To change port, open webpack.dev.js and check the variable <code class="color-indigo font-bold">devServerPort</code> to your preferred port.</p>
      <!-- code -->
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--npm run build_lib_dev--></code></pre>
      </div>
      <!-- code -->
      <h3 class="font-light">Production</h3>
      <p>Runing the following command compiles the CSS, removes unused CSS and compiles and minifies all JavaScript files and ouputs it in the <code class="color-indigo font-bold">dist</code> folder.</p>
      <!-- code -->
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--npm run build_lib_prod--></code></pre>
      </div>
      <!-- code -->
      <hr class="mt-50">
      <a href="getting-started-javascript.html" title="Next Page" class="pagination-link button border-none flex flex-row-reverse justify-start justify-sm-between w-auto pr-0 m-0 right bg-transparent bg-hover-transparent left-sm color-grey color-hover-grey-darkest">
        <span class="icon-material mr-0 ml-10">chevron_right</span>
        <span class="mt-0 mr-20">
          <span class="leading-none text-tiny uppercase">Next</span>
          <span class="block text-large">JavaScript</span>
        </span>
      </a>
    </div>
    <!-- Content Inner End -->
		<!-- {{ sidebar }} -->
  </div>
</div>
