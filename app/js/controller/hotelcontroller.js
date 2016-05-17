( function(){
		var hotelcontroller = function($scope, myService){
			$scope.index=myService.userIndex;
			$scope.Hotelindex=myService.index;
			myService.userdetails().success(function(r, s, x){
				$scope.data=r;
				$scope.entiredata = r.screen1;
			});
			var swiper = new Swiper('.swiper-container', {
		        pagination: '.swiper-pagination',
		        effect: 'coverflow',
		        grabCursor: true,
		        centeredSlides: true,
		        slidesPerView: 'auto',
		        coverflow: {
		            rotate: 0,
		            stretch: 0,
		            depth: 100,
		            modifier: 4,
		            slideShadows : true
		        }
		    });
			
			$scope.cab=function(){
				window.open("#/cab", "_self");
			};
			$scope.bill=function(){
				window.open("#/bill", "_self");
			};
		};
		angular.module("myApp").controller("hotelcontroller",hotelcontroller);
	}());