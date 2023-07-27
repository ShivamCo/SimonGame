const buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;

console.log(userClickedPattern);
console.log(gamePattern)

var started = false;
var level = 0;

$(document).keypress(function() {
    
    if (!started) {
        
      //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
      $("h1").text("Level " + level);
      nextSequence();
      started = true;
    }
  });



function nextSequence() {

    level++

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    
    gamePattern.push(randomChosenColour);
    var ids = "#" + randomChosenColour;
    $(ids).ready(function () {
        $(ids).fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(50);
        var audio = new Audio("sounds/" + randomChosenColour + ".mp3")
    
        audio.play()
    })

    $("h1").text("Level " + level)

}





//  $(ids).ready(function(){
//      setInterval(() => {
//          $(ids).fadeIn();
//          $(ids).fadeOut();
//      },100);

//  })


// $(ids).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);



$("button").click(function () {
    
    
    var userChosenColour = $(this).attr('id');

    var audio = new Audio("sounds/" + userChosenColour + ".mp3")
    audio.play()
    
    userClickedPattern.push(String(userChosenColour))

    $(this).addClass("hoverEffect")

    setTimeout(function () {
        $("button").removeClass('hoverEffect').addClass(this.id);
    }, 100);
    checkAnswer(userClickedPattern.length - 1);

})



function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success")
        nextSequence().delay(1000)
    }

    else {
        console.log("wrong")
    }


};
