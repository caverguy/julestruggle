

function score() {
    
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.font = "30px serif";
    ctx.fillStyle = "#190000";
    ctx.fillText(`SCORE: ${points}` , 10 , 30)
}