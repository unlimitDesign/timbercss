---
title: Partial - Logo Grid
menu_label: Login
layout: documentation
category: ["Blocks"]
markup_language: html
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Block: Logo Grid</h1>
      <p class="mb-10">Below are two sample login form examples that are customised Timber's utility classes and plugins.</p>
      <h3 class="font-light mt-80">Simple</h3>
      <!-- Login Form Simple -->
      <div class="section-block bg-grey-ultralight">
        <div class="row">
          <div class="col w-8/12 offset-2">
            <div class="login-form-container card rounded bg-white border-grey-lightest shadow-x4">
              <div class="row">
                <div class="col w-full">
                  <h1 class="text-huge">Sign In</h1>
                </div>
              </div>
              <form class="login-form" action="#" method="post" novalidate="">
                <div class="row">
                  <div class="col w-full">
                    <label class="color-charcoal">Username:</label>
                    <input type="text" name="user_name" class="form-username form-element rounded size-md w-full" placeholder="JohnDoe" required="">
                  </div>
                </div>
                <div class="row">
                  <div class="col w-full">
                    <label class="color-charcoal">Password:</label>
                    <input type="password" name="user_password" class="form-password form-element rounded size-md w-full" placeholder="••••••••" required="">
                  </div>
                </div>
                <div class="row mb-20">
                  <div class="col w-full">
                    <input id="checkbox-remember-1" class="form-element checkbox rounded" name="user_remember" type="checkbox" required="">
                    <label for="checkbox-remember-1" class="checkbox-label m-0">Remember Me</label>
                  </div>
                </div>
                <div class="row">
                  <div class="col w-full center">
                    <input type="submit" value="Sign In" class="form-submit button rounded size-md w-full">
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- Login Form Simple End -->
      <!-- code -->
      <div class="flex items-center justify-between mt-30">
        <h6 class="uppercase">Html</h6>
        <a href="#html-example-1" class="collapsable mb-20 text-small color-grey color-active-blue">expand/collapse</a>
      </div>
      <div id="html-example-1" data-min-height="300" class="collapsable-target rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="login-form-container card rounded bg-white border-grey-lightest shadow-x4">
	<div class="row">
		<div class="col w-full">
			<h1 class="text-huge">Sign In</h1>
		</div>
	</div>
	<form class="login-form" action="#" method="post" novalidate>
		<div class="row">
			<div class="col w-full">
				<label class="color-charcoal">Username:</label>
				<input type="text" name="user_name" class="form-username form-element rounded size-md w-full" placeholder="JohnDoe" required>
			</div>
		</div>
		<div class="row">
			<div class="col w-full">
				<label class="color-charcoal">Password:</label>
				<input type="password" name="user_password" class="form-password form-element rounded size-md w-full" placeholder="••••••••" required>
			</div>
		</div>
		<div class="row mb-20">
			<div class="col w-full">
				<input id="checkbox-remember-1" class="form-element checkbox rounded" name="user_remember" type="checkbox" required>
				<label for="checkbox-remember-1" class="checkbox-label m-0">Remember Me</label>
			</div>
		</div>
		<div class="row">
			<div class="col w-full center">
				<input type="submit" value="Sign In" class="form-submit button rounded size-md w-full">
			</div>
		</div>
	</form>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <h3 class="font-light mt-80">Advanced</h3>
      <!-- Login Form Simple -->
      <div class="section-block bg-grey-ultralight">
        <div class="row">
          <div class="col w-8/12 offset-2">
            <div class="login-form-container card rounded bg-white border-grey-lightest shadow-x4">
              <div class="row">
                <div class="col w-full">
                  <h1 class="text-huge">Sign In</h1>
                  <p>Don't have an account yet? <a href="#">Click here</a> to create an account and get started.</p>
                </div>
              </div>
              <form class="login-form" action="#" method="post" novalidate="">
                <div class="row">
                  <div class="col w-full">
                    <div class="input-group">
                      <input type="text" name="user_name" placeholder="Username" class="form-element size-md rounded-l">
                      <div class="form-element input-icon size-md rounded-r"><span class="icon-material">person</span></div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col w-full">
                    <div class="input-group">
                      <input type="text" name="user_password" placeholder="Password" class="form-element size-md rounded-l">
                      <div class="form-element input-icon size-md rounded-r"><span class="icon-material">lock</span></div>
                    </div>
                  </div>
                </div>
                <div class="row mb-20">
                  <div class="col w-full flex items-center justify-between">
                    <input id="checkbox-remember-2" class="form-element checkbox rounded" name="user_remember" type="checkbox" required="">
                    <label for="checkbox-remember-2" class="checkbox-label m-0">Remember Me</label>
                    <a href="#" class="text-small">Forgot password?</a>
                  </div>
                </div>
                <div class="row">
                  <div class="col w-full center">
                    <input type="submit" value="Sign In" class="form-submit button rounded size-md w-full">
                  </div>
                </div>
              </form>
              <div class="row">
                <div class="col w-full center">
                  <hr>
                  <p>Or continue with one of the following networks:</p>
                  <a href="#" class="inline-flex w-50 h-50 mr-5 rounded-full border-2 border-grey-dark bg-hover-primary color-grey-dark color-hover-white"><i class="icon-brands google size-sm self-center mx-auto mb-0"></i></a>
                  <a href="#" class="inline-flex w-50 h-50 mr-5 rounded-full border-2 border-grey-dark bg-hover-primary color-grey-dark color-hover-white"><i class="icon-brands twitter size-sm self-center mx-auto mb-0"></i></a>
                  <a href="#" class="inline-flex w-50 h-50 mr-5 rounded-full border-2 border-grey-dark bg-hover-primary color-grey-dark color-hover-white"><i class="icon-brands instagram size-sm self-center mx-auto mb-0"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Login Form Simple End -->
      <!-- code -->
      <div class="flex items-center justify-between mt-30">
        <h6 class="uppercase">Html</h6>
        <a href="#html-example-2" class="collapsable mb-20 text-small color-grey color-active-blue">expand/collapse</a>
      </div>
      <div id="html-example-2" data-min-height="300" class="collapsable-target rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="login-form-container card rounded bg-white border-grey-lightest shadow-x4">
	<div class="row">
		<div class="col w-full">
			<h1 class="text-huge">Sign In</h1>
			<p>Don't have an account yet? <a href="#">Click here</a> to create an account and get started.</p>
		</div>
	</div>
	<form class="login-form" action="#" method="post" novalidate>
		<div class="row">
			<div class="col w-full">
				<div class="input-group">
					<input type="text" name="user_name" placeholder="Username" class="form-element size-md rounded-l">
					<div class="form-element input-icon size-md rounded-r"><span class="icon-material">person</span></div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col w-full">
				<div class="input-group">
					<input type="text" name="user_password" placeholder="Password" class="form-element size-md rounded-l">
					<div class="form-element input-icon size-md rounded-r"><span class="icon-material">lock</span></div>
				</div>
			</div>
		</div>
		<div class="row mb-20">
			<div class="col w-full flex items-center justify-between">
				<input id="checkbox-remember-2" class="form-element checkbox rounded" name="user_remember" type="checkbox" required>
				<label for="checkbox-remember-2" class="checkbox-label m-0">Remember Me</label>
				<a href="#" class="text-small">Forgot password?</a>
			</div>
		</div>
		<div class="row">
			<div class="col w-full center">
				<input type="submit" value="Sign In" class="form-submit button rounded size-md w-full">
			</div>
		</div>
	</form>
	<div class="row">
		<div class="col w-full center">
			<hr>
			<p>Or continue with one of the following networks:</p>
			<a href="#" class="inline-flex w-50 h-50 mr-5 rounded-full border-2 border-grey-dark bg-hover-primary color-grey-dark color-hover-white"><i class="icon-brands google size-sm self-center mx-auto mb-0"></i></a>
			<a href="#" class="inline-flex w-50 h-50 mr-5 rounded-full border-2 border-grey-dark bg-hover-primary color-grey-dark color-hover-white"><i class="icon-brands twitter size-sm self-center mx-auto mb-0"></i></a>
			<a href="#" class="inline-flex w-50 h-50 mr-5 rounded-full border-2 border-grey-dark bg-hover-primary color-grey-dark color-hover-white"><i class="icon-brands instagram size-sm self-center mx-auto mb-0"></i></a>
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
