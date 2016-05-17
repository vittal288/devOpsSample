describe('MyService', function () {
    var myService, $httpBackend;

    var userdetails ={
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
    beforeEach(function () {
        module('myApp');
        module(function ($provide) {
            $provide.service('myService', myService);
        });
        inject((['$httpBackend', function (_$httpBackend_) {
            $httpBackend = _$httpBackend_;
        }]));
    });

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    //commented this
    it('to get userdetails', function(){
        $httpBackend.when("GET",'view/login.html').respond(true);
        //$httpBackend.when("GET",'data/data.json').respond(userdetails);
        //expect(userdetails.userdatas[0].id).toEqual("M1001");
        //expect(userdetails.userdatas[1].id).toEqual("M1002");
        $httpBackend.flush();
    });
    
    // it('it should return some of two variable',function(){
    //     //console.log('######## SERVICE', myService);
    //    expect(myService.sampleFn(1,2)).toEqual(3);
    // });
});

