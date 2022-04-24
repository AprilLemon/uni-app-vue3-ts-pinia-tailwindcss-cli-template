module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  globals: {
    window: true,
    document: true,
    App: true,
    Page: true,
    Component: true,
    Behavior: true,
    wx: true,
    worker: true,
    getApp: true,
    uni: true,
    uniCloud: true,
  },
  parser: 'vue-eslint-parser',
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    'ecmaVersion': 2020,
    'parser': '@typescript-eslint/parser',
    'sourceType': 'module',
  },
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'indent': [0, 2, {
      'SwitchCase': 1,
    }],
    'semi': ['warn', 'never'],
    'semi-spacing': [2, {
      'before': false,
      'after': true,
    }],
    'quotes': ['warn', 'single', {
      'allowTemplateLiterals': true,
    }],
    'comma-dangle': ['warn', 'always-multiline'],
    'no-multi-spaces': 'warn',
    'array-bracket-spacing': ['warn', 'never'],
    'block-spacing': ['warn', 'always'],
    'func-call-spacing': ['warn', 'never'],
    'object-curly-spacing': ['warn', 'always'],
    // 'no-duplicate-imports': 'error', // import type 冲突。使用ts的规则
    'space-before-function-paren': ['warn', 'always'],
    'space-before-blocks': ['warn', 'always'],
    'no-var': 'warn',

    'arrow-spacing': ['warn', {
      'before': true,
      'after': true,
    }],
    'brace-style': ['warn', '1tbs', {
      'allowSingleLine': true,
    }],
    'camelcase': ['warn', {
      'properties': 'always',
    }],
    'comma-spacing': ['warn', {
      'before': false,
      'after': true,
    }],
    'comma-style': ['warn', 'last'],
    'constructor-super': 'warn',
    'curly': ['warn', 'multi-line'],
    'dot-location': ['warn', 'property'],
    'eqeqeq': ['warn', 'always'],
    'generator-star-spacing': ['warn', {
      'before': true,
      'after': true,
    }],
    'jsx-quotes': ['warn', 'prefer-single'],
    'key-spacing': ['warn', {
      'beforeColon': false,
      'afterColon': true,
    }],
    'keyword-spacing': ['warn', {
      'before': true,
      'after': true,
    }],
    'new-cap': ['warn', {
      'newIsCap': true,
      'capIsNew': false,
    }],
    'new-parens': 'error',
    'no-array-constructor': 'error',
    'no-caller': 'warn',
    'no-console': 'off',
    'no-extra-parens': ['warn', 'functions'],
    'no-floating-decimal': 'warn',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': ['warn', {
      'allowLoop': false,
      'allowSwitch': false,
    }],
    'no-lone-blocks': 'error',
    'no-multi-str': 'warn',
    'no-multiple-empty-lines': ['warn', {
      'max': 1,
    }],
    'no-new-require': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-proto': 'error',
    'no-return-assign': ['error', 'except-parens'],
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'warn',
    'no-undef-init': 'warn',
    'no-unmodified-loop-condition': 'warn',
    'no-unneeded-ternary': 'warn',
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-whitespace-before-property': 'error',
    'operator-linebreak': ['warn', 'after'],
    'padded-blocks': ['warn', 'never'],
    'space-infix-ops': 'warn',
    'wrap-iife': ['warn', 'any'],
    'yield-star-spacing': ['warn', 'after'],
    'yoda': ['warn', 'never'],
    'prefer-const': 'warn',

    'vue/script-indent': ['warn', 2, {
      'baseIndent': 1,
      'switchCase': 1,
      'ignores': [],
    }],
    'vue/html-indent': ['error', 2, {
      'attribute': 1,
      'baseIndent': 1,
      'closeBracket': 0,
      'alignAttributesVertically': true,
      'ignores': [],
    }],
    'vue/html-closing-bracket-newline': ['error', {
      'singleline': 'never',
      'multiline': 'always',
    }],
    'vue/multi-word-component-names': 'off',
    'vue/max-attributes-per-line': ['error', {
      'singleline': {
        'max': 8,
      },
      'multiline': {
        'max': 1,
      },
    }],

    '@typescript-eslint/no-duplicate-imports': ['error'],
    '@typescript-eslint/no-var-requires': 'off',
  },
}
