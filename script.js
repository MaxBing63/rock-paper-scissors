function computerPlay() {
    let random = randomIntFromInterval(1, 3);
    if(random === 1) {
        return 'Rock';
    }else if(random === 2){
        return 'Paper';
    }else {
        return 'Scissors';
    }
}

//A function that returns a random number between min and max(iclusive)
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function playRound(playerSelection, computerSelection) {
    if(computerSelection === playerSelection) {
        return 'It\'s a tie'
    }else if(computerSelection === 'Rock' && playerSelection === 'Scissors') {
        return 'You Lose! Rock beats Scissors';
    }else if(computerSelection === 'Scissors' && playerSelection === 'Paper') {
        return 'You Lose! Scissors beats Paper';
    }else if(computerSelection === 'Paper' && playerSelection === 'Rock') {
        return 'You Lose! Paper beats Rock';
    }else {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
}