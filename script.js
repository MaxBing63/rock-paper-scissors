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

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < randomIntFromInterval(3, 10); i++) {
        let result = playRound(computerPlay(), prompt('Enter Your Choice'));
        if(result.charAt(4) === 'W') {
            playerScore++;
            console.log(result);
        }else if(result.charAt(4) === 'L') {
            computerScore++;
            console.log(result);
        }else{
            console.log(result);
        }
    }
    if(playerScore === computerScore) {
        console.log('It\'s a tie, not too bad');
    }else if(playerScore > computerScore) {
        console.log('You Won! Congrats.'); 
    }else {
        console.log('You Lost! better luck next time.')
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(playRound(button.textContent, computerPlay()));
    });
});