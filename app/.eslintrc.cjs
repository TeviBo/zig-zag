module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['airbnb', 'airbnb/hooks', 'prettier',],
  plugins: ['react-refresh'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    "no-unused-vars": "warn",
    "no-console": "off",
    "func-names": "off",
    "no-process-exit": "off",
    "object-shorthand": "off",
    "class-methods-use-this": "off",
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
    "react/react-in-jsx-scope": "off",
    "react/button-has-type": "off",
    "no-shadow": "off",
    "react/function-component-definition": [2, {"namedComponents": "arrow-function", "unnamedComponents": "arrow-function"}],
    "jsx-a11y/anchor-is-valid": "off",
    "react/jsx-props-no-spreading": "off",
    "no-nested-ternary": "off",
    "react/no-array-index-key": "off",
  },
};

