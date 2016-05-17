/**
 * Created by M1036166 on 3/26/2016.
 */
var app = angular.module('app',[]);
app.controller('HelloWorldController', ['$scope', function($scope) {
    $scope.greeting = 'Hello World!';
}]);