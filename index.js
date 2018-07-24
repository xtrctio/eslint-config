module.exports = {
  extends: ['airbnb-base', 'plugin:import/errors', 'plugin:import/warnings'],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'script',
  },
  env: {
    browser: true,
    jquery: true,
    node: true,
    mocha: true
  },
  plugins: [
    'mocha'
  ],
  globals: {
    xjq: false
  },
  rules: {
    strict: [ 'error', 'global' ],
    // 'global-strict': 'error',
    quotes: [ 'error', 'single' ],
    'quote-props': ['error', 'as-needed'],
    'mocha/handle-done-callback': 'error',
    'mocha/no-exclusive-tests': 'error',
    'mocha/no-global-tests': 'error',
    'mocha/no-identical-title': 'error',
    'mocha/no-nested-tests': 'error',
    'mocha/no-pending-tests': 'error',
    'mocha/no-return-and-callback': 'error',
    'mocha/no-sibling-hooks': 'error',

    'array-callback-return': 'off', // I like using .map for side-effects, and .map is 70% faster than .forEach
    'no-magic-numbers': 'off', // Code review should catch this
    'no-console': 'error',
    'no-param-reassign': 'off',
    'no-useless-call': 'error',
    'callback-return': 'error',
    'handle-callback-err': 'error',
    'no-mixed-operators': [
      'error',
      {
        groups: [
          [ '&', '|', '^', '~', '<<', '>>', '>>>' ],
          [ '==', '!=', '===', '!==', '>', '>=', '<', '<=' ],
          [ '&&', '||' ],
          [ 'in', 'instanceof' ],
        ],
        allowSamePrecedence: true,
      },
    ],
    'no-underscore-dangle': 'off',
    'max-len': ['error', {code: 150, ignoreUrls: true, ignoreStrings: true, ignoreTemplateLiterals: true, ignoreRegExpLiterals: true}],
    camelcase: 'warn',
    'arrow-parens': [ 'error', 'always' ],
    'no-plusplus': 'off',
    'no-process-env': 'error',
    'no-process-exit': 'error',
    'capitalized-comments': 'error',
    'max-depth': [ 'error', 3 ],
    'max-nested-callbacks': [ 'error', 5 ],
    'max-params': [ 'error', 5 ],
  },
};
