---
title: Partial - Contact Form
menu_label: Contact Form
layout: documentation
category: ["Blocks"]
markup_language: html
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Block: Contact Form</h1>
      <p class="mb-10">Below are two sample contact form examples that are customised Timber's utility classes and plugins.</p>
      <h3 class="font-light mt-80">Simple</h3>
      <p>Use <code class="color-indigo font-bold">.row-form</code> on any row within in a form to create a tighter and more compact layout, or, use Timber's padding and margin utility classes for custom layout.</p>
      <!-- Contact Form Simple -->
      <div class="section-block py-60 bg-grey-ultralight">
        <div class="row">
          <div class="col w-10/12 offset-1">
            <div class="form-container contact-form-container">
              <form class="contact-form" action="#" method="post" novalidate="">
                <div class="row row-form">
                  <div class="col w-6/12">
                    <input type="text" name="fname" class="form-fname form-element rounded shadow-focus-outline size-md" placeholder="First Name*" required>
                  </div>
                  <div class="col w-6/12">
                    <input type="text" name="lname" class="form-lname form-element rounded shadow-focus-outline size-md" placeholder="Last Name">
                  </div>
                </div>
                <div class="row row-form">
                  <div class="col w-6/12">
                    <input type="email" name="email" class="form-email form-element rounded shadow-focus-outline size-md" placeholder="Email address*" required>
                  </div>
                  <div class="col w-6/12">
                    <input type="text" name="website" class="form-wesite form-element rounded shadow-focus-outline size-md" placeholder="Website">
                  </div>
                </div>
                <div class="row row-form">
                  <div class="col w-full">
                    <textarea name="message" class="form-message form-element rounded shadow-focus-outline size-md resize-none" placeholder="Message*" required></textarea>
                    <input type="submit" value="Send Email" class="form-submit button rounded shadow-focus-outline size-md">
                  </div>
                </div>
              </form>
              <div class="form-response"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- Contact Form Simple End -->
      <!-- code -->
      <div class="flex items-center justify-between mt-30">
        <h6 class="uppercase">Html</h6>
        <a href="#html-example-1" class="collapsable mb-20 text-small color-grey color-active-blue">expand/collapse</a>
      </div>
      <div id="html-example-1" data-min-height="300" class="collapsable-target rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="form-container contact-form-container">
	<form class="contact-form" action="#" method="post" novalidate>
		<div class="row row-form">
			<div class="col w-6/12">
				<input type="text" name="fname" class="form-fname form-element rounded shadow-focus-outline size-md" placeholder="First Name*" required>
			</div>
			<div class="col w-6/12">
				<input type="text" name="lname" class="form-lname form-element rounded shadow-focus-outline size-md" placeholder="Last Name">
			</div>
		</div>
		<div class="row row-form">
			<div class="col w-6/12">
				<input type="email" name="email" class="form-email form-element rounded shadow-focus-outline size-md" placeholder="Email address*" required>
			</div>
			<div class="col w-6/12">
				<input type="text" name="website" class="form-wesite form-element rounded shadow-focus-outline size-md" placeholder="Website">
			</div>
		</div>
		<div class="row row-form">
			<div class="col w-full">
				<textarea name="message" class="form-message form-element rounded shadow-focus-outline size-md resize-none" placeholder="Message*" required></textarea>
				<input type="submit" value="Send Email" class="form-submit button rounded shadow-focus-outline size-md">
			</div>
		</div>
	</form>
	<div class="form-response"></div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <h3 class="font-light mt-80">Advanced</h3>
      <p>Build advanced forms by combining form components such as radio buttons and boxes along with collapsable content.</p>
      <!-- Contact Form Simple -->
      <div class="section-block py-60 bg-grey-ultralight">
        <div class="row">
          <div class="col w-10/12 offset-1">
            <div class="form-container contact-form-container">
              <form class="contact-form" action="php/send-email.php" method="post" novalidate="">
                <div class="row row-form">
                  <div class="col w-6/12">
                    <input type="text" name="fname" class="form-fname form-element rounded shadow-focus-outline size-md" placeholder="First Name*" required>
                  </div>
                  <div class="col w-6/12">
                    <input type="text" name="lname" class="form-lname form-element rounded shadow-focus-outline size-md" placeholder="Last Name">
                  </div>
                </div>
                <div class="row row-form">
                  <div class="col w-6/12">
                    <input type="email" name="email" class="form-email form-element rounded shadow-focus-outline size-md" placeholder="Email address*" required>
                  </div>
                  <div class="col w-6/12">
                    <input type="text" name="website" class="form-wesite form-element rounded shadow-focus-outline size-md" placeholder="Website">
                  </div>
                </div>
                <div class="row row-form">
                  <div class="col w-6/12">
                    <input type="text" name="date" class="form-aux form-date form-element rounded shadow-focus-outline size-md" placeholder="Day/Month/Year">
                  </div>
                  <div class="col w-6/12">
                    <div class="form-select size-md">
                      <select name="budget" class="form-element rounded shadow-focus-outline form-aux" data-label="Project Budget">
                        <option selected="selected" value="Project Budget">Project Budget</option>
                        <option value="">$500-$1000</option>
                        <option value="">$1000-$2000</option>
                        <option value="">$2000-$3500</option>
                        <option value="">$5000+</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row row-form">
                  <div class="col w-full pt-10 pb-10">
                    <input id="radio-1" class="form-element radio collapsable active" data-toggle-content="" data-include-margin="" data-target-content="#option" name="option-group" type="radio"  value="Option 1" checked="">
                    <label for="radio-1" class="radio-label form-radio">I need my website reworked</label>
                    <input id="radio-2" class="form-element radio collapsable" name="option-group" type="radio"  value="Option 2" data-toggle-content="" data-include-margin="" data-target-content="#option-2">
                    <label for="radio-2" class="radio-label form-radio">I need a new website</label>
                    <input id="radio-3" class="form-element radio collapsable" name="option-group" type="radio"  value="Option 3" data-toggle-content="" data-include-margin="" data-target-content="#option-3">
                    <label for="radio-3" class="radio-label form-radio">Not sure what I need</label>
                    <div class="options mb-20">
                      <div id="option" class="collapsable-target active">
                        <p>You have a current website but just require it to be fixed and/or updated.</p>
                      </div>
                      <div id="option-2" class="collapsable-target">
                        <p>You do not have a web presence at all and require site designed and developed.</p>
                      </div>
                      <div id="option-3" class="collapsable-target">
                        <p>You need a consultation as to what is most appropriate for your particular case.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row row-form">
                  <div class="col w-full">
                    <textarea name="message" class="form-message form-element rounded shadow-focus-outline size-md resize-none" placeholder="Message*" required></textarea>
                  </div>
                </div>
                <div class="row row-form">
                  <div class="col w-full mb-10">
                    <input id="checkbox-1" class="form-element checkbox" name="checkbox-1" type="checkbox" required>
                    <label for="checkbox-1" class="checkbox-label" value="Agreed">I agree that you store my information and get in touch. <a href="#">More on GDPR here</a>.</label>
                  </div>
                </div>
                <div class="row row-form">
                  <div class="col w-full">
                    <input type="submit" value="Send Email" class="form-submit button rounded shadow-focus-outline size-md">
                  </div>
                </div>
              </form>
              <div class="form-response"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- Contact Form Simple End -->
      <!-- code -->
      <div class="flex items-center justify-between mt-30">
        <h6 class="uppercase">Html</h6>
        <a href="#html-example-2" class="collapsable mb-20 text-small color-grey color-active-blue">expand/collapse</a>
      </div>
      <div id="html-example-2" data-min-height="300" class="collapsable-target rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="form-container contact-form-container">
	<form class="contact-form" action="php/send-email.php" method="post" novalidate>
		<div class="row row-form">
			<div class="col w-6/12">
				<input type="text" name="fname" class="form-fname form-element rounded shadow-focus-outline size-md" placeholder="First Name*" required>
			</div>
			<div class="col w-6/12">
				<input type="text" name="lname" class="form-lname form-element rounded shadow-focus-outline size-md" placeholder="Last Name">
			</div>
		</div>
		<div class="row row-form">
			<div class="col w-6/12">
				<input type="email" name="email" class="form-email form-element rounded shadow-focus-outline size-md" placeholder="Email address*" required>
			</div>
			<div class="col w-6/12">
				<input type="text" name="website" class="form-wesite form-element rounded shadow-focus-outline size-md" placeholder="Website">
			</div>
		</div>
		<div class="row row-form">
			<div class="col w-6/12">
				<input type="text" name="date" class="form-aux form-date form-element rounded shadow-focus-outline size-md" placeholder="Day/Month/Year">
			</div>
			<div class="col w-6/12">
				<div class="form-select size-md">
					<select name="budget" class="form-element rounded shadow-focus-outline form-aux" data-label="Project Budget">
						<option selected="selected" value="Project Budget">Project Budget</option>
						<option value="">$500-$1000</option>
						<option value="">$1000-$2000</option>
						<option value="">$2000-$3500</option>
						<option value="">$5000+</option>
					</select>
				</div>
			</div>
		</div>
		<div class="row row-form">
			<div class="col w-full pt-10 pb-10">
				<input id="radio-1" class="form-element radio collapsable active" data-toggle-content data-include-margin data-target-content="#option" name="option-group" type="radio" checked>
				<label for="radio-1" class="radio-label form-radio">I need my website reworked</label>
				<input id="radio-2" class="form-element radio collapsable" name="option-group" type="radio" data-toggle-content data-include-margin data-target-content="#option-2">
				<label for="radio-2" class="radio-label form-radio">I need a new website</label>
				<input id="radio-3" class="form-element radio collapsable" name="option-group" type="radio" data-toggle-content data-include-margin data-target-content="#option-3">
				<label for="radio-3" class="radio-label form-radio">Not sure what I need</label>
				<div class="options mb-20">
					<div id="option" class="collapsable-target active"><p>You have a current website but just require it to be fixed and/or updated.</p></div>
					<div id="option-2" class="collapsable-target"><p>You do not have a web presence at all and require site designed and developed.</p></div>
					<div id="option-3" class="collapsable-target"><p>You need a consultation as to what is most appropriate for your particular case.</p></div>
				</div>
			</div>
		</div>
		<div class="row row-form">
			<div class="col w-full">
				<textarea name="message" class="form-message form-element rounded shadow-focus-outline size-md resize-none" placeholder="Message*" required></textarea>
			</div>
		</div>
		<div class="row row-form">
			<div class="col w-full mb-10">
				<input id="checkbox-1" class="form-element checkbox" name="checkbox-1" type="checkbox" required>
				<label for="checkbox-1" class="checkbox-label">I agree that you store my information and get in touch. <a href="#">More on GDPR here</a>.</label>
			</div>
		</div>
		<div class="row row-form">
			<div class="col w-full">
				<input type="submit" value="Send Email" class="form-submit button rounded shadow-focus-outline size-md">
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
