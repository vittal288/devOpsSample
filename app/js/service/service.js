(function(){
	var myService=function($http)
	{
		this.userdetails=function()
		{
			return $http.get("data/data.json");
		};
		this.index;	
		this.userIndex;
	};
	
	myService.prototype.sampleFn= function(a,b){
		return a+b;	
	};
	myService.prototype.sampleFn2= function(a,b){
		return a-b;	
	};
	
	angular.module("myApp").service("myService", myService);
}());


