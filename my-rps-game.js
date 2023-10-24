let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
}

updatingTheScores(

)
let computerMove = '';

function pickingComputerMove() {
  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  }

  else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  }

  else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }
  
}

function decidingResult(playerMove) {

  let result = '';

  if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose.';
    } else if (computerMove === 'scissors') {
      result = 'You win.';
    }
  }

  else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else if (computerMove === 'scissors') {
      result = 'You lose.';
    }
  }
  else if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose.';
    } else if (computerMove === 'paper') {
      result = 'You win.';
    } else if (computerMove === 'scissors') {
      result = 'Tie.';
    }
  }
  if (result === 'You win.') {score.wins += 1}

  else if (result === 'You lose.') {score.losses += 1}

  else if (result === 'Tie.') {score.ties += 1}

  localStorage.setItem('score', JSON.stringify(score))

  updatingTheScores()

  document.querySelector('.d-result')
    .innerHTML = `${result}`

  document.querySelector('.who-played-what')
  .innerHTML = `You  <img src="${playerMove}-emoji.png" width = "50px">
  <img src="${computerMove}-emoji.png"
  width = "50px">
  Computer`
}

function updatingTheScores() {

document.querySelector('.display-results')
.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`

}