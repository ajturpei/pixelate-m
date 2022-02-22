module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['@typescript-eslint', 'jest', 'import'],
  rules: {
    '@typescript-eslint/no-empty-function': 1,
    '@typescript-eslint/explicit-module-boundary-types': 0,
  },
  env: { jest: true },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', './src'],
      },
      typescript: {
        project: './src',
      },
    },
  },
};
