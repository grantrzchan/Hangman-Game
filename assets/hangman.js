
// Press any key to start
var onKeyText = document.getElementById("mainpage");
var catText = document.getElementById("catpage");
var gameText = document.getElementById("gamepage");
var choice1 = document.getElementById("CarsSelection1");

cars1 = ["LaFerrari","Koenigsegg Agera","Bugatti Chiron", "Porsche Carrera", "Ford GT", "McLaren Spider", "Nissan GTR", "Mercedes Benz AMG GT", "Lamborghini Aventador", "Aston Martin DB"];

hints1 = ["Famous Italian manufacturer well recognized by its horse sigil.",
"Swedish manufacturer fit for a king.", "French manufacturer now owned by Volkswagen AG",
"Unmistakable German automotive powerhouse. Somebody call 911!", "Classic All-American ingenuity",
"English manufacturer with the all too famous F1 model.","A Japanese engineering wonder of the world.",
"The three-pointed star on steroids",  "The raging bull of Italian manufacturers!", "The British car that supercedes the Vantage" ];

catText.style.visibility = "hidden";
gameText.style.visibility = "hidden";

document.onkeyup = function(event){
var resetlock = true;
onKeyText.style.visibility = "hidden"; 
catText.style.visibility = "visible";

while(resetlock === true){
// var category1 = document.createElement("div");
// category1.innerHTML = "Super Cars";
// onKeyText.appendChild(category1);

function gameDie() {
    document.getElementById("CarsSelection1").addEventListener("click", function(){
    var die = Math.floor(Math.random()*9);
    console.log(die);
});
    return die
};

function carChooser(die){
    var gameCar = cars1[die];
    var gameHint = hints1[die];
// Modify hint text based on car choice
document.getElementById("hintstext").innerHTML = gameHint;
    return gameCar
};




    var gamewordlength = gameCar.length;
    console.log(gamewordlength)
    var wordarray = [];
    for(i=0; i<gamewordlength;i++){
        wordarray[i] = "_";
    };

};

};