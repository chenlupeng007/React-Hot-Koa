import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import CompressionPlugin from 'compression-webpack-plugin'

const isProduction = process.env.NODE_ENV == 'production';

const isAnalyzer = process.env.ANALYZER === 'true';

const plugins = [];

if (isProduction) {
  plugins.push(
    new MiniCssExtractPlugin({
      filename: './css/[name].css'
    }),
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.jsx|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  );
} else if (isAnalyzer) {
  plugins.push(
    new BundleAnalyzerPlugin()
  );
}

export default plugins
