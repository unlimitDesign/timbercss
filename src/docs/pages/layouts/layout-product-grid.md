---
title: Layout - Product Grid
menu_label: Layout - Product Grid
layout: documentation
category: ["No Category"]
markup_language: html
---

<!-- Masthead -->
<div class="section-block masthead bg-grey-ultralight">
  <div class="row align-items-center">
    <div class="col w-6/12">
      <h2>Shop</h2>
    </div>
    <div class="col w-6/12 right left-sm">
      <ul class="breadcrumb">
        <li>
          <a href="index.html">Sections</a>
        </li>
        <li> Shop </li>
      </ul>
    </div>
  </div>
</div>
<!-- Masthead End -->
<!-- Filter Menu -->
<div class="section-block pb-0 grid-filter-dropdown" data-target-grid="#product-grid">
  <div class="row">
    <div class="col w-full">
      <div class="filter-menu-inner">
        <div class="row flex">
          <div class="col w-8/12 v-align-middle">
            <div class="product-result-count">
              <p class="mb-0 mb-mobile-30">Showing 1–10 of 46 results</p>
            </div>
          </div>
          <div class="col w-4/12 right left-on-mobile">
            <span class="dropdown-label mb-0 mb-mobile-30">Filter: </span>
            <div class="dropdown size-md inline-block" data-update-selection="">
              <a href="#" class="button rounded center border-grey-light color-grey bg-hover-theme color-hover-white"><span>All Products</span><span class="icon-down-open-mini pull-right"></span></a>
              <ul class="dropdown-list">
                <li><a class="active" href="#" data-filter="*">All Products</a></li>
                <li><a href="#" data-filter=".cameras">Cameras</a></li>
                <li><a href="#" data-filter=".headphones">Headphones</a></li>
                <li><a href="#" data-filter=".keyboards">Keyboards</a></li>
                <li><a href="#" data-filter=".phones">Phones</a></li>
                <li><a href="#" data-filter=".shoes">Shoes</a></li>
                <li><a href="#" data-filter=".speakers">Speakers</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- Filter Menu End -->
