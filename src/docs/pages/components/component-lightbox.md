---
title: Component - Lightbox
menu_label: Lightbox
layout: documentation
category: ["Components"]
markup_language: html
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <!-- Content Inner -->
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Component: Lightbox</h1>
      <div class="tabs rounded">
        <div class="tab-nav button-nav left">
          <a href="#tabs-1-pane-1" class="button border-b border-2 active bg-transparent bg-hover-transparent border-grey-lightest border-hover-grey-lightest color-grey-dark color-hover-grey-darkest border-active-primary color-active-primary">Requirements</a>
          <a href="#tabs-1-pane-2" class="button border-b border-2 bg-transparent bg-hover-transparent border-grey-lightest border-hover-grey-lightest color-grey-dark color-hover-grey-darkest border-active-primary color-active-primary">API</a>
          <a href="#tabs-1-pane-3" class="button border-b border-2 bg-transparent bg-hover-transparent border-grey-lightest border-hover-grey-lightest color-grey-dark color-hover-grey-darkest border-active-primary color-active-primary">Settings</a>
          <a href="#tabs-1-pane-4" class="button border-b border-2 bg-transparent bg-hover-transparent border-grey-lightest border-hover-grey-lightest color-grey-dark color-hover-grey-darkest border-active-primary color-active-primary">CallBacks</a>
          <a href="#tabs-1-pane-5" class="button border-b border-2 bg-transparent bg-hover-transparent border-grey-lightest border-hover-grey-lightest color-grey-dark color-hover-grey-darkest border-active-primary color-active-primary">Classes &amp; Data Attributes</a>
        </div>
        <div class="tab-panes px-0 rounded rounded-sm-b border-transparent">
          <div id="tabs-1-pane-1" class="active animate-in">
            <div class="tab-content">
              <p class="mb-0">The lightbox component requires <code class="color-indigo font-bold">_tm.lightbox.js</code>. The lighbox is by default imported in <code class="color-indigo font-bold">_tm.core.js</code>, which means creating an instance of the core creates an instance of the lightbox component. To exclude lightboxs, open<code class="color-indigo font-bold">_tm.core.js</code> and comment <code class="color-indigo font-bold">import tmLightbox from './components/_tm.lightbox.js';</code>.</p>
            </div>
          </div>
          <div id="tabs-1-pane-2">
            <div class="tab-content">
              <!-- Classes -->
              <div class="table-scrollable">
                <table class="table size-md mb-0 rounded bg-white">
                  <thead>
                    <tr>
                      <th> Method </th>
                      <th> Example </th>
                    </tr>
                  </thead>
                  <tbody class="font-mono">
                    <tr>
                      <th class="color-indigo">initialize()</th>
                      <td> Initializes the plugin. </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">refresh()</th>
                      <td> Refreshes the plugin. Useful when new elements have been added to the page. </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">destroy()</th>
                      <td> Destroys the instance of the plugin. </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- Classes End -->
              <!-- code -->
              <h6 class="uppercase">As a standalone plugin</h6>
              <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
                <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--let lightbox = new tmLightbox('.lightbox');
lightbox.method();
--></code></pre>
              </div>
              <!-- code -->
              <!-- code -->
              <h6 class="uppercase">As a part of the core</h6>
              <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
                <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--timber.lightbox.method();
--></code></pre>
              </div>
              <!-- code -->
            </div>
          </div>
          <div id="tabs-1-pane-3">
            <div class="tab-content">
              <!-- Classes -->
              <div class="table-scrollable">
                <table class="table size-md mb-0 rounded bg-white">
                  <thead>
                    <tr>
                      <th> Callback </th>
                      <th> Value </th>
                      <th> Description </th>
                    </tr>
                  </thead>
                  <tbody class="font-mono">
                    <tr>
                      <th class="color-indigo">contentAnimation:</th>
                      <td> 'slide' </td>
                      <td> Accepts 'slide' or 'fade' </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">slideAmount:</th>
                      <td> 100 </td>
                      <td> Integer representing pixel amount </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">easing:</th>
                      <td> 'easeInOutQuint' </td>
                      <td> Cubic-bezier easing function </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">duration:</th>
                      <td> 400 </td>
                      <td> Milliseconds </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">usePreloader:</th>
                      <td> true </td>
                      <td> Boolean, wheter prelodaer should be used </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">preloaderMarkup:</th>
                      <td> '' </td>
                      <td> Custom preloader markup </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">maxVideoWidth:</th>
                      <td> 1140 </td>
                      <td> Integer representing max width </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">videRatio:</th>
                      <td> 1.778 </td>
                      <td> Integer </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">navArrows:</th>
                      <td> true </td>
                      <td> Boolean </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">navKeyboard:</th>
                      <td> true </td>
                      <td> Boolean </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">navThumbnails:</th>
                      <td> true </td>
                      <td> Boolean </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">navZoom:</th>
                      <td> true </td>
                      <td> Boolean </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">navExit:</th>
                      <td> true </td>
                      <td> Boolean </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">overlayClickClose:</th>
                      <td> true </td>
                      <td> Boolean </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">zoomDuration:</th>
                      <td> 400 </td>
                      <td> Milliseconds </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">extraClasses:</th>
                      <td> '' </td>
                      <td> Class names to be added to the lightbox wrapper </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- Classes End -->
              <!-- code -->
              <h6 class="uppercase">As a standalone plugin</h6>
              <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
                <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--let lightbox = new tmLightbox('.lightbox',{
    contentAnimation: 'slide',
    navThumbnails: false
});
--></code></pre>
              </div>
              <!-- code -->
              <!-- code -->
              <h6 class="uppercase">As a part of the core</h6>
              <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
                <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--timber.module.lightbox.settings.contentAnimation = 'slide';
