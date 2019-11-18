---
title: Partial - Logo Grid
menu_label: Register
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
      <!-- Register Section -->
      <div class="section-block bg-grey-ultralight">
        <div class="row">
          <div class="col w-8/12 offset-2">
            <div class="register-form-container card rounded size-xl bg-white border-grey-ultralight shadow-x3">
              <div class="row">
                <div class="col w-full px-0">
                  <h3>Register</h3>
                  <p class="mb-20">Already have an account? <a href="#" class="fade-location">Click Here</a></p>
                  <hr>
                </div>
              </div>
              <form class="register-form" action="#" method="post" novalidate="">
                <div class="row row-form">
                  <div class="col w-6/12">
                    <label>First Name:</label>
                    <input type="text" name="user_firstname" class="form-firstname form-element rounded size-md" placeholder="John" required="">
                  </div>
                  <div class="col w-6/12">
                    <label>Last Name:</label>
                    <input type="text" name="user_lastname" class="form-lastname form-element rounded size-md" placeholder="Doe" required="">
                  </div>
                </div>
                <div class="row">
                  <div class="col w-full px-0">
                    <label>Email:</label>
                    <input type="email" name="user_email" class="form-email form-element rounded size-md" placeholder="johndoe@gmail.com" required="">
                  </div>
                </div>
                <div class="row row-form">
                  <div class="col w-6/12">
                    <label>Password:</label>
                    <input type="password" name="user_password" class="form-password form-element rounded size-md" placeholder="••••••••" required="">
                  </div>
                  <div class="col w-6/12">
                    <label>Repeat Password:</label>
                    <input type="password" name="user_password_repeat" class="form-password form-element rounded size-md" placeholder="••••••••" required="">
                  </div>
                </div>
                <div class="row row-form">
                  <div class="col w-full mt-10">
                    <input type="submit" value="Create Account" class="form-submit button rounded size-md mb-0">
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- Register Section End -->
      <!-- code -->
      <div class="flex items-center justify-between mt-30">
        <h6 class="uppercase">Html</h6>
        <a href="#html-example-1" class="collapsable mb-20 text-small color-grey color-active-blue">expand/collapse</a>
      </div>
      <div id="html-example-1" data-min-height="300" class="collapsable-target rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="register-form-container card rounded size-xl bg-white border-grey-ultralight shadow-x3">
	<div class="row">
		<div class="col w-full px-0">
			<h3>Register</h3>
			<p class="mb-20">Already have an account? <a href="#" class="fade-location">Click Here</a></p>
			<hr>
		</div>
	</div>
	<form class="register-form" action="#" method="post" novalidate>
		<div class="row row-form">
			<div class="col w-6/12">
				<label>First Name:</label>
				<input type="text" name="user_firstname" class="form-firstname form-element rounded size-md" placeholder="John" required>
			</div>
			<div class="col w-6/12">
				<label>Last Name:</label>
				<input type="text" name="user_lastname" class="form-lastname form-element rounded size-md" placeholder="Doe" required>
			</div>
		</div>
		<div class="row">
			<div class="col w-full px-0">
				<label>Email:</label>
				<input type="email" name="user_email" class="form-email form-element rounded size-md" placeholder="johndoe@gmail.com" required>
			</div>
		</div>
		<div class="row row-form">
			<div class="col w-6/12">
				<label>Password:</label>
				<input type="password" name="user_password" class="form-password form-element rounded size-md" placeholder="••••••••" required>
			</div>
			<div class="col w-6/12">
				<label>Repeat Password:</label>
				<input type="password" name="user_password_repeat" class="form-password form-element rounded size-md" placeholder="••••••••" required>
			</div>
		</div>
		<div class="row row-form">
			<div class="col w-full mt-10">
				<input type="submit" value="Create Account" class="form-submit button rounded size-md mb-0">
			</div>
		</div>
	</form>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <h3 class="font-light mt-80">Advanced</h3>
      <!-- Register Section -->
      <div class="section-block bg-grey-ultralight">
        <div class="row">
          <div class="col w-6/12 w-md-full offset-1 offset-md-0">
            <div class="register-form-container card rounded size-xl bg-white border-grey-ultralight shadow-x3">
              <div class="row">
                <div class="col w-full">
                  <h3>Register</h3>
                  <p class="mb-20">Already have an account? <a href="#" class="fade-location">Click Here</a></p>
                  <hr>
                </div>
              </div>
              <form class="register-form" action="#" method="post" novalidate="">
                <div class="row">
                  <div class="col w-full px-0">
                    <label>Company Name:</label>
                    <input type="text" name="user_company" class="form-companyname form-element rounded size-md" placeholder="John" required="">
                  </div>
                </div>
                <div class="row">
                  <div class="col w-full px-0">
                    <label>Email:</label>
                    <input type="email" name="user_email" class="form-email form-element rounded size-md" placeholder="johndoe@gmail.com" required="">
                  </div>
                </div>
                <div class="row">
                  <div class="col w-full px-0">
                    <label>Country:</label>
                    <div class="form-select size-md">
                      <select name="user_country" class="form-element rounded" required="">
                        <option selected="selected" value="">Country</option>
                        <option value="">Andorra</option>
                        <option value="">France</option>
                        <option value="">Germany</option>
                        <option value="">Norway</option>
                        <option value="">Sweden</option>
                        <option value="">United Kingdom</option>
                        <option value="">United States</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col w-full px-0 mt-10">
                    <input type="submit" value="Next Step" class="form-submit button rounded size-md w-full mb-0">
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="col w-4/12 hide-md">
            <ul class="progressline sticky pst-30 left">
              <li class="progressline-item active">
                <div class="progressline-content pb-20">
                  <span>Enter Personal Details</span>
                </div>
              </li>
              <li class="progressline-item disabled">
                <div class="progressline-content pb-20">
                  <span>Create An Account</span>
                </div>
              </li>
              <li class="progressline-item disabled">
                <div class="progressline-content pb-20">
                  <span>Vertify Email</span>
                </div>
              </li>
              <li class="progressline-item disabled">
                <div class="progressline-content pb-20">
                  <span>Enter Payment info</span>
                </div>
              </li>
              <li class="progressline-item disabled">
                <div class="progressline-content pb-20">
                  <span>Accept Terms</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- Register Section End -->
      <!-- code -->
      <div class="flex items-center justify-between mt-30">
        <h6 class="uppercase">Html</h6>
        <a href="#html-example-2" class="collapsable mb-20 text-small color-grey color-active-blue">expand/collapse</a>
      </div>
      <div id="html-example-2" data-min-height="300" class="collapsable-target rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="row">
	<div class="col w-6/12 w-md-full offset-1 offset-md-0">
		<div class="register-form-container card rounded size-xl bg-white border-grey-ultralight shadow-x3">
			<div class="row">
				<div class="col w-full">
					<h3>Register</h3>
					<p class="mb-20">Already have an account? <a href="#" class="fade-location">Click Here</a></p>
					<hr>
				</div>
			</div>
			<form class="register-form" action="#" method="post" novalidate>
				<div class="row">
					<div class="col w-full px-0">
						<label>Company Name:</label>
						<input type="text" name="user_company" class="form-companyname form-element rounded size-md" placeholder="John" required>
					</div>
				</div>
				<div class="row">
					<div class="col w-full px-0">
						<label>Email:</label>
						<input type="email" name="user_email" class="form-email form-element rounded size-md" placeholder="johndoe@gmail.com" required>
					</div>
				</div>
				<div class="row">
					<div class="col w-full px-0">
						<label>Country:</label>
						<div class="form-select size-md">
							<select name="user_country" class="form-element rounded" required>
								<option selected="selected" value="">Country</option>
								<option value="">Andorra</option>
								<option value="">France</option>
								<option value="">Germany</option>
								<option value="">Norway</option>
								<option value="">Sweden</option>
								<option value="">United Kingdom</option>
								<option value="">United States</option>
							</select>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col w-full px-0 mt-10">
						<input type="submit" value="Next Step" class="form-submit button rounded size-md w-full mb-0">
					</div>
				</div>
			</form>
		</div>
	</div>
	<div class="col w-4/12 hide-md">
		<ul class="progressline sticky pst-30 left">
			<li class="progressline-item active">
				<div class="progressline-content pb-20">
					<span>Enter Personal Details</span>
				</div>
			</li>
			<li class="progressline-item disabled">
				<div class="progressline-content pb-20">
					<span>Create An Account</span>
				</div>
			</li>
			<li class="progressline-item disabled">
				<div class="progressline-content pb-20">
					<span>Vertify Email</span>
				</div>
			</li>
			<li class="progressline-item disabled">
				<div class="progressline-content pb-20">
					<span>Enter Payment info</span>
				</div>
			</li>
			<li class="progressline-item disabled">
				<div class="progressline-content pb-20">
					<span>Accept Terms</span>
				</div>
			</li>
		</ul>
	</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
    </div>
    <!-- Content Inner End -->
		<!-- {{ sidebar }} -->
  </div>
</div>
