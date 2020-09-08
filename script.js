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

    $(".btn").on("click", function () {
        $("#intro").hide();
        $(".questionContainer").css("visibility", "visible")
        document.getElementById("questions").innerHTML = questions[i];
        document.querySelector(".answerA").innerHTML = aAnswers[i];
        document.querySelector(".answerB").innerHTML = bAnswers[i];
        document.querySelector(".answerC").innerHTML = cAnswers[i];
        document.querySelector(".answerD").innerHTML = dAnswers[i];
        i++;
    });
});
