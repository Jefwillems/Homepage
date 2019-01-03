const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');

module.exports = {
  baseUrl: '.',
  configureWebpack: {
    plugins: [new VuetifyLoaderPlugin()],
  },
};
