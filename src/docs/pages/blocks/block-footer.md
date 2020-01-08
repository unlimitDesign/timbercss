---
title: Partial - Footer
menu_label: Footer
layout: documentation
category: ["Blocks"]
markup_language: html
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Block: Footer</h1>
      <p class="mb-10">Heros provide a simple container with some basic CSS to help you better contorl how the hero content appears. It uses Timber's row and column structure to create great looking layouts. This also means that Timber's utility classes can be used to change it's appearance in different breakpoints.</p>
      <h3 class="font-light mt-80">Simple Hero</h3>
      <!-- Footer Logo Left -->
      <footer class="footer mt-80 footer-light">
        <div class="footer-top">
          <div class="row">
            <div class="col w-3/12 w-md-full">
              <div class="footer-block">
                <div class="footer-logo">
                  <a href="index.html"><img src="/images/logo-dark.svg" alt="Boilerplate Logo"></a>
                </div>
              </div>
            </div>
            <div class="col w-9/12 w-md-full">
              <div class="row">
                <div class="col w-3/12 w-md-6/12">
                  <div class="footer-block">
                    <h4 class="footer-title mb-30">Title 1</h4>
                    <ul>
                      <li><a href="#">Link 1</a></li>
                      <li><a href="#">Link 2</a></li>
                      <li><a href="#">Link 3</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col w-3/12 w-md-6/12">
                  <div class="footer-block">
                    <h4 class="footer-title mb-30">Title 2</h4>
                    <ul>
                      <li><a href="#">Link 1</a></li>
                      <li><a href="#">Link 2</a></li>
                      <li><a href="#">Link 3</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col w-3/12 w-md-6/12">
                  <div class="footer-block">
                    <h4 class="footer-title mb-30">Title 3</h4>
                    <ul>
                      <li><a href="#">Link 1</a></li>
                      <li><a href="#">Link 2</a></li>
                      <li><a href="#">Link 3</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col w-3/12 w-md-6/12">
                  <div class="footer-block">
                    <h4 class="footer-title mb-30">Title 4</h4>
                    <ul>
                      <li><a href="#">Link 1</a></li>
                      <li><a href="#">Link 2</a></li>
                      <li><a href="#">Link 3</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="row">
            <div class="col w-full">
              <div class="footer-bottom-inner flex justify-between">
                <p class="copyright color-grey-dark">© ThemeMountain. All Rights Reserved. Released under MIT license.</p>
                <p><a href="#" class="scroll-to color-white color-hover-grey-light align-middle" data-scroll-type="window-scroll-to" data-scroll-y="0">Back Top <span class="icon-material size-sm m-0">arrow_upward</span></a></p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <!-- Footer Logo Left End -->
      <!-- code -->
      <div class="flex items-center justify-between mt-30">
        <h6 class="uppercase">Html</h6>
        <a href="#html-example-1" class="collapsable mb-20 text-small color-grey color-active-blue">expand/collapse</a>
      </div>
      <div id="html-example-1" data-min-height="300" class="collapsable-target rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<footer class="footer footer-light">
	<div class="footer-top">
		<div class="row">
			<div class="col w-3/12 w-md-full">
				<div class="footer-block">
					<div class="footer-logo">
						<a href="index.html"><img src="/images/logo-dark.svg" alt="Boilerplate Logo" /></a>
					</div>
				</div>
			</div>
			<div class="col w-9/12 w-md-full">
				<div class="row">
					<div class="col w-3/12 w-md-6/12">
						<div class="footer-block">
							<h4 class="footer-title mb-30">Title 1</h4>
							<ul>
								<li><a href="#">Link 1</a></li>
								<li><a href="#">Link 2</a></li>
								<li><a href="#">Link 3</a></li>
							</ul>
						</div>
					</div>
					<div class="col w-3/12 w-md-6/12">
						<div class="footer-block">
							<h4 class="footer-title mb-30">Title 2</h4>
							<ul>
								<li><a href="#">Link 1</a></li>
								<li><a href="#">Link 2</a></li>
								<li><a href="#">Link 3</a></li>
							</ul>
						</div>
					</div>
					<div class="col w-3/12 w-md-6/12">
						<div class="footer-block">
							<h4 class="footer-title mb-30">Title 3</h4>
							<ul>
								<li><a href="#">Link 1</a></li>
								<li><a href="#">Link 2</a></li>
								<li><a href="#">Link 3</a></li>
							</ul>
						</div>
					</div>
					<div class="col w-3/12 w-md-6/12">
						<div class="footer-block">
							<h4 class="footer-title mb-30">Title 4</h4>
							<ul>
								<li><a href="#">Link 1</a></li>
								<li><a href="#">Link 2</a></li>
								<li><a href="#">Link 3</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="footer-bottom">
		<div class="row">
			<div class="col w-full">
				<div class="footer-bottom-inner flex justify-between">
					<p class="copyright color-grey-dark">&copy; ThemeMountain. All Rights Reserved. Released under MIT license.</p>
					<p><a href="#" class="scroll-to color-white color-hover-grey-light align-middle" data-scroll-type="window-scroll-to" data-scroll-y="0">Back Top <span class="icon-material size-sm m-0">arrow_upward</span></a></p>
				</div>
			</div>
		</div>
	</div>
