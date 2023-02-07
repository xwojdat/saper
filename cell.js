function cell(i, j, w){
    this.mine = true;
    this.revealed = true;
    this.i = i;
    this.j = j;
    this.x = i * w;
    this.y = j * w;
    this.w = w;
    this.neighborCount = 0;
    this.mine = false;
    this.revealed = true;
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
            if(this.neighborCount > 0){
                textAlign(CENTER);
                fill(0);
                text(this.neighborCount, this.x + this.w * 0.5, this.y + this.w-5);
            }
        }
    }
}

cell.prototype.countMines = function(){
    if(this.mine){
        return -1;
    }

    var total = 0;

    for (var xoff = -1; xoff <= 1; xoff++){
        for (var yoff = -1; yoff <= 1; yoff++){
            var i = this.i + xoff;
            var j = this.j + yoff;
            if(i > -1 && i < cols && j > -1 && j < rows){
                var neighbor = grid[i] [j];
                if(neighbor.mine){
                    total++;
                }
            }
        }
    }
    this.neighborCount = total;
}

cell.prototype.contains = function(x, y){
    return (x > this.x && x< this.x + this.w && y > this.y && y < this.y + this.w);
}

cell.prototype.reveal = function(x, y){
    this.revealed = true;
}