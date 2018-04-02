
$(document).ready(function () {
    // $(".questionContainer").hide();
    // var timer = 0;
    // var inAnswerChosen = "";
    // var isVisible = "";
    // var check1 = function () {
    //     $("#check1").val($(this).is(':checked'));
    // }


    var questions = [{

        question: "Who is the only team to play in EVERY World Cup?",
        answerList: ["Brazil", "Germany", "France", "Portugal"],
        correctAnswer: 1,
    },
    {
        question: "Which player holds the record for most goals scored in FIFA World Cup play with 16?",
        answerList: ["Gerd Muller (West Germany)", "Pele (Brazil)", "Renaldo (Brazil)", "Miroslav Klose (Germany)"],
        correctAnswer: 4,
    },
    {

        question: "Which is the smallest country in terms of population to ever qualify for the World Cup?",
        answerList: ["Costa Rica", "iceland", "Paraguay", "Slovenia"],
        correctAnswer: 1,
    }];

    var gifArray = ['ques1', 'ques2', 'ques3'];
    var currentQuestion;
    var correct;
    var incorrect;
    var unanswered;
    var seconds;
    var time;
    var answered;
    var userSelect;

    var userMessages = {
        correct: "Yes that is correct!!!!",
        incorrect: "Sorry but that is incorrect",
        endTime: "You are out of time",
        finished: "Way to go!  Lets see how you did."
    }

    $('#startBtn').on('click', function () {
        $(this).hide();
        newGame();
    });
    $('#startOverBtn').on('click', function () {
        $(this).hide();
        newGame();
    });

    function newGame() {
        $('#finished').empty();
        $('#correct').empty();
        $('#incorrect').empty();
        $('#unanswered').empty();
        currentQuestion = 0;
        correct = 0;
        incorrect = 0;
        unanswered = 0;
        newQuestion();
    }

    function newQuestion() {
        $('#message').empty();
        $('#correct').empty();
        $('#gif').empty();
        answered = true;

        $('#currentQuestion').html('Question #' + (currentQuestion + 1) + '/' + questions.length);
        $('.question').html('<h2>' + triviaQuestions[currentQuestion].question + '</h2>');
        for (var i = 0; i < 4; i++) {
            var choices = $('<div>');
            choices.text(questions[currentQuestion].answerList[i]);
            choices.attr({ 'data-index': i });
            choices.addClass('thisChoice');
            $('.answerList').append(choices);
        }
        countdown();
        $('.thisChoice').on('click', function () {
            userGuess = $(this).data('index');
            clearInterval(time);
            answerPage();
        });
    }
    function countdown() {
        seconds = 15;
        $('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
        answered = true;
        time = setInterval(showCountdown, 1000);
    }
    function showCountdown() {
        seconds--;
        $('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
        if (seconds < 1) {
            clearInterval(time);
            answered = false;
            answerPage();
        }
    }
    function answerPage() {
        $('#currentQuestion').empty();
        $('.thisChoice').empty();
        $('.question').empty();

        var rightAnswerText = questions[currentQuestion].answerList[questions[currentQuestion].answer];
        var rightAnswerIndex = questions[currentQuestion].answer;
        $('#gif').html('<img src - "assets/images/' + gifArray[currentQuestion] + '.gif" width = "400px">');

        if ((userGuess == rightAnswerIndex) && (answered == true)) {
            correctAnswer++;
            $('#message').html(messages.incorrect);
            $('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
        } else if ((userGuess != rightAnswerIndex) && (answered == true)) {
            incorrectAnswer++;
            $('#message').html(messages.incorrect);
            $('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
        }
        else {
            unanswered++;
            $('#message').html(messages.incorrect);
            $('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
        }
        if (currentQuestion == (questions.length - 1)) {
            setTimeout(scoreboard, 5000)
        } else {
            currentQuestion++;
            setTimeout(newQuestion, 5000);
        }
    }

    function scoreboard() {
        $('#timeLeft').empty();
        $('#message').empty();
        $('#correctAnswer').empty();
        $('#gif').empty();

        $('#finalMessage').html(messages.finished);
        $('#correctAnswers').html("Correct Answers: " + correctAnswer);
        $('#incorrectAnswers').html("Incorrect Answers: " + incorrectAnswer);
        $('#unanswered').html("Unanswered: " + unanswered);
        $('#startOverBtn').addClass('reset');
        $('#startOverBtn').show();
        $('#startOverBtn').html('Start Over?');
    }
});

// for (i = 0; i < questionList.length; i++) {
//     console.log(i);
//     var iterate = i;
//     var array = ("ques" + (iterate + 1));
//     var iterateQuestion = ques1.question;
//     console.log(iterateQuestion);
//     var iterateAnswer1 = ques1.answer1;
//     console.log(iterateAnswer1);
//     var iterateAnswer2 = ques1.answer2;
//     console.log(iterateAnswer2);
//     var iterateAnswer3 = ques1.answer3;
//     console.log(iterateAnswer3);
//     var iterateAnswer4 = ques1.answer4;
//     console.log(iterateAnswer4);
//     var iterateCorrect = ques1.correctAnswer;
//     console.log(iterateCorrect);
//     // console.log(iterateConditioner.correctAnswer);

// };

// function newGame () {
//     $('#finalMessage').empty();
// }

// $('.start').click(
//     function () {
//         $(".containerContent").hide();
//         $(".questionContainer").show();

//         $("#question").html(iterateQuestion);
//         $(".answer1").html(iterateAnswer1);
//         $(".answer2").html(iterateAnswer2);
//         $(".answer3").html(iterateAnswer3);
//         $(".answer4").html(iterateAnswer4);
//         console.log(iterateCorrect);

//     });

// $('.clear').click(
//     function () {
//         $('input[type="checkbox"]').prop('checked', false);
//         userGuess = 0;
//     });
// var currentQuestion = 0;
// var correctAnswer = 0;
// var userGuess = 0;
// var correct = 0;
// var incorrect = 0;
// var un

// $('#correct').text(correct);
// $('#incorrect').text(incorrect);

// function fyes() {
//     alert("Correct!!!!");
//     correct++;
//     $('#correct').text(correct);

// }
// function fno() {
//     alert("Not so much....Better luck next time");
//     incorrect++;
//     $('#incorrect').text(incorrect);
// }


// $('#check1').change(function () {
//     if (this.checked) {
//         $('input[type="checkbox"]').not(this).prop('checked', false);
//         var selection1 = ("1");
//         console.log(1);
//     }
// });
// $('#check2').change(function () {
//     if (this.checked) {
//         $('input[type="checkbox"]').not(this).prop('checked', false);
//         var selection2 = ("2");
//         console.log(2);
//     }
// });
// $('#check3').change(function () {
//     if (this.checked) {
//         $('input[type="checkbox"]').not(this).prop('checked', false);
//         var selection3 = ("3");
//         console.log(3);
//     }
// });
// $('#check4').change(function () {
//     if (this.checked) {
//         $('input[type="checkbox"]').not(this).prop('checked', false);
//         var selection4 = ("4");
//         console.log(4);
//     }
// });


// $('.submit').click(
//     function () {
//         console.log(iterateCorrect);
//         userGuess = userGuess + 1;
//         if (userGuess == iterateCorrect) {
//             correct++;
//             $('#correct').text(correct);
//             alert("Correct!!!!");
//         }
//         else {

//             incorrect++;
//             $('#incorrect').text(incorrect);
//             alert("mmmh....Not so much!!!");
//         }
//     });


