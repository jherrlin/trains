'use strict';

/**
 * @ngdoc service
 * @name projectsApp.stations
 * @description
 * # stations
 * Service in the projectsApp.
 */
angular.module('projectsApp')

  .service('stations', function () {

    return [
      {
        id: 0,
        name: 'Osby'
      },
      {
        id: 1,
        name: 'Killeberg'
      },
      {
        id: 2,
        name: 'Älmhult'
      },
      {
        id: 3,
        name: 'Diö'
      },
      {
        id: 4,
        name: 'Vislanda'
      },
      {
        id: 5,
        name: 'Alvesta'
      },
      {
        id: 6,
        name: 'Gemla'
      },
      {
        id: 7,
        name: 'Växjö'
      },
      {
        id: 8,
        name: 'Moheda'
      },
      {
        id: 9,
        name: 'Lammhult'
      }
    ];


    // AngularJS will instantiate a singleton by calling "new" on this function
  });
