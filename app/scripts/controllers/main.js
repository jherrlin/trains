'use strict';

 /* globals google */

/**
 * @ngdoc function
 * @name projectsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projectsApp
 *
 */
angular.module('projectsApp')
  .controller('MainCtrl', function ($scope, carDistance, carPrices, trainPrices, route, stations)  {

    var directionsService = new google.maps.DirectionsService();
    var trainDisplay = new google.maps.DirectionsRenderer();
    var carDisplay = new google.maps.DirectionsRenderer({ polylineOptions: { strokeColor: "red" } });

    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 56.8665586, lng: 14.7000050},
      zoom: 9
    });

    $scope.changeTrip = function () {
      var carRoute;
      var destination;
      var start;
      var trainRoute;

      if ($scope.start === null || $scope.destination === null) { return; }

      trainDisplay.setMap(map);
      carDisplay.setMap(map);

      start = stations[$scope.start];
      destination = stations[$scope.destination];

      trainRoute = route.traincreate(start.lat, start.lng, destination.lat, destination.lng);
      carRoute = route.carcreate(start.lat, start.lng, destination.lat, destination.lng);

      directionsService.route(trainRoute, function(result, status) {
        if (status === google.maps.DirectionsStatus.OK) {
          $scope.trainDistance = result.routes[0].legs[0].distance;
          $scope.trainPrice = trainPrices.total(start.id, destination.id);
          trainDisplay.setDirections(result);
          $scope.$apply(); // Force rerendering of UI
        }
      });

      directionsService.route(carRoute, function(result, status) {
        if (status === google.maps.DirectionsStatus.OK) {
          $scope.carDistance = result.routes[0].legs[0].distance;
          $scope.carPrice = carPrices.calculate($scope.carDistance.value, $scope.gasConsumption, $scope.gasPrice);
          carDisplay.setDirections(result);
          $scope.$apply(); // Force rerendering of UI
        }
      });
    };

    $scope.stations = stations;
    $scope.start = 0;
    $scope.destination = 7;
    $scope.gasConsumption = 0.7;
    $scope.gasPrice = 18;
    $scope.gasconsuming_total = 0;

    $scope.changeTrip();
  });
