---
title: Layout: Login
menu_label: Layout: Login
layout: documentation
category: Layouts
markup_language: html
relative_path: layouts/layout-login
---

<!-- Login Section -->
<div class="section-block replicable-content">
  <div class="row">
    <div class="col w-6/12 offset-3">
      <div>
        <div class="logo mb-50">
          <div class="logo-inner center">
            <a href="index.html"><img src="../images/logo-dark.png" width="125" alt="Boilerplate Logo"></a>
          </div>
        </div>
        <div class="card rounded size-xl bg-white shadow shadow-hover">
          <h3 class="center">Log In To Account</h3>
          <p class="mb-20 center">Already have an account? <a href="index-login-4.html" class="fade-location">Click Here</a></p>
          <hr>
          <div class="center">
            <a href="#" class="button rounded md"><span class="icon-brands facebook left"></span><span>Sign up with Facebook</span></a>
            <a href="#" class="button rounded md"><span class="icon-brands twitter left"></span><span>Sign up with Twitter</span></a>
          </div>
          <hr>
          <div class="login-form-container">
            <form class="login-form" action="#" method="post" novalidate="">
              <div class="row">
                <div class="col w-full">
                  <label class="color-charcoal">Username:</label>
                  <input type="text" name="login[username]" class="form-username form-element rounded md" placeholder="JohnDoe" required="">
                </div>
              </div>
              <div class="row">
                <div class="col w-full">
                  <label class="color-charcoal">Password:</label>
                  <input type="password" name="login[password]" class="form-password form-element rounded md" placeholder="••••••••" required="">
                </div>
              </div>
              <div class="row">
                <div class="col w-full">
                  <input id="checkbox-1" class="form-element checkbox rounded" name="login[checkbox-1]" type="checkbox" required="">
                  <label for="checkbox-1" class="checkbox-label m-0">Remember Me</label>
                </div>
              </div>
              <div class="row">
                <div class="col w-full center">
                  <input type="submit" value="Sign In" class="form-submit button rounded md">
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- Login Section End -->
