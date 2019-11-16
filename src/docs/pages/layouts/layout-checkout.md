---
title: Layout - Checkout
menu_label: Layout - Checkout
layout: documentation
category: ["No Category"]
markup_language: html
---

<!-- Masthead -->
<div class="section-block masthead bg-grey-ultralight">
  <div class="row align-items-center">
    <div class="col w-6/12">
      <h2>Checkout</h2>
      <p class="lead mb-0">Verify Your Purchase</p>
    </div>
    <div class="col w-6/12 right left-sm">
      <ul class="breadcrumb">
        <li>
          <a href="shop-grid-three-columns.html">Shop</a>
        </li>
        <li>
          <a href="cart.html">Cart</a>
        </li>
        <li> Checkout </li>
      </ul>
    </div>
  </div>
</div>
<!-- Masthead End -->
<div class="section-block">
  <div class="row">
    <!-- Content Inner -->
    <div class="col w-6/12 w-md-full offset-1 offset-md-0 order-1 order-md-2 content-inner">
      <!-- Billing Form -->
      <div class="billing-details">
        <div class="billing-form-container">
          <form class="billing-form" action="#" method="post" novalidate="">
            <!-- Shipping -->
            <div class="row">
              <div class="col w-full">
                <h3 class="mb-30">Shipping</h3>
                <div class="field-wrapper pt-10 pb-10">
                  <input id="radio-1" class="form-element radio active" data-toggle-content="" data-include-margin="" data-target-content="#toggable" name="radio-group" type="radio" checked="">
                  <label for="radio-1" class="radio-label form-radio"><strong>Standard</strong> (FREE)</label>
                  <input id="radio-2" class="form-element radio" name="radio-group" type="radio" data-toggle-content="" data-include-margin="" data-target-content="#toggable-2">
                  <label for="radio-2" class="radio-label form-radio"><strong>48hrs</strong> - $5.00</label>
                  <input id="radio-3" class="form-element radio" name="radio-group" type="radio" data-toggle-content="" data-include-margin="" data-target-content="#toggable-3">
                  <label for="radio-3" class="radio-label form-radio"><strong>Next day</strong> - $15.00</label>
                  <div id="toggable" class="collapsable-target active">
                    <p>Free shipping within the European Union.</p>
                  </div>
                  <div id="toggable-2" class="collapsable-target">
                    <p>Shipping within and outside the European Union. If package is not received within 48hrs, guaranteed money back.</p>
                  </div>
                  <div id="toggable-3" class="collapsable-target">
                    <p>Next day shipping only available Monday-Friday. If package is not received within 24hrs, guaranteed money back</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- Shipping End -->
            <div class="row full-width collapse">
              <div class="col w-full">
                <hr class="mt-20 mb-40">
              </div>
            </div>
            <!-- Billing Shipping Address -->
            <div class="row">
              <div class="col w-full">
                <div class="row">
                  <div class="col w-6/12">
                    <h3 class="mb-30">Address</h3>
                  </div>
                  <div class="col w-6/12 right left-sm">
                    <p><a href="#">Returning Customer →</a></p>
                  </div>
                </div>
                <div class="tabs">
                  <div class="tab-nav button-nav">
                    <a href="#tabs-billing-address" class="button size-sm rounded-tl rounded-sm-t bg-grey-lightest bg-hover-grey-lightest color-grey-dark color-hover-grey-darkest active bg-active-primary color-active-white">Billing Address</a>
                    <a href="#tabs-shipping-address" class="button size-sm rounded-tr bg-grey-lightest bg-hover-grey-lightest color-grey-dark color-hover-grey-darkest bg-active-primary color-active-white">Ship To Another Address</a>
                  </div>
                  <div class="tab-panes">
                    <div id="tabs-billing-address" class="active animate">
                      <div class="tab-content">
                        <div class="row row-form">
                          <div class="col w-full">
                            <div class="row merged-form-elements">
                              <div class="col w-6/12">
                                <input type="text" name="fname_billing" class="form-fname form-element rounded md" placeholder="First Name*" required="">
                              </div>
                              <div class="col w-6/12">
                                <input type="text" name="lname_billing" class="form-lname form-element rounded md" placeholder="Last Name" required="">
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col w-full">
                            <input type="email" name="email_billing" class="form-email form-element rounded md" placeholder="Email Address*" required="">
                          </div>
                        </div>
                        <div class="row">
                          <div class="col w-full">
                            <input type="text" name="address_billing" class="form-billing-address form-element rounded md" placeholder="Billing Address*" required="">
                          </div>
                        </div>
                        <div class="row">
                          <div class="col w-full">
                            <input type="text" name="address_billing_2" class="form-billing-address-2 form-element rounded md" placeholder="Billing Address 2*" required="">
                          </div>
                        </div>
                        <div class="row">
                          <div class="col w-full">
                            <div class="form-select size-md">
                              <select name="country_billing" class="form-element rounded" required="">
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
                        <div class="row row-form">
                          <div class="col w-full">
                            <div class="row merged-form-elements">
                              <div class="col w-8/12">
                                <input type="text" name="city_billing" class="form-city form-element rounded md" placeholder="City*" required="">
                              </div>
                              <div class="col w-4/12">
                                <input type="text" name="zip_code_billing" class="form-zip-code form-element rounded md" placeholder="Zip Code*" required="">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="tabs-shipping-address">
                      <div class="tab-content">
                        <div class="row">
                          <div class="col w-full">
                            <div class="row merged-form-elements">
                              <div class="col w-6/12">
                                <input type="text" name="fname_shipping" class="form-fname form-element rounded md" placeholder="First Name*" required="">
                              </div>
                              <div class="col w-6/12">
                                <input type="text" name="lname_shipping" class="form-lname form-element rounded md" placeholder="Last Name" required="">
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col w-full">
                            <input type="email" name="email_shipping" class="form-email form-element rounded md" placeholder="Email Address*" required="">
                          </div>
                        </div>
                        <div class="row">
                          <div class="col w-full">
                            <input type="text" name="address_shipping" class="form-address form-element rounded md" placeholder="Shipping Address*" required="">
                          </div>
                        </div>
                        <div class="row">
                          <div class="col w-full">
                            <input type="text" name="address_shipping_2" class="form-address-2 form-element rounded md" placeholder="Shipping Address 2*" required="">
                          </div>
                        </div>
                        <div class="row">
                          <div class="col w-full">
                            <div class="form-select size-md">
                              <select name="country_billing" class="form-element rounded" required="">
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
                        <div class="row row-form">
                          <div class="col w-full">
                            <div class="row merged-form-elements">
                              <div class="col w-8/12">
                                <input type="text" name="city_shipping" class="form-city form-element rounded md" placeholder="City*" required="">
                              </div>
                              <div class="col w-4/12">
                                <input type="text" name="zip_code_shipping" class="form-zip-code form-element rounded md" placeholder="Zip Code*" required="">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Billing Shipping Address End -->
            <div class="row fulid collapse">
              <div class="col w-full">
                <hr class="mt-40 mb-40">
              </div>
            </div>
            <!-- Payment Method -->
            <div class="row">
              <div class="col w-full">
                <h3 class="mb-30">Payment Method</h3>
                <div class="tabs">
                  <div class="tab-nav button-nav">
                    <a href="#tabs-credit-card" class="button size-sm rounded-tl rounded-sm-t bg-grey-lightest bg-hover-grey-lightest color-grey-dark color-hover-grey-darkest active bg-active-primary color-active-white">Credit Card</a>
                    <a href="#tabs-paypal" class="button size-sm rounded-tr bg-grey-lightest bg-hover-grey-lightest color-grey-dark color-hover-grey-darkest bg-active-primary color-active-white">PayPal</a>
                  </div>
                  <div class="tab-panes">
                    <div id="tabs-credit-card" class="active animate">
                      <div class="tab-content">
                        <div class="row">
                          <div class="col w-full">
                            <input type="text" name="fname_billing" class="form-fname form-element rounded md" placeholder="Cardholder Name" required="">
                          </div>
                        </div>
                        <div class="row">
                          <div class="col w-full">
                            <div class="row">
                              <div class="col w-full">
                                <div class="form-select size-md">
                                  <select name="card_type" class="form-element rounded" required="">
                                    <option selected="selected" value="">Card Type</option>
                                    <option value="">Visa</option>
                                    <option value="">Visa Express</option>
                                    <option value="">MasterCard</option>
                                    <option value="">American Express</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col w-full">
                            <div class="input-group">
                              <input type="text" name="card_number" class="form-credit-card form-element rounded size-md rounded-l" placeholder="0000-0000-0000-0000" required="">
                              <div class="form-element input-icon size-md rounded-r"><span class="icon-material">credit_card</span></div>
                            </div>
                          </div>
                        </div>
                        <div class="row row-form">
                          <div class="col w-full">
                            <div class="row merged-form-elements">
                              <div class="col w-8/12">
                                <div class="input-group">
                                  <input type="text" name="card_expiration" class="form-expiration form-element rounded-l size-md" placeholder="Exp: 00/00" maxlength="5" required="">
                                  <div class="form-element input-icon size-md rounded-r"><span class="icon-material">date_range</span></div>
                                </div>
                              </div>
                              <div class="col w-4/12">
                                <div class="input-group">
                                  <input type="text" name="card_scode" class="form-security-code form-element rounded size-md rounded-l center" placeholder="CVV" maxlength="3" required="">
                                  <div class="form-element input-icon size-md rounded-r"><a data-content="inline" href="#cvv-modal" class="lightbox-link icon-material color-primary" data-aux-classes="tml-cart-modal tml-exit-light m-0 height-auto" data-modal-mode="" data-toolbar="" data-modal-width="300" data-lightbox-animation="fade" data-modal-animation="slideInTop">info</a></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col w-full">
                            <div class="field-wrapper pt-10 pb-10">
                              <input id="checkbox-save-card-details" class="form-save-card-details form-element checkbox rounded no-margin-bottom" name="save_card_details" type="checkbox" required="">
                              <label for="checkbox-save-card-details" class="checkbox-label no-margin-bottom">Save my credit card for future purchases</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="tabs-paypal">
                      <div class="tab-content">
                        <div class="row">
                          <div class="col w-full">
                            <div class="input-group">
                              <input type="email" name="paypal_email" class="form-email form-element rounded-l md" placeholder="Enter Your PayPal Email" required="">
                              <div class="form-element input-icon size-md rounded-r"><span class="icon-material">email</span></div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col w-10/12">
                            <p><span class="badge rounded bg-pink color-white">Note</span> You'll be redirected to PayPal to fill out your payment details. You'll be redirected back to Boilerplate once payment is confirmed.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Payment Method End -->
            <!-- Submit Payment -->
            <div class="row">
              <div class="col w-full">
                <input type="submit" value="Submit Payment" class="form-submit button rounded size-md mb-0">
              </div>
            </div>
            <!-- Submit Payment End -->
          </form>
        </div>
      </div>
      <!-- Billing Form End -->
    </div>
    <!-- Content Inner End -->
  </div>
</div>
<!-- CVV Modal -->
<div id="cvv-modal" class="modal-dialog-inner section-block cart-overview pt-0 pb-30 background-none hide">
  <div class="modal-header bg-green color-white">
    <h4 class="modal-header-title">Locating CVV</h4>
  </div>
  <div class="thumbnail">
    <img src="images/generic/cvv-credit-card.jpeg" width="300" alt="">
  </div>
  <p>The CVV of your credit card can be found at the back of your credit card, as indicated in the image above.</p>
  <!-- Aux Close -->
  <div class="row">
    <div class="col w-full center">
      <a href="#" class="tml-aux-exit button rounded size-md no-margin-right">Yup, got it!</a>
    </div>
  </div>
  <!-- Aux Close End -->
</div>
<!-- CVV Modal End -->
