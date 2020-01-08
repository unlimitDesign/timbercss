---
title: Component - Table
menu_label: Table
layout: documentation
category: ["Components"]
markup_language: html
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <!-- Content Inner -->
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Component: Table</h1>
      <p>Tables come with a few modifier classes that regulate size, appearance, and responsiveness.</p>
      <!-- Classes -->
      <div class="table-scrollable">
        <table class="table size-md rounded bg-white">
          <thead>
            <tr>
              <th> Class </th>
              <th> Value </th>
            </tr>
          </thead>
          <tbody class="font-mono">
            <tr>
              <th class="color-indigo">.size-sm</th>
              <td> Sets table padding to small. </td>
            </tr>
            <tr>
              <th class="color-indigo">.size-md</th>
              <td> Sets table padding to medium. </td>
            </tr>
            <tr>
              <th class="color-indigo">.size-lg</th>
              <td> Sets table padding to large. </td>
            </tr>
            <tr>
              <th class="color-indigo">.size-xl</th>
              <td> Sets table padding to extra large. </td>
            </tr>
            <tr>
              <th class="color-indigo">.striped</th>
              <td> Adds zebra-striping to any table row within the tbody. </td>
            </tr>
            <tr>
              <th class="color-indigo">.table-scrollable</th>
              <td> Used to make the table scrollable for smaller breakpoints. </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Classes End -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Size</h3>
        <p>Use table size classes to quickly change the padding sizes of an entire table. Or, use Timber's padding utility classes for more control.</p>
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="table-scrollable">
            <table class="table size-md rounded bg-white">
              <thead>
                <tr>
                  <th> # </th>
                  <th> First </th>
                  <th> Last </th>
                  <th> @Handle </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td> Adam </td>
                  <td> John </td>
                  <td> @linkedin </td>
                </tr>
                <tr>
                  <th>2</th>
                  <td> John </td>
                  <td> Paul </td>
                  <td> @facebook </td>
                </tr>
                <tr>
                  <th> 3 </th>
                  <td> Henry </td>
                  <td> Peter </td>
                  <td> @dribbble </td>
                </tr>
                <tr>
                  <th> 4 </th>
                  <td> Josh </td>
                  <td> Richard </td>
                  <td> @twitter </td>
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
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="table-scrollable">
	<table class="table size-md rounded bg-white">
		<thead>
			<tr>
				<th>
					#
				</th>
				<th>
					First
				</th>
				<th>
					Last
				</th>
				<th>
					@Handle
				</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th>1</th>
				<td>
					Adam
				</td>
				<td>
					John
				</td>
				<td>
					@linkedin
				</td>
			</tr>
			<tr>
				<th>2</th>
				<td>
					John
				</td>
				<td>
					Paul
				</td>
				<td>
					@facebook
				</td>
			</tr>
			<tr>
				<th>
					3
				</th>
				<td>
					Henry
				</td>
				<td>
					Peter
				</td>
				<td>
					@dribbble
				</td>
			</tr>
			<tr>
				<th>
					4
				</th>
				<td>
					Josh
				</td>
				<td>
					Richard
				</td>
				<td>
					@twitter
				</td>
			</tr>
		</tbody>
	</table>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Striping</h3>
        <p>Use <code class="color-indigo font-bold">.striped</code> to add zebra striping to all table rows in the tbody.</p>
        <div class="p-30 rounded border-1 border-grey-ultralight">
          <div class="table-scrollable">
            <table class="table striped size-md rounded bg-white">
              <thead>
                <tr>
                  <th> # </th>
                  <th> First </th>
                  <th> Last </th>
                  <th> @Handle </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td> Adam </td>
                  <td> John </td>
                  <td> @linkedin </td>
                </tr>
                <tr>
                  <th>2</th>
                  <td> John </td>
                  <td> Paul </td>
                  <td> @facebook </td>
                </tr>
                <tr>
                  <th> 3 </th>
                  <td> Henry </td>
                  <td> Peter </td>
                  <td> @dribbble </td>
                </tr>
                <tr>
                  <th> 4 </th>
                  <td> Josh </td>
                  <td> Richard </td>
                  <td> @twitter </td>
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
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="table-scrollable">
	<table class="table striped size-md rounded bg-white">
		<thead>
			<tr>
				<th>
					#
				</th>
				<th>
					First
				</th>
				<th>
					Last
				</th>
				<th>
					@Handle
				</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th>1</th>
				<td>
					Adam
				</td>
				<td>
					John
				</td>
				<td>
					@linkedin
				</td>
			</tr>
			<tr>
				<th>2</th>
				<td>
					John
				</td>
				<td>
					Paul
				</td>
				<td>
					@facebook
				</td>
			</tr>
			<tr>
				<th>
					3
				</th>
				<td>
					Henry
				</td>
				<td>
					Peter
				</td>
				<td>
					@dribbble
				</td>
			</tr>
			<tr>
				<th>
					4
				</th>
				<td>
					Josh
				</td>
				<td>
					Richard
				</td>
				<td>
					@twitter
				</td>
			</tr>
		</tbody>
	</table>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Scrollable</h3>
        <p>Use the <code class="color-indigo font-bold">.table-scrollable</code> to make the table scrollable when the container becomes smaller. This class should be added to the table's wrapping parent.</p>
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="table-scrollable">
            <table class="table striped size-md rounded bg-white">
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
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="table-scrollable">
	<table class="table striped size-md rounded bg-white">
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
--></code></pre>
      </div>
      <!-- code -->
    </div>
    <!-- Content Inner End -->
		<!-- {{ sidebar }} -->
  </div>
</div>
