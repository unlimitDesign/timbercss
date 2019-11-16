---
title: Layout - Register With Progress Line
menu_label: Layout - Register With Progress Line
layout: documentation
category: ["No Category"]
markup_language: html
---

<!-- Register Section -->
<div class="section-block h-screen">
  <div class="row">
    <div class="col w-6/12 w-md-full offset-1 offset-md-0">
      <div class="card rounded size-xl bg-white border-grey-ultralight shadow-lg">
        <h3>Let's Get Started</h3>
        <p class="mb-20">Already have an account? <a href="index-login-4.html" class="fade-location">Click Here</a></p>
        <hr>
        <div class="register-form-container">
          <form class="register-form" action="#" method="post" novalidate="">
            <div class="row">
              <div class="col w-full">
                <label>Company Name:</label>
                <input type="text" name="register[companyname]" class="form-companyname form-element rounded size-md" placeholder="John" required="">
              </div>
            </div>
            <div class="row">
              <div class="col w-full">
                <label>Email:</label>
                <input type="email" name="register[email]" class="form-email form-element rounded size-md" placeholder="johndoe@gmail.com" required="">
              </div>
            </div>
            <div class="row">
              <div class="col w-full">
                <label>Country:</label>
                <div class="form-select size-md">
                  <select name="register[country]" class="form-element rounded" required="">
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
              <div class="col w-full mt-10">
                <input type="submit" value="Next Step" class="form-submit button rounded size-md mb-0">
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="col w-4/12 hide-md">
      <ul class="progressline left">
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
