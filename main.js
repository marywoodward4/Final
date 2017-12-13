//-------------------------SETUP
//-----------------------------------

//GLOBAL VARIABLES-------------
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var mouseX = 0;
var mouseY = 0;
var selectedColor = 'rgb(0, 0, 0)';
var penMinWidth = 1;
var penMaxWidth =5;
var mainCanvas= new SignaturePad(document.getElementById("main-canvas"), {
  backgroundColor: 'rgba(0, 0, 255, 0)',
  penColor: selectedColor,
  //pen width
  minWidth: penMinWidth,
  maxWidth: penMaxWidth
});

//FUNCTIONS-------------
function resizeCanvas(){
  canvas.width=innerWidth-100;
  canvas.height=innerHeight;
}




function newColor(r,g,b){
  	selectedColor = "rgb(" + r + "," + g + "," + b +")";
    mainCanvas.penColor = selectedColor;
  }


//w3schools-onkeyup
$(window).keyup(function(){
  console.log(event.code);
  if(event.code==='KeyR'){
    newColor(255,0,0);
  }  else if(event.code === "KeyL"){
      newColor(0,0,0);
  } else if(event.code === "KeyB"){
    newColor(0,0,255);
  } else if(event.code === "KeyG"){
    newColor(0,255,0);
  } else if(event.code === "KeyY"){
    newColor(255,255,0);
  } else if(event.code === "KeyO"){
    newColor(255,165,0);
  } else if(event.code === "KeyV"){
    newColor(171,0,232);
  } else if(event.code === "KeyP"){
    newColor(232,121,217);
  } else if(event.code === "KeyP"){
    newColor(232,121,217);
  } else if(event.code === "KeyE"){
    newColor(211,211,211);
  } else if(event.code === "KeyW"){
    newColor(165,42,42);
  } else if(event.code === "KeyC"){
    newColor(64,224,208);
  } 



});





//EVENTS-----------------------
window.addEventListener('resize',resizeCanvas);
window.addEventListener('mousemove',updateMouseXY);
resizeCanvas();







//----------------------------DRAW
//------------------------------------
function updateMouseXY(event){
  mouseX = event.x;
  mouseY = event.y;
}
//ctx.font = '100px Impact';
//ctx.fillStyle = 'rgb(0,0,255)';
//ctx.lineWidth = 5;
//ctx.fillText('hi there',mouseX, mouseY);
//ctx.strokeText('hi there',mouseX,mouseY);
//requestAnimationFrame(draw);
