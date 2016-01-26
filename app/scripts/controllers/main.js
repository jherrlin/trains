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
  .controller('MainCtrl', function ($scope, carDistance, carPrices, chart, trainPrices, route, stations)  {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 56.8665586, lng: 14.7000050},
      zoom: 9,
      scrollwheel: false,
      mapTypeControl: false,
      streetViewControl: false
    });

    $scope.updateCalculations = function () {
      $scope.carPrice = carPrices.calculate($scope.carDistance.value, $scope.carCostPerMil);
      chart.draw($scope.trainPrice, $scope.carPrice);
      $scope.$apply();
    };

    $scope.changeTrip = function () {
      var destination;
      var start;

      if ($scope.start === null || $scope.destination === null) { return; }
      route.init(map);

      start = stations[$scope.start];
      destination = stations[$scope.destination];

      route.updateTrainRoute(start, destination, function(result) {
        $scope.trainDistance = result.routes[0].legs[0].distance;
        $scope.trainPrice = trainPrices.total(start.id, destination.id);

        route.updateCarRoute(start, destination, function(result) {
          $scope.carDistance = result.routes[0].legs[0].distance;
          $scope.carPrice = carPrices.calculate($scope.carDistance.value, $scope.carCostPerMil);
          $scope.updateCalculations();
        });
      });
    };

    $scope.stations = stations;
    $scope.start = 0;
    $scope.destination = 7;
    $scope.carCostPerMil = 12.6;
    $scope.gasconsuming_total = 0;

    $scope.changeTrip();
  });
