var webpack             = require('webpack'),
    cssimport           = require('postcss-easy-import');
    
module.exports = (function(webpack) {
    return {
        defaults: [
            cssimport({
                    addDependencyTo: webpack,
                    glob: true
                })
        ],
        build: [
            cssimport({
                    addDependencyTo: webpack,
                    glob: true
                })
        ]
    };
});
