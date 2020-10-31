var gamePattern=[];
var flag=false;
var level=-0
var i=0;
var userClickedPattern=[];
    
    var buttonColours=["red","blue","green","yellow"];
    document.addEventListener("keypress",start);
function start()
{
    if(flag===false)
    {flag=true;
        level++;
        $("#level-title").text("level "+level);
        nextSequence();
    }

}

function nextSequence()
{
    
    $("#level-title").text("level "+level);
    var randomNumber=Math.round(Math.random()*3);
    randomChosencolour=buttonColours[randomNumber];
    gamePattern.push(randomChosencolour);
    $("#"+randomChosencolour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosencolour);
    level++;
    
   
}
$(".btn").click(function(){
    userClickedPattern.push(this.id);
    playSound(this.id);
    animatePress(this.id);
    checkAnswer(userClickedPattern.length-1);
});
function checkAnswer(current)
{
    if(gamePattern[current]!=userClickedPattern[current])
    {
        $("body").addClass("game-over");
        playSound("wrong");
        setTimeout(() => {
            $("body").removeClass("game-over");
            
        }, 500);
  gamePattern=[];
     userClickedPattern=[];
     flag=false;
     level=0;
     $("#level-title").text("Press A key to start");
return;
}
if(gamePattern.length===userClickedPattern.length)
{  userClickedPattern=[];
    setTimeout(() => {
        nextSequence();
        
    }, 1000);
}
}


    // else{playSound("sounds/wrong.mp3");
    
    //     $(".container").addClass("game-over");
    //     setTimeout(function(){
    //         $(".container").removeClass("game-over");},500);
    //     $("#level-title").text("Press A key to start");
    //     i=gamePattern.length;
    //     gamePattern=[];
    
        

    // }



// nextSequence();

   
   

function playSound(name)
{
    var audio=new Audio("sounds/"+name+".mp3");
    audio.play();
}
function animatePress(color)
{
    $("#"+color).addClass("pressed");
    setTimeout(function(){
        $("#"+color).removeClass("pressed");
    },100);

}
