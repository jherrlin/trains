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
  .controller('MainCtrl', function ($scope, carDistance, route, stations)  {

    var directionsService = new google.maps.DirectionsService();
    var directionsDisplay = new google.maps.DirectionsRenderer();
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 56.8665586, lng: 14.7000050},
      zoom: 9
    });

    $scope.stations = stations;
    $scope.start = null;
    $scope.destination = null;

    $scope.changeTrip = function () {
      var start;
      var destination;

      if ($scope.start === null || $scope.destination === null) { return; }

      start = stations[$scope.start].name;
      destination = stations[$scope.destination].name;

      directionsDisplay.setMap(map);

      directionsService.route(route.create(start, destination), function(result, status) {
        if (status === google.maps.DirectionsStatus.OK) {
          directionsDisplay.setDirections(result);
        }
      });

    };

  });
