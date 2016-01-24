'use strict';

/**
 * @ngdoc service
 * @name projectsApp.carPrices
 * @description
 * # carPrices
 * Service in the projectsApp.
 */
angular.module('projectsApp')
  .service('carPrices', function () {

    var arr = [
      [0	    ,740.88	    ,1194.48	,1738.8	    ,3049.2	    ,3729.6	    ,4052.16	,4158	    ,4399.92	,5433.12],
      [740.88	,0	        ,544.32	    ,1088.64	,2404.08	,3084.48	,3402	    ,3507.84	,3754.8	    ,4782.96],
      [1194.48	,544.32	    ,0	        ,554.4	    ,1985.76	,2666.16	,2983.68	,3089.52	,3336.48	,4364.64],
      [1738.8	,1088.64	,554.4	    ,0	        ,1426.32	,2106.72	,2429.28	,2535.12	,2777.04	,3810.24],
      [3049.2	,2404.08	,1985.76	,1426.32	,0	        ,735.84	    ,1134	    ,1476.72	,1406.16	,2434.32],
      [3729.6	,3084.48	,2666.16	,2106.72	,735.84	    ,0	        ,393.12	    ,992.88	    ,680.4	    ,1713.6 ],
      [4052.16	,3402	    ,2983.68	,2429.28	,1134	    ,393.12	    ,0	        ,690.48	    ,1063.44	,2091.6 ],
      [4158	    ,3507.84	,3089.52	,2535.12	,1476.72	,992.88	    ,690.48	    ,0	        ,1260	    ,1955.52],
      [4399.92	,3754.8	    ,3336.48	,2777.04	,1406.16	,680.4	    ,1063.44	,1260	    ,0	        ,1199.52],
      [5433.12  ,4782.96	,4364.64	,3810.24	,2434.32	,1713.6	    ,2091.6	    ,1955.52	,1199.52	,0      ]
    ];

    var functions =  {
      total: function (from, to) {
        return arr[from][to];
      },
      calculate: function (distance, gasPrice, consumption) {
        var mil = distance / 10000.0;
        var routeConsumption = mil * consumption;
        var pricePerTrip =  routeConsumption * gasPrice;
        var tripsPerMonth = 40;

        return (pricePerTrip * tripsPerMonth);
      }
    };

    return functions;
  });
