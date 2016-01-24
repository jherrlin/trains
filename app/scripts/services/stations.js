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
        name: 'Osby',
        lat: 56.3799096,
        lng: 13.9942982
      },
      {
        id: 1,
        name: 'Killeberg',
        lat: 56.4747785,
        lng: 14.0983654
      },
      {
        id: 2,
        name: 'Älmhult',
        lat: 56.5514265,
        lng: 14.1369853
      },
      {
        id: 3,
        name: 'Diö',
        lat: 56.6341785,
        lng: 14.2152617
      },
      {
        id: 4,
        name: 'Vislanda',
        lat: 56.7869928,
        lng: 14.4535807
      },
      {
        id: 5,
        name: 'Alvesta',
        lat: 56.8987814,
        lng: 14.5563187
      },
      {
        id: 6,
        name: 'Gemla',
        lat: 56.8700707,
        lng: 14.6448319
      },
      {
        id: 7,
        name: 'Växjö',
        lat: 56.8762984,
        lng: 14.8066909
      },
      {
        id: 8,
        name: 'Moheda',
        lat: 57.0032787,
        lng: 14.5768613
      },
      {
        id: 9,
        name: 'Lammhult',
        lat: 57.171038,
        lng: 14.5853829
      }
    ];


    // AngularJS will instantiate a singleton by calling "new" on this function
  });
