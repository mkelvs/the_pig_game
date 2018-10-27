function hideDice() {
    //hides the Dice from the middle of the screen

    diceDOM.style.display = 'none';
}

function toggleActive() {
    //Toggle player's active/inactive status

    document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');
}

function resetTurn() {
    //Next players turn, active status and current score resets

    activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    hideDice();
}

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    scoreZeroDOM.textContent = 0;
    scoreOneDOM.textContent = 0;
    currentZeroDOM.textContent = 0;
    currentOneDOM.textContent = 0;
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
};