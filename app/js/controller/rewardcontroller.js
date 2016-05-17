( function(){
		var rewardcontroller = function($scope, myService){
			$scope.index=myService.userIndex;
			$scope.Hotelindex=myService.index;
			myService.userdetails().success(function(r, s, x){
				$scope.data=r;
				$scope.entiredata = r.screen1;
			});
		};
		angular.module("myApp").controller("rewardcontroller",rewardcontroller);
	}());