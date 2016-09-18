/**
 * Created by Saif Ghachem on 15/09/2016.
 */

(function (window, angular) {
    'use strict';

    angular.module('app.MainController',[])
        .controller('MainController', function ($scope, $http) {
            $scope.loading = true;
            $scope.rssFeed = "http://www.matchendirect.fr/rss/info.xml";
            // Define the JSON feed for fetching the RSS feed
            var jsonFeed = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%3D'" + $scope.rssFeed + "'&format=json";
            // Actually fetch the feed
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