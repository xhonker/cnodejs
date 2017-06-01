
import webpack from 'webpack';
import htmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

const dir_build = path.resolve(__dirname, 'dist')

const config = webpack({
    entry: {
        page1: ['webpack-dev-server/client?http://localhost:8080/', './src/index.jsx'],
    },
    output: {
        filename: '[name]-[hash:8].js',
        path: dir_build,
        chunkFilename: '[name]-[chunkhash:8]-chunk.js'
    },
    resolve: {
        extensions: ['*', '.web.js', '.jsx', '.less', '.js', '.tsx']

    },
    node: {
        Buffer: false
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /^node_modules$/,
                use: [
                    { loader: 'jsx-loader' },
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'stage-1', 'react']
                        }
                    }]
            },
            {
                test: /\.less$/,
                exclude: /^node_modules$/,
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
                ]
            },
            {
                test: /\.css$/,
                exclude: /^node_modules$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: '1'
                        }
                    },
                    { loader: 'postcss-loader' }
                ]
            },
            {
                test: /\.(svg)$/i,
                include: [require.resolve('antd-mobile').replace(/warn\.js$/, '')],
                use: [
                    { loader: 'svg-sprite-loader' }
                ]
            }
        ]
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
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