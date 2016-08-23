app.controller("interviewController", function ($scope, $http) {

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
        console.log ( id );
    }

});
