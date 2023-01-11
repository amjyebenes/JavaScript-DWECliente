const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Carga las imágenes de la serpiente y la comida
const snakeBodyImage = new Image();
snakeBodyImage.src = "snake-body.jpg";
const foodImage = new Image();
foodImage.src = "food.png";

let snake = [{ x: 150, y: 150 }, { x: 140, y: 150 }, { x: 130, y: 150 }];
let dx = 10;
let dy = 0;
let foodX;
let foodY;

function draw() {
    // Borra el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibuja la comida
    ctx.drawImage(foodImage, foodX, foodY);

    // Dibuja el cuerpo de la serpiente
    for (let i = 0; i < snake.length; i++) {
        ctx.drawImage(snakeBodyImage, snake[i].x, snake[i].y);
    }

    // Mueve la serpiente
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };
    snake.unshift(head);
    const didEatFood = snake[0].x === foodX && snake[0].y === foodY;
    if (didEatFood) {
        // Genera una nueva comida
        generateFood();
    } else {
        // Elimina la última celda del cuerpo de la serpiente
        snake.pop();
    }
}

function generateFood() {
    foodX = Math.floor(Math.random() * 30) * 10;
    foodY = Math.floor(Math.random() * 30) * 10;

    // Verifica que la comida no aparezca sobre el cuerpo de la serpiente
    for (let i = 0; i < snake.length; i++) {
        if (foodX === snake[i].x && foodY === snake[i].y) {
            // Si la comida aparece sobre el cuerpo de la serpiente, genera una nueva comida
            generateFood();
        }
    }
}

function changeDirection(event) {
    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const UP_KEY = 38;
    const DOWN_KEY = 40;

    const keyPressed = event.keyCode;
    const goingUp = dy === -10;
    const goingDown = dy === 10;
    const goingRight = dx === 10;
    const goingLeft = dx === -10;

    if (keyPressed === LEFT_KEY && !goingRight) {
        dx = -10;
        dy = 0;
    }
    if (keyPressed === UP_KEY && !goingDown) {
        dx = 0;
        dy = -10;
    }
    if (keyPressed === RIGHT_KEY && !goingLeft) {
        dx = 10;
        dy = 0;
    }
    if (keyPressed === DOWN_KEY && !goingUp) {
        dx = 0;
        dy = 10;
    }
}

document.addEventListener("keydown", changeDirection);

generateFood();
setInterval(draw, 100);
