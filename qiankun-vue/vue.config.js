module.exports = {
  configureWebpack: {
    output: {
      library: 'vueApp',
      libraryTarget: 'umd',
    },
  },
  devServer: {
    port: 10000,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
};
