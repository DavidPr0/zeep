module.exports = {
  env: {
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier", "prettier/react"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    __DEV__: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": [
      "warn",
      { extensions: [".jsx", ".js", ".tsx", ".svg"] },
    ],
    "import/prefer-default-export": "off",
    "no-param-reassign": "off",
    "no-console": ["error", { allow: ["tron"] }],
  },
};
