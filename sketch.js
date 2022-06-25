var n1,n2,num1,num2;
var b1,b2,b3,b4;
function setup() {
  createCanvas(400, 400);
  n1= createInput();
  n1.position(5,60);
  n2= createInput();
  n2.position(200,60);

  b1 = createButton("add");
  b1.position(10,200);
  b1.mousePressed(add);
  
  b2 = createButton("sub");
  b2.position(100,200);
  b2.mousePressed(sub);

  b3 = createButton("mul");
  b3.position(200,200);
  b3.mousePressed(mul);
  
  b4 = createButton("div");
  b4.position(300,200);
  b4.mousePressed(div);
}

function draw() {
  background(220);
  num1 = parseInt(n1.value());
  num2 = parseInt(n2.value());


}

function add() {
  console.log(num1+num2);
}

function sub() {
  console.log(num1-num2);
}

function mul() {
  console.log(num1*num2);
}

function div() {
  console.log(num1/num2);
}