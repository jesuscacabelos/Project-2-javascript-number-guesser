let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
    return Math.floor(Math.random()*9);
  }
  
  function compareGuesses(userGuess, computerGuess, target){
    checkNumber(userGuess);
    if(getAbsoluteDistance(userGuess, target) <= getAbsoluteDistance(computerGuess, target)){
      return true;
    }else{
      return false;
    }
  }
  
  function updateScore(winner){
    if(winner === "human"){
      humanScore++;
    }else{
      computerScore++;
    }
  }
  
  function advanceRound(){
    currentRoundNumber++;
  }
  
  function getAbsoluteDistance(userGuess, target){
    return Math.abs(userGuess-target);
  }
  
  function checkNumber(userGuess){
    
    if (userGuess < 0 || userGuess > 9){
      alert("The number is out of range");
    }
  }
