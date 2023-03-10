function makeArray(cols, rows){
    var arr = new Array(cols);
    for (var i=0; i < arr.length; i++){
        arr[i] = new Array(rows);
    }
    return arr;
}

var grid;
var cols;
var rows;
var w = 20;
var totalMines = 10;

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

    var options = [];
    for(var i = 0; i<cols; i++){
        for(var j = 0; j<rows; j++){
            options.push([i, j])
        }
    }
    console.log(options);

    for(var n = 0; n< totalMines; n++){
        var index  = floor(random(options.length));
        var choice = options[index];
        var i = choice[0];
        var j = choice[1];
        options.splice(index, 1);
        grid[i][j].mine = true;
    }
    
    for (var i=0; i<cols; i++){
        for(var j=0; j<rows; j++){
            grid[i][j].countMines();
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

function gameOver() {
    
    for (var i=0; i<cols; i++){
        for(var j=0; j<rows; j++){
            grid[i][j].revealed = true;
        }
    }
}

function mousePressed(){
    background(255);
    for(var i=0; i<cols; i++){
        for(var j=0; j<rows; j++){
           if(grid[i][j].contains(mouseX, mouseY)){
            grid[i][j].reveal();

            if(grid[i][j].mine){
                gameOver();
            }
           }
        }
    }
}
