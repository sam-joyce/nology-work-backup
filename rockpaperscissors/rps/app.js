// create the player and the computer moves as variables
// 1. Get the player move
    // - prompt, user inputs their move in the browser
// 2. Get the computer move
    // - use a random number to select a move from an array
// 3. Check the result using both moves
    // if the moves are the same, the result is a draw
    // paper beats rock, rock beats scissors, scissors beats paper
    // player wins, computers wins or a draw are the options
// 4. Display the result
    // - alert!
// 5. Reset the game (bonus)
    // Ask the user if they want to play again
// EXTENSION:
    // Display the scores to the user after the round
    // Make the game best of 5
const getPlayerChoice = () => {
    if (playerPrompt == 'r') {
        return 'rock';
    } else if (playerPrompt == 'p') {
        return 'paper';
    } else if (playerPrompt == 's') {
        return 'scissors';
    } else {
        return 'not valid choice, please try again.';
    }
}
const theGame = () => {
    let playerScore = 0;
    let computerScore = 0;
    const playerPrompt = prompt('pick r,p,s');
    const options = ['rock', 'paper', 'scissors'];
    const playerChoice = getPlayerChoice();
    const randomNumber = Math.floor(Math.random()*options.length);
    const computerChoice = options[randomNumber];
    // alert(playerChoice, computerChoice);
        if (playerChoice === computerChoice) {
            alert("It's a Draw. Try Again.");
        } else if ((playerChoice === 'rock') && (computerChoice === 'paper') || (playerChoice === 'paper') && (computerChoice === 'scissors') || (playerChoice === 'scissors') && (computerChoice === 'rock')) {
            alert('You Lose. Better Luck Next Time.');
            alert(playerScore + ' : ' + computerScore++);
        } else {
            alert('You Win. Well Done, you won a game that requires ZERO skill.');
            alert(playerScore++ + ' : ' + computerScore);
        }

    const playAgain = prompt('Do you want to play again? (y/n)');
    if (playAgain == 'y') {
        return theGame();
    }
}
theGame();