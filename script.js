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