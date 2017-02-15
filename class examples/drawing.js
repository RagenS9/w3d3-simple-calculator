// function setup() {
//     createCanvas(displayWidth, displayHeight);
//     background(255, 255, 255);
//     strokeWeight(5);
//     stroke(0);
// }

// we didn't have to call setup anything or anything different, because p5 is running the function. it is a pre-set.

var rotation = 0;
function setup() {
  createCanvas(displayWidth, displayHeight);
}

function draw() {
//   if (mouseIsPressed) {
//     fill(0);
//   } else {
//     fill(255);
//   }
//   ellipse(mouseX, mouseY, 80, 80);

// var red = random(0, 255);
// var green = random(0, 255);
// var blue = random(0, 255);

//     fill(red, green, blue);
//     rect(random(mouseX, mouseX), random(mouseY, mouseY), 100, 100);
// this square line is a higher-order function.
    
    rotation++;
    discoBrush(rotation);
}

function discoBrush(degrees) {
    var red = random(0, 255);
    var green = random(0, 255);
    var blue = random(0, 255);

    fill(red, green, blue);
    rotate(degrees);
    rect(mouseX, mouseY, mouseX, mouseY);
}