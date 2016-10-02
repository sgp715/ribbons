angular.module('app.controllers', [])

.controller('page1Ctrl', ['$scope', '$stateParams', '$location', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $location) {

  // adding the fuciont to move when clicked
  $scope.loginPage = function() {
    $location.path('/logon');
  };
  $scope.signupPage = function() {
    $location.path('/signup');
  };

}])

.controller('loginCtrl', ['$scope', '$stateParams', '$location', '$http', '$ionicViewService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $location, $http) {



  $scope.user = '';
  $scope.password = '';

  $scope.login= function() {
  //   // send request and verify against DB
  //   console.log($scope.user);
  //   console.log($scope.password);

    $http.get('https://bluemixribbons.mybluemix.net/hammocks')
    .success(function(res){
      console.log("Successful!");
      console.log(res);
    }).error(function(res, status){
      console.log("Not Successful :(");
      console.log(res);
    });

    // $location.path('/list');
  };

  // $http.jsonp('https://bluemixribbons.mybluemix.net/hammocks')
  //   .success(function(data){
  //       console.log("hello");
  //       console.log(data);
  //   });

}])

.controller('signupCtrl', ['$scope', '$stateParams', '$location', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $location) {

  $scope.signup= function() {
    // send put to database
    $location.path('/hammocks');
  };
}])

.controller('hammocksCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

}])

.controller('supplyCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('rentCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
