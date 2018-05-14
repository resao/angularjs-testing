var angularJSTestingApp = angular.module('angularJSTestingApp', []);

angularJSTestingApp.controller('MainCtrl', function ($rootScope, $scope, $http) {
    var _this = this;
    _this.apiKey = "9618a2e646fba37542fa264ddb74f21b";

    $scope.title = "Testing AngularJS Applications";

    $scope.destinations = [];

    $scope.newDestination = {
        city: undefined,
        country: undefined
    };

    $scope.addDestination = function() {
        $scope.destinations.push({
            city: $scope.newDestination.city,
            country: $scope.newDestination.country
        });
    };

    $scope.removeDestination = function(index) {
        $scope.destinations.splice(index, 1)
    }

    $scope.getWeather = function (destination) {
        $http.get("http://api.openweathermap.org/data/2.5/weather?q=" + destination.city + "&appid=" + _this.apiKey).then(
            function successCallback(response){
                if(response.data.weather && response.data.weather.length ){
                    destination.weather = {
                        main: response.data.weather[0].main,
                        temp: $scope.convertKelvinToCelcius(response.data.main.temp)
                    };
                }
            },
            function errorCallback(error){
                console.log(error);
            }
        );
    }

    $scope.convertKelvinToCelcius = function(temp) {
        return Math.round(temp - 273);
    }
});
