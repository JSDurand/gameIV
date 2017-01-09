/*
 * Bricks game ... or not.
 */

var mygame = {};

// var app = new p2.WebGLRenderer(function(){

function setup () {
  mygame.can = createCanvas(windowWidth, windowHeight);
  mygame.centerCanvas();
}

function draw () {
  background(0);
}

mygame.centerCanvas = function () {
  var x = (windowWidth - width)/2;
  var y = (windowHeight - height)/2;
  mygame.can.position(x, y);
}

function windowResized () {
  mygame.centerCanvas();
}
