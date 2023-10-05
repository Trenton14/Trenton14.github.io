/* global $, sessionStorage*/



////////////////////////////////////////////////////////////////////////////////

///////////////////////// VARIABLE DECLARATIONS ////////////////////////////////

////////////////////////////////////////////////////////////////////////////////



// HTML jQuery Objects

var board = $("#board");

var scoreElement = $("#score");

var highScoreElement = $("#highScore");



// TODO 4a: Create the snake, apple and score variables

// Game Variables

var snake = {};

var apple = {};

var score = 0;

// Constant Variables

var ROWS = 20;

var COLUMNS = 20;

var SQUARE_SIZE = 20;

var KEY = {

  LEFT: 37,

  UP: 38,

  RIGHT: 39,

  DOWN: 40,

};



// interval variable required for stopping the update function when the game ends

var updateInterval;



// variable to keep track of the key (keycode) last pressed by the user

var activeKey;



////////////////////////////////////////////////////////////////////////////////

////////////////////////////// GAME SETUP //////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////



// TODO: turn on keyboard inputs

$("body").on("keydown", handleKeyDown);



// start the game

init();



function init() {

  // TODO 4b-2: initialize the apple

   snake.body = [];

   makeApple()

  // TODO 4c-2: initialize the snake

 

 // make the first snakeSquare and set it as the head

  makeSnakeSquare(10, 10);

  snake.head = snake.body[0];

  // TODO 5a: Initialize the interval

  // start update interval

  updateInterval = setInterval(update, 100);

}



////////////////////////////////////////////////////////////////////////////////

///////////////////////// PROGRAM FUNCTIONS ////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////



/*

 * On each update tick update each bubble's position and check for

 * collisions with the walls.

 */

function update() {

  // TODO 5b: Fill in the update function's code block

  moveSnake();



  if (hasHitWall() || hasCollidedWithSnake()) {

    endGame();

  }



  if (hasCollidedWithApple()) {

    handleAppleCollision();

  }

}



function checkForNewDirection(event) {

  /*

  TODO 6b: Update snake.head.direction based on the value of activeKey.*/



  /*BONUS: Only allow direction changes to take place if the new direction is

  perpendicular to the current direction

  */



  if (activeKey === KEY.LEFT) {

    snake.head.direction = "left";

  } else if (activeKey === KEY.RIGHT) {

    snake.head