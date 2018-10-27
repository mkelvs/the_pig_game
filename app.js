/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/
let scores, roundScore, activePlayer, gamePlay;

const diceDOM = document.querySelector('.dice');
const currentZeroDOM = document.getElementById('current-0');
const currentOneDOM = document.getElementById('current-1');
const scoreZeroDOM = document.querySelector('#score-0');
const scoreOneDOM = document.querySelector('#score-1');

init();
hideDice();

document.querySelector('.btn-roll').addEventListener('click', ()=>{
    if(gamePlay) {
        //Generate a random number once the button is clicked.
        var dice = Math.floor(Math.random() * 6) + 1;

        //Display the result
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        //Update the round score IF the rolled number was not 1
        if (dice !== 1) {
            //Add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;

        } else {
            //Next player
            resetTurn();
        }
    };
    
});

document.querySelector('.btn-hold').addEventListener('click', ()=> {
    if (gamePlay){
        scores[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        if (scores[activePlayer] >= 10) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            hideDice();
            toggleActive();
            gamePlay = false;
        } else {
            resetTurn();
        }

    }
    
    
    
});

document.querySelector('.btn-new').addEventListener('click', init);