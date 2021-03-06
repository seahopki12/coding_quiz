$(document).ready(function () {
    var questions = [
        "Question 1: Which tag should you use to denote the use of javascript in an HTML file?",
        "Question 2: What keyword is used to declare a variable?",
        "Question 3: What does the ++ symbol indicate?",
        "Question 4: What two values represent a JS Boolean?",
        "Question 5: What number represents the first element in an array?"
    ];
    var aAnswers = ["script", "vars", "increment by one", "1 and 2", "1"];
    var bAnswers = ["html", "vari", "add twice", "True and False", "10"];
    var cAnswers = ["body", "var", "multiply by", "Hot and Cold", "2"];
    var dAnswers = ["head", "vare", "find sum of", "North and South", "0"];
    var i = 0;
    var correctAnswers = ["script", "var", "increment by one", "True and False", "0"];
    var timeEl = document.getElementById("timer");
    var secondsLeft = 60;
    

    

    $("#begin").on("click", function () {
        $("#intro").hide();
        $(".questionContainer").css("visibility", "visible");
        var timerInterval = setInterval(function () {
            secondsLeft--;
            timeEl.textContent = "Timer: " + secondsLeft;
            if (secondsLeft <= 0) {
                clearInterval(timerInterval);
                $(".questionContainer").hide();
                $("#initialsContainer").css("visibility", "visible");
            };
            if (i > questions.length - 2) {
                $(".btn").on("click", function () {
                    clearInterval(timerInterval);
                })
            }
        }, 1000);
        
        

    });

    $(".answer").on("click", function () {
        var buttonClick = $(this).text();
        if (buttonClick === correctAnswers[i]) {
            $(".alert-danger").hide();
            $(".alert-success").show();
            setTimeout(function () {
                $(".alert-success").hide();
            }, 2000);
        } else {
            $(".alert-success").hide();
            $(".alert-danger").show();
            setTimeout(function () {
                $(".alert-danger").hide();
            }, 2000);
        }
        i++;
        if (i > questions.length - 2) {
            $(".btn").on("click", function () {
                $(".questionContainer").hide();
                $("#initialsContainer").css("visibility", "visible");
            })
        }
        document.getElementById("questions").innerHTML = questions[i];
        document.getElementById("answerA").innerHTML = aAnswers[i];
        document.getElementById("answerB").innerHTML = bAnswers[i];
        document.getElementById("answerC").innerHTML = cAnswers[i];
        document.getElementById("answerD").innerHTML = dAnswers[i];
    });



    $("#submit").on("click", function () {
        $("#initialsContainer").hide();
        $("#highscores").css("visibility", "visible");
        return false;
    })

});
