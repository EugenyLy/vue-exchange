
module.exports = {
  'parser': 'vue-eslint-parser',
  'plugins': [
    'prettier',
  ],
  'extends': [
    'airbnb-base',
    'prettier',
    'plugin:vue/essential',
    'plugin:vue-libs/recommended',
  ],
  'rules': {
    'no-implicit-dependencies': [true, ['@']],
    'indent': ['error', 4, { SwitchCase: 1 }],
    'max-len': ['error', { 'code': 180 }],
    'require-jsdoc': [
      'error',
      {
        require: {
          FunctionDeclaration: false,
          MethodDefinition: false,
          ClassDeclaration: false,
          ArrowFunctionExpression: false,
        },
      },
    ],
    'import/no-extraneous-dependencies': ['error', { 'devDependencies': false }],
    'one-var': ['error', { initialized: 'never' }],
    'semi': ['error', 'always'],
    'eqeqeq': ['error', 'always'],
    'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
    'space-before-function-paren': ['error', 'never'],
    'comma-dangle': ['error', 'always-multiline'],
    'no-else-return': ['error', { allowElseIf: true }],
    'no-multi-spaces': ['error', { ignoreEOLComments: true }],
    'operator-linebreak': ['error', 'after'],
    'dot-notation': ['error', { 'allowPattern': '^[a-z]+(_[a-z]+)+$' }],
    'no-alert': 'error',
    'no-return-assign': 'error',
    'no-self-assign': 'error',
    'arrow-parens': ['error', 'as-needed'],
    'no-self-compare': 'error',
    'no-process-env': 'off',
    'no-console': 'off',
    'no-bitwise': 'off',
    'no-unused-vars': 'off',
    'no-return-await': 'off',
    'no-continue': 'off',
    'import/no-unresolved': 'off', // TEMP
    'no-duplicate-imports': 'error',
    'no-var': 'error',
    'prefer-destructuring': ['error', {'object': true, 'array': false}],
    'brace-style': 'error',
    'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
    'quote-props': ['error', 'consistent'],
    'camelcase': 'off',
    'lines-between-class-members': ['off'],
    // 'prefer-object-spread': 'error',
    'no-unneeded-ternary': ['error', { 'defaultAssignment': false }],
    'no-param-reassign': 'off',
    'import/prefer-default-export': 'off',
    'no-prototype-builtins': 'off',
    'class-methods-use-this': 'off',
    'global-require': 'off',
    'import/no-dynamic-require': 'off',
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ignorePackages: true,
        pattern: {
          "js": "always",
          "jsx": "always",
          "ts": "never",
          "tsx": "always"
        }
      }
    ],
    // vue
    'vue/script-indent': ['error', 4, {
      'baseIndent': 0,
      'switchCase': 0,
      'ignores': [],
    }],
    'vue/attributes-order': ['error', {
      'order': [
        'DEFINITION',
        'LIST_RENDERING',
        'CONDITIONALS',
        'RENDER_MODIFIERS',
        'GLOBAL',
        'UNIQUE',
        'TWO_WAY_BINDING',
        'OTHER_DIRECTIVES',
        'OTHER_ATTR',
        'EVENTS',
        'CONTENT',
      ],
    }],
    'vue/no-unused-components': ['error', {
      'ignoreWhenBindingPresent': false,
    }],
    'vue/require-component-is': 'error',
    'vue/html-closing-bracket-newline': ['error', {
      'singleline': 'never',
      'multiline': 'never',
    }],
    'vue/html-end-tags': 'error',
    'vue/html-indent': ['error', 4, {
      'attribute': 1,
      'baseIndent': 0,
      'closeBracket': 0,
      'alignAttributesVertically': true,
      'ignores': [],
    }],
    'vue/html-quotes': ['error', 'single'],
    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'never',
        'normal': 'never',
        'component': 'never',
      },
      'svg': 'always',
      'math': 'always',
    }],
    'vue/max-attributes-per-line': ['error', {
      'singleline': 4,
      'multiline': {
        'max': 1,
        'allowFirstLine': true,
      },
    }],
    'vue/multiline-html-element-content-newline': ['error', {
      'ignoreWhenEmpty': true,
      'ignores': ['pre'],
    }],
    'vue/mustache-interpolation-spacing': ['error', 'always'],
    'vue/name-property-casing': ['error', 'PascalCase'],
    'vue/no-multi-spaces': ['error', {
      'ignoreProperties': false,
    }],
    'vue/no-spaces-around-equal-signs-in-attribute': ['error'],
    'vue/no-template-shadow': ['error'],
    'vue/prop-name-casing': ['error', 'camelCase'],
    'vue/require-prop-types': 'error',
    'vue/singleline-html-element-content-newline': ['error', {
      'ignoreWhenNoAttributes': false,
      'ignoreWhenEmpty': true,
      'ignores': ['pre', 'textarea'],
    }],
    'vue/v-bind-style': ['error', 'shorthand'],
    'vue/v-on-style': ['error', 'shorthand'],
    'vue/component-name-in-template-casing': ['error', 'PascalCase', {
      'registeredComponentsOnly': true,
      'ignores': [],
    }],
    'vue/no-use-v-if-with-v-for': ['error', {
      'allowUsingIterationVar': true
    }]
  },
  'parserOptions': {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  'env': {
    browser: true,
    es6: true,
  },
  'overrides': [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-unused-vars': 'off'
      },
    },
  ],
  'settings': {
    'import/resolver': {
      'node': {
        'extensions': [
          '.ts',
          '.js',
          '.jsx',
          '.vue',
        ],
      },
    },
  },
};
