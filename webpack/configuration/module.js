import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const isProduction = process.env.NODE_ENV === 'production';

export default {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    },
    {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: [
        {
          loader: isProduction ? MiniCssExtractPlugin.loader : 'style-loader'
        },
        {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[name]_[local]_[hash:base64]',
            sourceMap: !isProduction
          }
        },
        {
          loader: 'sass-loader'
        }
      ]
    },
    {
      test: /\.css$/,
      include: /node_modules/,
      use: [
        {
          loader: isProduction ? MiniCssExtractPlugin.loader : 'style-loader'
        },
        {
          loader: 'css-loader',
          options: {
            sourceMap: !isProduction
          }
        },
      ]
    }
  ]
};