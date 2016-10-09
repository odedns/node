angular.module('starter.controllers', [])

.controller('splashCtrl', function($scope,$state) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
     console.log("splashCtrl");
     foo();
     /*
     setTimeout(function(){
    console.log('splashCtrl.navigate');
   $state.go('login');
}, 5000)
*/;


  $scope.navigate = function(route){
     console.log('splashCtrl.navigate');
     $state.go(route);


  }

})
.controller('landingCtrl', function($scope,$state) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
     console.log("landingCtrl");


//console.log('indexcontroller');
  //$state.go('/login');
  $scope.navigate = function(){
     console.log('landingCtrl.navigate');

  }
})
.controller('registerCtrl', function($scope,$state) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
     console.log("registerCtrl");


//console.log('indexcontroller');
  //$state.go('/login');
  $scope.navigate = function(){
     console.log('registerCtrl.navigate');
    $state.go('landing');
  }
})
.controller('loginCtrl', function($scope, $state) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  console.log('login');
$scope.navigate = function(){
     console.log('loginCtrl.navigate');
    $state.go('landing');
  }
});