</footer>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Footer Logo Center -->
      <footer class="footer mt-80">
        <div class="footer-top">
          <div class="row">
            <div class="col w-2/12 w-md-full order-2 order-md-1 center left-md">
              <div class="footer-block">
                <div class="footer-logo">
                  <a href="index.html"><img src="/images/logo.svg" alt="Boilerplate Logo"></a>
                </div>
              </div>
            </div>
            <div class="col w-5/12 w-md-full order-1 order-md-2 left">
              <div class="row">
                <div class="col w-6/12 w-md-6/12">
                  <div class="footer-block">
                    <h4 class="footer-title mb-30">Title 1</h4>
                    <ul>
                      <li><a href="#">Link 1</a></li>
                      <li><a href="#">Link 2</a></li>
                      <li><a href="#">Link 3</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col w-6/12 w-md-6/12">
                  <div class="footer-block">
                    <h4 class="footer-title mb-30">Title 2</h4>
                    <ul>
                      <li><a href="#">Link 1</a></li>
                      <li><a href="#">Link 2</a></li>
                      <li><a href="#">Link 3</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col w-5/12 w-md-full order-3 right left-md">
              <div class="row">
                <div class="col w-6/12 w-md-6/12">
                  <div class="footer-block">
                    <h4 class="footer-title mb-30">Title 1</h4>
                    <ul>
                      <li><a href="#">Link 1</a></li>
                      <li><a href="#">Link 2</a></li>
                      <li><a href="#">Link 3</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col w-6/12 w-md-6/12">
                  <div class="footer-block">
                    <h4 class="footer-title mb-30">Title 2</h4>
                    <ul>
                      <li><a href="#">Link 1</a></li>
                      <li><a href="#">Link 2</a></li>
                      <li><a href="#">Link 3</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="row">
            <div class="col w-full">
              <div class="footer-bottom-inner flex justify-between">
                <p class="copyright color-grey-dark">© ThemeMountain. All Rights Reserved. Released under MIT license.</p>
                <p><a href="#" class="scroll-to color-white color-hover-grey-light align-middle" data-scroll-type="window-scroll-to" data-scroll-y="0">Back Top <span class="icon-material size-sm m-0">arrow_upward</span></a></p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <!-- Footer Logo Center End -->
      <!-- code -->
      <div class="flex items-center justify-between mt-30">
        <h6 class="uppercase">Html</h6>
        <a href="#html-example-2" class="collapsable mb-20 text-small color-grey color-active-blue">expand/collapse</a>
      </div>
      <div id="html-example-2" data-min-height="300" class="collapsable-target rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<footer class="footer">
	<div class="footer-top">
		<div class="row">
			<div class="col w-2/12 w-md-full order-2 order-md-1 center left-md">
				<div class="footer-block">
					<div class="footer-logo">
						<a href="index.html"><img src="/images/logo.svg" alt="Boilerplate Logo" /></a>
					</div>
				</div>
			</div>
			<div class="col w-5/12 w-md-full order-1 order-md-2 left">
				<div class="row">
					<div class="col w-6/12 w-md-6/12">
						<div class="footer-block">
							<h4 class="footer-title mb-30">Title 1</h4>
							<ul>
								<li><a href="#">Link 1</a></li>
								<li><a href="#">Link 2</a></li>
								<li><a href="#">Link 3</a></li>
							</ul>
						</div>
					</div>
					<div class="col w-6/12 w-md-6/12">
						<div class="footer-block">
							<h4 class="footer-title mb-30">Title 2</h4>
							<ul>
								<li><a href="#">Link 1</a></li>
								<li><a href="#">Link 2</a></li>
								<li><a href="#">Link 3</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="col w-5/12 w-md-full order-3 right left-md">
				<div class="row">
					<div class="col w-6/12 w-md-6/12">
						<div class="footer-block">
							<h4 class="footer-title mb-30">Title 1</h4>
							<ul>
								<li><a href="#">Link 1</a></li>
								<li><a href="#">Link 2</a></li>
								<li><a href="#">Link 3</a></li>
							</ul>
						</div>
					</div>
					<div class="col w-6/12 w-md-6/12">
						<div class="footer-block">
							<h4 class="footer-title mb-30">Title 2</h4>
							<ul>
								<li><a href="#">Link 1</a></li>
								<li><a href="#">Link 2</a></li>
								<li><a href="#">Link 3</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="footer-bottom">
		<div class="row">
			<div class="col w-full">
				<div class="footer-bottom-inner flex justify-between">
					<p class="copyright color-grey-dark">&copy; ThemeMountain. All Rights Reserved. Released under MIT license.</p>
					<p><a href="#" class="scroll-to color-white color-hover-grey-light align-middle" data-scroll-type="window-scroll-to" data-scroll-y="0">Back Top <span class="icon-material size-sm m-0">arrow_upward</span></a></p>
				</div>
			</div>
		</div>
	</div>
