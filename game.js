var gamePattern = [];
var userClickedPattern = [];
var buttonColors = ["red","blue","green","yellow"];
var level = 0;
function nextSequence(){
    userClickedPattern = [];
    var no;
    no = Math.random()*4;
    no = Math.floor(no);
    var randomChosenColour = buttonColors[no];
    console.log(randomChosenColour);
    gamePattern.push(randomChosenColour);
    animation(randomChosenColour);
    level++;
    $("h1").text("level "+level);
}
$(".btn").click(function (){
    var userChosenColor = $(this).attr("id");
    
    console.log(userChosenColor);
    userClickedPattern.push(userChosenColor);
    animation(userChosenColor);
    checkAnswer(userClickedPattern.lastIndexOf(userChosenColor));
});
var times = 0;
$(document).keypress(function(){
    times++;
    if(times === 1)
        nextSequence();    
});

function animation(color) {
    var audio = new Audio("public/sounds\\"+color+".mp3");
    audio.play();
    $("#"+color).fadeOut(100).fadeIn(100);
    $("#"+color).addClass("pressed");
    setTimeout(function () {
        $("#" + color).removeClass("pressed");
      }, 100);   
}

function checkAnswer(level) {
    var i=0,j,k;
    if(userClickedPattern[level] !== gamePattern[level]){
        
        $("h1").text("Game Over, Press Any Key to Restart");
        $("body").addClass("game-over");
        var end = new Audio("public/sounds\\wrong.mp3");
        end.play();
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200); 
        startOver();
    }
    else{
        if (userClickedPattern.length === gamePattern.length) 
        {
            setTimeout(function () {
                nextSequence();
            }, 1000);   
        }
    }
    
}

function startOver() {
    level = 0;
    gamePattern =[];
    userClickedPattern = [];
    times = 0;
   // nextSequence();
    
}

