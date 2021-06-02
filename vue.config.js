module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/my_test_project'
      : '/',
    //publicPath: './',
    outputDir: 'dist',
      
}