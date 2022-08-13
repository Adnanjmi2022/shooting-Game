(function initialize() {
    // initialize variables
  
    const defaultState = {
      player1Health: 100,
      player2Health: 100,
      roundCounter: 0,
      player1Score: 0,
      player2Score: 0
    }
  
    let state = { ...defaultState };
  
    const starButton = document.getElementById("StartGame");
    const shootButtoon = document.getElementById("ShootBtn");
    const resetButton = document.getElementById("resetBtn");
  
    const p1FireScore = document.getElementById("p1FireScore");
    const p2FireScore = document.getElementById("p2FireScore");
  
    const player1ScoreDisplayBox = document.getElementById("grid-item-4");
    const player2ScoreDisplayBox = document.getElementById("grid-item-8");
    const finalWinner = document.getElementById("grid-item-9");
  
    // shoot function 
    function shootOpponent() {
      let player1Fire = Math.floor(Math.random() * 5);
      let player2Fire = Math.floor(Math.random() * 5);
  
      p1FireScore.innerHTML = player1Fire;
      p2FireScore.innerHTML = player2Fire;
  
      state.player1Health = state.player1Health - player2Fire;
      state.player2Health = state.player2Health - player1Fire;
  
      state.roundCounter++;
  
      if (state.player1Health == 0) {
        finalWinner.innerHTML = "Player2 won the match!";
  
      }
      if (state.player2Health == 0) {
        finalWinner.innerHTML = "Player1 won the match!";
      }
  
      if (state.roundCounter == 5) {
        shootButtoon.disabled = true;
        shootButtoon.innerHTML = "Game Over";
        shootButtoon.classList.add('disabledButton')
      }
  
      if (player1Fire > player2Fire) {
        state.player1Score = state.player1Score + 1;
      }
  
      if (player2Fire > player1Fire) {
        state.player2Score = state.player2Score + 1;
      }
  
      player1ScoreDisplayBox.innerHTML = state.player1Score;
      player2ScoreDisplayBox.innerHTML = state.player2Score;
  
      if (state.player1Score == 3) {
        gameOver("Player1 won the match!")
      }
  
      if (state.player2Score == 3) {
        gameOver("Player2 won the match!")
      }
  
      if (state.roundCounter == 5) {
        if (state.player1Score > state.player2Score) {
          gameOver("Player1 won the match!")
        }
  
        if (state.player2Score > state.player1Score) {
          gameOver("Player2 won the match!")
        }
  
        if (state.player2Score == state.player1Score) {
          gameOver("Match Draw")
        }
      }
    }
  
    function gameOver(playercomment) {
      finalWinner.innerHTML = playercomment;
      shootButtoon.disabled = true;
      shootButtoon.innerHTML = "Game Over";
      shootButtoon.classList.remove('shootActionColor')
    }
  
    // start game function
    function startGame() {
      shootButtoon.disabled = false;
      starButton.disabled = true;
      shootButtoon.classList.add('shootActionColor')
      starButton.classList.add('disabledButton')
    }
  
    //Reset game Function
    function resetGame() {
      p1FireScore.innerHTML = '';
      p2FireScore.innerHTML = '';
      finalWinner.innerHTML = '';
      starButton.disabled = false;
      shootButtoon.innerHTML = "Shoot";
      player1ScoreDisplayBox.innerHTML = 0;
      player2ScoreDisplayBox.innerHTML = 0;
      starButton.classList.remove('disabledButton')
      shootButtoon.classList.remove('shootActionColor');
      state = { ...defaultState };
    }
  
  
    starButton.addEventListener("click", startGame);
    shootButtoon.addEventListener("click", shootOpponent);
    resetButton.addEventListener("click", resetGame);
  
  })()