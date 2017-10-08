
const path = require('path');

module.exports = {

  devServer: {  //  Set of options for `webpack-dev-server` to change its behavior in various ways.
    allowedHosts: [''],  //  Whitelisted hosts. Use a leading `.` as a subdomain wildcard.
    compress: true,  //  Gzip everything served.
    contentBase: [path.join(__dirname, '')] || false,  //  A directory or directories to serve static files from.
    historyApiFallback: true,  //  Fallback to `index.html` instead of serving 404 response when using HTML5 History API.
    host: 'localhost' || '0.0.0.0',  //  Specifies a local or external host.
    hot: false,  //  Use webpack's Hot Module Replacement feature.
    inline: true,  //  Enables live reloading and outputs build messages to browser console.
    open: false,  //  Open the default browser.
    port: 1337,  //  Port number to listen for requests on.
    watchContentBase: false  //  Trigger a page reload when any files served by `devServer.contentBase` change.
  },

  entry: './src/index.js',
  
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/js')
  },

};