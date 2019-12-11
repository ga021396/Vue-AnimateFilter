// // vue.config.js
// module.exports = {
//     devServer: {
//         https: true
//       }
//   }
//vue.confing.js
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/Vue-AnimeFilter/'
      : '/'
  }