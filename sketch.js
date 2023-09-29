function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function mouseMoved()
{
  fill(int(random(100,256)),0,0);
  ellipse(mouseX,mouseY, int(random(100,200)), int(random(100,200)));
  if(key=='s' && keyIsPressed)
  {
    rect(mouseX, mouseY, int(random(100,200)), int(random(100,200)));
  }
}

function mouseDragged()
{
  fill(0,int(random(100,256)),0);
  ellipse(mouseX,mouseY, int(random(100,200)), int(random(100,200)));
}

function keyPressed()
{
  if(key=='r')
  {
    background(255);
  }
}

function draw() {
}