</footer>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Footer Logo Right -->
      <footer class="footer mt-80 footer-light">
        <div class="footer-top">
          <div class="row">
            <div class="col w-3/12 w-md-full order-2 order-md-1 right left-md">
              <div class="footer-block">
                <div class="footer-logo">
                  <a href="index.html"><img src="/images/logo-dark.svg" alt="Boilerplate Logo"></a>
                </div>
              </div>
            </div>
            <div class="col w-9/12 w-md-full order-1">
              <div class="row">
                <div class="col w-3/12 w-md-6/12">
                  <div class="footer-block">
                    <h4 class="footer-title mb-30">Title 1</h4>
                    <ul>
                      <li><a href="#">Link 1</a></li>
                      <li><a href="#">Link 2</a></li>
                      <li><a href="#">Link 3</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col w-3/12 w-md-6/12">
                  <div class="footer-block">
                    <h4 class="footer-title mb-30">Title 2</h4>
                    <ul>
                      <li><a href="#">Link 1</a></li>
                      <li><a href="#">Link 2</a></li>
                      <li><a href="#">Link 3</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col w-3/12 w-md-6/12">
                  <div class="footer-block">
                    <h4 class="footer-title mb-30">Title 3</h4>
                    <ul>
                      <li><a href="#">Link 1</a></li>
                      <li><a href="#">Link 2</a></li>
                      <li><a href="#">Link 3</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col w-3/12 w-md-6/12">
                  <div class="footer-block">
                    <h4 class="footer-title mb-30">Title 4</h4>
                    <ul>
                      <li><a href="#">Link 1</a></li>
                      <li><a href="#">Link 2</a></li>
                      <li><a href="#">Link 3</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="row">
            <div class="col w-full">
              <div class="footer-bottom-inner flex justify-between">
                <p class="copyright color-grey-dark">© ThemeMountain. All Rights Reserved. Released under MIT license.</p>
                <p><a href="#" class="scroll-to color-white color-hover-grey-light align-middle" data-scroll-type="window-scroll-to" data-scroll-y="0">Back Top <span class="icon-material size-sm m-0">arrow_upward</span></a></p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <!-- Footer Logo Right End -->
      <!-- code -->
      <div class="flex items-center justify-between mt-30">
        <h6 class="uppercase">Html</h6>
        <a href="#html-example-3" class="collapsable mb-20 text-small color-grey color-active-blue">expand/collapse</a>
      </div>
      <div id="html-example-3" data-min-height="300" class="collapsable-target rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<footer class="footer footer-light">
	<div class="footer-top">
		<div class="row">
			<div class="col w-3/12 w-md-full order-2 order-md-1 right left-md">
				<div class="footer-block">
					<div class="footer-logo">
						<a href="index.html"><img src="/images/logo-dark.svg" alt="Boilerplate Logo" /></a>
					</div>
				</div>
			</div>
			<div class="col w-9/12 w-md-full order-1">
				<div class="row">
					<div class="col w-3/12 w-md-6/12">
						<div class="footer-block">
							<h4 class="footer-title mb-30">Title 1</h4>
							<ul>
								<li><a href="#">Link 1</a></li>
								<li><a href="#">Link 2</a></li>
								<li><a href="#">Link 3</a></li>
							</ul>
						</div>
					</div>
					<div class="col w-3/12 w-md-6/12">
						<div class="footer-block">
							<h4 class="footer-title mb-30">Title 2</h4>
							<ul>
								<li><a href="#">Link 1</a></li>
								<li><a href="#">Link 2</a></li>
								<li><a href="#">Link 3</a></li>
							</ul>
						</div>
					</div>
					<div class="col w-3/12 w-md-6/12">
						<div class="footer-block">
							<h4 class="footer-title mb-30">Title 3</h4>
							<ul>
								<li><a href="#">Link 1</a></li>
								<li><a href="#">Link 2</a></li>
								<li><a href="#">Link 3</a></li>
							</ul>
						</div>
					</div>
					<div class="col w-3/12 w-md-6/12">
						<div class="footer-block">
							<h4 class="footer-title mb-30">Title 4</h4>
							<ul>
								<li><a href="#">Link 1</a></li>
								<li><a href="#">Link 2</a></li>
								<li><a href="#">Link 3</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="footer-bottom">
		<div class="row">
			<div class="col w-full">
				<div class="footer-bottom-inner flex justify-between">
					<p class="copyright color-grey-dark">&copy; ThemeMountain. All Rights Reserved. Released under MIT license.</p>
					<p><a href="#" class="scroll-to color-white color-hover-grey-light align-middle" data-scroll-type="window-scroll-to" data-scroll-y="0">Back Top <span class="icon-material size-sm m-0">arrow_upward</span></a></p>
				</div>
			</div>
		</div>
	</div>
