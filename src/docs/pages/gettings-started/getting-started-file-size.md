---
title: Filesize
menu_label: Managing File Size
layout: documentation
category: ["Gettings Started"]
markup_language: html
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <!-- Content Inner -->
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">File Size</h1>
      <h3 class="font-light">Reducing File Size</h3>
      <h5>Remove utilities, components &amp; blocks</h5>
      <p>It's highly unlikely that you'll require all utilities, components, and blocks for your project. As such, simply remove those you do not require. Read more about this under <a href="getting-started-theming.html">theming</a> and <a href="getting-started-javascript.html">JavaScript</a>.</p>
      <h5>Minification</h5>
      <p>For production, all CSS files and JavaScript files are minfied and ouput in the dist folder.</p>
      <h5>Purge CSS</h5>
      <p>To reduce file size further, the build process uses Purge CSS to delete all unused CSS not used in the project.</p>
      <!-- Classes -->
      <div class="table-scrollable">
        <table class="table size-md mb-0 rounded bg-white">
          <thead>
            <tr>
              <th></th>
              <th> File Size </th>
            </tr>
          </thead>
          <tbody class="font-mono">
            <tr>
              <th class="color-indigo">Timber Original</th>
              <td> 437kb </td>
            </tr>
            <tr>
              <th class="color-indigo">Timber Minified</th>
              <td> 325kb </td>
            </tr>
            <tr>
              <th class="color-indigo">After Purge CSS</th>
              <td> ⁓100kb </td>
            </tr>
            <tr>
              <th class="color-indigo">Gzip</th>
              <td> 10kb </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Classes End -->
    </div>
    <!-- Content Inner End -->
  </div>
</div>
