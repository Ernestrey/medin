module.exports = {
  extends: [
    'airbnb-base',
    // 'standard',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:compat/recommended',
    'plugin:promise/recommended',
    'plugin:sonarjs/recommended',
    'plugin:unicorn/recommended',
    'plugin:prettier/recommended',
  ],

  plugins: [
    'sonarjs',
    'import',
    'promise',
    'compat',
    'node',
    'no-loops',
    'no-use-extend-native',
    'unicorn',
  ],

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jquery: true,
  },

  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      sourceType: 'module',
      jsx: true,
    },
    allowImportExportEverywhere: true,
  },
  rules: {
    'promise/always-return': 0,
    'promise/avoid-new': 0,

    'compat/compat': 1,

    'node/no-deprecated-api': 2,
    'node/no-extraneous-require': 2,
    'node/no-missing-require': 2,

    'import/no-unresolved': [
      2,
      {
        commonjs: true,
        amd: true,
      },
    ],
    'import/named': 2,
    'import/namespace': 2,
    'import/default': 2,
    'import/export': 2,

    'sonarjs/cognitive-complexity': 'error',
    'sonarjs/no-identical-expressions': 'error',

    'no-loops/no-loops': 2,

    'no-use-extend-native/no-use-extend-native': 0,

    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state'],
      },
    ],
    'unicorn/prevent-abbreviations': [
      'error',
      {
        replacements: {
          el: false,
        },
      },
    ],
  },
  // settings: {
  //   'import/resolver': {
  //     webpack: {
  //       config: './build/webpack.common.js',
  //     },
  //   },
  // },
}
