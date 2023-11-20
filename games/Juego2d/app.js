const canvas = document.getElementById("game-canvas");
canvas.width = 800;
canvas.height = 400;
const ctx = canvas.getContext("2d");
const character = {
    x: 50,
    y: 0,
    width: 50,
    height: 50,
    xVelocity: 0,
    yVelocity: 0,
    jumping: false
};
const enemy = {
    x: 0,
    y: 0,
    width: 30,
    height: 30
  };


document.addEventListener("keydown", event => {
    if (event.key === "ArrowLeft") {
      character.xVelocity = -5; // move left
    } else if (event.key === "ArrowRight") {
      character.xVelocity = 5; // move right
    } else if (event.key === "ArrowUp" && !character.jumping) {
      character.yVelocity = -10; // jump
      character.jumping = true;
    }
});
  
document.addEventListener("keyup", event => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      character.xVelocity = 0; // stop horizontal movement
    }
});
//Copy code
function update() {
  // Update character position
  character.x += character.xVelocity;
  character.y += character.yVelocity;

  // Apply gravity
  character.yVelocity += 0.5;

  // Check for collisions
  if (character.y > canvas.height - character.height) {
    character.y = canvas.height - character.height;
    character.yVelocity = 0;
    character.jumping = false;
  }

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw character
  ctx.fillRect(character.x, character.y, character.width, character.height);

  // Call update() again on the next frame
  requestAnimationFrame(update);
}

// Start the game loop
update();

function generateRandomPosition() {
    const maxX = canvas.width - enemy.width; // maximum x-position within the canvas
    const maxY = canvas.height - enemy.height; // maximum y-position within the canvas
    enemy.x = Math.random() * maxX;
    enemy.y = Math.random() * maxY;
}

function spawnEnemy() {
    generateRandomPosition();
  
    // Draw the enemy on the canvas
    ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
}
  
// Call spawnEnemy() every 2 seconds (2000 milliseconds)
setInterval(spawnEnemy, 2000);
