var randomnum1= Math.ceil(Math.random()*6);
var randomimage1= "images/dice" + randomnum1 + ".png";
var image1=document.querySelector(".img1");
image1.setAttribute("src", randomimage1);

var randomnum2= Math.ceil(Math.random()*6);
var randomimage2="images/dice" + randomnum2 + ".png";
var image2=document.querySelector(".img2");
image2.setAttribute("src", randomimage2);

if(randomnum1>randomnum2)
{
    document.querySelector(".container h1").innerHTML="🚩 Player 1 wins";
}
else if(randomnum2> randomnum1)
{
    document.querySelector(".container h1").innerHTML="Player 2 wins 🚩";

}
else
{
    document.querySelector(".container h1").innerHTML="Draw";
}