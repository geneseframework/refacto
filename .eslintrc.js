module.exports = {
  extends: 'prettier',
  rules: {
    curly: 0,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'flowtype'],
};
