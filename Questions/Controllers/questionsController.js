app.controller("questionsController", function ($scope, $http, $location) {
    var searchObject = $location.search();
    $scope.id = searchObject.id;

    $scope.people = {};

    $http.get('http://localhost:57655/projectmanagementsystem/ProjectService.svc/surveys/' + $scope.id).success(function(data) {
      $scope.people = data;
    });

});
