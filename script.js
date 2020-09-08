$(document).ready(function () {
    var questions = ["question 1", "question 2", "question 3", "question 4", "question 5"];
    var aAnswers = ["A", "A", "A", "A", "A"];
    var bAnswers = ["B", "B", "B", "B", "B"];
    var cAnswers = ["C", "C", "C", "C", "C"];
    var dAnswers = ["D", "D", "D", "D", "D"];
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
