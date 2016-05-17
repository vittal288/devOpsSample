describe('mocking service http call', function() {
    beforeEach(module('myApp'));

    var controller, $scope, myService, $httpBackend;
    var data = {
        "screen1": {
            "glyphiconMenu": "glyphicon glyphicon-th-list",
            "glyphiconNotification": "glyphicon glyphicon-bell",
            "Birth": "Birthday",
            "cakeImage": "images/cake.png",

            "Notification1": "Click the notification icon",
            "Notification2": "to see special",
            "Notification3": "offers on your Birthday!",
            "giftImage": "images/gift.png",
            "Dine": "Dine-o'Sure"
        },

        "common": {
            "search": "Search",
            "rating": "Rating",
            "location": "Near Location",
            "List": "List Results",
            "you": "You Selected",
            "chicago": "images/Chicago.jpg"
        },

        "slides": {
            "slideOne": "Rating",
            "slideTwo": "Location",
            "slideThree": "Hours"
        },

        "buttonSlide": {
            "buttonOne": "Book cab",
            "buttonTwo": "invite friends",
            "buttonThree": "reserve table",
            "buttonFour": "get bill",
            "buttonFive": "Menu",
            "facebook": "images/facebook.png",
            "whatsapp": "images/whatsapp.jpg",
            "messenger": "images/message.png"
        },

        "cab": {
            "taxi": "TUBER TAXI",
            "background": "url('images/uber-maps.jpg')",
            "business": "images/business.jpg",
            "Business": "BUSINESS",
            "number": "**** 1234",
            "change": "CHANGE",
            "CARD": "images/card.png",
            "fare": "FARE QUOTE",
            "left": "images/left.png",
            "promo": "PROMO CODE",
            "pickup": "PICK UP TIME IS APPROXIMATELY 1 MIN"
        },

        "billView": {
            "view": "VIEW BILL",
            "jessi": "3 JESSICAS",
            "su": "SU 02",
            "order": "ORDR 31",
            "date": "APR11'99 12:37pm",
            "dining": "DINE IN",
            "thanks": "THANKS FOR CHOOSING",
            "hope": "WE HOPE TO SEE YOU AGAIN SOON!!!",
            "trn": "TRN",
            "tnum": "64955",
            "Order": "ORDER #",
            "ornum": "31",
            "payBill": "PAY BILL",
            "splitBill": "SPLIT BILL"
        },

        "payment": {
            "existing": "Existing Card",
            "New": "Add New Card",
            "cardName": "Cardholder Name",
            "cardNum": "Card Number",
            "expiry": "Card Expiration",
            "cvv": "CVV",
            "visa": "images/Visa.png",
            "master": "images/Master.png",
            "amex": "images/amex.png",
            "reward": "909 REWARD POINTS",
            "pay": "PAYBILL",
            "rateUs": "RATE US"

        },

        "success": {
            "tick": "images/tick.jpg",
            "successFull": "Payment successfull",
            "email": "We will email you a receipt confirming your payment shortly",
            "mail": "images/mail.png",
            "pdf": "images/pdf.png",
            "rate": "SUBMIT"
        },

        "reward": {

            "points": "105 reward points",
            "level": "Gold level",
            "until": "771 reward points until platinum",
            "image": "images/stars.png",
            "restaurants": "RESTAURANTS BASED ON ELIGIBILITY"
        },

        "Hotels": [{
            "image": "images/1.png",
            "ratingone": "images/starsel.png",
            "ratingtwo": "images/starsel.png",
            "ratingthree": "images/starsel.png",
            "ratingfour": "images/starsel.png",
            "ratingfive": "images/starunsel.png",
            "miles": "2mi away",
            "offer": "30%off",
            "restaurant": "Exchequer Restaurant & Pub",
            "discription": "S5 off on Mediterranean",
            "discriptionSecond": "selection",
            "kiloMeters": "(122) (5mi away)",
            "address": "$$.Americam.S Wabash Ave",
            "timings": "Opens at 11:00 AM",
            "food": "Longtime pub with American eats",
            "menu": "sandwich",
            "logo": "images/Exchequer.png",
            "bill": [{
                "Dish": "D LISH DBL",
                "quantity": "1",
                "price": "2.40"
            }, {
                "Dish": "FRIES",
                "quantity": "1",
                "price": "0.95"
            }, {
                "Dish": "MED PEPSI",
                "quantity": "1",
                "price": "0.99"
            }],
            "others": [{
                "taxname": "CASH",
                "cash": "5.00"
            }, {
                "taxname": "*SUBTOTAL*",
                "cash": "4.34"
            }, {
                "taxname": "TAX",
                "cash": "0.34"
            }, {
                "taxname": "PAYEMENT",
                "cash": "4.69"
            }, {
                "taxname": "CHANGE DUE",
                "cash": "0.31"
            }]
        }, {
            "image": "images/5.png",
            "ratingone": "images/starsel.png",
            "ratingtwo": "images/starsel.png",
            "ratingthree": "images/starsel.png",
            "ratingfour": "images/starunsel.png",
            "ratingfive": "images/starunsel.png",
            "miles": "2.9mi away",
            "offer": "20%off",
            "restaurant": "Trattoria No.10 ",
            "kiloMeters": "(57) (6.2 mi away) ",
            "discription": "Unlimited Happy Hours",
            "address": "$$.italian.N Dearborn St",
            "timings": "Opens at 11:30 AM",
            "food": "Chicago's Best Happy Hours",
            "menu": "chop suey",
            "logo": "images/trattoria.png",
            "bill": [{
                "Dish": "D LISH DBL",
                "quantity": "1",
                "price": "2.40"
            }, {
                "Dish": "FRIES",
                "quantity": "1",
                "price": "0.95"
            }, {
                "Dish": "MED PEPSI",
                "quantity": "1",
                "price": "0.99"
            }],
            "others": [{
                "taxname": "CASH",
                "cash": "5.00"
            }, {
                "taxname": "*SUBTOTAL*",
                "cash": "4.34"
            }, {
                "taxname": "TAX",
                "cash": "0.34"
            }, {
                "taxname": "PAYEMENT",
                "cash": "4.69"
            }, {
                "taxname": "CHANGE DUE",
                "cash": "0.31"
            }]
        }, {
            "image": "images/4.png",
            "ratingone": "images/starsel.png",
            "ratingtwo": "images/starsel.png",
            "ratingthree": "images/starsel.png",
            "ratingfour": "images/starunsel.png",
            "ratingfive": "images/starunsel.png",
            "miles": "3.1mi away",
            "offer": "17%off",
            "restaurant": "The Gage (355) (8.3 mi away)",
            "address": "$$.American.S Michigan Ave",
            "discription": "15%off on Citibank Blue",
            "discriptionSecond": "credit cards",
            "timings": "Opens at 11:00 AM",
            "food": "Chicago's Best Bachelor Party Spaces",
            "menu": "nachos",
            "logo": "images/gage.jpg",
            "bill": [{
                "Dish": "D LISH DBL",
                "quantity": "1",
                "price": "2.40"
            }, {
                "Dish": "FRIES",
                "quantity": "1",
                "price": "0.95"
            }, {
                "Dish": "MED PEPSI",
                "quantity": "1",
                "price": "0.99"
            }],
            "others": [{
                "taxname": "CASH",
                "cash": "5.00"
            }, {
                "taxname": "*SUBTOTAL*",
                "cash": "4.34"
            }, {
                "taxname": "TAX",
                "cash": "0.34"
            }, {
                "taxname": "PAYEMENT",
                "cash": "4.69"
            }, {
                "taxname": "CHANGE DUE",
                "cash": "0.31"
            }]

        }, {
            "image": "images/2.png",
            "ratingone": "images/starsel.png",
            "ratingtwo": "images/starsel.png",
            "ratingthree": "images/starsel.png",
            "ratingfour": "images/starsel.png",
            "ratingfive": "images/starunsel.png",
            "miles": "3.9mi away",
            "offer": "20%off",
            "restaurant": "The purple pig No.10 (57) (6.2 mi away)",
            "address": "$$.italian.N Dearborn St",
            "discription": "15%off on Citibank Blue",
            "discriptionSecond": "credit cards",
            "timings": "Opens at 11:30 AM",
            "food": "Chicago's Best Happy Hours",
            "menu": "burger",
            "logo": "images/purple.jpg",
            "bill": [{
                "Dish": "D LISH DBL",
                "quantity": "1",
                "price": "2.40"
            }, {
                "Dish": "FRIES",
                "quantity": "1",
                "price": "0.95"
            }, {
                "Dish": "MED PEPSI",
                "quantity": "1",
                "price": "0.99"
            }],
            "others": [{
                "taxname": "CASH",
                "cash": "5.00"
            }, {
                "taxname": "*SUBTOTAL*",
                "cash": "4.34"
            }, {
                "taxname": "TAX",
                "cash": "0.34"
            }, {
                "taxname": "PAYEMENT",
                "cash": "4.69"
            }, {
                "taxname": "CHANGE DUE",
                "cash": "0.31"
            }]

        }, {
            "image": "images/3.png",
            "ratingone": "images/starsel.png",
            "ratingtwo": "images/starsel.png",
            "ratingthree": "images/starunsel.png",
            "ratingfour": "images/starunsel.png",
            "ratingfive": "images/starunsel.png",
            "miles": "4mi away",
            "offer": "17%off",
            "restaurant": "The girl and the goat (355) (8.3 mi away)",
            "address": "$$.American.S Michigan Ave",
            "discription": "S5 off on Mediterranean",
            "discriptionSecond": "selection",
            "timings": "Opens at 11:00 AM",
            "food": "Chicago's Best Bachelor Party Spaces",
            "menu": "chicken",
            "logo": "images/goat.png",
            "bill": [{
                "Dish": "D LISH DBL",
                "quantity": "1",
                "price": "2.40"
            }, {
                "Dish": "FRIES",
                "quantity": "1",
                "price": "0.95"
            }, {
                "Dish": "MED PEPSI",
                "quantity": "1",
                "price": "0.99"
            }],
            "others": [{
                "taxname": "CASH",
                "cash": "5.00"
            }, {
                "taxname": "*SUBTOTAL*",
                "cash": "4.34"
            }, {
                "taxname": "TAX",
                "cash": "0.34"
            }, {
                "taxname": "PAYEMENT",
                "cash": "4.69"
            }, {
                "taxname": "CHANGE DUE",
                "cash": "0.31"
            }]

        }],

        "Login": {
            "User": "Username",
            "passWord": "Password"
        },

        "userdatas": [{
            "id": "M1001",
            "Name": "Kristin Mirabelle",
            "password": "password",
            "image": "images/kristin.jpg",
            "Wishes": "Happy Birthday Kristin!"
        }, {
            "id": "M1002",
            "Name": "Paul Walker",
            "password": "password",
            "image": "images/paul.jpg",
            "Wishes": "Happy Birthday Paul Walker!"
        }]
    };
    describe('with spies', function () {
        beforeEach(inject(function ($controller, $rootScope, _myService_) {
            $scope = $rootScope.$new();
            myService = _myService_;
            controller = $controller('logincontroller', {$scope: $scope, myService: myService});

            spyOn(myService, 'userdetails').and.callFake(function () {
                return {
                    success: function (callback) {
                        callback(data)
                    }
                };
            });
            controller = $controller('logincontroller', {$scope: $scope, myService: myService});
        }));

        it('to get json data', function () {
            expect($scope.data).toEqual(data);
            expect($scope.entiredata).toEqual(data.userdatas);
        });

    });
    // describe('initializing user and password', function () {
    //     it('sets the user', function () {
    //         expect($scope.user).toBe('');
    //     });
    //     it('sets the password', function () {
    //         expect($scope.pass).toBe('');
    //     });
    // });

    describe('with httpBackend', function () {
        beforeEach(inject(function ($controller, $rootScope, _$httpBackend_) {
            $scope = $rootScope.$new();
            $httpBackend = _$httpBackend_;
            $httpBackend.when('GET', 'view/login.html').respond(true);
            $httpBackend.when('GET', 'data/data.json').respond(data);

            controller = $controller('logincontroller', {$scope: $scope});
            $httpBackend.flush();
        }));

        it('to get json data', function () {
            expect($scope.data).toEqual(data);
            expect($scope.entiredata).toEqual(data.userdatas);
        });
    });

    describe('validate user and password', function () {
        it('user validation', function () {
            var index;
            for (i = 0; i < $scope.entiredata.length; i++) {
                if ($scope.entiredata[i].id == $scope.user) {
                    index = i;
                }
            }
            if (index == undefined) {
                it( 'should test window open event', inject( function($window ) {
                    spyOn($window, 'alert').and.callFake(function () {
                        return true;
                    expect($window.alert).toHaveBeenCalledWith('invalid user');
                    });
                }));
            }
            else {
                if ($scope.entiredata[index].password == $scope.pass) {
                    it( 'should test window open event', inject( function( $window ) {
                        spyOn($window, 'open').and.callFake(function () {
                            return true;

                        expect($window.open).toHaveBeenCalled();
                        expect($window.open).toHaveBeenCalledWith("#/notification", "_self");
                        });
                    }));
                }
                else {
                        it( 'should test window open event', inject( function( $window ) {
                            spyOn($window, 'alert').and.callFake(function () {
                                return true;
                            expect($window.alert).toHaveBeenCalledWith('invalid password');
                            });
                        }));
                }
            }
        });
    });

});

