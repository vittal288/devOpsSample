(function(){
    angular.module("appRoute",["ngRoute"])//adding the ngRoute dependency
    .config(['$routeProvider',function($routeProvider){
    $routeProvider	
    	/* Loads the view and controller for the corresponding route */
         .when("/", {
             controller : "logincontroller",
             templateUrl : "view/login.html"
	     })
    	.when("/notification", {
            controller : "onecontroller",
            templateUrl : "view/screen1.html"
    	})
    	.when("/rating", {
    		controller : "ratingcontroller",
    		templateUrl : "view/rating.html"
    	})
    	.when("/location", {
    		controller : "locationcontroller",
    		templateUrl : "view/location.html"
    	})
    	.when("/search", {
            controller : "searchcontroller",
            templateUrl : "view/search.html"
        	})
        .when("/hotel", {
            controller : "hotelcontroller",
            templateUrl : "view/hotel.html"
        	})
        .when("/cab", {
            controller : "cabcontroller",
            templateUrl : "view/cab.html"
        	})
        .when("/bill", {
            controller : "billcontroller",
            templateUrl : "view/bill.html"
        	})
        .when("/payment", {
            controller : "paymentcontroller",
            templateUrl : "view/payment.html"
        	})
        .when("/success", {
            controller : "successcontroller",
            templateUrl : "view/success.html"
        	})
        .when("/reward", {
            controller : "rewardcontroller",
            templateUrl : "view/reward.html"
        	});
    }]);
})();//Self-invoking function