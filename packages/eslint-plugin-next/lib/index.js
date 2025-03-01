module.exports = {
  rules: {
    'no-css-tags': require('./rules/no-css-tags'),
    'no-sync-scripts': require('./rules/no-sync-scripts'),
    'no-html-link-for-pages': require('./rules/no-html-link-for-pages'),
    'no-img-element': require('./rules/no-img-element'),
    'no-head-element': require('./rules/no-head-element'),
    'no-unwanted-polyfillio': require('./rules/no-unwanted-polyfillio'),
    'no-page-custom-font': require('./rules/no-page-custom-font'),
    'no-title-in-document-head': require('./rules/no-title-in-document-head'),
    'google-font-display': require('./rules/google-font-display'),
    'google-font-preconnect': require('./rules/google-font-preconnect'),
    'link-passhref': require('./rules/link-passhref'),
    'no-document-import-in-page': require('./rules/no-document-import-in-page'),
    'no-head-import-in-document': require('./rules/no-head-import-in-document'),
    'no-script-component-in-head': require('./rules/no-script-component-in-head'),
    'no-server-import-in-page': require('./rules/no-server-import-in-page'),
    'no-typos': require('./rules/no-typos'),
    'no-duplicate-head': require('./rules/no-duplicate-head'),
    'inline-script-id': require('./rules/inline-script-id'),
    'next-script-for-ga': require('./rules/next-script-for-ga'),
    'no-before-interactive-script-outside-document': require('./rules/no-before-interactive-script-outside-document'),
    'no-assign-module-variable': require('./rules/no-assign-module-variable'),
  },
  configs: {
    recommended: {
      plugins: ['@next/next'],
      rules: {
        '@next/next/no-css-tags': 1,
        '@next/next/no-sync-scripts': 1,
        '@next/next/no-html-link-for-pages': 1,
        '@next/next/no-img-element': 1,
        '@next/next/no-head-element': 1,
        '@next/next/no-unwanted-polyfillio': 1,
        '@next/next/no-page-custom-font': 1,
        '@next/next/no-title-in-document-head': 1,
        '@next/next/google-font-display': 1,
        '@next/next/google-font-preconnect': 1,
        '@next/next/link-passhref': 1,
        '@next/next/next-script-for-ga': 1,
        '@next/next/no-document-import-in-page': 2,
        '@next/next/no-head-import-in-document': 2,
        '@next/next/no-script-component-in-head': 2,
        '@next/next/no-server-import-in-page': 2,
        '@next/next/no-typos': 1,
        '@next/next/no-duplicate-head': 2,
        '@next/next/inline-script-id': 2,
        '@next/next/no-before-interactive-script-outside-document': 1,
        '@next/next/no-assign-module-variable': 2,
      },
    },
    'core-web-vitals': {
      plugins: ['@next/next'],
      extends: ['plugin:@next/next/recommended'],
      rules: {
        '@next/next/no-sync-scripts': 2,
        '@next/next/no-html-link-for-pages': 2,
      },
    },
  },
}
