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
  .factory('route', function () {
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

    // Public API here
    return {
      traincreate: function (startlat, startlng, destinationlat, destinationlng) {
        trainroute.origin = new google.maps.LatLng(startlat, startlng);
        trainroute.destination = new google.maps.LatLng(destinationlat, destinationlng);
        trainroute.transitOptions.departureTime = new Date(1453043101312);
        return trainroute;
      },
      carcreate: function (startlat, startlng, destinationlat, destinationlng) {
        carroute.origin = new google.maps.LatLng(startlat, startlng);
        carroute.destination = new google.maps.LatLng(destinationlat, destinationlng);
        return carroute;
      }
    };
  });
