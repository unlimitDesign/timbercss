---
title: Component - Pricing Table
menu_label: Pricing Table
layout: documentation
category: ["Components"]
markup_language: html
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <!-- Content Inner -->
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Component: Pricing Table</h1>
      <p>Timber provides a simple pricing table component that can be fully customized using utility classes. Use Timber's grid column utitlity classes to control the width of pricing table columns in different breakpoints.</p>
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Basic</h3>
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="pricing-table row border-grey-ultralight">
            <div class="pricing-table-column col w-6/12 w-md-6/12 rounded-l rounded-sm bg-white">
              <div class="pricing-table-header">
                <h3>Startup</h3>
              </div>
              <div class="pricing-table-price">
                <span class="price">
                  <sup class="currency">$</sup>350 <span class="interval">/month</span>
                </span>
              </div>
              <ul class="pricing-table-options">
                <li>Logo Proposition</li>
                <li><del>5 Page Website</del></li>
                <li><del>Domain + Hosting</del></li>
                <li><del>2 Months After Sale Support</del></li>
              </ul>
              <div class="pricing-table-footer">
                <a href="#" class="button rounded md">Select Option</a>
              </div>
            </div>
            <div class="pricing-table-column col w-6/12 w-md-6/12 rounded callout bg-blue color-white">
              <div class="pricing-table-header">
                <h3>Expert</h3>
              </div>
              <div class="pricing-table-price">
                <span class="price">
                  <sup class="currency">$</sup>950 <span class="interval">/month</span>
                </span>
              </div>
              <ul class="pricing-table-options">
                <li>Logo Proposition</li>
                <li>5 Page Website</li>
                <li>Domain + Hosting</li>
                <li>2 Months After Sale Support</li>
              </ul>
              <div class="pricing-table-footer">
                <a href="#" class="button rounded size-md bg-secondary">Select Option</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="pricing-table row border-grey-ultralight">
	<div class="pricing-table-column col w-6/12 w-md-6/12 rounded-l rounded-sm bg-white">
		<div class="pricing-table-header">
			<h3>Startup</h3>
		</div>
		<div class="pricing-table-price">
			<span class="price">
				<sup class="currency">$</sup>350
				<span class="interval">/month</span>
			</span>
		</div>
		<ul class="pricing-table-options">
			<li>Logo Proposition</li>
			<li><del>5 Page Website</del></li>
			<li><del>Domain + Hosting</del></li>
			<li><del>2 Months After Sale Support</del></li>
		</ul>
		<div class="pricing-table-footer">
			<a href="#" class="button rounded md">Select Option</a>
		</div>
	</div>
	<div class="pricing-table-column col w-6/12 w-md-6/12 rounded callout bg-blue color-white">
		<div class="pricing-table-header">
			<h3>Expert</h3>
		</div>
		<div class="pricing-table-price">
			<span class="price">
				<sup class="currency">$</sup>950
				<span class="interval">/month</span>
			</span>
		</div>
		<ul class="pricing-table-options">
			<li>Logo Proposition</li>
			<li>5 Page Website</li>
			<li>Domain + Hosting</li>
			<li>2 Months After Sale Support</li>
		</ul>
		<div class="pricing-table-footer">
			<a href="#" class="button rounded size-md bg-secondary">Select Option</a>
		</div>
	</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Customized With Utility Classes</h3>
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="pricing-table row">
            <div class="pricing-table-column w-6/12 w-md-6/12">
              <div class="pricing-table-header">
                <h3>Single</h3>
              </div>
              <div class="pricing-table-price bg-grey-ultralight">
                <span class="price h1"> Free <span class="interval">per month</span>
                </span>
              </div>
              <hr class="mt-0 mr-30 ml-30">
              <div class="pricing-table-text">
                <p>The Timber Free Commercial Developer License is for individual developers only.</p>
              </div>
              <div class="pricing-table-footer">
                <a href="#" class="button rounded md">Select Option</a>
              </div>
            </div>
            <div class="pricing-table-column w-6/12 w-md-6/12 shadow-x4 rounded bg-white shadow-lg">
              <div class="pricing-table-header bg-green color-white">
                <h3>Team</h3>
              </div>
              <div class="pricing-table-price bg-white">
                <span class="price h1">
                  <sup class="currency">$</sup>99 <span class="interval">per month</span>
                </span>
              </div>
              <hr class="mt-0 mr-30 ml-30">
              <div class="pricing-table-text">
                <p>The Timber Commercial Team License is for up to 10 developers in the same organisation.</p>
              </div>
              <div class="pricing-table-footer">
                <a href="#" class="button rounded md">Select Option</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="p-30 rounded bg-grey-ultralight">
	<div class="pricing-table row">
		<div class="pricing-table-column w-6/12 w-md-6/12">
			<div class="pricing-table-header">
				<h3>Single</h3>
			</div>
			<div class="pricing-table-price bg-grey-ultralight">
				<span class="price h1">
					Free
					<span class="interval">per month</span>
				</span>
			</div>
			<hr class="mt-0 mr-30 ml-30">
			<div class="pricing-table-text">
				<p>The Timber Free Commercial Developer License is for individual developers only.</p>
			</div>
			<div class="pricing-table-footer">
				<a href="#" class="button rounded md">Select Option</a>
			</div>
		</div>
		<div class="pricing-table-column w-6/12 w-md-6/12 shadow-x4 rounded bg-white shadow-lg">
			<div class="pricing-table-header bg-green color-white">
				<h3>Team</h3>
			</div>
			<div class="pricing-table-price bg-white">
				<span class="price h1">
					<sup class="currency">$</sup>99
					<span class="interval">per month</span>
				</span>
			</div>
			<hr class="mt-0 mr-30 ml-30">
			<div class="pricing-table-text">
				<p>The Timber Commercial Team License is for up to 10 developers in the same organisation.</p>
			</div>
			<div class="pricing-table-footer">
				<a href="#" class="button rounded md">Select Option</a>
			</div>
		</div>
	</div>
	</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="row pt-0">
            <div class="col w-6/12 w-lg-6/12">
              <div class="pricing-table row border-white">
                <div class="pricing-table-column col w-full shadow-hover-x3 rounded shadow-lg">
                  <div class="pricing-table-header bg-white flex items-center justify-between">
                    <h3>Starter</h3>
                    <div class="pricing-table-price">
                      <span class="price">
                        <sup class="currency">$</sup>12 <span class="interval">per month</span>
                      </span>
                    </div>
                  </div>
                  <hr class="m-0">
                  <div class="pricing-table-text bg-white flex">
                    <p class="lead">Ideal for freelancers and small agencies looking for an easy way to collaborate on the fly.</p>
                  </div>
                  <div class="pricing-table-footer center bg-white">
                    <a href="#" class="button rounded">Select Option</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col w-6/12 w-lg-6/12">
              <div class="pricing-table rounded border-white">
                <div class="pricing-table-column col w-full shadow-hover-x3 rounded shadow-lg">
                  <div class="pricing-table-header bg-pink color-white flex items-center justify-between">
                    <h3>Expert</h3>
                    <div class="pricing-table-price">
                      <span class="price">
                        <sup class="currency">$</sup>18 <span class="interval">per month</span>
                      </span>
                    </div>
                  </div>
                  <div class="pricing-table-text bg-white">
                    <p class="lead">Perfect for mid sized teams of 10-30 people. Includes 200GB of cloud storage at no extra cost.</p>
                  </div>
                  <div class="pricing-table-footer center bg-white">
                    <a href="#" class="button rounded">Select Option</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="p-30 rounded bg-grey-ultralight">
	<div class="row pt-0">
		<div class="col w-6/12 w-lg-6/12">
			<div class="pricing-table row border-white">
				<div class="pricing-table-column col w-full shadow-hover-x3 rounded shadow-lg">
					<div class="pricing-table-header bg-white flex items-center justify-between">
						<h3>Starter</h3>
						<div class="pricing-table-price">
							<span class="price">
								<sup class="currency">$</sup>12
								<span class="interval">per month</span>
							</span>
						</div>
					</div>
					<hr class="m-0">
					<div class="pricing-table-text bg-white flex">
						<p class="lead">Ideal for freelancers and small agencies looking for an easy way to collaborate on the fly.</p>
					</div>
					<div class="pricing-table-footer center bg-white">
						<a href="#" class="button rounded">Select Option</a>
					</div>
				</div>
			</div>
		</div>
		<div class="col w-6/12 w-lg-6/12">
			<div class="pricing-table rounded border-white">
				<div class="pricing-table-column col w-full shadow-hover-x3 rounded shadow-lg">
					<div class="pricing-table-header bg-pink color-white flex items-center justify-between">
						<h3>Expert</h3>
						<div class="pricing-table-price">
							<span class="price">
								<sup class="currency">$</sup>18
								<span class="interval">per month</span>
							</span>
						</div>
					</div>
					<div class="pricing-table-text bg-white">
						<p class="lead">Perfect for mid sized teams of 10-30 people. Includes 200GB of cloud storage at no extra cost.</p>
					</div>
					<div class="pricing-table-footer center bg-white">
						<a href="#" class="button rounded">Select Option</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="row pt-0">
            <div class="col w-full">
              <div class="pricing-table row">
                <div class="pricing-table-column col w-6/12 rounded-l rounded-md-t bg-white">
                  <div class="pricing-table-header flex items-center justify-between">
                    <h2>Startup</h2>
                    <span class="badge rounded bg-pink color-white">Money Saver</span>
                  </div>
                  <div class="pricing-table-price">
                    <span class="price">
                      <sup class="currency">$</sup>139 <span class="interval">per user/month</span>
                    </span>
                  </div>
                  <ul class="pricing-table-options">
                    <li>10 bots</li>
                    <li>Unlimited task requests</li>
                    <li>Dedicated support</li>
                    <li><del>Cancel anytime</del></li>
                    <li><del>Branding, website and mobile access</del></li>
                  </ul>
                  <div class="pricing-table-footer">
                    <a href="#" class="button rounded">Select Option</a>
                  </div>
                </div>
                <div class="pricing-table-column col w-6/12 rounded-r rounded-mb-b bg-white">
                  <div class="pricing-table-header flex items-center justify-between">
                    <h2>Expert</h2>
                    <span class="badge rounded bg-green color-white">Performance</span>
                  </div>
                  <div class="pricing-table-price">
                    <span class="price">
                      <sup class="currency">$</sup>289 <span class="interval">per user/month</span>
                    </span>
                  </div>
                  <ul class="pricing-table-options">
                    <li>Unlimited bots</li>
                    <li>Unlimited task requests</li>
                    <li>Dedicated support</li>
                    <li>Cancel anytime</li>
                    <li>Branding, website and mobile access</li>
                  </ul>
                  <div class="pricing-table-footer">
                    <a href="#" class="button rounded">Select Option</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="p-30 rounded bg-grey-ultralight">
	<div class="row pt-0">
		<div class="col w-full">
			<div class="pricing-table row">
				<div class="pricing-table-column col w-6/12 rounded-l rounded-md-t bg-white">
					<div class="pricing-table-header flex items-center justify-between">
						<h2>Startup</h2>
						<span class="badge rounded bg-pink color-white">Money Saver</span>
					</div>
					<div class="pricing-table-price">
						<span class="price">
							<sup class="currency">$</sup>139
							<span class="interval">per user/month</span>
						</span>
					</div>
					<ul class="pricing-table-options">
						<li>10 bots</li>
						<li>Unlimited task requests</li>
						<li>Dedicated support</li>
						<li><del>Cancel anytime</del></li>
						<li><del>Branding, website and mobile access</del></li>
					</ul>
					<div class="pricing-table-footer">
						<a href="#" class="button rounded">Select Option</a>
					</div>
				</div>
				<div class="pricing-table-column col w-6/12 rounded-r rounded-mb-b bg-white">
					<div class="pricing-table-header flex items-center justify-between">
						<h2>Expert</h2>
						<span class="badge rounded bg-green color-white">Performance</span>
					</div>
					<div class="pricing-table-price">
						<span class="price">
							<sup class="currency">$</sup>289
							<span class="interval">per user/month</span>
						</span>
					</div>
					<ul class="pricing-table-options">
						<li>Unlimited bots</li>
						<li>Unlimited task requests</li>
						<li>Dedicated support</li>
						<li>Cancel anytime</li>
						<li>Branding, website and mobile access</li>
					</ul>
					<div class="pricing-table-footer">
						<a href="#" class="button rounded">Select Option</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="row pt-0">
            <div class="col w-6/12 w-md-6/12">
              <div>
                <div class="pricing-table row rounded bg-white">
                  <div class="pricing-table-column col w-full rounded">
                    <div class="pricing-table-header">
                      <span class="badge rounded text-normal bg-green color-white">Free</span>
                      <div class="pricing-table-price">
                        <span class="price display-lg">
                          <sup class="currency">$</sup>0 <span class="interval">/ month</span>
                        </span>
                      </div>
                    </div>
                    <hr class="mt-0 mr-30 ml-30">
                    <div class="pricing-table-text">
                      <p>Powerful compute instances with Intel CPUs and 100% SSD storage.</p>
                      <ul class="list-unstyled">
                        <li><strong>250 GB</strong> of storage</li>
                        <li><strong>1 TB</strong> of outbound transfer</li>
                        <li><strong>$0.03</strong> per additional GB stored</li>
                        <li><strong>$0.02</strong> per additional GB transferred</li>
                      </ul>
                    </div>
                    <div class="pricing-table-footer">
                      <a href="#" class="button rounded">Select Option</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col w-6/12 w-md-6/12">
              <div>
                <div class="pricing-table row bg-white">
                  <div class="pricing-table-column col w-full rounded">
                    <div class="pricing-table-header">
                      <span class="badge rounded text-normal bg-blue color-white">Team Pro</span>
                      <div class="pricing-table-price">
                        <span class="price display-lg">
                          <sup class="currency">$</sup>35 <span class="interval">/ month</span>
                        </span>
                      </div>
                    </div>
                    <hr class="mt-0 mr-30 ml-30">
                    <div class="pricing-table-text">
                      <p>Powerful compute instances with Intel CPUs and 100% SSD storage.</p>
                      <ul class="list-unstyled">
                        <li><strong>450 GB</strong> of storage</li>
                        <li><strong>2 TB</strong> of outbound transfer</li>
                        <li><strong>$0.02</strong> per additional GB stored</li>
                        <li><strong>$0.01</strong> per additional GB transferred</li>
                      </ul>
                    </div>
                    <div class="pricing-table-footer">
                      <a href="#" class="button rounded">Select Option</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="p-30 rounded bg-grey-ultralight">
	<div class="row pt-0">
		<div class="col w-6/12 w-md-6/12">
			<div>
				<div class="pricing-table row rounded bg-white">
					<div class="pricing-table-column col w-full rounded">
						<div class="pricing-table-header">
							<span class="badge rounded text-normal bg-green color-white">Free</span>
							<div class="pricing-table-price">
								<span class="price display-lg">
									<sup class="currency">$</sup>0
									<span class="interval">/ month</span>
								</span>
							</div>
						</div>
						<hr class="mt-0 mr-30 ml-30">
						<div class="pricing-table-text">
							<p>Powerful compute instances with Intel CPUs and 100% SSD storage.</p>
							<ul class="list-unstyled">
								<li><strong>250 GB</strong> of storage</li>
								<li><strong>1 TB</strong> of outbound transfer</li>
								<li><strong>$0.03</strong> per additional GB stored</li>
								<li><strong>$0.02</strong> per additional GB transferred</li>
							</ul>
						</div>
						<div class="pricing-table-footer">
							<a href="#" class="button rounded">Select Option</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col w-6/12 w-md-6/12">
			<div>
				<div class="pricing-table row bg-white">
					<div class="pricing-table-column col w-full rounded">
						<div class="pricing-table-header">
							<span class="badge rounded text-normal bg-blue color-white">Team Pro</span>
							<div class="pricing-table-price">
								<span class="price display-lg">
									<sup class="currency">$</sup>35
									<span class="interval">/ month</span>
								</span>
							</div>
						</div>
						<hr class="mt-0 mr-30 ml-30">
						<div class="pricing-table-text">
							<p>Powerful compute instances with Intel CPUs and 100% SSD storage.</p>
							<ul class="list-unstyled">
								<li><strong>450 GB</strong> of storage</li>
								<li><strong>2 TB</strong> of outbound transfer</li>
								<li><strong>$0.02</strong> per additional GB stored</li>
								<li><strong>$0.01</strong> per additional GB transferred</li>
							</ul>
						</div>
						<div class="pricing-table-footer">
							<a href="#" class="button rounded">Select Option</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">A Regular Pricing Table</h3>
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="table-scrollable">
            <table class="table striped size-lg rounded bg-white">
              <thead>
                <tr>
                  <th> Features </th>
                  <th>
                    <span class="badge rounded h5 m-0 bg-green color-white">Free</span>
                  </th>
                  <th>
                    <span class="badge rounded h5 m-0 bg-blue color-white">Team Pro</span>
                  </th>
                  <th>
                    <span class="badge rounded h5 m-0 bg-pink color-white">Team Business</span>
                  </th>
                  <th>
                    <span class="badge rounded h5 m-0 bg-purple color-white">Enterprise</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Included Users</th>
                  <td> 1 </td>
                  <td> 5 </td>
                  <td> 10 </td>
                  <td> Custom </td>
                </tr>
                <tr>
                  <th>Extra Users</th>
                  <td>
                    <span class="icon-material mb-0">close</span>
                  </td>
                  <td> $9/user/month </td>
                  <td> $29/user/month </td>
                  <td> Custom Pricing </td>
                </tr>
                <tr>
                  <th> Collaborator role </th>
                  <td>
                    <span class="icon-material mb-0">close</span>
                  </td>
                  <td>
                    <span class="icon-material mb-0 color-green">done</span>
                  </td>
                  <td>
                    <span class="icon-material mb-0 color-green">done</span>
                  </td>
                  <td>
                    <span class="icon-material mb-0 color-green">done</span>
                  </td>
                </tr>
                <tr>
                  <th> Billing admin role </th>
                  <td>
                    <span class="icon-material mb-0">close</span>
                  </td>
                  <td>
                    <span class="icon-material mb-0">close</span>
                  </td>
                  <td>
                    <span class="icon-material mb-0 color-green">done</span>
                  </td>
                  <td>
                    <span class="icon-material mb-0 color-green">done</span>
                  </td>
                </tr>
                <tr>
                  <th> Invoicing </th>
                  <td>
                    <span class="icon-material mb-0">close</span>
                  </td>
                  <td>
                    <span class="icon-material mb-0">close</span>
                  </td>
                  <td>
                    <span class="icon-material mb-0">close</span>
                  </td>
                  <td>
                    <span class="icon-material mb-0 color-green">done</span>
                  </td>
                </tr>
                <tr>
                  <th> 99.99% Uptime SLA </th>
                  <td>
                    <span class="icon-material mb-0">close</span>
                  </td>
                  <td>
                    <span class="icon-material mb-0">close</span>
                  </td>
                  <td>
                    <span class="icon-material mb-0">close</span>
                  </td>
                  <td>
                    <span class="icon-material mb-0 color-green">done</span>
                  </td>
                </tr>
                <tr>
                  <th> 24x7 Premium Support </th>
                  <td>
                    <span class="icon-material mb-0">close</span>
                  </td>
                  <td>
                    <span class="icon-material mb-0">close</span>
                  </td>
                  <td>
                    <span class="icon-material mb-0">close</span>
                  </td>
                  <td>
                    <span class="icon-material mb-0 color-green">done</span>
                  </td>
                </tr>
                <tr>
                  <th> Role-based access control </th>
                  <td>
                    <span class="icon-material mb-0">close</span>
                  </td>
                  <td>
                    <span class="icon-material mb-0">close</span>
                  </td>
                  <td>
                    <span class="icon-material mb-0 color-green">done</span>
                  </td>
                  <td>
                    <span class="icon-material mb-0 color-green">done</span>
                  </td>
                </tr>
                <tr>
                  <th> Audit logs </th>
                  <td>
                    <span class="icon-material mb-0">close</span>
                  </td>
                  <td> 7-day history </td>
                  <td> Full history </td>
                  <td> Full history </td>
                </tr>
                <tr>
                  <th> Bandwidth </th>
                  <td> 100GB </td>
                  <td> 400GB </td>
                  <td> 600GB </td>
                  <td> custom </td>
                </tr>
                <tr>
                  <th>Extra bandwidth</th>
                  <td> $20/100GB </td>
                  <td> $20/100GB </td>
                  <td> $20/100GB </td>
                  <td> custom </td>
                </tr>
                <tr>
                  <th></th>
                  <td>
                    <a href="#" class="button size-sm rounded mb-0">Select Option</a>
                  </td>
                  <td>
                    <a href="#" class="button size-sm rounded mb-0">Select Option</a>
                  </td>
                  <td>
                    <a href="#" class="button size-sm rounded mb-0">Select Option</a>
                  </td>
                  <td>
                    <a href="#" class="button size-sm rounded mb-0">Select Option</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="p-30 rounded bg-grey-ultralight">
	<div class="table-scrollable">
		<table class="table striped size-lg rounded bg-white">
			<thead>
				<tr>
					<th>
						Features
					</th>
					<th>
						<span class="badge rounded h5 m-0 bg-green color-white">Free</span>
					</th>
					<th>
						<span class="badge rounded h5 m-0 bg-blue color-white">Team Pro</span>
					</th>
					<th>
						<span class="badge rounded h5 m-0 bg-pink color-white">Team Business</span>
					</th>
					<th>
						<span class="badge rounded h5 m-0 bg-purple color-white">Enterprise</span>
					</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>Included Users</th>
					<td>
						1
					</td>
					<td>
						5
					</td>
					<td>
						10
					</td>
					<td>
						Custom
					</td>
				</tr>
				<tr>
					<th>Extra Users</th>
					<td>
						<span class="icon-material mb-0">close</span>
					</td>
					<td>
						$9/user/month
					</td>
					<td>
						$29/user/month
					</td>
					<td>
						Custom Pricing
					</td>
				</tr>
				<tr>
					<th>
						Collaborator role
					</th>
					<td>
						<span class="icon-material mb-0">close</span>
					</td>
					<td>
						<span class="icon-material mb-0 color-green">done</span>
					</td>
					<td>
						<span class="icon-material mb-0 color-green">done</span>
					</td>
					<td>
						<span class="icon-material mb-0 color-green">done</span>
					</td>
				</tr>
				<tr>
					<th>
						Billing admin role
					</th>
					<td>
						<span class="icon-material mb-0">close</span>
					</td>
					<td>
						<span class="icon-material mb-0">close</span>
					</td>
					<td>
						<span class="icon-material mb-0 color-green">done</span>
					</td>
					<td>
						<span class="icon-material mb-0 color-green">done</span>
					</td>
				</tr>
				<tr>
					<th>
						Invoicing
					</th>
					<td>
						<span class="icon-material mb-0">close</span>
					</td>
					<td>
						<span class="icon-material mb-0">close</span>
					</td>
					<td>
						<span class="icon-material mb-0">close</span>
					</td>
					<td>
						<span class="icon-material mb-0 color-green">done</span>
					</td>
				</tr>
				<tr>
					<th>
						99.99% Uptime SLA
					</th>
					<td>
		  				<span class="icon-material mb-0">close</span>
					</td>
					<td>
						<span class="icon-material mb-0">close</span>
					</td>
					<td>
						<span class="icon-material mb-0">close</span>
					</td>
					<td>
						<span class="icon-material mb-0 color-green">done</span>
					</td>
				</tr>
				<tr>
					<th>
						24x7 Premium Support
					</th>
					<td>
						<span class="icon-material mb-0">close</span>
					</td>
					<td>
						<span class="icon-material mb-0">close</span>
					</td>
					<td>
						<span class="icon-material mb-0">close</span>
					</td>
					<td>
						<span class="icon-material mb-0 color-green">done</span>
					</td>
				</tr>
				<tr>
					<th>
						Role-based access control
					</th>
					<td>
						<span class="icon-material mb-0">close</span>
					</td>
					<td>
						<span class="icon-material mb-0">close</span>
					</td>
					<td>
						<span class="icon-material mb-0 color-green">done</span>
					</td>
					<td>
						<span class="icon-material mb-0 color-green">done</span>
					</td>
				</tr>
				<tr>
					<th>
						Audit logs
					</th>
					<td>
						<span class="icon-material mb-0">close</span>
					</td>
					<td>
						7-day history
					</td>
					<td>
						Full history
					</td>
					<td>
						Full history
					</td>
				</tr>
				<tr>
					<th>
						Bandwidth
					</th>
					<td>
						100GB
					</td>
					<td>
						400GB
					</td>
					<td>
						600GB
					</td>
					<td>
						custom
					</td>
				</tr>
				<tr>
					<th>Extra bandwidth</th>
					<td>
						$20/100GB

    				</td>
    				<td>
    					$20/100GB

    				</td>
    				<td>
    					$20/100GB

    				</td>
    				<td>
    					custom
    				</td>
    			</tr>
    			<tr>
    				<th></th>
    				<td>
    					<a href="#" class="button size-sm rounded mb-0">Select Option</a>

    				</td>
    				<td>
    					<a href="#" class="button size-sm rounded mb-0">Select Option</a>

    				</td>
    				<td>
    					<a href="#" class="button size-sm rounded mb-0">Select Option</a>

    				</td>
    				<td>
    					<a href="#" class="button size-sm rounded mb-0">Select Option</a>
    				</td>
    			</tr>
    		</tbody>
    	</table>
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
