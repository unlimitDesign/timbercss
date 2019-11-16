---
title: Layout: Blog Single Post Sidebar Right
menu_label: Layout: Blog Single Post Sidebar Right
layout: documentation
category: Layouts
markup_language: html
relative_path: layouts/layout-blog-single-post-sidebar-right
---

<!-- Masthead -->
<div class="section-block masthead bg-white">
  <div class="row align-items-center">
    <div class="col w-6/12">
      <h2>Single Post</h2>
    </div>
    <div class="col w-6/12 right left-sm">
      <ul class="breadcrumb">
        <li>
          <a href="index.html">Layout</a>
        </li>
        <li> Single Post </li>
      </ul>
    </div>
  </div>
</div>
<!-- Masthead End -->
<div class="section-block clearfix bg-grey-ultralight">
  <div class="row">
    <!-- Content Inner -->
    <div class="col w-8/12 w-md-full content-inner wide-layout preload grid-cols-1">
      <article class="post">
        <div class="post-media thumbnail rounded-t img-scale-in mb-0" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
          <a class="overlay-link" href="#">
            <img src="https://images.unsplash.com/photo-1554847464-bce967372cb7?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2082&amp;q=80" alt="">
            <span class="rollover-content items-center center">
              <span> View </span>
            </span>
          </a>
        </div>
        <div class="post-content card bg-white">
          <h2 class="post-title"><a href="blog-single-post-sidebar-right.html">This here is a post title</a></h2>
          <div class="post-meta">
            <span class="post-date">25 Aug 2015</span>, in <span class="post-category"><a href="#">Hardware</a></span>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <ul class="post-tags list-horizontal">
            <li><a href="#">Some tag</a></li>
            <li><a href="#">Some tag</a></li>
            <li><a href="#">Some tag</a></li>
          </ul>
          <hr>
          <div class="post-author flex items-center">
            <div class="author-avatar thumbanil mr-20 mb-0">
              <img src="images/blog/bio-avatar.jpg" alt="Avatar">
            </div>
            <div class="author-content">
              <div class="name">by <a href="#">John Adams</a></div>
              <p class="author-title mb-0">WordPress Evangelist, JS Guru and Beer Lover</p>
            </div>
          </div>
        </div>
      </article>
      <div class="post-comments card bg-white">
        <h3 class="comments-title">3 Comments</h3>
        <div class="comments">
          <ul class="comment-list">
            <li>
              <article class="comment flex flex-sm-wrap">
                <div class="user-avatar thumbnail">
                  <img src="images/blog/comment-avatar.jpg" alt="Avatar">
                </div>
                <div class="comment-content">
                  <h5 class="name">John Andersson</h5>
                  <div class="comment-meta">
                    <span class="post-date">17 Jul 2015</span>, <a href="#" class="comment-reply-link">Reply</a>
                  </div>
                  <p>Whistler Mountain is a mountain in the Fitzsimmons Range of the Pacific Ranges of the Coast Mountains, located on the northwestern.</p>
                </div>
              </article>
              <ul>
                <li>
                  <article class="comment flex flex-sm-wrap">
                    <div class="user-avatar thumbnail">
                      <img src="images/blog/comment-avatar-3.jpg" alt="Avatar">
                    </div>
                    <div class="comment-content">
                      <h5 class="name">Emma Courtier</h5>
                      <div class="comment-meta">
                        <span class="post-date">23 Jul 2015</span>, <a href="#" class="comment-reply-link">Reply</a>
                      </div>
                      <p>Whistler Mountain is a mountain in the Fitzsimmons Range of the Pacific Ranges of the Coast Mountains, located on the northwestern.</p>
                    </div>
                  </article>
                </li>
              </ul>
            </li>
            <li>
              <article class="comment flex flex-sm-wrap">
                <div class="user-avatar thumbnail">
                  <img src="images/blog/comment-avatar-2.jpg" alt="Avatar">
                </div>
                <div class="comment-content">
                  <h5 class="name">Michael Cunningham</h5>
                  <div class="comment-meta">
                    <span class="post-date">24 Jul 2015</span>, <a href="#" class="comment-reply-link">Reply</a>
                  </div>
                  <p>Whistler Mountain is a mountain in the Fitzsimmons Range of the Pacific Ranges of the Coast Mountains, located on the northwestern.</p>
                </div>
              </article>
            </li>
          </ul>
        </div>
      </div>
      <div class="post-comment-respond card mb-0 bg-white">
        <h3 class="reply-title">Leave a Comment</h3>
        <form class="comment-form" action="#" method="post" novalidate="">
          <div class="row">
            <div class="col w-full">
              <input type="text" name="fname" class="form-name form-element rounded" placeholder="Name*" tabindex="1" required="">
            </div>
            <div class="col w-full">
              <div class="row merged-form-elements">
                <div class="col w-6/12">
                  <input type="email" name="email" class="form-email form-element rounded" placeholder="Email*" tabindex="3" required="">
                </div>
                <div class="col w-6/12">
                  <input type="text" name="website" class="form-website form-element rounded" placeholder="Website" tabindex="4">
                </div>
              </div>
              <div class="col w-6/12">
                <input type="text" name="honeypot" class="form-honeypot form-element rounded">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col w-full">
              <textarea name="message" class="form-message form-element rounded" placeholder="Message*" tabindex="5" required=""></textarea>
              <input type="submit" value="Post Comment" class="form-submit button rounded size-md">
            </div>
          </div>
        </form>
      </div>
    </div>
    <!-- Content Inner End -->
    <!-- Sidebar -->
    <aside class="col w-4/12 w-md-full sidebar">
      <div class="freeze" data-extra-space-top="100" data-extra-space-bottom="0" data-push-section=".pagination-3">
        <div class="footer-block">
          <h4 class="widget-title">About</h4>
          <p><strong>Starting a new business?</strong> Then Boilerplate is for you! This multi-purpose template offers 8 carefully crafted concepts with two variations each, 20+ components and 8+ plugins.</p>
        </div>
        <div class="footer-block">
          <h4 class="widget-title">Find Something</h4>
          <div class="search-form-container site-search">
            <form action="#" method="get" novalidate="">
              <div class="row">
                <div class="col w-full">
                  <div class="field-wrapper">
                    <input type="text" name="search" class="form-search form-element rounded" placeholder="type &amp; hit enter...">
                  </div>
                </div>
              </div>
            </form>
            <div class="form-response"></div>
          </div>
        </div>
        <div class="footer-block">
          <h4 class="widget-title">Popular Categories</h4>
          <ul>
            <li><a href="#">Development</a></li>
            <li><a href="#">Tools</a></li>
            <li><a href="#">Changelog</a></li>
            <li><a href="#">Inspiration</a></li>
            <li><a href="#">Ecommerce</a></li>
            <li><a href="#">Security</a></li>
          </ul>
        </div>
      </div>
    </aside>
    <!-- Sidebar End -->
  </div>
</div>
<!-- Pagination With Label -->
<div class="section-block pt-0 bg-grey-ultralight">
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
