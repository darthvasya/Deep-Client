app.controller("questionsController", function ($scope, $http, $location) {
    var searchObject = $location.search();
    $scope.id = searchObject.id;
    $scope.p_id = searchObject.p_id;

    $scope.people = {};

    $http.get('http://localhost:57655/projectmanagementsystem/ProjectService.svc/surveys/' + $scope.id).success(function(data) {
      $scope.people = data;
    });

    $scope.id_current_question = 0;


    $scope.questions = [];
    $http.get('http://localhost:57655/QuestionManagementSystem/QuestionService.svc/projects/' + $scope.p_id + '/questions/').success(function (data) {
      $scope.questions = data;
    });
    $scope.change_current_id = function (cur_id) {
      $scope.id_current_question = cur_id;
      console.log($scope.id_current_question);
    }

    $scope.add_new_variant = function() {
      console.log($scope.new_variant);
      var variant = {};
      variant.id = 3;
      variant.text = $scope.new_variant;
      variant.question_id = $scope.id_current_question;
      //$scope.questions.variants.push(variant);
    }

});




// {
//   "id": 1,
//   "text": "Вопрос очень длинный супер прекрасный вопрос вопросиков вопроскин?",
//   "project_id": 1,
//   "variants":
//   [
//     {
//       "id": 1,
//       "text": "Первый вариант",
//       "question_id": 1
//     },
//     {
//       "id": 2,
//       "text": "Второй вариант",
//       "question_id": 1
//     },
//     {
//       "id": 3,
//       "text": "Трейтий вариант",
//       "question_id": 1
//     }
//   ]
// },
// {
//   "id": 2,
//   "text": "Второй вопрос?",
//   "project_id": 1,
//   "variants":
//   [
//     {
//       "id": 1,
//       "text": "Первый вариант",
//       "question_id": 2
//     },
//     {
//       "id": 2,
//       "text": "Второй вариант",
//       "question_id": 2
//     }
//   ]
// }
