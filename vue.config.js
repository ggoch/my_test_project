module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/my_test_project'
      : '/',
    //publicPath: './',
    outputDir: 'dist',
    css: {
      loaderOptions: {
        scss: {
          additionalData: `
             @import "~@/assets/scss/main.scss";
          `
        }
      }
    },
      
}