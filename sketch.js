var timeCheck1;
var timeInterval = 1000;
var interval;
var xTemp;
var yTemp;

var xoff = 0.0;
var yoff = 10.0;

var balls = [];
var times = [];
var xOffsets = [];
var yOffsets = [];

function setup(){
   var canvas = createCanvas(500,500)
   timeCheck1 = millis();

   for (var i = 0; i < 10; i++){
      balls.push(new ball(random(width), random(height), 10))
      times[i] = millis();
      xOffsets[i] = i;
      yOffsets[i] = 10+ i;
   }

}


function draw(){
   background(0);
   noStroke();

   interval = random(2* timeInterval);

   for (var i = 0; i < balls.length; i++){
      var col = 100/balls.length;
      rand();
      balls[i].update();
      balls[i].show(250 + i * col);
   }

   // Save to png
   // if (millis() > 2000 && millis() < 8000){
   //    saveCanvas(canvas, "output4", "png")
   // }
}

function rand(){
   if (millis() - timeCheck1 > interval){
      timeCheck1 = millis();
      xoff += 0.5;
      yoff += 0.5;
      for (var i = 0; i < balls.length; i++){
         xOffsets[i] += 0.1;
         yOffsets[i] += 0.1;
         balls[i].posEnd.x = noise(xOffsets[i])*(width);
         balls[i].posEnd.y = noise(yOffsets[i])*(height);
         // console.log('rand() is working');
      }
   }
}


// ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** **
// Hsluv functions

function fillHsluv(h, s, l) {
  var rgb = hsluv.hsluvToRgb([h, s, l]);
  fill(rgb[0] * 255, rgb[1] * 255, rgb[2] * 255);
}

function strokeHsluv(h, s, l) {
  var rgb = hsluv.hsluvToRgb([h, s, l]);
  stroke(rgb[0] * 255, rgb[1] * 255, rgb[2] * 255);
}
