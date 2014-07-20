module.exports = function(grunt){

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
                src : '<%= concat.build.dest %>',
                dest : 'build/ft.min.js'
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
        }
    });

    grunt.loadNpmTasks('grunt-preprocess');
    grunt.loadNpmTasks('grunt-template');
    grunt.loadNpmTasks('grunt-mocha');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('build', ['preprocess', 'template', 'concat', 'uglify', 'clean']);
    grunt.registerTask('test', ['mocha']);
};