( function(){
		var ratingcontroller = function($scope, myService){
			$scope.index=myService.userIndex;
			myService.userdetails().success(function(r, s, x){
				$scope.data=r;
				
			});
			
			$scope.next=function(x)
			{	
				if(x=="a1")
					{
					$scope.slideIndex=0;
					$scope.a1=1;
					$scope.a2=0;
					$scope.a3=0;
					}
				else if(x=="a2")
					{
					$scope.slideIndex=1;
					$scope.a1=0;
					$scope.a2=1;
					$scope.a3=0;
					window.open("#/rating","_self");
					}
				else if(x=="a3")
				{
				$scope.slideIndex=2;
				$scope.a1=0;
				$scope.a2=0;
				$scope.a3=1;
				}
				
			};
			
			$scope.plusDivs=function(x)
			{
				$scope.slideIndex=$scope.slideIndex+x;
				if($scope.slideIndex==+0)
					{
						$scope.next("a1");
					}
				else if($scope.slideIndex==1)
					{
						$scope.next("a2");
					}
				else if($scope.slideIndex==2)
				{
					$scope.next("a3");
				}
				
			};
			$scope.slideIndex=1;
			$scope.plusDivs(0);
			
			$scope.hotel=function(index){
				myService.index=index;
				console.log(myService.index);
				window.open("#/hotel", "_self");
			};
		};
		angular.module("myApp").controller("ratingcontroller",ratingcontroller);
	}());