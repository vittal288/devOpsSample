( function(){
		var billcontroller = function($scope, myService){
			$scope.index=myService.userIndex;
			console.log($scope.index);
			$scope.Hotelindex=myService.index;
			console.log($scope.Hotelindex);
			myService.userdetails().success(function(r, s, x){
				$scope.data=r;
				$scope.entiredata = r.screen1;
				$scope.bill=$scope.data.Hotels[$scope.Hotelindex].bill;
				$scope.others=$scope.data.Hotels[$scope.Hotelindex].others;
			});
			
						
		};
		angular.module("myApp").controller("billcontroller",billcontroller);
	}());