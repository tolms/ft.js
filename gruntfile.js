module.exports = function (grunt) {
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
                src: '<%= concat.build.dest %>',
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
                config: 'jscs.json'
            }
        }
    });

    grunt.loadNpmTasks('grunt-preprocess');
    grunt.loadNpmTasks('grunt-template');
    grunt.loadNpmTasks('grunt-mocha');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-complexity');
    grunt.loadNpmTasks("grunt-jscs");

    grunt.registerTask('build', ['preprocess', 'template', 'concat', 'uglify', 'clean']);
    grunt.registerTask('test', ['mocha']);
    grunt.registerTask('estimate', ['complexity']);
};