'use strict';

/**
 * @ngdoc service
 * @name projectsApp.chart
 * @description
 * # chart
 * Service in the projectsApp.
 */
angular.module('projectsApp')
  .service('chart', function () {
    return {
      draw: function (trainPrice, carPrice) {
        var options = {};
        var data = {
          labels: ["Månadskostnad"],
          datasets: [
            {
              label: "Tåg",
              fillColor: "lightblue",
              data: [trainPrice]
            },
            {
              label: "Bil",
              fillColor: "red",
              data: [carPrice]
            }
          ]
        };
        var ctx = document.getElementById("chart").getContext("2d");
        var myBarChart = new Chart(ctx).Bar(data, options);
      }
    };
  });
