describe('Testing Routes', function () {

    beforeEach(module('myApp'));

    it('should test routes', inject(function ($route) {

                expect($route.routes['/'].controller).toBe('logincontroller');
                expect($route.routes['/'].templateUrl).toEqual('view/login.html');

                expect($route.routes['/notification'].controller).toBe('onecontroller');
                expect($route.routes['/notification'].templateUrl).toEqual('view/screen1.html');

                expect($route.routes['/rating'].controller).toBe('ratingcontroller');
                expect($route.routes['/rating'].templateUrl).toEqual('view/rating.html');

                expect($route.routes['/location'].controller).toBe('locationcontroller');
                expect($route.routes['/location'].templateUrl).toEqual('view/location.html');

                expect($route.routes['/search'].controller).toBe('searchcontroller');
                expect($route.routes['/search'].templateUrl).toEqual('view/search.html');

                expect($route.routes['/hotel'].controller).toBe('hotelcontroller');
                expect($route.routes['/hotel'].templateUrl).toEqual('view/hotel.html');

                expect($route.routes['/cab'].controller).toBe('cabcontroller');
                expect($route.routes['/cab'].templateUrl).toEqual('view/cab.html');

                expect($route.routes['/bill'].controller).toBe('billcontroller');
                expect($route.routes['/bill'].templateUrl).toEqual('view/bill.html');

                expect($route.routes['/payment'].controller).toBe('paymentcontroller');
                expect($route.routes['/payment'].templateUrl).toEqual('view/payment.html');

                expect($route.routes['/success'].controller).toBe('successcontroller');
                expect($route.routes['/success'].templateUrl).toEqual('view/success.html');

                expect($route.routes['/reward'].controller).toBe('rewardcontroller');
                expect($route.routes['/reward'].templateUrl).toEqual('view/reward.html');

        }));

});
