/**
 * Created by Saif Ghachem on 17/09/2016.
 */
(function (window, angular) {
    'use strict';

    angular.module('app.InfoController',[])
        .controller('InfoController', function ($scope, $routeParams, $sce) {
            $scope.trustSrc = function(src) {
                return $sce.trustAsResourceUrl(src);
            }
            $scope.getlinks = function() {
                return $routeParams.link;
            }


        });

})(window, window.angular);