</footer>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Footer Fluid Logo Left -->
      <footer class="footer mt-80">
        <div class="footer-top">
          <div class="row fluid">
            <div class="col w-2/12 w-lg-12">
              <div class="footer-block">
                <div class="footer-logo">
                  <a href="index.html"><img src="/images/logo.svg" alt="Boilerplate Logo"></a>
                </div>
              </div>
            </div>
            <div class="col w-10/12 w-lg-12">
              <div class="row fluid collapse">
                <div class="col w-2/12 w-lg-3 w-md-6/12">
                  <div class="footer-block">
                    <h4 class="footer-title mb-30">Title 1</h4>
                    <ul>
                      <li><a href="#">Link 1</a></li>
                      <li><a href="#">Link 2</a></li>
                      <li><a href="#">Link 3</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col w-2/12 w-lg-3 w-md-6/12">
                  <div class="footer-block">
                    <h4 class="footer-title mb-30">Title 2</h4>
                    <ul>
                      <li><a href="#">Link 1</a></li>
                      <li><a href="#">Link 2</a></li>
                      <li><a href="#">Link 3</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col w-2/12 w-lg-3 w-md-6/12">
                  <div class="footer-block">
                    <h4 class="footer-title mb-30">Title 3</h4>
                    <ul>
                      <li><a href="#">Link 1</a></li>
                      <li><a href="#">Link 2</a></li>
                      <li><a href="#">Link 3</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col w-2/12 w-lg-3 w-md-6/12">
                  <div class="footer-block">
                    <h4 class="footer-title mb-30">Title 4</h4>
                    <ul>
                      <li><a href="#">Link 1</a></li>
                      <li><a href="#">Link 2</a></li>
                      <li><a href="#">Link 3</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col w-2/12 w-lg-3 w-md-6/12">
                  <div class="footer-block">
                    <h4 class="footer-title mb-30">Title 5</h4>
                    <ul>
                      <li><a href="#">Link 1</a></li>
                      <li><a href="#">Link 2</a></li>
                      <li><a href="#">Link 3</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col w-2/12 w-lg-3 w-md-6/12">
                  <div class="footer-block">
                    <h4 class="footer-title mb-30">Title 6</h4>
                    <ul>
                      <li><a href="#">Link 1</a></li>
                      <li><a href="#">Link 2</a></li>
                      <li><a href="#">Link 3</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="row fluid">
            <div class="col w-full">
              <div class="footer-bottom-inner flex justify-between">
                <p class="copyright color-grey-dark">© ThemeMountain. All Rights Reserved. Released under MIT license.</p>
                <p><a href="#" class="scroll-to color-white color-hover-grey-light align-middle" data-scroll-type="window-scroll-to" data-scroll-y="0">Back Top <span class="icon-material size-sm m-0">arrow_upward</span></a></p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <!-- Footer Fluid Logo Left End -->
      <!-- code -->
      <div class="flex items-center justify-between mt-30">
        <h6 class="uppercase">Html</h6>
        <a href="#html-example-4" class="collapsable mb-20 text-small color-grey color-active-blue">expand/collapse</a>
      </div>
      <div id="html-example-4" data-min-height="300" class="collapsable-target rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<footer class="footer">
	<div class="footer-top">
		<div class="row fluid">
			<div class="col w-2/12 w-lg-12">
				<div class="footer-block">
					<div class="footer-logo">
						<a href="index.html"><img src="/images/logo.svg" alt="Boilerplate Logo" /></a>
					</div>
				</div>
			</div>
			<div class="col w-10/12 w-lg-12">
				<div class="row fluid collapse">
					<div class="col w-2/12 w-lg-3 w-md-6/12">
						<div class="footer-block">
							<h4 class="footer-title mb-30">Title 1</h4>
							<ul>
								<li><a href="#">Link 1</a></li>
								<li><a href="#">Link 2</a></li>
								<li><a href="#">Link 3</a></li>
							</ul>
						</div>
					</div>
					<div class="col w-2/12 w-lg-3 w-md-6/12">
						<div class="footer-block">
							<h4 class="footer-title mb-30">Title 2</h4>
							<ul>
								<li><a href="#">Link 1</a></li>
								<li><a href="#">Link 2</a></li>
								<li><a href="#">Link 3</a></li>
							</ul>
						</div>
					</div>
					<div class="col w-2/12 w-lg-3 w-md-6/12">
						<div class="footer-block">
							<h4 class="footer-title mb-30">Title 3</h4>
							<ul>
								<li><a href="#">Link 1</a></li>
								<li><a href="#">Link 2</a></li>
								<li><a href="#">Link 3</a></li>
							</ul>
						</div>
					</div>
					<div class="col w-2/12 w-lg-3 w-md-6/12">
						<div class="footer-block">
							<h4 class="footer-title mb-30">Title 4</h4>
							<ul>
								<li><a href="#">Link 1</a></li>
								<li><a href="#">Link 2</a></li>
								<li><a href="#">Link 3</a></li>
							</ul>
						</div>
					</div>
					<div class="col w-2/12 w-lg-3 w-md-6/12">
						<div class="footer-block">
							<h4 class="footer-title mb-30">Title 5</h4>
							<ul>
								<li><a href="#">Link 1</a></li>
								<li><a href="#">Link 2</a></li>
								<li><a href="#">Link 3</a></li>
							</ul>
						</div>
					</div>
					<div class="col w-2/12 w-lg-3 w-md-6/12">
						<div class="footer-block">
							<h4 class="footer-title mb-30">Title 6</h4>
							<ul>
								<li><a href="#">Link 1</a></li>
								<li><a href="#">Link 2</a></li>
								<li><a href="#">Link 3</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="footer-bottom">
		<div class="row fluid">
			<div class="col w-full">
				<div class="footer-bottom-inner flex justify-between">
					<p class="copyright color-grey-dark">&copy; ThemeMountain. All Rights Reserved. Released under MIT license.</p>
					<p><a href="#" class="scroll-to color-white color-hover-grey-light align-middle" data-scroll-type="window-scroll-to" data-scroll-y="0">Back Top <span class="icon-material size-sm m-0">arrow_upward</span></a></p>
				</div>
			</div>
		</div>
	</div>
