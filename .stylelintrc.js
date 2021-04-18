/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

// stylelint configuration
// https://stylelint.io/user-guide/configuration/
module.exports = {
  // The standard config based on a handful of CSS style guides
  // https://github.com/stylelint/stylelint-config-standard
  extends: 'stylelint-config-standard',

  plugins: [
    // stylelint plugin to sort CSS rules content with specified order
    // https://github.com/hudochenkov/stylelint-order
    'stylelint-order',
  ],

  rules: {
    'property-no-unknown': [
      true,
      {
        ignoreProperties: [
          // CSS Modules composition
          // https://github.com/css-modules/css-modules#composition
          'composes',
        ],
      },
    ],

    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: [
          // CSS Modules :global scope
          // https://github.com/css-modules/css-modules#exceptions
          'global',
        ],
      },
    ],

    // Opinionated rule, you can disable it if you want
    'string-quotes': 'single',

    // https://github.com/hudochenkov/stylelint-order/blob/master/rules/order/README.md
    'order/order': [
      'custom-properties',
      'dollar-variables',
      'declarations',
      'at-rules',
      'rules',
    ],

    'no-descending-specificity': null,

    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['mixin', 'define-mixin'],
      },
    ],

    // Specify the order of properties within declaration blocks (https://github.com/necolas/idiomatic-css#declaration-order).
    // https://github.com/hudochenkov/stylelint-order/blob/master/rules/properties-order/README.md
    'order/properties-order': [
      [
        {
          groupName: 'content',
          properties: ['content', 'quotes'],
        },
        {
          groupName: 'position',
          properties: [
            'order',
            'box-sizing',
            'display',
            'position',
            'top',
            'right',
            'bottom',
            'left',
            'float',
            'clear',
            'vertical-align',
          ],
        },
        {
          groupName: 'grid',
          properties: [
            'grid',
            'grid-template',
            'grid-template-columns',
            'grid-template-rows',
            'grid-template-areas',
            'gap',
            'grid-gap',
            'column-gap',
            'grid-column-gap',
            'row-gap',
            'grid-row-gap',
            'grid-auto-columns',
            'grid-auto-rows',
            'grid-auto-flow',
            'grid-area',
            'grid-column',
            'grid-column-start',
            'grid-column-end',
            'grid-row',
            'grid-row-start',
            'grid-row-end',
          ],
        },
        {
          groupName: 'flex',
          properties: [
            'flex',
            'flex-basis',
            'flex-direction',
            'flex-flow',
            'flex-grow',
            'flex-shrink',
            'flex-wrap',
            'justify-content',
            'align-content',
            'align-items',
            'align-self',
          ],
        },
        {
          groupName: 'visibility',
          properties: ['visibility', 'opacity', 'z-index'],
        },
        {
          groupName: 'overflow',
          properties: ['overflow', 'overflow-x', 'overflow-y', 'resize'],
        },
        {
          groupName: 'indents',
          properties: [
            'margin',
            'margin-top',
            'margin-right',
            'margin-bottom',
            'margin-left',
            'padding',
            'padding-top',
            'padding-right',
            'padding-bottom',
            'padding-left',
          ],
        },
        {
          groupName: 'size',
          properties: [
            'width',
            'min-width',
            'max-width',
            'height',
            'min-height',
            'max-height',
          ],
        },
        {
          groupName: 'border',
          properties: [
            'border',
            'border-top',
            'border-right',
            'border-bottom',
            'border-left',
            'border-width',
            'border-top-width',
            'border-right-width',
            'border-bottom-width',
            'border-left-width',
            'border-radius',
            'border-top-left-radius',
            'border-top-right-radius',
            'border-bottom-left-radius',
            'border-bottom-right-radius',
            'border-color',
            'border-top-color',
            'border-right-color',
            'border-bottom-color',
            'border-left-color',
            'border-image',
            'border-image-source',
            'border-image-width',
            'border-image-outset',
            'border-image-repeat',
            'border-image-slice',
          ],
        },
        {
          groupName: 'background',
          properties: [
            'background',
            'background-attachment',
            'background-clip',
            'background-color',
            'background-image',
            'background-origin',
            'background-position',
            'background-repeat',
            'background-size',
          ],
        },
        {
          groupName: 'text alignment & decoration',
          properties: [
            'direction',
            'tab-size',
            'text-align',
            'text-align-last',
            'text-justify',
            'text-indent',
            'text-transform',
            'text-decoration',
            'text-decoration-color',
            'text-decoration-line',
            'text-decoration-style',
            'text-rendering',
            'text-shadow',
            'text-overflow',
          ],
        },
        {
          groupName: 'text spacing',
          properties: [
            'line-height',
            'word-spacing',
            'letter-spacing',
            'white-space',
            'word-break',
            'word-wrap',
          ],
        },
        {
          groupName: 'font',
          properties: [
            'font',
            'font-family',
            'font-size',
            'font-size-adjust',
            'font-stretch',
            'font-weight',
            'font-smoothing',
            'osx-font-smoothing',
            'font-variant',
            'font-style',
            'color',
          ],
        },
        {
          groupName: 'transform',
          properties: [
            'backface-visibility',
            'perspective',
            'perspective-origin',
            'transform',
            'transform-origin',
            'transform-style',
          ],
        },
        {
          groupName: 'animation',
          properties: [
            'transition',
            'transition-delay',
            'transition-duration',
            'transition-property',
            'transition-timing-function',
            'animation',
            'animation-name',
            'animation-duration',
            'animation-timing-function',
            'animation-delay',
            'animation-iteration-count',
            'animation-direction',
            'animation-fill-mode',
            'animation-play-state',
          ],
        },
      ],
      { unspecified: 'bottom' },
    ],
  },
};
