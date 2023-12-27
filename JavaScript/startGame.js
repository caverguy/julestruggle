var IsGameOver=false;
function start() {

    if(!IsGameOver && !victory) {
        update();
    }
    render();
    
    requestAnimationFrame(start);
    score();

}
var hero = new Hero(5);
var ball = new Ball(50, 200, 10, 1);
var balls = [];
balls.push(ball);
var arr = new Arrow();
var continueGame = false;
var victory = false;
var points=0;
start();
