'use strict';

/* globals Chart */

/**
 * @ngdoc service
 * @name projectsApp.chart
 * @description
 * # chart
 * Service in the projectsApp.
 */
angular.module('projectsApp')
  .service('chart', function () {

      var options = {};

      var data = {
        labels: ["Månadskostnad"],
        datasets: [
          {
            label: "Tåg",
            fillColor: "lightblue"
          },
          {
            label: "Bil",
            fillColor: "red"
          }
        ]
      };

    Chart.defaults.global.animation = false;
    Chart.defaults.global.tooltipEvents = [];
    return {
      draw: function (trainPrice, carPrice) {
        var myBarChart;
        var ctx = document.getElementById("chart").getContext("2d");

        data.datasets[0].data = [trainPrice];
        data.datasets[1].data = [carPrice];

        myBarChart = new Chart(ctx).Bar(data, options);
      }
    };
  });
