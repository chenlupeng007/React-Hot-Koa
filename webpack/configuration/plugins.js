// import HtmlWebPackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
// import WebpackNotifierPlugin from 'webpack-notifier';
import CompressionPlugin from 'compression-webpack-plugin'

const isProduction = process.env.NODE_ENV === 'production';

// const titleName = 'My-App';
// const templatePath = './src/index.html';

const plugins = [
  // new HtmlWebPackPlugin({
  //   title: titleName,
  //   template: templatePath,
  // })
];

if (isProduction) {
  plugins.push(
    new MiniCssExtractPlugin({
      filename: './css/[name].css'
    }),
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$/,
      threshold: 10240,
      minRatio: 0.8
    })
  );
} else {
  plugins.push(
    // new BundleAnalyzerPlugin(),
    // new WebpackNotifierPlugin({
    //   title: titleName
    // })
  );
}

export default plugins;