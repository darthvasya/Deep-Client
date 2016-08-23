app.controller("interviewController", function ($scope, $http, $location) {
    var searchObject = $location.search();
    $scope.id = searchObject.proj_id;
    console.log($scope.id);

    //get asked peoples

    $scope.interviews = [
        {
            "id": 1,
            "name": "Vasya",
            "age": 12,
            "profession": "Programmer"
        },
        {
            "id": 2,
            "name": "Vasya2",
            "age": 12,
            "profession": "Programmer"
        },
        {
            "id": 3,
            "name": "Vasya3",
            "age": 123,
            "profession": "Programmer"
        }
    ];

    $scope.inter_info = function (id) {
        location.href = "../questions/#id=" + id;
    }

    $scope.add_new = function () {
      var new_people = {};
      new_people.name = $scope.name;
      new_people.age = $scope.age;
      new_people.profession = $scope.profession;
      console.log(new_people);
      //post
      //get result
      //insert in model
    }

});
