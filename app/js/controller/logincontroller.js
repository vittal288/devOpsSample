( function(){
		var logincontroller = function($scope, myService){	
			alert('asdad 123');					
			//$scope.user="M1002";
			//$scope.pass="password";
			myService.userdetails().success(function(r, s, x){
				$scope.data=r; //saving json into variable 'data' attached to the scope
				$scope.entiredata = r.userdatas; //saving data[userdata] attached to the scope
			});
			$scope.validate=function()
			{
				var index;
				for(i=0;i<$scope.entiredata.length;i++){
					if($scope.entiredata[i].id==$scope.user){
						 index=i;
					}
				}
				if(index===undefined){
					alert("invalid username");
				}
				else{
						myService.userIndex=index;
						if($scope.entiredata[index].password==$scope.pass)
						{
							window.open("#/notification", "_self");
					    }
						else
						{
							alert("invalid password");
						}
					}
			};
			
			$scope.sampleTestFn= function(){
				//code	
			};
		};
		angular.module("myApp").controller("logincontroller", logincontroller);
	}());