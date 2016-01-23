'use strict';

/**
 * @ngdoc service
 * @name projectsApp.prices
 * @description
 * # prices
 * Service in the projectsApp.
 */
angular.module('projectsApp')
  .service('carDistance', function () {

    var arr = [
      [0	,14.7   ,23.7	,34.5	,60.5	,74	    ,80.4	,82.5	,87.3	,107.8],
      [14.7	,0	    ,10.8	,21.6	,47.7	,61.2	,67.5	,69.6	,74.5	,94.9 ],
      [23.7	,10.8	,0	    ,11	    ,39.4	,52.9	,59.2	,61.3	,66.2	,86.6 ],
      [34.5	,21.6	,11	    ,0	    ,28.3	,41.8	,48.2	,50.3	,55.1	,75.6 ],
      [60.5	,47.7	,39.4	,28.3	,0	    ,14.6	,22.5	,29.3	,27.9	,48.3 ],
      [74	,61.2	,52.9	,41.8	,14.6	,0	    ,7.8	,19.7	,13.5	,34   ],
      [80.4	,67.5	,59.2	,48.2	,22.5	,7.8	,0	    ,13.7	,21.1	,41.5 ],
      [82.5	,69.6	,61.3	,50.3	,29.3	,19.7	,13.7	,0	    ,25	    ,38.8 ],
      [87.3	,74.5	,66.2	,55.1	,27.9	,13.5	,21.1	,25	    ,0	    ,23.8 ],
      [107.8,94.9	,86.6	,75.6	,48.3	,34	    ,41.5	,38.8	,23.8	,0    ]
    ];

      var functions =  {
          total: function (from, to) {
              return arr[from][to];
          }
      };

      return functions;

  });
