/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/
document.querySelector('.dice').style.display = 'none';
document.querySelector('#score-0').textContent = 0;
document.querySelector('#score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;

let scores, roundScore, activePlayer;
let diceDOM = document.querySelector('.dice');
scores = [0, 0];
roundScore = 0;
activePlayer = 0;

function resetTurn() {
    activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    diceDOM.style.display = 'none';
}


document.querySelector('.btn-roll').addEventListener('click', ()=>{
    //Generate a random number once the button is clicked.
    var dice = Math.floor(Math.random() * 6) + 1;

    //Display the result
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    //Update the round score IF the rolled number was not 1
    if ( dice !== 1) {
        //Add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
        
    }else {
        //Next player
        resetTurn();
    }
});

document.querySelector('.btn-hold').addEventListener('click', ()=> {
    scores[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    resetTurn();
    
})