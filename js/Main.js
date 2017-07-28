/**
 * Created by a on 2017/5/28.
 */
$(document).ready(function(){
    $("#c-to-pink").click(function(){
        $("#header").css("background","pink");
        $("#footer").css("background","pink");
    })
    $("#c-to-green").click(function(){
        $("#header").css("background","green");
        $("#footer").css("background","green");
    })
    $("#c-to-black").click(function(){
        $("#header").css("background","black");
        $("#footer").css("background","black");
    })
    $("#c-to-origin").click(function(){
        $("#header").css("background","#00BFFF");
        $("#footer").css("background","#00BFFF");
    })
    $("#dbuttonul").click(function(){
        $("#dbuttonli").toggle(1000);
    })
})
/*function displaySubMenu(li){
    var submouse=li.getElementsByTagName("ul")[0];
    submouse.style.display="block";
}
function hideSubMenu(li){
    var submouse=li.getElementsByTagName("ul")[0];
    submouse.style.display="none";
}*/
function logo(){
    var ctx=document.getElementById("indexCanvas").getContext("2d");
    ctx.shadowOffsetX=10;
    ctx.shadowOffsetY=10;
    ctx.shadowBlur=10;
    ctx.shadowColor="rgba(0,0,0,0.5)";
    ctx.font="80px 隶书";
    ctx.fillStyle="white";
    ctx.fillText("创 梦 空 间",200,80);
    ctx.font="40px 黑体";
    ctx.fillText("Create and share your dreams here!",150,160);
}
window.onload=function(){
    logo();
}