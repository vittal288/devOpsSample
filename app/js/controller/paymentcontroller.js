( function(){
		var paymentcontroller = function($scope, myService){
			$scope.cardName="Paul Walker";
			$scope.cardNum="5647-1544-2545-1434";
			$scope.cardCvv="534";
			$scope.cardMonth="MM";
			$scope.cardYear = "YY";
			$scope.index=myService.userIndex;
			$scope.Hotelindex=myService.index;
			myService.userdetails().success(function(r, s, x){
				$scope.data=r;
				$scope.entiredata = r.screen1;
			});
		};
		angular.module("myApp").controller("paymentcontroller",paymentcontroller);
	}());