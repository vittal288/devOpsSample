module.exports = function () {
      
    var _destinationDir = './dist/',
        _sourceDir = './app',       
        _codeCoverageReportPath='coverage/HTML/Chrome 50.0.2661 (Windows 8.1 0.0.0)/';
           
    var _filesToMove = [            
        _sourceDir+'/**/*'
    ];
    
    var _orderedJSLibsFiles=[
                            'lib/angular.js',
                            'lib/ngRoute.js',                            
                            'lib/angular-drag-and-drop-lists.js',
                            'lib/angular-touch.js',
                            'lib/swiper.js',
                            'lib/maps.js',
                            'lib/jquery.js',
                            'lib/bootstrap/js/bootstrap.js'
                        ];
     var _orderedJSCustomFilesFiles=[                                                                                    
                            'js/module/module.js',
                            'js/router/router.js',                            
                            'js/service/service.js',
                            'js/controller/logincontroller.js',
                            'js/controller/onecontroller.js',
                            'js/controller/ratingcontroller.js',
                            'js/controller/locationcontroller.js',
                            'js/controller/searchcontroller.js',
                            'js/controller/hotelcontroller.js',
                            'js/controller/cabcontroller.js',
                            'js/controller/billcontroller.js',
                            'js/controller/paymentcontroller.js',
                            'js/controller/successcontroller.js',
                            'js/controller/rewardcontroller.js'
                        ];
     var _orderedCSSLibsFiles =[
                            'lib/jquery-ui.css',
                            'lib/swiper.min.css',
                            'lib/bootstrap/css/bootstrap.css',                                                                                            
                    ];  
     var _orderedCSSCustomFiles =[                                                                       
                            'css/dining.css',
                            'css/main.css'                        
                    ];                                            
                                               
    var config = {
          destinationDir: _destinationDir,                  
          filesToMove:_filesToMove,
          sourceDir:_sourceDir,
          codeCoverageReportPath:_codeCoverageReportPath,
          orderedJSLibsFiles:_orderedJSLibsFiles,
          orderedJSCustomFilesFiles:_orderedJSCustomFilesFiles,
          orderedCSSLibsFiles:_orderedCSSLibsFiles,    
          orderedCSSCustomFiles:_orderedCSSCustomFiles              
        };
    return config;
};
