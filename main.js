var mouseEvent="";
var mouseEvent, mouseXfinal, mouseYfinal, mouseXatual, mouseYatual, canvas, ctx, color, larguraLinha, mouseXtouchAtual, mouseYtouchAtual, mouseXtouchFinal, mouseYtouchFinal;

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var color = "blue";
var largura = 2;

canvas.addEventListener("mousedown", desenhar);

function desenhar(e){
    color = document.getElementById("color").value;
    largura = document.getElementById("number").value;
    
    mouseEvent="mouseDown";
}

canvas.addEventListener("mousemove", myMouseMove);

function myMouseMove(e){
    mouseXatual = e.clientX-canvas.offsetLeft;
    mouseYatual = e.clientY-canvas.offsetTop;

    if(mouseEvent=="mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=largura;
    ctx.moveTo(mouseXfinal,mouseYfinal);
    ctx.lineTo(mouseXatual,mouseYatual);
    ctx.stroke();
}

mouseXfinal=mouseXatual;
mouseYfinal=mouseYatual;
}

canvas.addEventListener("mouseup", myMouseUp);

function myMouseUp(){
    mouseEvent="mouseup";
}

var larguraTela = screen.width;

novaLargura = screen.width-70;
novaAltura = screen.height-300;

if(larguraTela<992){
    document.getElementById("myCanvas").width=novaLargura;
    document.getElementById("myCanvas").height=novaAltura;
    document.body.style.overflow="hidden";
}

//para celulares

canvas.addEventListener("touchstart", desenharTouch);

function desenharTouch(e){
    color = document.getElementById("color").value;
    largura = document.getElementById("number").value;
    mouseXtouchFinal=e.touches[0].clientX-canvas.offsetLeft;
    mouseYtouchFinal=e.touches[0].clientY-canvas.offsetTop;
}

canvas.addEventListener("touchmove", myTouchMove);

function myTouchMove(e){
    mouseXtouchAtual=e.touches[0].clientX-canvas.offsetLeft;
    mouseYtouchAtual=e.touches[0].clientY-canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=largura;
    ctx.moveTo(mouseXtouchFinal,mouseYtouchFinal);
    ctx.lineTo(mouseXtouchAtual,mouseYtouchAtual);
    ctx.stroke();


mouseXtouchFinal=mouseXtouchAtual;
mouseYtouchFinal=mouseYtouchAtual;
}

function limparCanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}