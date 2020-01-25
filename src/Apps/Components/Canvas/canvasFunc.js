import React from 'react'


let canva = (e) =>{
    var $ = e.getContext('2d'),
    w = e.width = innerWidth,
    h = e.height = innerHeight,
    lines = [],
    lineCount = 1000;

    window.addEventListener('scroll', ()=>{
        let st = window.pageYOffset
        document.getElementById('canv').style.transform="translateY("+st/-6+"px) scale(3)"
        console.log(st)
    })

document.querySelector('main').appendChild(e).style.display = 'block';

function init() {
  for (var i = 0; i < lineCount; i++)
    lines.push(new Line());
  stage();
  loop();
}

function stage() {
  w = e.width = innerWidth;
  h = e.height = innerHeight;
  $.fillStyle = 'rgba(25, 25, 25, 1)';
  $.fillRect(0, 0, w, h);
}

function Line() {
  this.location = {
    x: Math.random() * w,
    y: Math.random() * h
  };
  this.width = Math.random() * 10 + 0.25;
  
  this.color = 'hsla('+~~(Math.floor(Math.random() * (337 - 263 + 1) + 263))+', 100%, 50%, 1)';
}

function draw() {
  $.fillStyle = 'rgba(0, 0, 0, 0.1)';
  $.fillRect(0, 0, w, h);
  for (var i = 0; i < lines.length; i++) {
    var l = lines[i],
        a = ~~(Math.random() * 2) * 90,
        lL = 1;
    $.lineWidth = l.width;
    $.strokeStyle = l.color;
    $.beginPath();
    $.moveTo(l.location.x, l.location.y);
    switch(a) {
        case 0:
        l.location.y -= lL;
        break;
      case 90:
        l.location.x += lL;
        break;
      case 180:
        l.location.y += lL;
        break;
      case 270:
        l.location.x -= lL;
        break;
      default:
        break;
    }
    $.lineTo(l.location.x, l.location.y);
    if (l.location.x < 0 || l.location.x > w)
      l.location.x = Math.random() * w;
    if (l.location.y < 0 || l.location.y > h)
      l.location.y = Math.random() * h;
    $.stroke();
  }
}


function loop() {
  draw();
  requestAnimationFrame(loop);
}

window.addEventListener('resize', stage);

init();
}

const Canvas = ()=>{
    
    return <canvas id='canv'
        style={{
            position: 'fixed',
            width: '100%',
            height: '100%',
            zIndex: -1,
            top: 0,
            left:0,
            transform: 'scale(3)'
        }}
        ref={canva}
    ></canvas>

}

export default Canvas