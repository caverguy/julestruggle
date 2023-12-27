//call all update functions from classes here
function update(){
    if(hero.isHit == false && victory == false){
        arr.update();
        hero.update();
        console.log(balls.length);
        //let tempArr = Array.from(balls);

        for (let i = 0; i < balls.length; i++) {
            balls[i].update(arr);

            if (balls[i].isHit) {
                balls[i].splitToBalls(balls);
                balls.splice(i,1);

            }
            console.log(i);
            console.log(balls);

            if(balls.length == 0 || balls.length == undefined){
                victory = true;
                console.log('victory');
                audo.pause();
            }   
        }
    } else {
        window.addEventListener('click', function () {
            continueGame = true;
        });
        if (continueGame && !IsGameOver) {
            let currentLife = hero.life - 1;
            hero = new Hero(currentLife);
            hero.isHit = false;
            ball = new Ball(50, 200, 10, 1);
            balls = [];
            balls.push(ball);
            arr = new Arrow();
            continueGame = false;
            points = 0;
        }
    }
}