<!-- Product Grid -->
<div id="product-grid" class="section-block pt-0 pb-0">
  <div class="row">
    <div class="col w-full grid product-grid preload grid-cols-3 grid-md-cols-2 grid-xs-cols-1" data-lazy-load="" data-use-preloader="">
      <div class="grid-item product grid-sizer">
        <div class="thumbnail rounded product-thumbnail border-grey-light img-scale-in" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
          <span class="badge onsale absolute pst-5 psl-5 z-10">Sale</span>
          <a class="overlay-link" href="#">
            <img src="images/shop/grid/large-margins/product-1.jpg" alt="">
            <span class="rollover-content items-center center">
              <span> View </span>
            </span>
          </a>
          <div class="product-actions hidden-md center">
            <a href="#" class="button add-to-cart-button rounded-b size-small">Add To Cart</a>
          </div>
        </div>
        <div class="product-details center">
          <h3 class="product-title text-truncate">
            <a href="#"> Camera Canon Eos Rebel </a>
          </h3>
          <span class="product-price price"><del><span class="amount">$1695.00</span></del><ins><span class="amount">$1199.00</span></ins></span>
          <div class="product-actions-mobile mt-20 hidden block-md">
            <a href="#" class="button add-to-cart-button rounded size-small">Add To Cart</a>
          </div>
        </div>
      </div>
      <div class="grid-item product">
        <div class="thumbnail rounded product-thumbnail border-grey-light img-scale-in" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
          <a class="overlay-link" href="#">
            <img src="images/shop/grid/large-margins/product-1.jpg" alt="">
            <span class="rollover-content items-center center">
              <span> View </span>
            </span>
          </a>
          <div class="product-actions hidden-md center">
            <a href="#" class="button add-to-cart-button rounded-b size-small">Add To Cart</a>
          </div>
        </div>
        <div class="product-details center">
          <h3 class="product-title text-truncate">
            <a href="#"> Camera Canon Eos Rebel </a>
          </h3>
          <span class="product-price price"><del><span class="amount">$1695.00</span></del><ins><span class="amount">$1199.00</span></ins></span>
          <div class="product-actions-mobile mt-20 hidden block-md">
            <a href="#" class="button add-to-cart-button rounded size-small">Add To Cart</a>
          </div>
        </div>
      </div>
      <div class="grid-item product">
        <div class="thumbnail rounded product-thumbnail border-grey-light img-scale-in" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
          <a class="overlay-link" href="#">
            <img src="images/shop/grid/large-margins/product-1.jpg" alt="">
            <span class="rollover-content items-center center">
              <span> View </span>
            </span>
          </a>
          <div class="product-actions hidden-md center">
            <a href="#" class="button add-to-cart-button rounded-b size-small">Add To Cart</a>
          </div>
        </div>
        <div class="product-details center">
          <h3 class="product-title text-truncate">
            <a href="#"> Camera Canon Eos Rebel </a>
          </h3>
          <span class="product-price price"><del><span class="amount">$1695.00</span></del><ins><span class="amount">$1199.00</span></ins></span>
          <div class="product-actions-mobile mt-20 hidden block-md">
            <a href="#" class="button add-to-cart-button rounded size-small">Add To Cart</a>
          </div>
        </div>
      </div>
      <div class="grid-item product">
        <div class="thumbnail rounded product-thumbnail border-grey-light img-scale-in" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
          <a class="overlay-link" href="#">
            <img src="images/shop/grid/large-margins/product-1.jpg" alt="">
            <span class="rollover-content items-center center">
              <span> View </span>
            </span>
          </a>
          <div class="product-actions hidden-md center">
            <a href="#" class="button add-to-cart-button rounded-b size-small">Add To Cart</a>
          </div>
        </div>
        <div class="product-details center">
          <h3 class="product-title text-truncate">
            <a href="#"> Camera Canon Eos Rebel </a>
          </h3>
          <span class="product-price price"><del><span class="amount">$1695.00</span></del><ins><span class="amount">$1199.00</span></ins></span>
          <div class="product-actions-mobile mt-20 hidden block-md">
            <a href="#" class="button add-to-cart-button rounded size-small">Add To Cart</a>
          </div>
        </div>
      </div>
      <div class="grid-item product">
        <div class="thumbnail rounded product-thumbnail border-grey-light img-scale-in" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
          <a class="overlay-link" href="#">
            <img src="images/shop/grid/large-margins/product-1.jpg" alt="">
            <span class="rollover-content items-center center">
              <span> View </span>
            </span>
          </a>
          <div class="product-actions hidden-md center">
            <a href="#" class="button add-to-cart-button rounded-b size-small">Add To Cart</a>
          </div>
        </div>
        <div class="product-details center">
          <h3 class="product-title text-truncate">
            <a href="#"> Camera Canon Eos Rebel </a>
          </h3>
          <span class="product-price price"><del><span class="amount">$1695.00</span></del><ins><span class="amount">$1199.00</span></ins></span>
          <div class="product-actions-mobile mt-20 hidden block-md">
            <a href="#" class="button add-to-cart-button rounded size-small">Add To Cart</a>
          </div>
        </div>
      </div>
      <div class="grid-item product">
        <div class="thumbnail rounded product-thumbnail border-grey-light img-scale-in" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
          <a class="overlay-link" href="#">
            <img src="images/shop/grid/large-margins/product-1.jpg" alt="">
            <span class="rollover-content items-center center">
              <span> View </span>
            </span>
          </a>
          <div class="product-actions hidden-md center">
            <a href="#" class="button add-to-cart-button rounded-b size-small">Add To Cart</a>
          </div>
        </div>
        <div class="product-details center">
          <h3 class="product-title text-truncate">
            <a href="#"> Camera Canon Eos Rebel </a>
          </h3>
          <span class="product-price price"><del><span class="amount">$1695.00</span></del><ins><span class="amount">$1199.00</span></ins></span>
          <div class="product-actions-mobile mt-20 hidden block-md">
            <a href="#" class="button add-to-cart-button rounded size-small">Add To Cart</a>
          </div>
        </div>
      </div>
      <div class="grid-item product">
        <div class="thumbnail rounded product-thumbnail border-grey-light img-scale-in" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
          <a class="overlay-link" href="#">
            <img src="images/shop/grid/large-margins/product-1.jpg" alt="">
            <span class="rollover-content items-center center">
              <span> View </span>
            </span>
          </a>
          <div class="product-actions hidden-md center">
            <a href="#" class="button add-to-cart-button rounded-b size-small">Add To Cart</a>
          </div>
        </div>
        <div class="product-details center">
          <h3 class="product-title text-truncate">
            <a href="#"> Camera Canon Eos Rebel </a>
          </h3>
          <span class="product-price price"><del><span class="amount">$1695.00</span></del><ins><span class="amount">$1199.00</span></ins></span>
          <div class="product-actions-mobile mt-20 hidden block-md">
            <a href="#" class="button add-to-cart-button rounded size-small">Add To Cart</a>
          </div>
        </div>
      </div>
      <div class="grid-item product">
        <div class="thumbnail rounded product-thumbnail border-grey-light img-scale-in" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
          <a class="overlay-link" href="#">
            <img src="images/shop/grid/large-margins/product-1.jpg" alt="">
            <span class="rollover-content items-center center">
              <span> View </span>
            </span>
          </a>
          <div class="product-actions hidden-md center">
            <a href="#" class="button add-to-cart-button rounded-b size-small">Add To Cart</a>
          </div>
        </div>
        <div class="product-details center">
          <h3 class="product-title text-truncate">
            <a href="#"> Camera Canon Eos Rebel </a>
          </h3>
          <span class="product-price price"><del><span class="amount">$1695.00</span></del><ins><span class="amount">$1199.00</span></ins></span>
          <div class="product-actions-mobile mt-20 hidden block-md">
            <a href="#" class="button add-to-cart-button rounded size-small">Add To Cart</a>
          </div>
        </div>
      </div>
      <div class="grid-item product">
        <div class="thumbnail rounded product-thumbnail border-grey-light img-scale-in" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
          <a class="overlay-link" href="#">
            <img src="images/shop/grid/large-margins/product-1.jpg" alt="">
            <span class="rollover-content items-center center">
              <span> View </span>
            </span>
          </a>
          <div class="product-actions hidden-md center">
            <a href="#" class="button add-to-cart-button rounded-b size-small">Add To Cart</a>
          </div>
        </div>
        <div class="product-details center">
          <h3 class="product-title text-truncate">
            <a href="#"> Camera Canon Eos Rebel </a>
          </h3>
          <span class="product-price price"><del><span class="amount">$1695.00</span></del><ins><span class="amount">$1199.00</span></ins></span>
          <div class="product-actions-mobile mt-20 hidden block-md">
            <a href="#" class="button add-to-cart-button rounded size-small">Add To Cart</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- Product Grid End -->
<!-- Pagination With Label -->
<div class="section-block">
  <div class="row">
    <div class="col w-full pagination justify-between justify-sm-center">
      <a href="#" title="Previous Page" class="pagination-link button with-label"><span class="icon-material">chevron_left</span><span>Prev</span></a>
      <span class="page-links hide-sm">
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
<!-- Pagination With Label End -->
