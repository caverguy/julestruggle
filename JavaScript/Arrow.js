class Arrow{
    constructor(){
        this.x = 0;
        this.y = canvas.height;
        this.liveArr = false;
        this.speed = 15;
        this.y_max = 0;
    }
    
    getX(){
        return this.x;
    }
    getY(){
        return this.y;
    }

    shoot(x,y){
        if(this.liveArr)
            return;
        this.x=x;
        this.y=y;
        this.liveArr=true;
    }
    update(){
        if(!this.liveArr){
            return;
        }

        this.y-=this.speed;
        if(this.y<this.y_max){
            this.liveArr=false;
            this.y=canvas.height;
            this.x=canvas.heigth;
        }

    }
    draw(ctx){
        if(!this.liveArr)return;

        console.log(this.x+" "+this.y);
        ctx.save();
        ctx.strokeStyle="black";

        ctx.beginPath();
        ctx.moveTo(this.x,600);
        ctx.lineTo(this.x,this.y);
        ctx.stroke();
        ctx.restore();

    }
}