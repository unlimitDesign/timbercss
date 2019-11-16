---
title: Theming
menu_label: Theming
layout: documentation
category: ["Gettings Started"]
markup_language: html
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <!-- Content Inner -->
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Theming</h1>
      <p class="text-large">Timber uses Sass variables for generating utlity classes, for theming, component and block changes.</p>
      <h2 class="font-light text-huge">SCSS</h2>
      <p>Avoid modifying the core Timber Sass files so that updating the core will not overwrite your changes or customisations. Either create your own stylesheet and import Timber, or, use the <strong>_variables_custom.scss</strong> file for overwriting default framework Sass variables. Note that variable <strong>_variables_timber.scss</strong> has the !default flag, which allows you to override the variable’s default value in <strong>_variables_custom.scss</strong>t modifying Timber's source code. Copy and paste variables as needed, modify their values, and remove the !default flag.</p>
      <!-- code -->
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--your-project/
├── src
│   └── scss
│		└── mixins
│		└── partials
│		└── utilities
│		└── _timber.scss
│		└── _variables_timber.scss
│		└── _variables_custom.scss
--></code></pre>
      </div>
      <!-- code -->
      <h5>Removing utilities, components &amp; blocks</h5>
      <p>Most likely you will not need all utilities, components and blocks for every project. As such, remove the ones you do not need in <code class="color-indigo font-bold">_timber.scss</code> by simply commenting the ones not needed. Once you run the build command, these scss files will be exluded.</p>
      <!-- code -->
      <div class="flex items-center justify-between mt-30">
        <h6 class="uppercase">Html</h6>
        <a href="#html-example-1" class="collapsable mb-20 text-small color-grey color-active-blue">expand/collapse</a>
      </div>
      <div id="html-example-1" data-min-height="300" class="collapsable-target rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--// Timber variables
@import '_variables_timber.scss';

// Variable overrides
@import '_variables_custom.scss';

@import 'mixins/_box-shadow.scss';
@import 'mixins/_breakpoints.scss';
@import 'mixins/_color-mod.scss';
@import 'mixins/_gradients.scss';
@import 'mixins/_replace-string.scss';
@import 'mixins/_colors.scss';
@import 'mixins/_transition.scss';
@import 'mixins/_uncode.scss';

@import 'partials/components/_base.scss';
@import 'partials/components/_grid-flexbox.scss';
@import 'partials/components/_grid-css.scss';
@import 'partials/components/_accordion.scss';
@import 'partials/components/_badge.scss';
//@import 'partials/components/_breadcrumb.scss';
@import 'partials/components/_button.scss';
@import 'partials/components/_card.scss';
@import 'partials/components/_code.scss';
@import 'partials/components/_collapsable.scss';
@import 'partials/components/_dropdown.scss';
@import 'partials/components/_forms.scss';
@import 'partials/components/_icon-library.scss';
@import 'partials/components/_icon.scss';
@import 'partials/components/_image.scss';
@import 'partials/components/_list.scss';
@import 'partials/components/_media.scss';
@import 'partials/components/_navigation.scss';
@import 'partials/components/_overlay-navigation.scss';
@import 'partials/components/_pagination.scss';
/*@import 'partials/components/_pricing-table.scss';
@import 'partials/components/_progress-bar.scss';
@import 'partials/components/_progressline.scss';
@import 'partials/components/_side-navigation.scss';*/
@import 'partials/components/_table.scss';
@import 'partials/components/_tabs.scss';

@import 'utilities/background/_background-attachment.scss';
@import 'utilities/background/_background-position.scss';
@import 'utilities/background/_background-repeat.scss';
@import 'utilities/background/_background-size.scss';
@import 'utilities/border/_border-radius.scss';
@import 'utilities/border/_border-style.scss';
@import 'utilities/border/_border-width.scss';
@import 'utilities/color/_background.scss';
@import 'utilities/color/_border.scss';
@import 'utilities/color/_color.scss';
@import 'utilities/effects/_opacity.scss';
@import 'utilities/effects/_shadow.scss';
@import 'utilities/effects/_transition.scss';
@import 'utilities/flexbox/_flex.scss';
@import 'utilities/interactivity/_cursor.scss';
@import 'utilities/interactivity/_pointer-events.scss';
@import 'utilities/interactivity/_resize.scss';
@import 'utilities/interactivity/_select.scss';
@import 'utilities/layout/_display.scss';
@import 'utilities/layout/_float.scss';
@import 'utilities/layout/_overflow.scss';
@import 'utilities/layout/_position.scss';
@import 'utilities/layout/_visibility.scss';
@import 'utilities/layout/_z-index.scss';
@import 'utilities/sizing/_height.scss';
@import 'utilities/sizing/_width.scss';
@import 'utilities/spacing/_padding.scss';
@import 'utilities/spacing/_margin.scss';
@import 'utilities/states/_disabled.scss';
@import 'utilities/typography/_font-family.scss';
@import 'utilities/typography/_font-size.scss';
@import 'utilities/typography/_font-style.scss';
@import 'utilities/typography/_font-weight.scss';
@import 'utilities/typography/_letter-spacing.scss';
@import 'utilities/typography/_line-height.scss';
@import 'utilities/typography/_text-align.scss';
@import 'utilities/typography/_text-decoration.scss';
@import 'utilities/typography/_text-transform.scss';
@import 'utilities/typography/_vertical-align.scss';
@import 'utilities/typography/_whitespace.scss';
@import 'utilities/typography/_word-break.scss';

@import 'partials/plugins/_horizon.scss';
@import 'partials/plugins/_preloader.scss';
@import 'partials/plugins/_parallax.scss';
@import 'partials/plugins/_summit.scss';

@import 'partials/sections/_base.scss';
@import 'partials/sections/_feature.scss';
@import 'partials/sections/_footer.scss';
@import 'partials/sections/_grid.scss';
@import 'partials/sections/_header.scss';
@import 'partials/sections/_hero.scss';
@import 'partials/sections/_logo.scss';
@import 'partials/sections/_masthead.scss';
@import 'partials/sections/_sidebar.scss';--></code></pre>
      </div>
      <!-- code -->
      <h5>Importing your own partials</h5>
      <p>To add your own SCSS to Timber, open <code class="color-indigo font-bold">timber.scss</code> and import your files as necessary.</p>
      <!-- code -->
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--@import 'folder/_your_file.scss';
--></code></pre>
      </div>
      <!-- code -->
      <hr class="mt-50">
      <a href="getting-started-file-size.html" title="Next Page" class="pagination-link button border-none flex flex-row-reverse justify-start justify-sm-between w-auto pr-0 m-0 right bg-transparent bg-hover-transparent left-sm color-grey color-hover-grey-darkest">
        <span class="icon-material mr-0 ml-10">chevron_right</span>
        <span class="mt-0 mr-20">
          <span class="leading-none text-tiny uppercase">Next</span>
          <span class="block text-large">Managing file size</span>
        </span>
      </a>
    </div>
    <!-- Content Inner End -->
  </div>
</div>
