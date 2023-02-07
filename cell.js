function cell(i, j, w){
    this.mine = true;
    this.revealed = true;
    this.i = i;
    this.j = j;
    this.x = i * w;
    this.y = j * w;
    this.w = w;
    if(random(1) < 0.5){
        this.mine = true;
    }
    else{
        this.mine = false;
    }
    this.revealed = false;
}

cell.prototype.show = function(){
    
    stroke(0);
    noFill();
    rect(this.x, this.y, this.w, this.w);
    if(this.revealed){
        if(this.mine){
            stroke(0);
            fill(127);
            ellipse(this.x + this.w * 0.5, this.y + this.w * 0.5, this.w * 0.5);
        }
        else{
            fill(200);
            rect(this.x, this.y, this.w, this.w);
        }
    }
}

cell.prototype.contains = function(x, y){
    return (x > this.x && x< this.x + this.w && y > this.y && y < this.y + this.w);
}

cell.prototype.reveal = function(x, y){
    this.revealed = true;
}