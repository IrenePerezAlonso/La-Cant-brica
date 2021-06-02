module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    "eol-last": 0,
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
    'comma-dangle': [2, 'only-multiline'],
    'linebreak-style': 0,
    'global-require': 0,
    'eslint linebreak-style': [0, 'error', 'windows'],
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
  }
};