const rock_div = document.getElementById("rock");
const paper_div= document.getElementById("paper");
const scissors_div= document.getElementById("scissors");

let playerScore = 0;
let computerScore = 0;

const playerScoreSpan = document.getElementById("player_score");
const computerScoreSpan = document.getElementById("computer_score");
const resultSpan = document.getElementById("result_text");

const yourChoice = document.getElementById("yourChoice");
const computerChoice = document.getElementById("computerChoice");

//create fn for computer to pick 
function computerPlay(){
    let arr =["rock","paper","scissors"];
    let computerPick = (Math.floor(Math.random() * 3)) ;
    return arr[computerPick];
} 
 // to check what computer picked use this -->   console.log(computerPlay());

 //create fn for wins
 function win(playerSelection, computerSelection){
    playerScore++;
    playerScoreSpan.innerHTML = playerScore;
    computerScoreSpan.innerHTML = computerScore;
    yourChoice.innerHTML = playerSelection.toUpperCase().bold();
    computerChoice.innerHTML = computerSelection.toUpperCase().bold();

    resultSpan.innerHTML =   playerSelection.toUpperCase().bold() + " beats " + computerSelection.toUpperCase().bold() + ". ' You Won ' ";
    //console.log(playerScore);
    //console.log("player wins");
}

//create fn for lost
function lose(playerSelection, computerSelection){
    computerScore++;
    playerScoreSpan.innerHTML = playerScore;
    computerScoreSpan.innerHTML = computerScore;
    yourChoice.innerHTML = playerSelection.toUpperCase().bold();
    computerChoice.innerHTML = computerSelection.toUpperCase().bold();

    resultSpan.innerHTML = computerSelection.toUpperCase().bold() + " beats " + playerSelection.toUpperCase().bold() + ". ' You Lost ' ";
    //console.log(computerScore);
    // console.log("computer wins");

}

//create fn when its a draw
function draw(playerSelection,computerSelection){
    //console.log("its a draw");
    playerScoreSpan.innerHTML = playerScore;
    computerScoreSpan.innerHTML = computerScore;
    yourChoice.innerHTML = playerSelection.toUpperCase().bold();
    computerChoice.innerHTML = computerSelection.toUpperCase().bold();

    resultSpan.innerHTML = "It's a draw.";

    }

    //create fn for the game between computer and player
function game(playerSelection){
   // console.log(" you selected " + playerSelection);
   const computerSelection = computerPlay();
  //console.log(computerSelection);
   //console.log("this is player selected " + playerSelection);
   switch( playerSelection + computerSelection){
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
         // console.log("user wins");
            win(playerSelection, computerSelection);
            break;

        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
           //console.log("computer wins");
           lose(playerSelection, computerSelection);
            break;

        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
          // console.log("its a draw");
          draw(playerSelection, computerSelection);
           break;
   }

        if(playerScore >=5 ){
          alert("Congrats!!!! You beat the Computer");
             resetGame();
        } else if (computerScore>=5){
          alert("Your butt got whopped by Computer. Computer WON");
            resetGame();
        }
}




//click fn for player selection
 function playerPlay(){
    rock_div.addEventListener("click", () => game("rock"));

    paper_div.addEventListener("click", () => game("paper"));

    scissors_div.addEventListener("click", () => game("scissors"));

    reset_div.addEventListener("click", () =>  resetAll());    
 }

playerPlay(); //in order to see what the player picked call this function

//create fn when any player reaches 5 wins and reset the game
function resetGame(){
    playerScore = 0;
    computerScore = 0;
    playerScoreSpan.innerHTML = playerScore;
    computerScoreSpan.innerHTML = computerScore;

}


 




