const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'client/index.jsx'),
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
        include: [path.resolve(__dirname, 'client')],
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'server/dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
