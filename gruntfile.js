module.exports = function (grunt) {
    'use strict';

    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        preprocess: {
            build: {
                src: 'src/core.js',
                dest: 'tmp/core.js'
            }
        },

        template: {
            options: {
                data: {
                    version: '<%= pkg.version %>'
                }
            },
            build: {
                src: '<%= preprocess.build.dest %>',
                dest: '<%= preprocess.build.dest %>'
            }
        },

        concat: {
            build: {
                src: '<%= preprocess.build.dest %>',
                dest: 'build/ft.js'
            }
        },

        uglify: {
            build: {
                src: '<%= concat.build.dest %>',
                dest: 'build/ft.min.js'
            }
        },

        clean: {
            build: {
                src: 'tmp'
            }
        },

        mocha: {
            all: {
                src: ['tests/runner.html']
            },
            options: {
                run: true
            }
        },

        complexity: {
            generic: {
                src: 'src/*.js',
                options: {
                    errorsOnly: false,
                    cyclomatic: 3,
                    halstead: 8,
                    maintainability: 100
                }
            }
        },

        jscs: {
            src: ['src/*.js', 'tests/*.js', 'gruntfile.js'],
            options: {
                config: '.jscsrc'
            }
        },

        jshint: {
            src: ['src/*.js', 'gruntfile.js'],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        karma: {
            unit: {
                configFile: 'karma.conf.js'
            },
            continuous: {
                configFile: 'karma.conf.js',
                singleRun: true,
                browsers: ['PhantomJS']
            }
        }
    });

    grunt.registerTask('build', ['preprocess', 'template', 'concat', 'uglify', 'clean']);
    grunt.registerTask('test', ['mocha']);
    grunt.registerTask('check', ['jscs', 'jshint']);
    grunt.registerTask('estimate', ['complexity']);

    grunt.registerTask('default', ['check', 'test', 'build']);
};