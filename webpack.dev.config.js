const path = require('path');

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'src/js/index.js'),
    biografia: path.resolve(__dirname, 'src/js/biografia.js'),
    certificados: path.resolve(__dirname, 'src/js/certificados.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  devServer: {
    port: 9000,
  },
  module: {
    rules: [
      {
        // test: que tipo de archivo quiero reconocer,
        // use: que loader se va a encargar del archivo
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react', 'stage-2'],
          }
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
       test: /\.scss$/,
       use: ["css-loader", "sass-loader"]
     },
      {
        test: /\.(webp|jpg|jpeg|png|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1000000,
            fallback: 'file-loader',
            name: 'images/[name].[hash].[ext]',
          }
        }
      }
    ]
  }
}
