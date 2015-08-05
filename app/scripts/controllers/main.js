'use strict';

angular.module('stockDogApp')
  .controller('MainCtrl', function ($scope, $location, WatchlistService) {
    // [1] Populate watchlists for dynamic nav links
    console.log("from Main");
    $scope.watchlists = WatchlistService.query();

    // [2] Using the $location.path() function as a $watch expression
    $scope.$watch(function () {
      return $location.path();
    }, function (path) {
      if (_.contains(path, 'watchlist')) {
        $scope.activeView = 'watchlist';
        console.log($scope);
      } else {
        $scope.activeView = 'dashboard';
      }
    });
  });
