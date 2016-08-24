app.controller('loginController', function($scope, $http) {

  $scope.enter = function functionName() {
    var user = {};
    if($scope.username != undefined && $scope.password != undefined) {
      user.username = $scope.username;
      user.password = $scope.password;
      console.log(user);
      $http.post('http://localhost:57655/loginsystem/LoginService.svc/Login/', user).success(function (data) {
        console.log(data);
        if(data != 0) {
          console.log(data);
          location.href = "../Projects/";
        }
        else
          alert("Access denied!")
      });
    }
  }
});
