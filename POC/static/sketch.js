var blobs;
var currentBlob;
var recording;
var mouseVelocity;
var mode;
var canvas;

// gene kogan

function setup() {
  canvas = createCanvas(512, 512);
  blobs = [];
  recording = false;  
  mouseVelocity = 0.0;
  mode = 0;
}

function draw() {
  background(255);
  for (var b=0; b<blobs.length; b++) {
    blobs[b].draw();
  }
  if (recording && mouseVelocity < 0.01) {
    currentBlob.mouseMoved(mouseX, mouseY);
  }
  
  var d = dist(pmouseX, pmouseY, mouseX, mouseY); 
  mouseVelocity = lerp(mouseVelocity, d, 0.1);
}

function mousePressed() {
  recording = true;
  console.log("mode "+mode);
  if (mode == 0) {
    createNew(new Blob(false, color(0,0,0), 4, 12));
  }
  else if (mode == 1) {
    createNew(new Blob(true, color(0,255,0), 0, 12));
  }
  else if (mode == 2) {
    createNew(new Blob(true, color(0,0,255), 0, 20));
  }
  else if (mode == 3) {
    createNew(new Blob(true, color(255,0,0), 0, 12));
  }
}

function mouseReleased() { 
  recording = false;
}

function mouseDragged() {
  if (recording) {
    currentBlob.mouseMoved(mouseX, mouseY);
  }
}

function createNew(blob) {
  currentBlob = blob;
  blob.add(mouseX, mouseY);
  blobs.push(blob);
}

function clearLast(blob) {
  blobs.slice(blobs.length-1, 1);
}

function keyPressed() {  
  if (key=='R') {    
    mode = 0;
  } else if (key=='P') {
    console.log("PARK");
    mode = 1;
  } else if (key=='W') {
    mode = 2;
  } else if (key=='B') {
    mode = 3;
  } else if (key=='C') {
    clearLast();
  }
  else if (key=='S') {
    uploadSketch();
  }
}

function Blob(filled, clr, thickness, frameSkip) {
  this.points = [];
  this.thickness = thickness;
  this.filled = filled;
  this.clr = clr;
  this.frameSkip = frameSkip;

  this.setStyle = function(filled, clr, frameSkip) {
    this.filled = filled;
    this.clr = clr;
    this.frameSkip = frameSkip;
  }
    
  this.add = function(x, y) {
    this.points.push({x:x, y:y});
  }
  
  this.draw = function() {
    if (this.filled) {
      fill(this.clr);
      noStroke();
    } else {
      noFill();
      stroke(this.clr);
      strokeWeight(this.thickness);
    }    
    beginShape();
    for (var p=0; p<this.points.length; p++) {
      curveVertex(this.points[p].x, this.points[p].y);
    }
    endShape();  
  }

  this.mouseMoved = function(x, y) {
    if (frameCount % 2 == 0) {
      this.add(x, y);
    }
  }
}

function success(result) {
  console.log("SUCCESS!!");
}

function uploadSketch() {
  console.log("SAVE");
  canvas.width = 512;
  canvas.height = 512;
  var img = canvas.elt.toDataURL("image/png").split(',')[1];
  $.ajax({
    type: "POST",
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    url: "/sketch-me",
    data: JSON.stringify({img: img}),
    success: success
  });
}

