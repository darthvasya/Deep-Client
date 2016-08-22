app.controller('loginController', function($scope, $http, $routeParams) {

  $scope.username = "lord_54";
  $scope.password = "lord_54";

  $scope.enter = function functionName() {
    var user = {};
    if($scope.username != undefined && $scope.password != undefined)
      user.username = $scope.username;
      user.password = $scope.password;
      console.log(user);
      $http.post('http://maximka777-001-site1.gtempurl.com/loginsystem/LoginService.svc/Login/', user).success(function (data) {
        location.href = "../Projects/";
      });
    }else {
      alert("Access denied!");
    }
});
