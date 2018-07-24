'use strict';

module.exports = {
  env: {
    browser: true,
    jquery: true,
    node: true,
    mocha: true,
  },
  extends: [
    'airbnb-base',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  globals: {
    xjq: false,
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'script',
  },
  plugins: ['mocha'],
  rules: {
    'array-callback-return': 'off', // I like using .map for side-effects, and .map is 70% faster than .forEach
    'arrow-parens': ['error', 'always'],
    'callback-return': 'error',
    camelcase: 'warn',
    'capitalized-comments': 'error',
    'handle-callback-err': 'error',
    'max-depth': ['error', 3],
    'max-len': [
      'error',
      {
        code: 150,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'max-nested-callbacks': ['error', 5],
    'max-params': ['error', 5],
    'mocha/handle-done-callback': 'error',
    'mocha/no-exclusive-tests': 'error',
    'mocha/no-global-tests': 'error',
    'mocha/no-identical-title': 'error',
    'mocha/no-nested-tests': 'error',
    'mocha/no-pending-tests': 'error',
    'mocha/no-return-and-callback': 'error',
    'mocha/no-sibling-hooks': 'error',
    'no-magic-numbers': 'off', // Code review should catch this
    'no-console': 'error',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-process-env': 'error',
    'no-process-exit': 'error',
    'no-useless-call': 'error',
    'no-underscore-dangle': 'off',
    quotes: ['error', 'single'],
    'quote-props': ['error', 'as-needed'],
    strict: ['error', 'global'],
  },
};
