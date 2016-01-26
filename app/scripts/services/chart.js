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
            fillColor: "lightblue",
            data: [0]
          },
          {
            label: "Bil",
            fillColor: "red",
            data: [0]
          }
        ]
      };

      //Chart.defaults.global.animation = false;

      var ctx = document.getElementById("chart").getContext("2d");
      var myBarChart = new Chart(ctx).Bar(data, options);

    return {
      draw: function (trainPrice, carPrice) {
        console.log(myBarChart.datasets);
        myBarChart.datasets[0].bars[0].value = trainPrice;
        myBarChart.datasets[1].bars[0].value = carPrice;
        myBarChart.update();
      }
    };
  });
