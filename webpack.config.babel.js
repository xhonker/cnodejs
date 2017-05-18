 
import webpack from 'webpack';
import htmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

const dir_build = path.resolve(__dirname, 'dist')

const config = webpack({
    entry: {
        page1: './src/index.jsx',
        common:[
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
                use: [{
                    loader: 'jsx-loader'
                },
                {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015','stage-1','react']
                    }
                }],
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
            filename: 'index-[hash:8].html',
            title: 'ReactRouter---TEST',
            inject: 'body',
            hash: true
        }),
        new webpack.optimize.UglifyJsPlugin()
    ]
})

export default config.options;