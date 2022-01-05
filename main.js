var last_position_of_x,last_position_of_y;
var color="blue";
width_of_the_line=4;
canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
var width=screen.width;
new_width=width-70;
var height=screen.height;
new_height=height-300;
if (width<992) {
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e) {
    last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
    last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e) {
    console.log("my_touchmove");
    current_position_of_touch_x=e.touches[0].clientX-canvas.offsetLeft;
    current_position_of_touch_y=e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
    ctx.strokestyle=color;
    ctx.linewidth=width_of_the_line;
    console.log("last position of x coordinate is:"+last_position_of_x);
    console.log("last position of y coordinate is:"+last_position_of_y);
    ctx.moveTo(last_position_of_x,last_position_of_y);
    console.log("current position of x coordinate is:"+current_position_of_touch_x);
    console.log("current position of y coordinate is:"+current_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x,current_position_of_touch_y);
    ctx.stroke();
    last_position_of_x=current_position_of_touch_x;
    last_position_of_y=current_position_of_touch_y;
}