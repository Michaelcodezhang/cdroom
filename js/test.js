/**
 * Created by a on
 */

function test(){
    var context=document.getElementById("myCanvas").getContext("2d");
    context.shadowOffsetX=10;
    context.shadowOffsetY=10;
    context.shadowBlur=2;
    context.shadowColor="rgba(0,0,0,0.5)";
    context.fillStyle="#33ccff";
    context.fillRect(20,20,300,60);
    context.fill();
    context.font="45px 隶书";
    context.fillStyle="white";
    context.fillText("HTML5+CSS3",30,64,500);
    var img=document.getElementById("myCanvas");
    context.drawImage(img,0,100);
    var img2=document.getElementById("myCanvas");
    context.drawImage(img2,150,20,50,200,250,250,50,200);
}
//旋转+缩放+裁剪路径
function test2(){
    var c=document.getElementById("myCanvas");
    var context=c.getContext("2d");
    context.fillStyle="black";
    context.fillRect(0,0,300,300);
    context.fill();
    context.beginPath();
    context.arc(150,150,130,0,Math.PI*2,true);
    context.clip();
    context.translate(200,20);
    for(var i=1;i<80;i++){
        context.save();
        context.translate(30,30);
        context.scale(0.95,0.95);
        context.rotate(Math.PI/12);
        context.beginPath();
        context.fillStyle="rgba("+(15*i)+","+(255-3*i)+",255,"+(1-(i+10)/40)+")";
        //context.globalAlpha="0.4";
        context.arc(0,0,50,0,Math.PI*2,true);
        context.closePath();
        context.fill();
    }
}
//线性渐变
function test3(){
    var c=document.getElementById("myCanvas");
    var context=c.getContext("2d");
    var grad=context.createLinearGradient(0,0,0,350);
    grad.addColorStop(0,"#ff0000");
    grad.addColorStop(1/7,"#ff9900");
    grad.addColorStop(2/7,"#ffff00");
    grad.addColorStop(3/7,"#00ff00");
    grad.addColorStop(4/7,"#00ffff");
    grad.addColorStop(5/7,"#0000ff");
    grad.addColorStop(6/7,"#ff00ff");
    grad.addColorStop(1,"#ff0000");
    context.fillStyle=grad;
    //context.strokeStyle=grad;
    context.fillRect(10,10,300,350);
    //context.fill();
}
//径向渐变
function test4(){
    var context=document.getElementById("myCanvas").getContext("2d");
    var ragrad=context.createRadialGradient(150,150,5,150,150,140);
    ragrad.addColorStop(0,"#ffffff");
    ragrad.addColorStop(0.75,"#333333");
    ragrad.addColorStop(1,"#000000");
    context.fillStyle=ragrad;
    context.fillRect(10,10,280,280);
}
window.onload=function(){
        test();
}

