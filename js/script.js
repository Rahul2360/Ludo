var mainDiv = document.getElementById("main");
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var canvasWidth;
var canvasHeight;
var tileWidth;

var boxHeight = 40;
var boxWidth = 40;

var lineWidth = 1;

var boxes = [];
var boxRowCount = 15;
var boxColumnCount = 15;
for(var column = 0; column < boxColumnCount; column++ ){
	boxes[column] = [];
	for( var row = 0; row < boxRowCount; row++ ) {
		boxes[column][row] = {x:0,y:0};
	}
}

function refreshBoard() {
  canvasWidth = window.innerHeight - 200;
  canvasHeight = window.innerHeight;
  mainDiv.style.width = canvasWidth + "px";
  mainDiv.style.height = canvasWidth + "px";
  ctx.canvas.width = canvasWidth;
  ctx.canvas.height = canvasWidth;

  tileWidth = Math.ceil(canvasWidth/16);
}

function drawBackground() {
  var backgroundGradient = ctx.createLinearGradient(0,0,0,canvasHeight);
  backgroundGradient.addColorStop(0,'#00aaff');
  backgroundGradient.addColorStop(1,'#ffffff');
  ctx.fillStyle = backgroundGradient;
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);
}

function drawRegularTile(color, width) {
  var imgData = ctx.createImageData(width);
  var pos = 0;
  for(var x=0;x <width;x++) {
    for(var y=0;y <width;y++) {

    }
  }
}

function drawBoard() {
  for (var i = 0; i < boxRowCount; i++) {
    for (var j = 0; j < boxColumnCount; j++) {

      var boxesX = (i*boxWidth);
      var boxesY = (j*boxHeight);
      boxes[i][j].x = boxesX;
      boxes[i][j].y = boxesY; 
      ctx.rect(boxesX,boxesY,boxWidth,boxHeight);
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = 'black';
      ctx.stroke();
      
      if( i == 0) {
        ctx.fillStyle = "blue";
        ctx.fill();
      } else {
        ctx.fillStyle = "blue";
      }
      // ctx.beginPath();
     
    }
  } 
  // ctx.rect(5,5,35,35);
  // ctx.lineWidth = 4;
  // ctx.strokeStyle = 'black';
  // ctx.stroke();
  // ctx.fillStyle = "#0095DD";
  // ctx.fill();
}

function draw() {
  refreshBoard();
  drawBackground();
  drawBoard();
  // requestAnimationFrame(draw)
}

requestAnimationFrame(draw)