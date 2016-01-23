'use strict';

/**
 * @ngdoc function
 * @name projectsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projectsApp
 */
angular.module('projectsApp')
  .controller('MainCtrl', function () {

    // Initialize map
      var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 56.8665586, lng: 14.7000050},
        zoom: 9
      });

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
