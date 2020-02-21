window.addEventListener("resize", resize, false);

var numPoints = 50;
var numFlames = 100;
var speed = new MinMax(2, 4);
var hueRange = new MinMax(100, 180);
var curvedFlame = false;

var speedMultiplier = 1.3;
var alphaMultiplier = 1.9;
var heightMultiplier = 0.4;

var flames = [];

function MinMax(min, max) {
  this.min = min;
  this.max = max;
  this.range = max - min;

  this.rand = function() {
    return random() * this.range + this.min;
  };
}

function Flame() {
  this.points = [];
  for (var i = 0; i < numPoints; i++) {
    this.points.push(new Point());
  }
  this.points.sort(function(p1, p2) {
    return p1.x - p2.x;
  });
}

Flame.prototype.tick = function() {
  for (var i = 0; i < this.points.length; i++) {
    this.points[i].tick();
  }
};

function Point() {
  this.x = random();
  this.y = height - random() * height * heightMultiplier;
  this.speed = speed.rand();
}

Point.prototype.tick = function() {
  this.y -= this.speed * speedMultiplier;
  if (this.y < height - height * heightMultiplier) this.y = height;
};

function setup() {
  createCanvas();
  colorMode(HSB, 164, 28, 38, 150);
  ellipseMode(CENTER);
  blendMode(ADD);
  resize();

  {
    //GUI stuff
    var gui = new dat.GUI();
    var flameController = gui.add(this, "numFlames", 0, 150);
    var pointController = gui.add(this, "numPoints", 0, 0);
    gui.add(this, "speedMultiplier", 1, 5);
    gui.add(this, "alphaMultiplier", 0, 3);
    var heightController = gui.add(this, "heightMultiplier", 0, 1);
    gui.add(this, "curvedFlame");

    gui.close();

    flameController.onChange(init);
    pointController.onChange(init);
    heightController.onChange(init);
  } //--GUI stuff--

  init();
}

function init() {
  flames = [];

  for (var i = 0; i < numFlames; i++) {
    flames.push(new Flame());
  }
}

function draw() {
  clear();
  background(0);
  noStroke();
  for (var i = 50; i < flames.length; i++) {
    var hue = i / flames.length * hueRange.range + hueRange.min;
    console.log(hue);
    fill(hue, 100, 100, 100 / flames.length * alphaMultiplier);

    //see link below for vertex reference
    //https://p5js.org/reference/#group-Shape
    beginShape();
    vertex(0, height);

    var flame = flames[i];

    for (var j = 0; j < flame.points.length; j++) {
      var p = flame.points[j];
      if (curvedFlame) curveVertex(p.x * width, p.y);
      else vertex(p.x * width, p.y);
    }

    flame.tick();

    vertex(width, height);
    endShape(CLOSE);
  }
}

function resize() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}