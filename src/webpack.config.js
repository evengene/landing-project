//here we configure webpack

//single entry - these are default configures

module.exports = {
    loader: {

    },

    //this loader takes non js file and transforms into js file so Webpack understands
    module: {

        //this rule transforms CSS files
        rules: [
            {
                test: /\.scc$/, // test says all CSS files should be transformed
                use: [ // use property tells Webpack to use the style and css loaders to transform files
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    //Translates CSS into CommonJS
                    'css-loader',
                    //Complies Sass to CSS
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [],
    mode: "development"
};