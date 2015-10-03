module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            dev: {
                src: ['fronend/js/**'],
                dest: 'tmp/js/app.concat.js'
            }

        },
        less: {
            dev: {
                files: {
                    'tmp/css/main.css': 'fronend/less/main.less'
                }
            }
        },
        watch: {
            options: {
                atBegin: true
            },
            js: {
                files: ['fronend/js/**'],
                tasks: ['concat:dev']

            },
            less: {
                files: ['fronend/less/**'],
                tasks: ['less:dev']

            }
        }
    })

    grunt.registerTask('run', ['watch'])
}
