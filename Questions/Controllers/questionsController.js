app.controller("questionsController", function ($scope, $http, $location) {
    console.log(12);
    var searchObject = $location.search();
    $scope.id = searchObject.id;

    $scope.people = {};
    
});
