const roundField = document.querySelector('.roundField');
const roundFieldSubmit = document.querySelector('.roundFieldSubmit');
const selections = document.querySelector('.selection');
const winOrLoss = document.querySelector('.winOrLoss');
const finalResult = document.querySelector('.finalResult');
const resetbtn = document.querySelector('.resetbtn');
    
let playCount = 0;
let resetButton;
let p = 0; // player score
let c = 0; // computer score
let t = 0; // draw

function playerSelectionCapitalized(str){
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    return capitalized;
}

function computerPlay(){
    const array = ['Rock', 'Paper', 'Scissors'];
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

const playerSelection = 'Rock';
const computerSelection = computerPlay();

function playRound (playerSelection, computerSelection){

    playerSelection = playerSelectionCapitalized(roundField.value);
    computerSelection = computerPlay();

    if (playerSelection === 'Rock' && computerSelection === 'Rock'){
        selections.textContent += ` ${playerSelection}-${computerSelection} `; 
        winOrLoss.textContent = 'It\'s a tie';
        finalResult.textContent = ' ';
        return winOrLoss.textContent;
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper'){
        selections.textContent += ` ${playerSelection}-${computerSelection} `; 
        winOrLoss.textContent = 'Computer wins';
        finalResult.textContent = ' ';
        return winOrLoss.textContent;
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors'){
        selections.textContent += ` ${playerSelection}-${computerSelection} `; 
        winOrLoss.textContent = 'Player wins';
        finalResult.textContent = ' ';
        return winOrLoss.textContent;
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock'){
        selections.textContent += ` ${playerSelection}-${computerSelection} `; 
        winOrLoss.textContent = 'Player wins';
        finalResult.textContent = ' ';
        return winOrLoss.textContent;
    } else if (playerSelection === 'Paper' && computerSelection === 'Paper'){
        selections.textContent += ` ${playerSelection}-${computerSelection} `; 
        winOrLoss.textContent = 'It\'s a tie';
        finalResult.textContent = ' ';
        return winOrLoss.textContent;
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors'){
        selections.textContent += ` ${playerSelection}-${computerSelection} `; 
        winOrLoss.textContent = 'Computer wins';
        finalResult.textContent = ' ';
        return winOrLoss.textContent;
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock'){
        selections.textContent += ` ${playerSelection}-${computerSelection} `; 
        winOrLoss.textContent = 'Computer wins';
        finalResult.textContent = ' ';
        return winOrLoss.textContent;
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper'){
        selections.textContent += ` ${playerSelection}-${computerSelection} `; 
        winOrLoss.textContent = 'Player wins';
        finalResult.textContent = ' ';
        return winOrLoss.textContent;
    } else if (playerSelection === 'Scissors' && computerSelection === 'Scissors'){
        selections.textContent += ` ${playerSelection}-${computerSelection} `; 
        winOrLoss.textContent = 'It\'s a tie';
        finalResult.textContent = ' ';
        return winOrLoss.textContent;
    } 
}

function setGameOver() {
    roundField.disabled = true;
    roundFieldSubmit.disabled = true;

    resetButton = document.createElement('button');
    resetButton.textContent = 'Start New Game';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    playCount = 0;

    const resetParas = document.querySelectorAll('.resultParas p');
    for (const resetPara of resetParas) {
        resetPara.textContent = '';
    }
        resetButton.parentNode.removeChild(resetButton);

        roundField.disabled = false;
        roundFieldSubmit.disabled = false;
        roundField.value = '';
        roundField.focus();
        finalResult.style.backgroundColor = '#1F2937';
    }

function game() {
    const roundFieldCheck = roundField.value;
    if (roundFieldCheck === ' ' || roundFieldCheck === '') {
        alert ('Valid selection needed');
        roundField.value = '';
        roundField.focus();
    } else {
        let result = playRound(); 
        switch (result) {
            case 'Player wins': 
                p++; 
                break;
            case 'Computer wins': 
                c++; 
                break;
            case 'It\'s a tie':
                t++;
                break;
        } 
        playCount++;
        roundField.value = '';
        roundField.focus();
        finalResult.textContent = `Number of rounds left: ${5-playCount}`
        finalResult.style.color = 'red';
        end();
    }
}
// compare scores from game and determine final result
function end(){
    if (playCount === 5 && p > c) {
        finalResult.textContent = 'Congratulations! You won!';
        finalResult.style.backgroundColor = 'green';
        finalResult.style.color = 'white';
        winOrLoss.textContent = 'END OF GAME';
        setGameOver();
    } else if (playCount === 5 && p < c) {
        finalResult.textContent = 'Sorry! Computer won!';
        finalResult.style.backgroundColor = 'blue';
        finalResult.style.color = 'white';
        winOrLoss.textContent = 'END OF GAME';
        setGameOver();
    } else if (playCount === 5 && p === c) {
        finalResult.style.backgroundColor = 'Yellow';
        finalResult.style.color = '#1F2937';
        finalResult.textContent = 'IT\'S A TIE! Please play again!!';
        winOrLoss.textContent = 'END OF GAME';
        setGameOver();
    } 
}
roundFieldSubmit.addEventListener('click', game);