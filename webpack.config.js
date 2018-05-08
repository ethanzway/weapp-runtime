var path = require("path");

module.exports = {
  target: 'node',
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: 'commonjs2',
    library: 'runtime'
  }
};