</footer>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Footer Elements -->
      <footer class="footer mt-80 footer-light">
        <div class="footer-top">
          <div class="row">
            <div class="col w-7/12 w-md-full">
              <div class="footer-block">
                <div class="row">
                  <div class="col w-4/12 w-md-6/12">
                    <div class="footer-block">
                      <h4 class="footer-title mb-30">Navigate</h4>
                      <ul>
                        <li><a href="#">Link 1</a></li>
                        <li><a href="#">Link 2</a></li>
                        <li><a href="#">Link 3</a></li>
                        <li><a href="#">Link 4</a></li>
                        <li><a href="#">Link 5</a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="col w-8/12 w-md-6/12">
                    <div class="footer-block">
                      <h4 class="footer-title mb-30">Contact</h4>
                      <ul>
                        <li class="mb-20">348 Greenpoint<br>Avenue Brooklyn, NY<br>+61 3928 3324</li>
                        <li class="mb-20">Mon - Fri 9am - 5pm </li>
                        <li class="mb-20"><a href="mailto:#">hello@company.io</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col w-5/12 w-md-full">
              <div class="footer-block">
                <h4 class="footer-title mb-30">Subscribe</h4>
                <p>The latest Leap news, articles, and resources, sent straight to your inbox every month.</p>
                <div class="form-container subscribe-form-container">
                  <form class="subscribe-form" action="#" method="post" novalidate="">
                    <div class="row">
                      <div class="col w-full">
                        <div class="field-wrapper">
                          <input type="email" name="email" class="form-email w-full form-element rounded size-sm" placeholder="Email address*" tabindex="2" required="">
                        </div>
                      </div>
                    </div>
                    <div class="row mb-20">
                      <div class="col w-full">
                        <input type="submit" value="Subscribe" class="form-submit w-full button rounded size-sm">
                        <div class="form-response show"></div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col w-full form-consent">
                        <div class="field-wrapper">
                          <input id="checkbox-signup-form-container" class="form-element checkbox" name="checkbox-consent" type="checkbox" required="">
                          <label for="checkbox-signup-form-container" class="checkbox-label consent-checkbox-label">I give my consent to be emailed about promotions and offers.</label>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="row">
            <div class="col w-full">
              <div class="footer-bottom-inner flex justify-between items-center">
                <div class="dropdown menu-up mr-20" data-update-selection="">
                  <a href="#" class="button size-sm rounded"><span>Dropup</span><span class="icon-material right">expand_less</span></a>
                  <div class="dropdown-menu">
                    <a href="#" class="dropdown-item">Dropdown item 1</a>
                    <a href="#" class="dropdown-item">Dropdown item 2</a>
                    <a href="#" class="dropdown-item">Dropdown item 3</a>
                    <a href="#" class="dropdown-item">Dropdown item 4</a>
                    <a href="#" class="dropdown-item">Dropdown item 5</a>
                    <a href="#" class="dropdown-item">Dropdown item 6</a>
                  </div>
                </div>
                <p class="copyright mb-0">© ThemeMountain. All Rights Reserved. Released under MIT license.</p>
                <ul class="social-list list-horizontal ml-auto mb-0">
                  <li>
                    <a href="#">
                      <span class="icon-brands size-sm facebook"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="icon-brands size-sm twitter"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="icon-brands size-sm fivehundred-px"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="scroll-to icon-material" data-scroll-type="window-scroll-to" data-scroll-y="0">arrow_upward</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <!-- Footer Elements End -->
      <!-- code -->
      <div class="flex items-center justify-between mt-30">
        <h6 class="uppercase">Html</h6>
        <a href="#html-example-5" class="collapsable mb-20 text-small color-grey color-active-blue">expand/collapse</a>
      </div>
      <div id="html-example-5" data-min-height="300" class="collapsable-target rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<footer class="footer footer-light">
	<div class="footer-top">
		<div class="row">
			<div class="col w-7/12 w-md-full">
				<div class="footer-block">
					<div class="row">
						<div class="col w-4/12 w-md-6/12">
							<div class="footer-block">
								<h4 class="footer-title mb-30">Navigate</h4>
								<ul>
									<li><a href="#">Link 1</a></li>
									<li><a href="#">Link 2</a></li>
									<li><a href="#">Link 3</a></li>
									<li><a href="#">Link 4</a></li>
									<li><a href="#">Link 5</a></li>
								</ul>
							</div>
						</div>
						<div class="col w-8/12 w-md-6/12">
							<div class="footer-block">
								<h4 class="footer-title mb-30">Contact</h4>
								<ul>
									<li class="mb-20">348 Greenpoint<br>Avenue Brooklyn, NY<br>+61 3928 3324</li>
									<li class="mb-20">Mon - Fri 9am - 5pm
									<li class="mb-20"><a href="mailto:#">hello@company.io</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col w-5/12 w-md-full">
				<div class="footer-block">
					<h4 class="footer-title mb-30">Subscribe</h4>
					<p>The latest Leap news, articles, and resources, sent straight to your inbox every month.</p>
					<div class="form-container subscribe-form-container">
						<form class="subscribe-form" action="#" method="post" novalidate>
							<div class="row">
								<div class="col w-full">
									<div class="field-wrapper">
										<input type="email" name="email" class="form-email w-full form-element rounded size-sm" placeholder="Email address*" tabindex="2" required>
									</div>
								</div>
							</div>
							<div class="row mb-20">
								<div class="col w-full">
									<input type="submit" value="Subscribe" class="form-submit w-full button rounded size-sm">
									<div class="form-response show"></div>
								</div>
							</div>
							<div class="row">
								<div class="col w-full form-consent">
									<div class="field-wrapper">
									 	<input id="checkbox-signup-form-container" class="form-element checkbox" name="checkbox-consent" type="checkbox" required="">
									 	<label for="checkbox-signup-form-container" class="checkbox-label consent-checkbox-label">I give my consent to be emailed about promotions and offers.</label>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="footer-bottom">
		<div class="row">
			<div class="col w-full">
				<div class="footer-bottom-inner flex justify-between items-center">
					<div class="dropdown menu-up mr-20" data-update-selection>
						<a href="#" class="button size-sm rounded"><span>Dropup</span><span class="icon-material right">expand_less</span></a>
						<div class="dropdown-menu">
							<a href="#" class="dropdown-item">Dropdown item 1</a>
							<a href="#" class="dropdown-item">Dropdown item 2</a>
							<a href="#" class="dropdown-item">Dropdown item 3</a>
							<a href="#" class="dropdown-item">Dropdown item 4</a>
							<a href="#" class="dropdown-item">Dropdown item 5</a>
							<a href="#" class="dropdown-item">Dropdown item 6</a>
						</div>
					</div>
					<p class="copyright mb-0">&copy; ThemeMountain. All Rights Reserved. Released under MIT license.</p>
					<ul class="social-list list-horizontal ml-auto mb-0">
						<li>
							<a href="#">
								<span class="icon-brands size-sm facebook"></span>
							</a>
						</li>
						<li>
							<a href="#">
								<span class="icon-brands size-sm twitter"></span>
							</a>
						</li>
						<li>
							<a href="#">
								<span class="icon-brands size-sm fivehundred-px"></span>
							</a>
						</li>
						<li>
							<a href="#" class="scroll-to icon-material" data-scroll-type="window-scroll-to" data-scroll-y="0">arrow_upward</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</footer>
--></code></pre>
      </div>
      <!-- code -->
    </div>
    <!-- Content Inner End -->
		<!-- {{ sidebar }} -->
  </div>
</div>
