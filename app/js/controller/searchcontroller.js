( function(){
		var searchcontroller = function($scope, myService){
			$scope.index=myService.userIndex;
			myService.userdetails().success(function(r, s, x){
				$scope.data=r;
				$scope.entiredata = r.screen1;
			});
			
			$scope.hotel=function(index){
				myService.index=index;
				window.open("#/hotel", "_self");
			};
		};
		angular.module("myApp").controller("searchcontroller",searchcontroller);
	}());