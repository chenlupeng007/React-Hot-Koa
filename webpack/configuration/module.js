import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const isProduction = process.env.NODE_ENV === 'production';

export default {
  rules: [
    {
      test: /\.(ts|js)x?$/,
      exclude: /node_modules/,
      use: 'babel-loader',
    },
    {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: [
        {
          loader: isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
        },
        {
          loader: 'css-modules-typescript-loader',
        },
        {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[name]_[local]_[hash:base64]',
            sourceMap: !isProduction,
          },
        },
        {
          loader: 'sass-loader',
        },
      ],
    },
    {
      test: /\.css$/,
      include: /node_modules/,
      use: [
        {
          loader: isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
        },
        {
          loader: 'css-loader',
          options: {
            sourceMap: !isProduction,
          },
        },
      ],
    },
    {
      test: /\.(png|jpg|jpeg|gif|eot|svg|ttf|woff)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192,
          },
        },
      ],
    },
  ],
};
