var canvas, backgroundImage;
var gameState=0;
var playerCount, database, form , player, game;

function setup(){
  canvas=createCanvas(400, 400);
 database=firebase.database();
var game=new Game();
game.getState();
game.start();

}
function draw(){

}