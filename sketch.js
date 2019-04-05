let radius;
let center_x;
let center_y;
let x;
let y;
let a;
let b;
let bound;
let stp;
let THIRD_PI
function setup() {
    // setup code goes here
    createCanvas(800, 800)
    radius = 200
    center_x = 100
    center_y = 100
    x = 0;
    y = 0
    a = 0;
    b = 0;
    bound = -radius
    THIRD_PI = TWO_PI/3
    stp = THIRD_PI/128
    frameRate(60)
    background(0)

}

function draw() {
    // drawing code goes here
    translate(width/2, height/2)
    strokeWeight(1)
    fill(255)
    stroke(255)
    ellipse(0, 0, radius, radius)
    fill(0,0,255)
    //stroke(0,0,255)
    ellipse(0,0, radius-20, radius-20)

    fill(255,255,0)
    //stroke(255,255,0)
    ellipse(-sin(a - THIRD_PI)*radius, -cos(a - THIRD_PI)*radius, radius, radius)

    fill(0,255,0)
    //stroke(0,255,0)
    ellipse(-sin(a + THIRD_PI)*radius, -cos(a +THIRD_PI)*radius, radius, radius)

    fill(255,0,0)
    //stroke(255,0,0)
    ellipse(-sin(a)*radius, -cos(a)*radius, radius, radius)

    noFill()
    stroke(0)
    strokeWeight(10)
    ellipse(0,0,radius*3,radius*3)
    a+=stp;
}
