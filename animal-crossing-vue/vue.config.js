const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true, // Conserve cette ligne si nécessaire

  chainWebpack: config => {
    config.plugin('define').tap(definitions => {
      // Définit les feature flags pour optimiser le bundle de production
      definitions[0]['__VUE_PROD_HYDRATION_MISMATCH_DETAILS__'] = true;
      return definitions;
    });
  }
});
