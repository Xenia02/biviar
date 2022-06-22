const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  lintOnSave: false,
  devServer: {
    proxy: {
      "/api": {
        target: "https://wig.services.ezcloudllc.com",
      },
    },
  },
});
