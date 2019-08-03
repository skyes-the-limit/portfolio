const plugins = [
    ["module-resolver", {
    "root": ["./src"],
    "alias": {
      "assets": "./src/assets",
      "images": "./src/assets/images",
      "css": "./src/assets/css",
      "components": "./src/components",
      "widgets": "./src/components/widgets",
      "router": "./src/router"
    }
  }
]];

module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: plugins
};