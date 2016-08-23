app.controller('projectController', function($scope, $http) {

  $scope.projects = [
    {
      "id": "1",
      "name": "da",
      "count": "132"
    },
    {
      "id": "2",
      "name": "dasdfa",
      "count": "12"
    }
  ];

  $scope.go = function (id) {
    location.href = "../interviews/" + id;
  }

  $scope.add = function () {
    var project = {};
    project.name = $scope.project_name;
    project.description = $scope.project_description;
    if(project.name != undefined) {
      $http.post('url', project).success(function(data) {
        console.log(data);
      });
    }

  }



});
