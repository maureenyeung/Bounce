class Bal {
    this.x;
    this.y;
    speedX;
    speedY;

    constructor(_x, _y){
        this.x = _x;
        this.y = _y;
        speedX = 3;
        speedY = -2;
    }
}
show (){
    Fill(255,0,0)
    ellipse(thi.x, thix.y, 50, 50);
}

update(){
    this.x = this.x + speedsX;
    this.y = this.y + speedsY;

    if (this.x <= 0 || this.x >= 1280){
        this.speedX = this.speedX * -1;
    }
 
    if (this.y <= 0 || this.y >= 720){
        this.speedY = this.speedY * -1;
}