( function(){		
		var one_controller = function($scope, myService){
			$scope.index=myService.userIndex;
			myService.userdetails().success(function(r, s, x){
				$scope.data=r;
				$scope.entiredata = r.screen1;
			});
		};
		angular.module("myApp").controller("onecontroller",one_controller);
	}());