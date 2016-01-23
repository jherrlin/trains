'use strict';

/**
 * @ngdoc function
 * @name projectsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projectsApp
 */
angular.module('projectsApp')
  .controller('MainCtrl', function (stations) {
    var directionsDisplay;
    var directionsService = new google.maps.DirectionsService();

    var route = {
      origin: "Alvesta",
      destination: " Växjö",
      provideRouteAlternatives: false,
      travelMode: google.maps.TravelMode.TRANSIT,
      transitOptions: {
        modes: [ google.maps.TransitMode.RAIL]
      }
    };

    var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 56.8665586, lng: 14.7000050},
    zoom: 9
    });

    directionsDisplay = new google.maps.DirectionsRenderer();
    directionsDisplay.setMap(map);

    directionsService.route(route, function(result, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(result);
      }
    });
  });
