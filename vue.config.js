module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/wode/'
    : '/',
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: false,
  devServer: {
    port: 8080,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    }
  }
} 