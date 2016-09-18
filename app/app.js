/**
 * Created by Saif Ghachem on 16/09/2016.
 */
(function (window, angular){
    'use strict';
    angular.module('Main',
        ['ngRoute',
            'app.MainController',
            'app.SpainController',
            'app.FrenchController',
            'app.InfoController',
        ]
    )
        .config(function ($routeProvider){
            $routeProvider
                .when('/', {
                    templateUrl : 'app/Partials/main.html',
                    controller: 'MainController'
                })

                .when('/spain', {
                    templateUrl : 'app/Partials/leagueEspagne.html',
                    controller: 'SpainController'
                })

                .when('/frensh', {
                    templateUrl : 'app/Partials/leagueFrance.html',
                    controller: 'FrenchController'
                })

                .when('/infos', {
                    templateUrl : 'app/Partials/details.html',
                    controller: 'InfoController'
                })

                .otherwise({redirectTo: '/'});
        });
})(window, window.angular);