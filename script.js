const character = document.getElementById('character');
const scoreEl = document.getElementById('score');
const timerEl = document.getElementById('timer');
const somPonto = document.getElementById('somPonto');
const game = document.getElementById('game');

let isJumping = false;
let score = 0;
let time = 0;
let timerInterval;
let obstacles = [];

function jump() {
  if (isJumping) return;
  isJumping = true;
  let jumpHeight = 150;
  let upInterval = setInterval(() => {
    let bottom = parseInt(window.getComputedStyle(character).bottom);
    if (bottom >= jumpHeight + 40) {
      clearInterval(upInterval);
      let downInterval = setInterval(() => {
        bottom = parseInt(window.getComputedStyle(character).bottom);
        if (bottom <= 40) {
          character.style.bottom = '30px';
          clearInterval(downInterval);
          isJumping = false;
        } else {
          character.style.bottom = bottom - 5 + 'px';
        }
      }, 20);
    } else {
      character.style.bottom = bottom + 5 + 'px';
    }
  }, 20);
}

function startGame() {
  score = 0;
  time = 0;
  scoreEl.textContent = 'Score: 0';
  timerEl.textContent = 'Tempo: 0s';
  obstacles.forEach(obs => obs.remove());
  obstacles = [];

  timerInterval = setInterval(() => {
    time++;
    timerEl.textContent = `Tempo: ${time}s`;
  }, 1000);

  spawnObstacle();
}

function spawnObstacle() {
  const obstacle = document.createElement('div');
  obstacle.classList.add('obstacle');
  obstacle.style.right = '-60px';
  game.appendChild(obstacle);
  obstacles.push(obstacle);
  moveObstacle(obstacle);

  setTimeout(spawnObstacle, Math.random() * 3000 + 1000);
}

function moveObstacle(obstacle) {
  let hasScored = false;
  let moveInterval = setInterval(() => {
    let obstacleRight = parseInt(window.getComputedStyle(obstacle).right);
    if (obstacleRight >= window.innerWidth + 60) {
      obstacle.remove();
      obstacles = obstacles.filter(obs => obs !== obstacle);
      clearInterval(moveInterval);
    } else {
      obstacle.style.right = obstacleRight + 10 + 'px';
    }

    const characterRect = character.getBoundingClientRect();
    const obstacleRect = obstacle.getBoundingClientRect();

    if (
      characterRect.right > obstacleRect.left &&
      characterRect.left < obstacleRect.right &&
      characterRect.bottom > obstacleRect.top
    ) {
      gameOver();
      clearInterval(moveInterval);
    }

    if (!hasScored && obstacleRect.right < characterRect.left) {
      score++;
      scoreEl.textContent = `Score: ${score}`;
      somPonto.play();
      hasScored = true;
    }
  }, 30);
}

function gameOver() {
  clearInterval(timerInterval);
  alert(`Game Over!\nVocê marcou ${score} ponto(s) em ${time} segundo(s).`);
  location.reload();
}

document.addEventListener('keydown', function (e) {
  if (e.code === 'Space' || e.code === 'ArrowUp') {
    jump();
  }
});

startGame();