const path = require("path");

module.exports = {
    entry: "./src/components/Main.js",
    output: {
        path: "public/",
        filename: "bundle.js",
        publicPath: "/"
    },
    devServer: {
      port: 3333
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
}