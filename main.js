canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="blue";
var mouseEvent="empty";
var last_mouse_x,last_mouse_y;
width_of_line=1
canvas.addEventListener("mousedown",mousedown);

function mousedown(e){
color=document.getElementById("color").value;
width_of_line=document.getElementById("width_of_line").value;
console.log(color);
mouseEvent="mousedown";
}
canvas.addEventListener("mousemove",mousemove);
function mousemove(e) {
    mouse_x=e.clientX-canvas.offsetLeft;
mouse_y=e.clientY-canvas.offsetLeft;
console.log("X = " + mouse_x + " ,Y = " + mouse_y);
if (mouseEvent == "mouseDown") {
    ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width_of_line;
ctx.lineTo(mouse_x,mouse_y);
ctx.stroke();
}
last_mouse_x=mouse_x;
last_mouse_y=mouse_y;
}
canvas.addEventListener("mouseup",mouseup);
function mouseup(e){
mouseEvent="mouseup"
}
canvas.addEventListener("mouseleave",mouseleave);
function mouseleave(e){
mouseEvent="mouseleave"
}