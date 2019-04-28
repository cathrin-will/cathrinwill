import path    from 'path'
import webpack from 'webpack'
import process from 'process'
import CopyPlugin from 'copy-webpack-plugin'

const isProduction = (process.env.NODE_ENV === 'production')

const config = {

    entry: './ui/js/main.js',

    output: {
        filename: './dist/js/bundle.js',
        path: path.resolve(__dirname, '../site')
    },

    context: path.resolve(__dirname, '../site'),

    plugins: [
        new CopyPlugin([
            { from: './ui/fonts', to: './dist/fonts' },
            { from: './ui/cv', to: './dist/cv' },
        ]),
        // isProduction ? [ new webpack.optimize.UglifyJsPlugin() ] : []
    ]
}

function scripts() {

    return new Promise(resolve => webpack(config, (err, stats) => {

        if (err) {
            console.log('Webpack', err)
        }

        console.log(stats.toString({ /* stats options */ }))

        resolve()
    }))
}

module.exports = { config, scripts }
