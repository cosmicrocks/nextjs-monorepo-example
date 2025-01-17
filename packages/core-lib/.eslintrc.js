module.exports = {
  root: true,
  //ignorePatterns: ['dist', 'build'],
  extends: [
    '../../.eslintrc.base.js',
    // Add specific rules for react and nextjs
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  // By loading testing-library as a plugin, we can only enable it
  // on test files via overrides.
  plugins: ['testing-library'],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
  },
  overrides: [
    {
      // For performance run jest/recommended on test files, not regular code
      files: ['**/__tests__/**/*.{ts,tsx}'],
      extends: ['plugin:testing-library/react'],
    },
  ],
};
