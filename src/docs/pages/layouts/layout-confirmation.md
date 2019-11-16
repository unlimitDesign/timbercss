---
title: Layout - Checkout
menu_label: Layout - Checkout
layout: documentation
category: ["No Category"]
markup_language: html
---

<!-- Intro Title Section 1 -->
<div class="section-block intro-title-1 sm">
  <div class="row">
    <div class="col w-6/12 offset-3">
      <div class="title-container">
        <div class="title-container-inner center left-on-mobile">
          <h1 class="mb-0">Payment Received</h1>
          <p class="lead mb-0 mb-mobile-20">Your order is confirmed</p>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- Intro Title Section 1 End -->
<!-- Confirmation -->
<div class="section-block pt-0">
  <div class="row one-column-on-tablet">
    <div class="col w-6/12 offset-3">
      <div class="with-background">
        <!-- Confirmation Message -->
        <div class="row">
          <div class="col w-full center">
            <p class="lead">Thank you for your payment of <strong>$99.00</strong> on <strong>28 Aug 2017</strong> using <strong>PayPal</strong>.</p>
            <p>We've sent you a copy of the below to your email.</p>
          </div>
          <div class="col w-full">
            <hr>
          </div>
        </div>
        <!-- Confirmation Message End -->
        <!-- Tracking Code -->
        <div class="row">
          <div class="col w-full">
            <h4 class="mb-30">Order Ref. Number</h4>
            <div class="card size-sm rounded bg-green color-white shadow">
              <span class="order-number title-medium opacity-07">98092347-DHS</span>
            </div>
          </div>
        </div>
        <!-- Tracking Code End -->
        <!-- Cart Overview and Totals -->
        <div class="row">
          <div class="col w-full">
            <h4 class="mb-30">Order Overview</h4>
            <div class="cart-overview">
              <table class="table non-responsive rounded size-lg mb-50">
                <thead>
                  <tr>
                    <th class="product-details">Item Name</th>
                    <th class="product-subtotal right">Item Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="cart-item">
                    <td class="product-details">
                      <span>
                        <span>
                          <a href="#" class="product-title">Pro Membership</a>
                          <span class="product-description"><em>1yr/billed anually</em></span>
                        </span>
                      </span>
                    </td>
                    <td class="product-subtotal right">
                      <span class="amount">$99.00</span>
                    </td>
                  </tr>
                  <tr class="cart-order-tax right">
                    <td colspan="2">Taxes: <span class="amount">$0.00</span></td>
                  </tr>
                  <tr class="cart-order-total right">
                    <td colspan="2">Total: <span class="amount">$99.00</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <!-- Cart Overview and Totals End -->
        <!-- Return Home -->
        <div class="row">
          <div class="col w-full center">
            <a href="#" class="button rounded size-lg text-small bg-theme bg-hover-theme color-white color-hover-white">Return Home</a>
          </div>
        </div>
        <!-- Return Home End -->
      </div>
    </div>
  </div>
  <!-- Checkout End -->
</div>
<!-- Confirmation End -->
