---
title: Layout - Maintenance
menu_label: Layout - Maintenance
layout: documentation
category: ["No Category"]
markup_language: html
---

<!-- Maintenenace Section -->
<div class="section-block h-screen bg-black">
  <div class="row flex v-align-middle">
    <div class="col w-10/12 offset-1 center">
      <h1 class="display-lg color-white">We'll be launching soon!</h1>
      <div class="row">
        <div class="col w-8/12 offset-2">
          <p class="lead color-white mb-10">We're working hard on finishing our new and improved website. Want to get notified of when we launch, sign up today!</p>
          <!-- Countdown -->
          <div class="countdown display-md color-white mb-20" data-countdown="" data-countdown-date="December 27, 2019 22:24:20" data-unit-type="d:d;h:h;m:m;s:s"></div>
          <!-- Countdown End -->
          <a data-content="inline" data-aux-classes="tml-form-modal height-auto rounded" data-toolbar="" data-modal-mode="" data-modal-width="500" data-modal-animation="scaleIn" data-lightbox-animation="fadeIn" href="#subscribe-modal" class="lightbox-link button rounded size-md mb-20"> Get Notified </a>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- Maintenenace Section End -->
<!-- Subscribe Modal -->
<div id="subscribe-modal" class="section-block pt-0 pb-30 background-none hide">
  <div class="section-block pt-40 pb-0">
    <div class="row">
      <div class="col w-full">
        <div class="modal-dialog-inner">
          <div class="form-container">
            <div class="row">
              <div class="col w-full">
                <p class="lead">Our subscribe forms integrate seamlessly with MailChimp, all you need is your email, list Id and API key.</p>
                <form class="signup-form" action="php/subscribe.php" method="post" novalidate="">
                  <div class="row">
                    <div class="col w-full">
                      <div class="field-wrapper">
                        <input type="text" name="fname" class="form-name form-element rounded size-md left" placeholder="First Name*" tabindex="2" required="">
                      </div>
                    </div>
                    <div class="col w-full">
                      <div class="field-wrapper">
                        <input type="email" name="email" class="form-email form-element rounded size-md left" placeholder="Email address*" tabindex="2" required="">
                      </div>
                    </div>
                    <div class="col w-5/12">
                      <input type="submit" value="Subscribe" class="form-submit button rounded size-md bg-theme bg-hover-theme color-white color-hover-white">
                    </div>
                  </div>
                  <input type="text" name="honeypot" class="form-honeypot form-element rounded md">
                  <div class="form-response show">* No spamming here, promise!</div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- Subscribe Modal -->
