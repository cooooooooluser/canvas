canvas = document.getElementById("mycanvas");
ctx= canvas.getContext("2d");
color = "green"; 
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(800, 450, 50, 0, 2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", mymousedown);
function mymousedown(e) {
color=document.getElementById("color").value;
mousex=e.clientX-canvas.offsetLeft ;
mousey=e.clientY-canvas.offsetTop; 


console.log(mousex,mousey);
circle(mousex,mousey);
}

function circle(mouses,mousey){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(mousex, mousey, 50, 0, 2*Math.PI);
    ctx.stroke(); 
}

function clear_area(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}