
// Press any key to start
var onKeyText = document.getElementById("mainpage");
var catText = document.getElementById("catpage");
var gameText = document.getElementById("gamepage");
var choice1 = document.getElementById("CarsSelection1");

var cars1 = ["LaFerrari","Koenigsegg Agera","Bugatti Chiron", "Porsche Carrera", "Ford GT", "McLaren Spider", "Nissan GTR", "Mercedes Benz AMG GT", "Lamborghini Aventador", "Aston Martin DB"];

var alphabetSoup = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

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

    if(resetlock === true ){

            document.getElementById("CarsSelection1").addEventListener("click", function(){
            var die = Math.floor(Math.random()*9);
            catText.style.visibility = "hidden";
            gameText.style.visibility = "visible";
            var gameCar = cars1[die];
            var gameHint = hints1[die];
            document.getElementById("hintstext").innerHTML = gameHint;
            roundprops = [gameCar, gameHint];
            });

            console.log(roundprops);
             var gamewordlength = roundprops[0].length;
            var wordarray = [];
            for(i=0; i<gamewordlength;i++){
                blank = "_";
                wordarray.push(blank);
            };

            console.log(wordarray);
            var test = join(wordarray);
            document.getElementById("blanks").innerHTML = test;

    };

};