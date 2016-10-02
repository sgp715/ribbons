angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



  .state('page1', {
    url: '/landing',
    templateUrl: 'templates/page1.html',
    controller: 'page1Ctrl'
  })

  .state('login', {
    url: '/logon',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('hammocks', {
    url: '/list',
    templateUrl: 'templates/hammocks.html',
    controller: 'hammocksCtrl'
  })

  .state('supply', {
    url: '/supply',
    templateUrl: 'templates/supply.html',
    controller: 'supplyCtrl'
  })

  .state('rent', {
    url: '/rent',
    templateUrl: 'templates/rent.html',
    controller: 'rentCtrl'
  })

$urlRouterProvider.otherwise('/landing')



});
