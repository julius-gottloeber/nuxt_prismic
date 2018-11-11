const path = require("path");

module.exports = function nuxtPrismic(_moduleOptions) {
  const moduleOptions = Object.assign({}, this.options.prismic, _moduleOptions);
  const defaultUrl = process.env.API_URL || moduleOptions.baseURL || "";

  const options = Object.assign({
    baseURL: defaultUrl
  });
  if (options.baseURL) {
    this.addPlugin({
      src: path.resolve(__dirname, "plugin.js"),
      fileName: "prismic.js",
      options
    });
  } else {
    console.error(
      "Pleas check your configuartion. You need to define a Prismic-BaseURL in your nuxt.config.js!"
    );
  }
};

module.exports.meta = require("./package.json");
