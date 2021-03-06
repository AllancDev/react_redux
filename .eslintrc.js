module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  plugins: {
    'react',
    'prettier'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
      'prettier/prettier': 'error',
      'react/jsx-filename-extension': [
          'warm',
          { extenson: ['jsx', 'js']}
      ],
      'import/prefer-default-export': 'off'
  },
};
