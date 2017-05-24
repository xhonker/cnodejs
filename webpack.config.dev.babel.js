
import path from 'path';
import webpack from 'webpack';
import cleanWebpackPlugin from 'clean-webpack-plugin';
import htmlWebpackPlugin from 'html-webpack-plugin';
import extractTextWebpackPlugin from 'extract-text-webpack-plugin';

const dir_build = path.resolve(__dirname, 'dist')

const less_build = new extractTextWebpackPlugin('[name]-[hash:8].css');
const css_build = new extractTextWebpackPlugin('[name]-[hash:8].css')

const config = webpack({
    entry: {
        page1: ['./src/index.jsx'],
        common: [
            'react',
            'react-dom'
        ]
    },
    output: {
        filename: '[name]-[chunkhash:8].js',
        path: dir_build,
        chunkFilename: '[name]-[chunkhash:8]-chunk.js'
    },
    resolve: {
        extensions: ['*', '.jsx', '.less', '.js', '.tsx']
    },
    node: {
        Buffer: false
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                use: [{
                    loader: 'jsx-loader'
                },
                {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'stage-1', 'react']
                    }
                }],
                exclude: /^node_modules$/
            }, {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'stage-1', 'react']
                    }
                }
                ],
                exclude: /^node_modules$/
            },
            {
                test: /\.less$/,
                use: less_build.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader', options: { importLoaders: 1 } },
                        'postcss-loader',
                        'less-loader'
                    ]
                }),
                exclude: /^node_modules$/
            }
        ]
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['common'],
            filename: '[name]-[hash:8].build.js',
            minChunks: Infinity,
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new htmlWebpackPlugin({
            template: 'index.html',
            title: 'ReactRouter---TEST',
            inject: 'body',
            hash: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            }

        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            warnings: false,
            compress: {
                warnings: false
            },
            output: {
                comments: false,
            }

        }),
        new cleanWebpackPlugin(['./dist/*']),
        less_build,
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    require('autoprefixer')({
                        browsers: ['last 5 version']
                    })
                ],
            }
        }),
    ]
})

export default config.options;