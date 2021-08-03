var dice1 = document.querySelectorAll(".container .dice img")[0];
var dice2 = document.querySelectorAll(".container .dice img")[1];

var rand1 = (Math.floor(Math.random()*5) + 1);
var rand2 = (Math.floor(Math.random()*5) + 1);

dice1.setAttribute("src","images/dice"+rand1+".png");
dice2.setAttribute("src","images/dice"+rand2+".png");


if(rand1>rand2){
    document.querySelector(".container").firstElementChild.classList.remove("flag-right");
    document.querySelector(".container").firstElementChild.classList.remove("flag-inv");
}
else if(rand1===rand2){
    document.querySelector("h1").textContent = "Draw!!";
    document.querySelector(".container").firstElementChild.classList.remove("flag-left");
    document.querySelector(".container").firstElementChild.classList.remove("flag-right");
}
else {
    document.querySelector(".container").firstElementChild.classList.remove("flag-left");
    document.querySelector(".container").firstElementChild.classList.remove("flag-inv");

}
