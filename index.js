// console.log("Connected")
let randomNo = Math.floor((Math.random()*6)+1);
let randomNo2 = Math.floor((Math.random()*6)+1);
// console.log(randomNo1);

let diceImage = "images/dice" + randomNo + ".png";
let diceImage2 = "images/dice" + randomNo2 + ".png";
// console.log(diceImage);

let img1 = document.querySelectorAll("img")[0];
let img2 = document.querySelectorAll("img")[1];

img1.setAttribute("src", diceImage);
img2.setAttribute("src",diceImage2);

if(randomNo > randomNo2){
    document.querySelector("h1").innerText = "Player 1 Wins!";
}
else if(randomNo === randomNo2){
    document.querySelector("h1").innerText = "Why not give it a other try?";
    document.querySelector("h1").style.fontSize="5.5rem";
}
else{
    document.querySelector("h1").innerText = "Player 2 Wins!"
}
setInterval(location.reload(),3000)

