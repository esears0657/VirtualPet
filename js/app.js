
let c = {x: 350, y: 300, size: 550}

function setup()
{
createCanvas(700, 600);
background(200);
}


function draw(){

    if(mouseIsPressed){
        circle.offsetX-1;
    }else{
        circle.offsetX+1;
    }
circle(c.x, c.y, c.size);


fill('blue');  
}