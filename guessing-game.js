function guessingGame() {
    const ANSWER = Math.floor(Math.random() * 100);
    // const ANSWER = 70;
    let isOver = false;
    let count = 0;

    return function guess(number) {
        if(isOver) return "The game is over, you already won!";
        count++;
        if(number < ANSWER) return `${number} is too low!`;
        else if(number > ANSWER) return `${number} is too high!`;
        else {
            isOver = true;
            const guess = count === 1 ? 'guess' : 'guesses';
            return `You win! You found ${ANSWER} in ${count} ${guess}.`;
        }
    }
}

let game = guessingGame();
console.log(game(50)); // "50 is too low!"
console.log(game(90)); // "90 is too high!"
console.log(game(70)); // "You win! You found 70 in 3 guesses."
console.log(game(70)); // "The game is over, you already won!"

module.exports = { guessingGame };
