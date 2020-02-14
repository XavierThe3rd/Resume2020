import React from 'react'
let comp = window.getComputedStyle(gear[i]).getPropertyValue('transform')
let split = comp.split('(')[1].split(')')[0].split(',')
let a = split[0]
let b = split[1]
let current = Math.round(Math.atan2(a,b) * (180/Math.PI))
if(a && b < 0){ current += 360}

                {/*<div className="flx-c abs" style={{marginTop: 126, width: '100%'}}>
                    <SVG src={GearQ} className="gear-quarter1 gear abs"/>
                    <SVG src={GearW} className="gear-whole gear abs"/>
                    <SVG src={GearQ} className="gear-quarter2 gear abs"/>
                    <SVG src={GearH} className="gear-half-right gear abs"/>
                    <SVG src={GearH} className="gear-half-left gear abs"/>
                    <SVG src={GearH} className="gear-half-bottom gear abs"/>
                    <SVG src={GearQ} className="gear-quarter3 gear abs"/>
                </div>*/}
                
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