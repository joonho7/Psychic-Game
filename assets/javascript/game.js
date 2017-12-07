var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var randomLetter='';
function generator(){
  randomLetter = letters[Math.floor(Math.random()*letters.length)];
}

generator();


var winScore = 0;

var losses = 0;

var guessSoFar = [];

var guessesLeft =13;

document.onkeyup = function(event) {

        var guess = event.key;

        if (guess === randomLetter) {
          winScore++;
          guessesLeft=13;
          guessSoFar=[];
          generator();
        }else if(guessesLeft >1){
          guessSoFar.push(guess);
          guessesLeft--;
        }else{
          guessSoFar = [];
          guessesLeft = 13;
          losses++
          generator();
        }
document.getElementById("wins").innerHTML = winScore;
document.getElementById("losses").innerHTML = losses;
document.getElementById("guessLeft").innerHTML = guessesLeft;
document.getElementById("yourGuess").innerHTML = guessSoFar;
}


