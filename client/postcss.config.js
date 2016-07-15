var webpack             = require('webpack'),
    cssimport           = require('postcss-easy-import')
    precss              = require('precss'),
    prefix              = require('autoprefixer'),
    calc                = require('postcss-calc'),
    rgba                = require('postcss-color-rgba-fallback'),
    filters             = require('pleeease-filters');
    
module.exports = (function(webpack) {
    return {
        defaults: [
            cssimport({
                    addDependencyTo: webpack,
                    glob: true
                }),
            precss(),
            prefix(),
            calc(),
            rgba(),
            filters()
        ],
        build: [
            cssimport({
                    addDependencyTo: webpack,
                    glob: true
                }),
            precss(),
            prefix(),
            calc(),
            rgba(),
            filters()
        ]
    };
});
