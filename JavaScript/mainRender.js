//call all renders from classes here
var ctx = document.getElementById("canvas").getContext("2d");
function render(){
    let canvas = new Image();
    canvas.src = "./src/background.png";
    ctx.drawImage(canvas, 0, 0);
    arr.draw(ctx);
    
    for(let ball of balls)
    {
        ball.draw(ctx);
    }

    hero.draw(ctx);
    score();

    if(hero.isHit){
        ctx.font = "70px serif";
        ctx.fillText("En snebold fik dig!", 180, 280);
        ctx.font = "30px serif";
        ctx.fillText("(Klik for at genstarte!)", 250, 340);
    }

    if(victory){
        let freddie = new Image();
        freddie.src = './src/Victory338x450.png';
        ctx.font = "120px serif";
        ctx.fillStyle = 'white';
        ctx.fillText('JULEN ER', 70, 280, 300);
        ctx.fillText('REDDIT', 50, 370, 350);
        ctx.drawImage(freddie, 400, 0, 370, 600);

    }
    if(IsGameOver){
        ctx.font ="125px serif";
        ctx.fillText("Oh, oh!", 230, 280);
        ctx.font ="70px serif";
        ctx.fillText("Ikke mere liv!", 250, 340);
    }
}
