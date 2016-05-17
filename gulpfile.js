var gulp = require('gulp');
var browserSync = require('browser-sync');
var gulpConfig = require('./gulpConfig')();
var Server = require('karma').Server;

/****build *****/
var clean = require('gulp-clean');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var inject = require('gulp-inject');
var angularFilesort = require('gulp-angular-filesort');
var runSequence = require('run-sequence');
var livereload = require('gulp-livereload');
var sass  = require('gulp-sass');
var less = require('gulp-less');
var gulpProtractorAngular = require('gulp-angular-protractor');
var protractor = require("gulp-protractor").protractor;
var path = require('path');
var child_process = require('child_process');
var exec          = child_process.exec;
var static = require('node-static');
var scsslint = require('gulp-scss-lint');
var watch = require('gulp-watch');
var env = process.env.NODE_ENV; 
//*********************************************************************************************


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ DEVELOPMENT @@@@@@@@@@@@@


//unit test and code coverage
gulp.task('unitTest',function() {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
    }).start();
});

gulp.task('codeCoverage',function(){
 //console.log('I am in code coverage' ,__dirname); 
  browserSync({
       notify: false,
       logPrefix: 'BrowserSync',
       port: 3000,
       server:
       {           
           baseDir:gulpConfig.codeCoverageReportPath
       }
   });
});

gulp.task('webServe',function(){  
    var files = [
    //   'app/**/*.html',      
    //   'app/imgs/**/*.png',
    //   'app/js/**/*.js'
    'app/**/*.*',
    'less/*.*',
    'scss/*.*'
   ];
     
   console.log('ENVIRONMENT' ,env );
   var _htmlServePath = './app';
   if(env === "dev"){
       _htmlServePath ="./app";
   }
   else if(env==="prod"){
       _htmlServePath =gulpConfig.destinationDir;
   }   
   
   browserSync.init(files, {
       notify: false,
       logPrefix: 'BrowserSync',
       port: 8000,
       server: {
         baseDir: _htmlServePath
      }
   });
   browserSync.reload();   
});

//css pre processor
gulp.task('less', function() {
    return gulp.src('less/sample.less')
        .pipe(watch('less/*.less'))
        .pipe(less())
        .pipe(gulp.dest('./app/css'))
        .pipe(livereload());
});

gulp.task('sass',function(){            
    gulp.src('scss/main.scss')
   .pipe(watch('scss/*.scss'))
   .pipe(sass())
   .pipe(gulp.dest('./app/css/'))
   .pipe(livereload());                      
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('less/*.less', ['less']);  // Watch all the .less files, then run the less task
});



//***************BUILD ****************/
var bases = {
 app: gulpConfig.sourceDir,
 dist: gulpConfig.destinationDir,
};
var paths = {
    scripts: ['js/**/*.js'],
    libs: ['lib/**/*.js','lib/*.js','lib/**/*.css','lib/**/*.*'],
    styles: ['css/*.css'],
    html: ['view/**/*.html','404.html'],
    index: ['index.html'],
    images: ['images/*.png','images/**/*.png','images/**/*.jpg'],
    JSON:['data/**/*.json'],
    extras: ['crossdomain.xml', 'humans.txt', 'manifest.appcache', 'robots.txt', 'favicon.ico'],
};




//injecting files to index page 
gulp.task('preBuild',['clean', 'scripts', 'imagemin','copy','sass']);
gulp.task('injectProd',['preBuild'],function(){  
  gulp.src('./dist/index.html')
        .pipe(inject(gulp.src(gulpConfig.orderedCSSLibsFiles,{cwd: 'dist/'}, {read: false}),{name:'libs'},{relative: false}))
        .pipe(inject(gulp.src(gulpConfig.orderedCSSCustomFiles,{cwd: 'dist/'}, {read: false}),{name: 'customCSS'},{relative: false}))
        
        .pipe(inject(gulp.src(gulpConfig.orderedJSLibsFiles,{cwd: 'dist/'}, {read: false}), {name: 'libs'},{relative: false}))
        .pipe(inject(gulp.src(gulpConfig.orderedJSCustomFilesFiles,{cwd: 'dist/'}, {read: false}), {name: 'customScripts'},{relative: false}))  
        .pipe(gulp.dest('./dist'));             
});

gulp.task('injectDev',function(){  
                                      
    gulp.src('./app/index.html')
     //css
    .pipe(inject(gulp.src(gulpConfig.orderedCSSLibsFiles, {cwd: 'app/'},{read: false}),{name:'libs'},{relative: false}))
    .pipe(inject(gulp.src(gulpConfig.orderedCSSCustomFiles, {cwd: 'app/'},{read: false}),{name: 'customCSS'},{relative: false}))
    //js
    .pipe(inject(gulp.src(gulpConfig.orderedJSLibsFiles,{cwd: 'app/'}, {read: false}), {name: 'libs'},{relative: false}))
    .pipe(inject(gulp.src(gulpConfig.orderedJSCustomFilesFiles,{cwd: 'app/'},{read: false}), {name: 'customScripts'},{relative: false}))  
    .pipe(gulp.dest('./app'));             
});
  
  
  
