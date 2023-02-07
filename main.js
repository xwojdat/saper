function makeArray(cols, rows){
    var arr = new Array(cols);
    for (var i=0; i < arr.length; i++){
        arr[i] = new Array(rows);
    }
    return arr;
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

var grid;
var cols;
var rows;
var w = 20;

function setup(){
    createCanvas(201, 201);
    cols = floor(width / w);
    rows = floor(width / w);
    grid = makeArray(20, 20);
    for (var i=0; i<cols; i++){
        for(var j=0; j<rows; j++){
            grid[i][j] = new cell(i, j, w);
        }
    }
}

function draw(){
    background(255);
    for(var i=0; i<cols; i++){
        for(var j=0; j<rows; j++){
            grid[i][j].show();
        }
    }
}