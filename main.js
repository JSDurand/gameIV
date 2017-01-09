/*
 * Bricks game ... or not.
 */

var mygame = {};

var app = new p2.WebGLRenderer(function(){

  // Create the world
  var world = new p2.World({
    gravity : [0,-10]
  });
  this.setWorld(world);

  var ground = new p2.Material();

  this.frame(0, 0, 10, 10);
});
