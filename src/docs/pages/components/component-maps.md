---
title: Components - Google Maps
menu_label: Components - Google Maps
layout: documentation
category: ["Components"]
markup_language: html
---

<!-- Intro Title Section 1 -->
<div class="section-block intro-title-1 sm">
  <div class="row">
    <div class="col w-full">
      <div class="title-container">
        <div class="title-container-inner">
          <div class="row flex">
            <div class="col w-6/12 v-align-middle">
              <div>
                <h1 class="mb-0">Google Map</h1>
                <p class="lead mb-0 mb-mobile-20">Professional looking options</p>
              </div>
            </div>
            <div class="col w-6/12 v-align-middle">
              <div>
                <ul class="breadcrumb inline-block mb-0 pull-right clear-float-on-mobile">
                  <li>
                    <a href="index.html">Elements</a>
                  </li>
                  <li> Google Map </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- Intro Title Section 1 End -->
<!-- Map Section -->
<div class="section-block no-padding">
  <div class="row collapse full-width">
    <div class="col w-full center">
      <div class="map-container" data-coordinates="[[40.723301,-74.002988],[40.733301,-74.043988],[40.723301,-73.907888]]" data-icon="&quot;images/assets/map-marker.png&quot;,&quot;images/assets/map-marker.png&quot;,&quot;images/assets/map-marker.png&quot;" data-info="&quot;Office One<br>44 St. West 32&quot;,&quot;Office Two<br>44 St. West 32&quot;,&quot;Office Three<br>44 St. West 32&quot;" data-zoom-level="13" data-style="color">
        <div class="map-canvas" id="map-1"></div>
      </div>
    </div>
  </div>
</div>
<!-- Map Section End -->
<!-- Multiple Locations -->
<div class="section-block replicable-content">
  <div class="row">
    <div class="col w-4/12">
      <h3 class="mb-50">Multiple Locations</h3>
      <div class="map-pan-link-container">
        <p class="lead">Need to show multiple office locations? No problem, create map links on the fly to toggle any given map.</p>
        <ul class="list-unstyled">
          <li><a href="#" class="active map-pan-link" data-target-map="map-canvas-2" data-coordinates="[[40.723301,-74.002988]]">New York Office</a></li>
          <li><a href="#" class="map-pan-link" data-target-map="map-canvas-2" data-coordinates="[[37.774929, -122.419416]]" data-icon="&quot;images/assets/map-marker-2.png&quot;" data-info="&quot;Downtown San Fransisco Office&quot;">San Fransisco Office</a></li>
          <li><a href="#" class="map-pan-link" data-target-map="map-canvas-2" data-coordinates="[[41.875388, -87.638261]]" data-icon="&quot;images/assets/map-marker.png&quot;" data-info="&quot;Downtown San Fransisco Office&quot;">Chicago Office</a></li>
        </ul>
      </div>
    </div>
    <div class="col w-8/12">
      <div class="map-container mb-30" data-coordinates="[[40.723301,-74.002988]]" data-icon="&quot;images/assets/map-marker.png&quot;" data-info="&quot;Downtown New York Office<br>44 St. West 32&quot;" data-zoom-level="16" data-style="greyscale">
        <div class="map-canvas" id="map-canvas-2"></div>
      </div>
    </div>
  </div>
</div>
<!-- Multiple Locations End -->
<!-- Map Lightbox -->
<div class="section-block bg-grey-ultralight">
  <div class="row">
    <div class="col w-4/12">
      <h3 class="mb-50">Lightbox &amp; Google Map</h3>
    </div>
    <div class="col w-8/12">
      <p class="lead">Don't want to pollute a beautiful layout with a map or need to show multiple maps in a single page? Launch it using Summit lightbox, simple, elegant and effective.</p>
      <a data-content="iframe" data-toolbar="" href="http://maps.google.com?q=40.723301,-74.002988&amp;output=embed&amp;z=18" class="lightbox-link button rounded size-md bg-theme bg-hover-theme color-white color-hover-white"><span class="icon-pin left"></span> Google Map Lightbox Mode</a>
      <a data-content="iframe" data-toolbar="" data-modal-mode="" href="http://maps.google.com?q=40.723301,-74.002988&amp;output=embed&amp;z=18" class="lightbox-link button rounded size-md bg-theme bg-hover-theme color-white color-hover-white"><span class="icon-pin left"></span> View Google Modal Mode</a>
    </div>
  </div>
</div>
<!-- Map Lightbox End -->
