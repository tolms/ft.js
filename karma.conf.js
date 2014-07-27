module.exports = function (config) {
    config.set({
        basePath: '',

        frameworks: ['mocha', 'chai'],

        client: {
            mocha: {
                ui: 'bdd'
            }
        },

        files: [
            'build/ft.min.js',
            'tests/*.spec.js'
        ],

        exclude: [],
        preprocessors: {},
        reporters: ['progress', 'dots'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['PhantomJS'],
        singleRun: true
    });
};
