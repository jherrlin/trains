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
    var route = {
      provideRouteAlternatives: false,
      travelMode: google.maps.TravelMode.TRANSIT,
      transitOptions: {
        modes: [ google.maps.TransitMode.RAIL]
      }
    };

    // Public API here
    return {
      create: function (start, destination) {
        route.origin = start;
        route.destination = destination;
        return route;
      }
    };
  });