timber.module.lightbox.settings.navThumbnails = false;
--></code></pre>
              </div>
              <!-- code -->
            </div>
          </div>
          <div id="tabs-1-pane-4">
            <div class="tab-content">
              <!-- Classes -->
              <div class="table-scrollable">
                <table class="table size-md mb-0 rounded bg-white">
                  <thead>
                    <tr>
                      <th> Callback </th>
                      <th> Value </th>
                    </tr>
                  </thead>
                  <tbody class="font-mono">
                    <tr>
                      <th class="color-indigo">initialized: function(){}</th>
                      <td> Called once plugin has been initialized. </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">onLoaded: function(){}</th>
                      <td> Called once media is loaded. </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">closed: function(){}</th>
                      <td> Called once the lightbox is closed. </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">destroyed: function(){}</th>
                      <td> Called once plugin has been destroyed. </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- Classes End -->
              <!-- code -->
              <h6 class="uppercase">As a standalone plugin</h6>
              <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
                <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--let lightbox = new tmLightbox({
    callback:function(){}
});
--></code></pre>
              </div>
              <!-- code -->
              <!-- code -->
              <h6 class="uppercase">As a part of the core</h6>
              <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
                <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--timber.module.lightbox.settings.callback = function(){};
--></code></pre>
              </div>
              <!-- code -->
            </div>
          </div>
          <div id="tabs-1-pane-5">
            <div class="tab-content">
              <!-- Classes -->
              <div class="table-scrollable">
                <table class="table size-md mb-0 rounded bg-white">
                  <thead>
                    <tr>
                      <th> Classes &amp; Data Attributes </th>
                      <th> Description </th>
                    </tr>
                  </thead>
                  <tbody class="font-mono">
                    <tr>
                      <th class="color-indigo">.lightbox</th>
                      <td> Class for which the lightbox instance is created. </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">data-content</th>
                      <td> Data attribute added to lightbox link to specify lightbox content. Possible values include: 'image', 'iframe', and 'html5video'. </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">data-group</th>
                      <td> Data attribute added to lightbox links to add them to a lightbox gallery. </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">data-caption</th>
                      <td> Data attribute added to lightbox links to define lightbox image caption. </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">data-thumbnail</th>
                      <td> Data attribute added to lightbox links to define lightbox thumbnail image. Only used if image is added to a gallery. If no image is specified and image is added to gallery, the lightbox will use the lightbox image as a thumbnail. </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- Classes End -->
            </div>
          </div>
        </div>
      </div>
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Lightbox Link</h3>
        <p>Add the class <code class="color-indigo font-bold">.lightbox</code> to any link to make it a lightbox link. Define the media to display in the lightbox using the <code class="color-indigo font-bold">href</code> attribute. The lightbox will auto detect whether the media being linked to is an image, an iframe or an html5 video, but you can force the content type by using the data attribute <code class="color-indigo font-bold">data-content</code> to specify the type.</p>
        <ul class="list-none">
          <li><strong>href</strong>: media url</li>
          <li><strong>data-caption</strong>: lightbox media caption</li>
          <li><strong>data-content</strong>: image, html5video or iframe</li>
        </ul>
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="thumbnail thumbnail-1 rounded overlay-fade-in" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
            <a class="overlay-link lightbox" data-caption="In the modern office" data-content="image" href="https://images.unsplash.com/photo-1562184647-5c4f531aef0d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2250&amp;q=80" data-thumbnail="https://images.unsplash.com/photo-1562184647-5c4f531aef0d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80">
              <img src="https://images.unsplash.com/photo-1562184647-5c4f531aef0d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2250&amp;q=80" alt="">
              <span class="rollover-content items-center center">
                <span> Caption Here </span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-markup"><code class="inline-block scrolling-touch"><!--<div class="thumbnail rounded">
	<a class="lightbox" href="lightboxMediaURL">
		<img src="imageURL" alt=""/>
	</a>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Gallery</h3>
        <p>Use the data attribute <code class="color-indigo font-bold">data-group</code> to add a lightbox link to a specific gallery. Use the data attribute <code class="color-indigo font-bold">data-thumbnail</code> to define a lightbox gallery thumbnail. Note that if none is specified, the lightbox will use the lightbox image as a thumbnail.</p>
        <ul class="list-none">
          <li><strong>data-group</strong>: group name</li>
          <li><strong>data-thumbnail</strong>: thumbnail URL</li>
        </ul>
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="row pt-0">
            <div class="col w-full grid grid-cols-2 grid-md-cols-2 grid-xs-cols-1 preload" data-set-grid-item-height="">
              <div class="grid-item grid-sizer">
                <div class="grid-item-inner">
                  <div class="thumbnail thumbnail-1 rounded overlay-fade-in" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
                    <a class="overlay-link lightbox" data-group="group-1" data-caption="In the modern office" data-extra-classes="test test2" data-content="image" href="https://images.unsplash.com/photo-1562184647-5c4f531aef0d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2250&amp;q=80" data-thumbnail="https://images.unsplash.com/photo-1562184647-5c4f531aef0d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80">
                      <img src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=" data-src="https://images.unsplash.com/photo-1562184647-5c4f531aef0d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2250&amp;q=80" alt="">
                      <span class="rollover-content items-center center">
                        <span> Caption Here </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="grid-item">
                <div class="grid-item-inner">
                  <div class="thumbnail rounded overlay-fade-in" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
                    <a class="overlay-link lightbox" href="https://images.unsplash.com/photo-1568812861383-7d7e430959e9?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1300&amp;q=80" data-thumbnail="https://images.unsplash.com/photo-1568812861383-7d7e430959e9?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80" data-content="image" data-group="group-1" data-caption="Somewhere lost in nature">
                      <img src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=" data-src="https://images.unsplash.com/photo-1568812861383-7d7e430959e9?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1300&amp;q=80" alt="">
                      <span class="rollover-content items-center center">
                        <span> Caption Here </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="grid-item">
                <div class="grid-item-inner">
                  <div class="thumbnail rounded overlay-fade-in" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
                    <a class="overlay-link lightbox" href="https://clips.vorwaerts-gmbh.de/VfE_html5.mp4" data-thumbnail="https://images.unsplash.com/photo-1568742802414-2918e2bdebe8?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80" data-video-max-width="800" data-group="group-1" data-caption="This is an HTML5 video">
                      <img src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=" data-src="https://images.unsplash.com/photo-1568742802414-2918e2bdebe8?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1356&amp;q=80" alt="">
                      <span class="rollover-content items-center center">
                        <span> Caption Here </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="grid-item">
                <div class="grid-item-inner">
                  <div class="thumbnail rounded overlay-fade-in" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
                    <a class="overlay-link lightbox" href="https://www.youtube.com/embed/dQw4w9WgXcQ" data-thumbnail="https://images.unsplash.com/photo-1568781270998-2f959da12738?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80" data-video-max-width="800" data-group="group-1" data-caption="Unique lookig dust">
                      <img src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=" data-src="https://images.unsplash.com/photo-1568781270998-2f959da12738?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2250&amp;q=80" alt="">
                      <span class="rollover-content items-center center">
                        <span> A YouTube video </span>
                      </span>
                    </a>
                  </div>
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
        <pre class="m-0 language-markup"><code class="inline-block scrolling-touch"><!--<div class="thumbnail rounded">
	<a class="lightbox" data-group="group-1" data-thumbnail="thumbnailURL" href="lightboxMediaURL">
		<img src="imageURL" alt=""/>
	</a>
</div>
<div class="thumbnail rounded">
	<a class="lightbox" data-group="group-1" data-thumbnail="thumbnailURL" href="lightboxMediaURL">
		<img src="imageURL" alt=""/>
	</a>
</div>
--></code></pre>
      </div>
      <!-- code -->
    </div>
    <!-- Content Inner End -->
		<!-- {{ sidebar }} -->
  </div>
</div>
