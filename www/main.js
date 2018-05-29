// Klikker på startknappen og første del begynner å telle ned samtidig som startknappen 

var button = document.querySelector(".button");
button.addEventListener("click", start);

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90
drawNumbers(ctx, radius);

//min for minutes, sec for seconds
var timeType = 'min';

function start(event){
    var bilde = document.querySelector(".bilde");
    bilde.setAttribute('src', 'img/stillbilde_bg.gif');
    var cs = document.getElementById('canvas');
    setVisible(document.getElementById('info_txt'), true);
    setVisible(document.getElementById('startBtn'), false);
    setVisible(document.getElementById('triangle'),true);
    
    setVisible(cs, true);
    changeTxt('The pasta is undercooked');
    setTimeout(changeTxt, getWaitingTime(8, timeType), 'Al dente');
    setTimeout(changeTxt, getWaitingTime(10, timeType), 'Overcooked');
    addClass(cs, 'spinnable');
    setTimeout(stop, getWaitingTime(12, timeType));   
}

function getWaitingTime(timeInSeconds, type) {
    if (type == 'sec')
        return timeInSeconds * 1000;
    else if (type == 'min')
        return (timeInSeconds * 1000) * 60;
} 

function stop() {
    var cs = document.getElementById('canvas')
    removeClass(cs, 'spinnable');
    setVisible(document.getElementById('info_txt'), false);
    setVisible(document.getElementById('startBtn'), true);
    setVisible(document.getElementById('triangle'),false);
    setVisible(cs, false);
    
    var bilde = document.querySelector(".bilde");
    bilde.setAttribute('src', 'img/stillbilde_bg.png');
}

function setVisible(element,visible){
    if (visible){
        removeClass(element, 'hidden');
        addClass(element, 'visible');
    }
    else {
        removeClass(element, 'visible');
        addClass(element, 'hidden');
        
    }
}

function addClass(element, cssClass){
    element.className += element.className.length > 0 ? ' ' + cssClass : cssClass;
}

function removeClass(element, cssClass) {
    element.className = element.className.replace(cssClass,'');
}

function changeTxt (message){
    document.getElementById('info_txt').innerHTML = message;
}

//Source: https://www.w3schools.com/graphics/canvas_clock_numbers.asp
function drawNumbers(ctx, radius) {
  var ang;
  var num;
  ctx.font = radius*0.15 + "px arial";
  ctx.textBaseline="middle";
  ctx.textAlign="center";
  for(num = 1; num < 13; num++){
    ang = num * Math.PI / 6;
    
    if(num < 8)
        ctx.fillStyle = 'red';
    else if(num > 9)
        ctx.fillStyle ='black';
    else 
        ctx.fillStyle ='green';
      
    ctx.rotate(ang);
    ctx.translate(0, -radius*0.85);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius*0.85);
    ctx.rotate(-ang);
  }
}

