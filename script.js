let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    let num=Math.floor(Math.random() * 10);
    return num;
};

function compareGuesses(currentHumanGuess, computerGuess, target){
    let computerAbs = Math.abs(target - computerGuess);
    let humanAbs = Math.abs(target - currentHumanGuess);
    if (computerAbs === humanAbs) {
        return true;
    } else if (computerAbs > humanAbs) {
        return true;
    } else if (computerAbs < humanAbs) {
        return false;
    }
}

function updateScore(winner) {
    if (winner === 'human') {
        humanScore += 1;
    } else if (winner === 'computer') {
        computerScore += 1;
    }
}


function advanceRound(){
    if (nextRoundButton.clicked=true)
        currentRoundNumber += 1;
}