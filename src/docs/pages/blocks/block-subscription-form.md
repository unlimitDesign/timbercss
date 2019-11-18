---
title: Partial - Subscription Form
menu_label: Subscription Form
layout: documentation
category: ["Blocks"]
markup_language: html
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Block: Subscription Form</h1>
      <p class="mb-10">Below are two common subscription form examples, namely stacked and horizontal.</p>
      <h3 class="font-light mt-80">Stacked</h3>
      <!-- Subscription Form Stacked -->
      <div class="section-block bg-grey-ultralight">
        <div class="row">
          <div class="col w-full">
            <div class="row">
              <div class="col w-8/12 offset-2 center">
                <h3 class="mb-10">Subscribe Today</h3>
                <p>Unlock cool new features and new beta plugins by signing up today. You can unsubcribe at any time!</p>
              </div>
            </div>
            <div class="row">
              <div class="col w-8/12 offset-2">
                <div class="form-container subscription-form-container center">
                  <form class="subscription-form" action="#" method="post" novalidate="">
                    <div class="row">
                      <div class="col w-full">
                        <input type="email" name="email" class="form-email form-element rounded shadow-focus-outline size-md" placeholder="Email address*" required="">
                      </div>
                    </div>
                    <div class="row">
                      <div class="col w-full">
                        <input type="submit" value="Subscribe" class="form-submit w-full ml-0 mr-0 mb-20 button rounded shadow-focus-outline size-md">
                      </div>
                    </div>
                    <div class="row form-consent">
                      <div class="col w-full">
                        <input id="checkbox-subscription-1" class="form-element checkbox" name="checkbox-consent" type="checkbox" required="">
                        <label for="checkbox-subscription-1" class="checkbox-label consent-checkbox-label">I give my consent to be emailed about promotions and offers.</label>
                        <p class="consent-notice text-small"> You can unsubscribe at any time. </p>
                      </div>
                    </div>
                  </form>
                  <!-- form response wrapper -->
                  <div class="form-response"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Subscription Form Stacked End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="form-container subscription-form-container center">
	<form class="subscription-form" action="#" method="post" novalidate>
		<div class="row">
			<div class="col w-full">
				<input type="email" name="email" class="form-email form-element rounded shadow-focus-outline size-md" placeholder="Email address*" required>
			</div>
		</div>
		<div class="row">
			<div class="col w-full">
				<input type="submit" value="Subscribe" class="form-submit w-full ml-0 mr-0 mb-20 button rounded shadow-focus-outline size-md">
			</div>
		</div>
		<div class="row form-consent">
			<div class="col w-full">
				<input id="checkbox-subscription-1" class="form-element checkbox" name="checkbox-consent" type="checkbox" required="">
			 	<label for="checkbox-subscription-1" class="checkbox-label consent-checkbox-label">I give my consent to be emailed about promotions and offers.</label>
				<p class="consent-notice text-small">
					You can unsubscribe at any time.
				</p>
			</div>
		</div>
	</form>
	<div class="form-response"></div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <h3 class="font-light mt-80">Horizontal</h3>
      <!-- Subscription Form Stacked -->
      <div class="section-block bg-grey-ultralight">
        <div class="row">
          <div class="col w-full">
            <div class="row">
              <div class="col w-8/12 offset-2 center">
                <h3 class="mb-10">Subscribe Today</h3>
                <p>Unlock cool new features and new beta plugins by signing up today. You can unsubcribe at any time!</p>
              </div>
            </div>
            <div class="row">
              <div class="col w-8/12 offset-2">
                <div class="form-container subscription-form-container center">
                  <form class="subscription-form" action="#" method="post" novalidate="">
                    <div class="row row-form">
                      <div class="col w-7/12 pr-0 pr-sm-10">
                        <input type="email" name="email" class="form-email form-element rounded-l rounded-sm shadow-focus-outline size-md" placeholder="Email address*" required="">
                      </div>
                      <div class="col w-5/12 pl-0 pl-sm-10">
                        <input type="submit" value="Subscribe" class="form-submit w-full m-0 mb-sm-20 button rounded-r rounded-sm shadow-focus-outline size-md">
                      </div>
                    </div>
                    <div class="row form-consent">
                      <div class="col w-full">
                        <input id="checkbox-subscription-2" class="form-element checkbox" name="checkbox-consent" type="checkbox" required="">
                        <label for="checkbox-subscription-2" class="checkbox-label consent-checkbox-label">I give my consent to be emailed about promotions and offers.</label>
                        <p class="consent-notice text-small"> You can unsubscribe at any time. </p>
                      </div>
                    </div>
                  </form>
                  <!-- form response wrapper -->
                  <div class="form-response"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Subscription Form Stacked End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="form-container subscription-form-container center">
	<form class="subscription-form" action="#" method="post" novalidate>
		<div class="row row-form">
			<div class="col w-7/12 pr-0 pr-sm-10">
				<input type="email" name="email" class="form-email form-element rounded-l rounded-sm shadow-focus-outline size-md" placeholder="Email address*" required>
			</div>
			<div class="col w-5/12 pl-0 pl-sm-10">
				<input type="submit" value="Subscribe" class="form-submit w-full m-0 mb-sm-20 button rounded-r rounded-sm shadow-focus-outline size-md">
			</div>
		</div>
		<div class="row form-consent">
			<div class="col w-full">
				<input id="checkbox-subscription-2" class="form-element checkbox" name="checkbox-consent" type="checkbox" required="">
			 	<label for="checkbox-subscription-2" class="checkbox-label consent-checkbox-label">I give my consent to be emailed about promotions and offers.</label>
				<p class="consent-notice text-small">
					You can unsubscribe at any time.
				</p>
			</div>
		</div>
	</form>
	<div class="form-response"></div>
</div>
--></code></pre>
      </div>
      <!-- code -->
    </div>
    <!-- Content Inner End -->
		<!-- {{ sidebar }} -->
  </div>
</div>
