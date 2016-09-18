/**
 * Created by Saif Ghachem on 17/09/2016.
 */
(function (window, angular) {
    'use strict';

    angular.module('app.FrenchController',[])
        .controller('FrenchController', function ($scope, $http) {
            $scope.loading = true;
            $scope.rssFeed = "http://www.matchendirect.fr/rss/foot-ligue-1-c16.xml";
            var jsonFeed = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%3D'" + $scope.rssFeed + "'&format=json";
            $http.get(jsonFeed).success(function (data) {
                $scope.feed = data.query.results.rss;
            }).then(function(success){
                $scope.loading = false;
            });
            $scope.formatDate = function(date){
                var dateOut = new Date(date);
                return dateOut;
            };


        });

})(window, window.angular);