module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 2021,
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, parser: 'flow' }],
  },
};
