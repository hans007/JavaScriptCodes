module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // 合并
        concat:{
            options:{
                separator:'\n',
                banner:'//model合并 \n',
                footer:'\n//--- end ---',
            },
            // myapp:{
            //     src:['src/mods/*.js'],
            //     dest:'dist/<%= pkg.version %>/module.js'
            // },
            call:{
                src:['src/call.js'],
                dest:'dist/<%= pkg.version %>/call.js'
            }
        },

        // js压缩
        uglify:{
            module_targer:{
                options:{
                    banner:'/*app:<%= pkg.name %> , module all*/\n',
                    footer:'\n//--- end ---',
                },
                files:{
                    'dist/<%= pkg.version %>/module.min.js':['<%= concat.myapp.dest %>']
                }
            }
        },

        // css压缩
        cssmin:{
            index:{
                files:{
                    'dist/<%= pkg.version %>/index.min.css':['css/index.css']
                }
                // files: [{
                //     expand: true,
                //     cwd: 'css',
                //     src: ['*.css', '!*.min.css'],
                //     dest: 'dist/<%= pkg.version %>',
                //     ext: '.min.css'
                // }]
            }
        },

        // 检查js
        // http://jshint.com/docs/options/
        jshint:{
            files:['src/**/*.js'],
            // options:{
            //     jQuery:true,
            //     console:true,
            //     module:true,
            //     document:true
            // }
        },

        // 测试
        qunit: {
            all: ['test/**/*.html']
        },

        // 转换
        transport:{
            options: {
                debug:false,
            },
            module:{
                // files:{
                //     'dist/<%= pkg.version %>/call.js':['src/call.js']
                // }
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: ['**/*.js', '!*.min.js'],
                    dest: 'dist/<%= pkg.version %>',
                    ext: '.js'
                }]
            },
        },
    });

    // grunt.event.on('qunit.testStart', function (name) {
    //     grunt.log.ok('qunit.testStart:'+name);
    // });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-cmd-transport');

    grunt.registerTask('call', ['concat']);
    grunt.registerTask('ts', ['transport']);
    grunt.registerTask('test', ['qunit']);
    grunt.registerTask('js', ['jshint']);
    grunt.registerTask('default', ['concat','uglify','cssmin']);
};