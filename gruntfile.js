module.exports = function(grunt){

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        preprocess: {
            build: {
                src: 'src/index.js',
                dest: 'tmp/index.js'
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
        }
    });

    grunt.loadNpmTasks('grunt-preprocess');
    grunt.loadNpmTasks('grunt-template');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('build', ['preprocess', 'template', 'concat', 'uglify', 'clean']);
};