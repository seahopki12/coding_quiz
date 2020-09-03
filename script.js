$(document).ready(function(){
    $("#begin").on("click", function(){
        $("#intro").hide();
        $("#questionContainer").css("visibility",  "visible");
        $(".btn").on("click", function(){
            // try a for loop to call a new set of questions and answers when a previous answer is selected
            $("#questions").text("Question #2: How many days are in a year?")
            $(".a").text("300")
            $(".b").text("365")
            $(".c").text("387")
            $(".d").text("323")
            // add evaluation and here and alert if answer is right or wrong
        })
    });
    
});
