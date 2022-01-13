// capitalize first letter of player selection string 
function playerSelectionCapitalized(str){
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    return capitalized;
}

const playerSelection = 'Rock';
const computerSelection = computerPlay();

// create random selection by computer
function computerPlay(){
    const array = ['Rock', 'Paper', 'Scissors'];
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

// create single playing round
function playRound (playerSelection, computerSelection){

    playerSelection = playerSelectionCapitalized(prompt('Player Selection'));
    computerSelection = computerPlay();

    // compare both players selections and return a result 
    if (playerSelection === 'Rock' && computerSelection === 'Rock'){
        console.log(`RR - playerSelection: ${playerSelection} computerSelection: ${computerSelection}`); 
        return 'It\'s a tie';       
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper'){
        console.log(`RP - playerSelection: ${playerSelection} computerSelection: ${computerSelection}`);        
        return 'Computer wins';
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors'){
        console.log(`RS - playerSelection: ${playerSelection} computerSelection: ${computerSelection}`); 
        return 'Player wins';        
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock'){
        console.log(`PR - playerSelection: ${playerSelection} computerSelection: ${computerSelection}`); 
        return 'Player wins';        
    } else if (playerSelection === 'Paper' && computerSelection === 'Paper'){
        console.log(`PP - playerSelection: ${playerSelection} computerSelection: ${computerSelection}`);
        return 'It\'s a tie';         
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors'){
        console.log(`PS - playerSelection: ${playerSelection} computerSelection: ${computerSelection}`);
        return 'Computer wins';        
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock'){
        console.log(`SR - playerSelection: ${playerSelection} computerSelection: ${computerSelection}`);
        return 'Computer wins';        
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper'){
        console.log(`SP - playerSelection: ${playerSelection} computerSelection: ${computerSelection}`);       
        return 'Player wins'; 
    } else if (playerSelection === 'Scissors' && computerSelection === 'Scissors'){
        console.log(`SS - playerSelection: ${playerSelection} computerSelection: ${computerSelection}`); 
        return 'It\'s a tie';        
    } 
}

// start and repeat to desired play round
function game() {
    let i = 1;
    let p = 0; // player score
    let c = 0; // computer score
    let t = 0; // draw

    do {
        // set result of round
        let res = playRound(); 

        switch (res) {
            // increment player score in case player wins the round
            case 'Player wins': 
                p++; 
                break;

            // increment computer score in case player wins the round
            case 'Computer wins': 
                c++; 
                break;
            // increment draw in case the round is a tie
            case 'It\'s a tie':
                t++;
                break;
        } 
        i++;
    } while (i <= 5);
        console.log('END OF GAME');

// compare scores from game and determine winner
    if (p > c) {
        return 'Player wins the game!';
    } else if (p < c) {
        return 'Computer wins the game!';
    } else if (p === c) {
        return 'It\' a tie!';
    } 
}
