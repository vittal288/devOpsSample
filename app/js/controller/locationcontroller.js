( function(){
		var locationcontroller = function($scope, myService){
			
			 var cities = [
			     	      {
			     	          hotel : 'Exchequer Restaurant & Pub',
			     	          desc : 'S5 off on Mediterranean',
			     	         lat: 41.888634,
			     			long: -87.628091
			     	      },
			     	      {
			     	          hotel : 'Trattoria No.10 ',
			     	          desc : 'Unlimited Happy Hours',
			     	         lat: 41.893491,
			     			long: -87.63045
			     	      },
			     	      {
			     	          hotel : 'The Gage',
			     	          desc : '15%off on Citibank Blue',
			     	         lat: 41.917678,
			     			long: -87.698281
			     	      },
			     	      {
			     	          hotel : 'The purple pig No.10',
			     	          desc : '15%off on Citibank Blue',
			     	         lat: 41.893591,
			     			long: -87.622615
			     	      },
			     	      {
			     	          hotel : 'The girl and the goat',
			     	          desc : 'S5 off on Mediterranean',
			     	         lat: 41.8987,
			     			long: -87.6241
			     	      }
			     	  ];

			     	      var mapOptions = {
			     	          zoom: 12,
			     	          center: new google.maps.LatLng(41.917678, -87.698281),
			     	          mapTypeId: google.maps.MapTypeId.TERRAIN
			     	      };

			     	      $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

			     	      $scope.markers = [];
			     	      
			     	      var infoWindow = new google.maps.InfoWindow();
			     	      
			     	      var createMarker = function (info){
			     	          
			     	          var marker = new google.maps.Marker({
			     	              map: $scope.map,
			     	              position: new google.maps.LatLng(info.lat, info.long),
			     	              title: info.hotel
			     	          });
			     	          marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
			     	          
			     	          google.maps.event.addListener(marker, 'click', function(){
			     	              infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
			     	              infoWindow.open($scope.map, marker);
			     	          });
			     	          
			     	          $scope.markers.push(marker);
			     	          
			     	      };  
			     	      
			     	      for (i = 0; i < cities.length; i++){
			     	          createMarker(cities[i]);
			     	      }

			     	      $scope.openInfoWindow = function(e, selectedMarker){
			     	          e.preventDefault();
			     	          google.maps.event.trigger(selectedMarker, 'click');
			     	      };
			
			$scope.index=myService.userIndex;
			myService.userdetails().success(function(r, s, x){
				$scope.data=r;
				$scope.entiredata = r.Hotels;
			});
			
			$scope.hotel=function(index){
				myService.index=index;
				console.log(myService.index);
				window.open("#/hotel", "_self");
			};
			
			
			
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
				if($scope.slideIndex === 0)
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
			$scope.slideIndex=0;
			$scope.plusDivs(0);
			
			
			
			
		};
		angular.module("myApp").controller("locationcontroller",locationcontroller);
	}());