
import webpack from 'webpack';
import htmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

const dir_build = path.resolve(__dirname, 'dist')

const config = webpack({
    entry: {
        page1: ['webpack-dev-server/client?http://localhost:8080/', './src/index.jsx'],
        common: [
            'react',
            'react-dom'
        ]
    },
    output: {
        filename: '[name]-[chunkhash:8].js',
        path: dir_build
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
                use: [
                    { loader: 'jsx-loader' },
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'stage-1', 'react']
                        }
                    }],
                exclude: /^node_modules$/
            },
            {
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
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: '1'
                        }
                    },
                    { loader: 'postcss-loader' },
                    { loader: 'less-loader' }
                ],
                exclude: /^node_modules$/
            }
        ]
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['common'],
            filename: '[name].build.js',
            minChunks: Infinity,
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new htmlWebpackPlugin({
            template: 'index.html',
            title: 'something',
            inject: 'body',
            hash: true, 
        }),
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