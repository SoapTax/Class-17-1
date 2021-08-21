
function setup() 
{
  createCanvas(400, 400);
box2 = new Box(90, 300, 40, 39, -6)
  box1 = new Box(50, 30, 37, 57, 4)
}

function draw() 
{
  background(220);
  fill("blue")
box1.show()
box1.move()
box1.bounce()
fill("Green")
box2.show()
box2.move()
box2.bounce()
}

