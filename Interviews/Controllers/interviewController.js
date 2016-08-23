app.controller("interviewController", function ($scope, $http, $location) {
    var searchObject = $location.search();
    $scope.id = searchObject.proj_id;
    console.log($scope.id);

    //get asked peoples
    $scope.project = [];
    $http.get('http://maximka777-001-site1.gtempurl.com/projectmanagementsystem/ProjectService.svc/projects/' + $scope.id).success(function(data) {
      $scope.project = data;
      console.log($scope.project);
    });

    $scope.interviews = [];
    updateSurveys();

    function updateSurveys() {
      $http.get('http://localhost:57655/projectmanagementsystem/ProjectService.svc/projects/'+ $scope.id + '/surveys/').success(function(data) {
        $scope.interviews = data;
        console.log($scope.interviews);
      });
    }


    $scope.inter_info = function (id) {
        location.href = "../questions/#?id=" + id + "&p_id=" + $scope.id;
    }

    $scope.add_new = function () {
      var new_people = {};
      new_people.name = $scope.name;
      new_people.age = $scope.age;
      new_people.profession = $scope.profession;
      new_people.description = "description";
      new_people.project_id = $scope.id;
      console.log(new_people);
      $http.post('http://localhost:57655/projectmanagementsystem/ProjectService.svc/surveys/add/', new_people).success(function(data) {
        updateSurveys();
      });
      //post
      //get result
      //insert in model
    }

});
