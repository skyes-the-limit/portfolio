const OFF = 0, WARN = 1, ERROR = 2;

module.exports = exports = {
  "root": true,
  "extends": "plugin:vue/recommended",
  "globals": {
    "window": true,
    "document": true,
    "fetch": true,
    "Headers": true,
    "Request": true,
    "FormData": true,
    "FileReader": true,
    "localStorage": true
  },
  "env": {
    "node": true,
    "es6": true,
    "amd": true,
    "browser": true,
    "jquery": true
  },
  "parserOptions": {
    "ecmaFeatures": {
      "globalReturn": true,
      "generators": false,
      "objectLiteralDuplicateProperties": false,
      "experimentalObjectRestSpread": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "import",
    "html"
  ],
  "settings": {
    "import/core-modules": [],
    "import/ignore": [
      "node_modules",
      "\\.(coffee|scss|css|less|hbs|svg|json)$"
    ]
  },
  "rules": {
    "no-console": OFF,
    "max-attributes-per-line": OFF,
    "html-closing-bracket-newline": OFF
  }
};
