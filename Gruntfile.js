module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');

    var server = require('./backend/app')

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            dev: {
                src: ['frontend/js/**'],
                dest: 'tmp/js/app.concat.js'
            }

        },
        less: {
            dev: {
                files: {
                    'tmp/css/main.css': 'frontend/less/main.less'
                }
            }
        },
        watch: {
            options: {
                atBegin: true
            },
            js: {
                files: ['frontend/js/**'],
                tasks: ['concat:dev']

            },
            less: {
                files: ['frontend/less/**'],
                tasks: ['less:dev']

            }
        }
    })

    grunt.registerTask('server', function() {
        server.listen(8888, function() {
            console.log('server init aaaaa')
        });
    })

    grunt.registerTask('run', ['server', 'watch'])
}
