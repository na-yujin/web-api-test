module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
    "plugin:@next/next/recommended",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx", ".d.ts"],
    },
    "import/resolver": {
      typescript: {},
    },
    "import/extensions": [".js", ".ts", ".mjs", ".jsx", ".tsx"],
  },
  ignorePatterns: [".eslintrc.js", "next-env.d.ts"],
  rules: {
    // eslint
    camelcase: "off",
    "class-methods-use-this": "off",
    "consistent-return": "off",
    curly: ["error", "all"],
    "default-case": "off",
    "prefer-template": "off",
    "lines-between-class-members": [
      "error",
      "always",
      {
        exceptAfterSingleLine: true,
      },
    ],
    "no-shadow": "off",
    "no-alert": "off",
    "no-await-in-loop": "off",
    "no-control-regex": "off",
    "no-duplicate-imports": "error",
    "no-else-return": "off",
    "no-param-reassign": "off",
    "no-prototype-builtins": "off",
    "no-restricted-syntax": ["error", "ForInStatement", "WithStatement"],
    "no-return-assign": "off",
    "no-return-await": "off",
    "no-undefined": "error",
    "no-underscore-dangle": "off",
    "no-use-before-define": "off",
    "no-void": "off",
    "prefer-destructuring": [
      "error",
      {
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
    ],
    "max-classes-per-file": "off",

    // import
    "import/no-named-as-default": 0,
    "import/no-unresolved": "error",
    "import/no-extraneous-dependencies": [
      "off",
      {
        devDependencies: true,
        optionalDependencies: true,
        peerDependencies: true,
      },
    ],
    "import/no-cycle": "off",
    "import/prefer-default-export": "off",
    "import/no-deprecated": "error",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "import/order": "off",
    "import/no-duplicates": "off",

    // @typescript-eslint
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/no-else-return": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        args: "none",
        ignoreRestSiblings: true,
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/prefer-interface": "off",
    "@typescript-eslint/no-inferrable-types": [
      "warn",
      {
        ignoreParameters: true,
      },
    ],
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/ban-types": "off",

    // react
    "react/destructuring-assignment": "off",
    "react/jsx-boolean-value": "off",
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".tsx"],
      },
    ],
    "react/require-default-props": "off",
    "react/jsx-no-bind": "off",
    "react/no-array-index-key": "off",
    "react/no-unescaped-entities": "off",
    "react/no-unused-state": "warn",
    "react/sort-comp": "off",
    "react/jsx-props-no-spreading": "off",
    "react/static-property-placement": "off",
    "react/state-in-constructor": ["error", "never"],
    "react/no-unused-prop-types": "off",
    "react/jsx-no-duplicate-props": "off",

    // jsx-a11y
    "jsx-a11y/alt-text": "off",
    "jsx-a11y/label-has-for": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/no-noninteractive-tabindex": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "jsx-a11y/anchor-is-valid": [
      "warn",
      {
        components: ["Link"],
        specialLink: ["route"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
    "no-useless-escape": "off",
    "react/react-in-jsx-scope": "off",
    "react/no-danger": "warn",
    "react/no-unknown-property": "warn",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "warn",
    "@next/next/no-img-element": "off",
    "no-async-promise-executor": "off",
    "no-plusplus": "off",
    "dot-notation": "off",
    "no-nested-ternary": "off",
    "no-unneeded-ternary": "off",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "react/prop-types": "off",
      },
    },
  ],
};
