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

