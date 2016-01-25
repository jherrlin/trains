'use strict';

 /* globals google */

/**
 * @ngdoc service
 * @name projectsApp.route
 * @description
 * # route
 * Factory in the projectsApp.
 */
angular.module('projectsApp')
  .service('route', function () {
    var directionsService = new google.maps.DirectionsService();
    var trainDisplay = new google.maps.DirectionsRenderer();
    var carDisplay = new google.maps.DirectionsRenderer({ polylineOptions: { strokeColor: "red" } });

    var trainroute = {
      provideRouteAlternatives: false,
      travelMode: google.maps.TravelMode.TRANSIT,
      transitOptions: {
        modes: [google.maps.TransitMode.RAIL],
        routingPreference: google.maps.TransitRoutePreference.FEWER_TRANSFERS
      }
    };

    var carroute = {
      provideRouteAlternatives: false,
      travelMode: google.maps.TravelMode.DRIVING,
    };

    var traincreate =  function (start, destination) {
      trainroute.origin = new google.maps.LatLng(start.lat, start.lng);
      trainroute.destination = new google.maps.LatLng(destination.lat, destination.lng);
      trainroute.transitOptions.departureTime = new Date(1453043101312);
      return trainroute;
    };

    var carcreate = function (start, destination) {
      carroute.origin = new google.maps.LatLng(start.lat, start.lng);
      carroute.destination = new google.maps.LatLng(destination.lat, destination.lng);
      return carroute;
    };

    return {
      init: function (map) {
        trainDisplay.setMap(map);
        carDisplay.setMap(map);
      },

      updateTrainRoute: function (start, destination, callback) {
        var route = traincreate(start, destination);
        var request = function (result, status) {
          if (status === google.maps.DirectionsStatus.OK) {
            trainDisplay.setDirections(result);
            callback(result);
          }
        };
        directionsService.route(route, request);
      },

      updateCarRoute: function (start, destination, callback) {
        var route = carcreate(start, destination);
        var request = function (result, status) {
          if (status === google.maps.DirectionsStatus.OK) {
            carDisplay.setDirections(result);
            callback(result);
          }
        };
        directionsService.route(route, request);
      }
    };
  });
