app.controller('projectController', function($scope, $http) {

  $scope.projects = [];

  //geting projects
  $http.get('http://maximka777-001-site1.gtempurl.com/projectmanagementsystem/ProjectService.svc/projects/').success(function(data) {
    $scope.projects = data;
  });

  //go to project interviews
  $scope.go = function (id) {
    location.href = "../interviews/#?proj_id=" + id;
  }

  //add new project
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
