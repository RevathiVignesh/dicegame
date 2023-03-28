var a=Math.random();
a=a*6;
a=Math.floor(a)+1;
var dice1="dice"+a+".png";
var b=Math.random();
b=b*6;
b=Math.floor(b)+1;
var dice2="dice"+b+".png";
document.querySelector(".img1").setAttribute("src",dice1);
document.querySelector(".img2").setAttribute("src",dice2);
if(a>b)
{
  document.querySelector(".h1tag").textContent="PLAYER1 WINS";
}
else if(b>a)
{
  document.querySelector(".h1tag").textContent="PLAYER2 WINS";
}
else
{
  document.querySelector(".h1tag").textContent="DRAW";
}
