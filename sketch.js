function drawInstructions()
{
  fill(0);
  textSize(32);
  text('hello, welcome to my interactive drawing canvas', width/8, height/4);
  textSize(24);
  text('DIRECTIONS:', width/8, height/3);
  textSize(20);
  text('> move mouse: red ellipses', width/8, height/2.58);
  text('> key "s" + move mouse: yellow rectangles', width/8, height/2.3);
  text('> click & move mouse: green ellipses', width/8, height/2.07);
  text('> key "s" + click & move mouse: blue rectangles', width/8, height/1.88);
  text('> key "x": stop drawing', width/8, height/1.72);
  text('> any key: start drawing again', width/8, height/1.59);
  text('> key "t": cycle canvas color', width/8, height/1.48);
  text('> key "p": print your masterpiece', width/8, height/1.39);
  text('> key "r": reset canvas', width/8, height/1.31);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  drawInstructions();
}

function mouseMoved()
{
  if(key=='s' && keyIsPressed)
  {
    fill(int(random(200,256)),int(random(200,256)),0);
    rect(mouseX, mouseY, int(random(0,200)), int(random(0,200)));
  }
  else if(key=='x')
  {

  }
  else
  {
    fill(int(random(100,256)),0,0);
    ellipse(mouseX,mouseY, int(random(100,200)), int(random(100,200)));
  }
}

function mouseDragged()
{
  if(key=='s' && keyIsPressed)
  {
    fill(0,0,int(random(0,256)));
    rect(mouseX, mouseY, int(random(0,200)), int(random(0,200)));
  }
  else if(key=='x')
  {

  }
  else
  {
    fill(0,int(random(100,256)),0);
    ellipse(mouseX,mouseY, int(random(100,200)), int(random(100,200)));
  }
}

function keyPressed()
{
  if(key=='r')
  {
    background(255);
    drawInstructions();
  }
  if(key=='p')
  {
    saveCanvas('MyDrawing','jpg');
  }
  if(key=='t')
  {
    background(int(random(150,256)),int(random(150,256)),int(random(150,256)));
    drawInstructions();
  }
}