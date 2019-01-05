const path = require("path");
//export the obkect for webpack
module.exports = {
  entry: {
    main: ["./dist/js/main.js"] /*can be an array */
  },
  mode: "development",
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/"
  }
};

// run in cmd line webpack --config=config/webpack.dev.js to specify the path and compile
