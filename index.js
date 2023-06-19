 
var randomNumber1 = Math.floor( Math.random() * 6 ) + 1 ;

var randomDiceiamge = "dice" + randomNumber1 + ".png";

var randomSource = "images/" + randomDiceiamge;
 
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomSource);


var randomNumber2 = Math.floor( Math.random() * 6 ) + 1 ;

var randomDiceiamge1 = "dice" + randomNumber2 + ".png";

var randomSource1= "images/" + randomDiceiamge1;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomSource1);



if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Palyer 1 Wins";
}
else if (randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}