// Delete the dist directory
gulp.task('clean', function(){
  return gulp.src([bases.dist], {read:true})
  .pipe(clean());
});

// Process scripts and concatenate them into one output file
gulp.task('scripts', ['clean'], function() {
 return gulp.src(paths.scripts, {cwd: bases.app})
 .pipe(jshint())
 .pipe(jshint.reporter('default'))
  //.pipe(uglify())
  //.pipe(concat('app.min.js')) 
  .pipe(gulp.dest(bases.dist+'js/'));
});

// Imagemin images and ouput them in dist
gulp.task('imagemin', ['clean'], function() {
 gulp.src(paths.images, {cwd: bases.app})
 .pipe(imagemin())
 .pipe(gulp.dest(bases.dist + 'images'));
});

// Copy all other files to dist directly
gulp.task('copy', ['clean'], function() {
 gulp.src(paths.index, {cwd: bases.app})
 .pipe(gulp.dest(bases.dist));
 
 // Copy html
 gulp.src(paths.html, {cwd: bases.app})
 .pipe(gulp.dest(bases.dist+'view'));

 // Copy styles
 gulp.src(paths.styles, {cwd: bases.app})
 .pipe(gulp.dest(bases.dist + 'css'));
 
  // Copy JSON
 gulp.src(paths.JSON, {cwd: bases.app})
 .pipe(gulp.dest(bases.dist + 'data'));

 // Copy lib scripts, maintaining the original directory structure
//  gulp.src(paths.libs, {cwd: 'app/**'})
//  .pipe(gulp.dest(bases.dist));
 
 gulp.src(paths.libs, {cwd: bases.app})
 .pipe(gulp.dest(bases.dist+'lib'));

 // Copy extra html5bp files
 gulp.src(paths.extras, {cwd: bases.app})
 .pipe(gulp.dest(bases.dist));
});








//@@@@@nPROTRACTOR for end to end test 
gulp.task('run-server',function(){
    var file = new static.Server(gulpConfig.destinationDir); 
    require('http').createServer(function (request, response) {
    request.addListener('end', function () {        
        file.serve(request, response);
    }).resume();
    }).listen(8000); 
});



//@@@@@@@@@@@ MERGED TASKS
gulp.task('protractor',function(done){           
    exec('gulp run-server', function (err, stdout, stderr) {         
          console.log(stdout);
          console.log(stderr);
          done(err);
      });
    exec('webdriver-manager start', function (err, stdout, stderr) {         
        console.log(stdout);
        console.log(stderr);
        done(err);
    });      
    exec('protractor conf.e2e.js', function (err, stdout, stderr) {         
        console.log(stdout);
        console.log(stderr);
        done(err);
    });
});


//unit and code coverage
gulp.task('unitTestAndCodeCovergae',function(done){
    exec('gulp unitTest',function(err,stdout,stderr){
        console.log(stdout);
        console.log(stderr);
        done(err);
    });
    
    exec('gulp codeCoverage',function(err,stdout,stderr){
        console.log(stdout);
        console.log(stderr);
        done(err);
    });
            
});



//unit test,code coverage and end to end test 
gulp.task('testAll',function(done){
    // exec('gulp unitTest',function(err,stdout,stderr){
    //     console.log(stdout);
    //     console.log(stderr);
    //     done(err);
    // });
    // exec('gulp codeCoverage',function(err,stdout,stderr){
    //     console.log(stdout);
    //     console.log(stderr);
    //     done(err);
    // });
    
    // exec('gulp run-server', function (err, stdout, stderr) {         
    //       console.log(stdout);
    //       console.log(stderr);
    //       done(err);
    //   });
    // exec('webdriver-manager start', function (err, stdout, stderr) {         
    //     console.log(stdout);
    //     console.log(stderr);
    //     done(err);
    // });      
    // exec('protractor conf.e2e.js', function (err, stdout, stderr) {         
    //     console.log(stdout);
    //     console.log(stderr);
    //     done(err);
    // });
    
});








//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ main commands @@@@@@@@@@@@@@@@@@@@@@@@@@

//development
//gulp.task('dev',['injectDev','webServe','watch']);
gulp.task('dev',['injectDev','webServe']);

//build 
gulp.task('build',['injectProd']);

//Unit test  and code Coverage 
gulp.task('test',['unitTestAndCodeCovergae']);

//end to end test 
gulp.task('e2e',['protractor']);

//gulp.task('default',['testAll']);




