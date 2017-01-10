/*
 * Bricks game ... or not.
 */

var app = new p2.WebGLRenderer(function(){
  mon_jeu.monde = new p2.World({
    gravity : [0,-10]
  });
  this.setWorld(mon_jeu.monde);

  var ground_mat = new p2.Material();
  var ball_mat   = new p2.Material();

  // Contact
  var ground_ball_contact = new p2.ContactMaterial(ground_mat, ball_mat,
    {friction: 30});

  mon_jeu.monde.addContactMaterial(ground_ball_contact);

  // Add ground
  var ground_body = new p2.Body({ position: [0, -1] });
  ground_body.addShape(new p2.Plane({ material: ground_mat }));
  mon_jeu.monde.addBody(ground_body);

  var char_obj = mon_jeu.createChar(ground_mat, ball_mat);

  for (var i = 0; i < char_obj.bodys.length; i++)
    mon_jeu.monde.addBody(char_obj.bodys[i]);

  for (var i = 0; i < char_obj.constraints.length; i++)
    mon_jeu.monde.addConstraint(char_obj.constraints[i]);

  // add char
  // var tete_body = new p2.Body({ position: [0, 1], mass : .5 });
  // tete_body.addShape(new p2.Circle({radius : .07, position: [0,0] }), [0, 0]
  // , Math.PI/2);
  // mon_jeu.monde.addBody(tete_body);

  // var body_body = new p2.Body({position: [0, .61], mass: 1});
  // body_body.addShape(new p2.Box({
    // width: .1,
    // height: .5,
    // material: ball_mat
  // }));
  // body_body.addShape(new p2.Box({
    // width: 1,
    // height: .5,
    // material: ball_mat
  // }), [0, -.5]);
  // mon_jeu.monde.addBody(body_body);

  // var left_arm_body = new p2.Body({position: [-.1, .5], mass: .5});
  // left_arm_body.addShape(new p2.Capsule({
    // length: .3,
    // radius: .05,
    // material: ball_mat
  // }), [0, 0]);
  // mon_jeu.monde.addBody(left_arm_body);

  // var right_arm_body = new p2.Body({position: [.1, .5], mass: .5});
  // right_arm_body.addShape(new p2.Capsule({
    // length: .3,
    // radius: .05,
    // material: ball_mat
  // }), [0, 0]);
  // mon_jeu.monde.addBody(right_arm_body);

  // var tete_body_constraint = new p2.RevoluteConstraint(tete_body, body_body,
    // {
      // localPivotA: [0, -.095],
      // localPivotB: [0, .275]
    // });
  // mon_jeu.monde.addConstraint(tete_body_constraint);

  // var left_arm_body_constraint = new p2.RevoluteConstraint(body_body, left_arm_body,
    // {
      // localPivotA: [-.025, .2],
      // localPivotB: [.025, .2]
    // });
  // mon_jeu.monde.addConstraint(left_arm_body_constraint);

  // var right_arm_body_constraint = new p2.RevoluteConstraint(body_body, right_arm_body,
    // {
      // localPivotA: [.0125, .2],
      // localPivotB: [-.0125, .2]
    // });
  // mon_jeu.monde.addConstraint(right_arm_body_constraint);

  // mon_jeu.monde.on('postStep', function(evenement) {
    // ball_body.angularForce = .1;
  // });

  // this.on('keydown', function(evenement) {
    // switch (evenement.keyCode) {
      // case 72:
        // console.log('H is pressed');
        // break;
      // case 76:
        // console.log('L is pressed');
        // break;
      // default:
        // break;
    // }
  // });

  // this.followBody = body_body;
});
