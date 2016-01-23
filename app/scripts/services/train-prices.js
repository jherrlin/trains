'use strict';

/**
 * @ngdoc service
 * @name projectsApp.trainPrices
 * @description
 * # trainPrices
 * Service in the projectsApp.
 */
angular.module('projectsApp')
  .service('trainPrices', function (from, to) {

    var from = from.id;
    var to = to.id;

    var arr = [
      [0	,399	,694	,854	,1374	,1454	,1534	,1614	,1534	,1614],
      [399	,0	    ,520	,854	,1374	,1454	,1534	,1614	,1534	,1614],
      [694	,520	,0	    ,840	,1040	,1120	,1200	,1280	,1200	,1280],
      [854	,854	,840	,0	    ,940	,1040	,1120	,1200	,1120	,1200],
      [1374	,1374	,1040	,940	,0	    ,840	,940	,1040	,940	,1040],
      [1454	,1454	,1120	,1040	,840	,0	    ,840	,940	,840	,940 ],
      [1534	,1534	,1200	,1120	,940	,840	,0	    ,840	,940	,1040],
      [1614	,1614	,1280	,1200	,1040	,940	,840	,0	    ,1040	,1120],
      [1534	,1534	,1200	,1120	,940	,840	,940	,1040	,0	    ,840 ],
      [1614	,1614	,1280	,1200	,1040	,940	,1040	,1120	,840	,0   ]
    ];

    return arr[from][to];
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
