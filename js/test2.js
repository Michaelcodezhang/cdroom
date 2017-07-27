/**
 * Created by a on 2017/6/10.
 */
function drawTop(ctx,fillStyle){
    ctx.fillStyle=fillStyle;
    ctx.beginPath();
    ctx.arc(0,0,30,0,Math.PI,true);
    ctx.closePath();
    ctx.fill();
}
function drawGrip(ctx,fillStyle){
    ctx.save();
    ctx.fillStyle=fillStyle;
    ctx.fillRect(-1.5,0,1.5,40);
    ctx.beginPath();
    ctx.strokeStyle=fillStyle;
    ctx.arc(-5,40,4,Math.PI,Math.PI*2,true);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
}
function draw(){
    var ctx=document.getElementById('myCanvas').getContext("2d");
    ctx.translate(180,180);
    for(var i=1;i<10;i++){
        ctx.save();
        ctx.rotate(Math.PI*(2/4+i/4));
        ctx.translate(0,-100);
        drawTop(ctx,"rgb("+(30*i)+","+(255-30*i)+",255)");
        drawGrip(ctx,"rgb("+(30*i)+","+(255-30*i)+",255)");
        ctx.restore();
    }
}
window.onload=function(){
    draw();
}


