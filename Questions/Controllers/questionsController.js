app.controller("questionsController", function ($scope, $http, $location) {
    var searchObject = $location.search();
    $scope.id = searchObject.id;
    $scope.p_id = searchObject.p_id;
    console.log(searchObject);
    $scope.people = {};
    $scope.allAnswers = {};
    $scope.showAnsw = false;
    $http.get('http://localhost:57655/projectmanagementsystem/ProjectService.svc/surveys/' + $scope.id).success(function(data) {
      $scope.people = data;
      $scope.showAnsw = data.complete_ask;
      if($scope.showAnsw == true) {
        console.log(1);
        $http.get('http://localhost:57655/QuestionManagementSystem/QuestionService.svc/projects/' + $scope.p_id + '/answers/').success(function (data) {
          $scope.allAnswers = data;
        });
      }
    });


    $scope.id_current_question = 0;

    $scope.questions = [];
    updateQuestions();
    function updateQuestions() {
      $http.get('http://localhost:57655/QuestionManagementSystem/QuestionService.svc/projects/' + $scope.p_id + '/questions/').success(function (data) {
        $scope.questions = data;
      });
    }

    $scope.change_current_id = function (cur_id) {
      $scope.id_current_question = cur_id;
      console.log($scope.id_current_question);
    }

    $scope.add_new_variant = function() {
      console.log($scope.new_variant);
      var variant = {};
      variant.text = $scope.new_variant;
      variant.question_id = $scope.id_current_question;
      console.log(variant);
      console.log($scope.p_id);
      $http.post('http://localhost:57655/QuestionManagementSystem/QuestionService.svc/projects/' + $scope.p_id + '/questions/' + $scope.id_current_question + '/variants/add', variant).success(function (data) {
        if(data == true) {
          $scope.questions[$scope.id_current_question - 1].variantList.push(variant);
        } else {
          alert("Some mistakes...");
        }
      });
      //$scope.questions.variants.push(variant);
    }


    //questionsы adding

    $scope.add_question = function () {
      var question = {};
      question.project_id = $scope.p_id;
      question.text = $scope.new_quest;
      console.log(question);
      $http.post('http://localhost:57655/QuestionManagementSystem/QuestionService.svc/projects/' + $scope.p_id + '/questions/add/', question).success(function(data) {
        console.log(data);
        $scope.questions.push(question);
      });
    }



    $scope.checkboxModel = {
      value1 : true
    };
    var answers = [];
    answers.push({"survey_id": 0})
    $scope.toggleselection= function (q_id, v_id) {
      var answer = {};
      answer.survey_id = parseInt($scope.id, 10);
      answer.variant_id = v_id;
      answer.quest_id = q_id;
      answer.project_id = $scope.p_id;
      var buf = false;
      for (var i = 0; i < answers.length; i++) {
        if (answers[i].quest_id == q_id && answers[i].variant_id == v_id) {
          answers.splice(i, 1);
          buf = true;
        }
      }
      if(buf == false)
        answers.push(answer);
      console.log(answers);
    }
    $scope.save_answers = function () {
      console.log(answers);
      answers.splice(0, 1);
      $http.post('http://localhost:57655/QuestionManagementSystem/QuestionService.svc/projects/' + $scope.p_id + '/surveys/' + $scope.id, answers).success(function (data) {
        console.log(data);
      })
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
