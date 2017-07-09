document.getElementById("mainsection").style.opacity = 0.7;
// Press any key to start
var onKeyText = document.getElementById("mainpage");
var catText = document.getElementById("catpage");
var gameText = document.getElementById("gamepage");
var overText = document.getElementById("overpage");
var wordHolder = document.getElementById('blanks');
var liveDisplay;
var liveCount = 20; //# of lives
var guess; //guess
var guessNum = []; //to store number of guesses
var guesscounter; //to count number of guesses
var blanks; //underscores
var die;
var gameCar;
var gameHint;
var wordSpace = [];
var resetlock = false;
var validator = 0;
var chooseSuperCar = false;
var chooseEverydayCar = false;

var cars1 = ["LAFERRARI","KOENIGSEGG AGERA","BUGATTI CHIRON", "PORSCHE CARRERA", "FORD GT", "MCLAREN SPIDER", "NISSAN GTR", "MERCEDES BENZ AMG GT", "LAMBORGHINI AVENTADOR", "ASTON MARTIN DB"];

var alphabetSoup = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " "];

hints1 = ["Famous Italian manufacturer well recognized by its horse sigil.",
"Swedish manufacturer fit for a king.", "French manufacturer now owned by Volkswagen AG",
"Unmistakable German automotive powerhouse. Somebody call 911!", "Classic All-American ingenuity",
"English manufacturer with the all too famous F1 model.","A Japanese engineering wonder of the world.",
"The three-pointed star on steroids",  "The raging bull of Italian manufacturers!", "The British car that supercedes the Vantage" ];

catText.style.visibility = "hidden";
gameText.style.visibility = "hidden";
overText.style.visibility = "hidden";

StartGame();

function StartGame(){

    document.onkeyup = function(event){
    resetlock = true;
    onKeyText.style.visibility = "hidden"; 
    catText.style.visibility = "visible";

    if(resetlock == true){

            Main();

            function Main(){
                document.getElementById("CarsSelection1").addEventListener("click", function(){
                    
                
                function Supercar(){
                    chooseSupercar = true;         
                    die = Math.floor(Math.random()*9);
                    catText.style.visibility = "hidden";
                    gameText.style.visibility = "visible";
                    gameCar = cars1[die];
                    if (gameCar.length > 13) {
                        document.getElementById("mainsection").style.height = "450px";
                    }
                    console.log(gameCar);
                    gameHint = hints1[die];
                    document.getElementById("hintstext").innerHTML = gameHint;
                    }
                    Supercar();

                    //Create alphabet list
                    function letters(){
                        myButtons = document.getElementById('alphabet');
                        myLetters = document.createElement('div');
                        myLetters.innerHTML = "";
                        for (var i = 0; i < alphabetSoup.length; i++){
                        myLetters.id = 'alphabet';
                        list = document.createElement('span');
                        // list.innerHTML = alphabetSoup[i];
                        list.innerHTML += (alphabetSoup[i] + " ");
                        myButtons.appendChild(myLetters);
                        myLetters.appendChild(list);
                        }
                    }
                    letters();

                    // Create guesses list
                    function blankspace() {
                        wordHolder.innerHTML = "";
                        var underscore = gameCar;
                        // correct = document.createElement('ul');
                        for (var i = 0; i < gameCar.length; i++) {
                        // correct.setAttribute('id', 'my-word');
                            if(underscore[i] != " "){
                            underscore = underscore.replace(underscore[i], "_");
                            wordSpace.push(underscore[i]);
                            }
                            else {
                                //insert space where ther are no alphabets
                                wordSpace.push(String.fromCharCode(160));
                            }

                    }
                        console.log(wordSpace);

                        // guess.setAttribute('class', 'guess');
                        // if (gameCar[i] === "-") {
                        //     guess.innerHTML = "-";
                        //     space = 1;
                        // } else {
                        //     guess.innerHTML = "_";
                        // }
                        // guesses.push(guess);
                        // wordHolder.appendChild(correct);
                        // correct.appendChild(guess);
                        wordHolder.innerHTML= wordSpace.join(" ");

                    }
                    blankspace();

                    function liveUpdate(){
                        liveDisplay = document.getElementById('lives');
                        liveDisplay.innerHTML = liveCount; 
                    }
                    liveUpdate();

                }); //clickevent listener end
            };


                        //On key event to overwrite existing underscores in wordHolder
                        
                        document.onkeyup = function(event) {
                        // Captures the key press, converts it to lowercase, and saves it to a variable.
                        var letterKeyUp = String.fromCharCode(event.keyCode).toUpperCase();

                        for (i = 0; i < gameCar.length; i++){
                            // If a correct letter is pressed, run the following functions/methods.
                            if (letterKeyUp === gameCar[i]){
                                validator = 1;
                                //update word space
                                wordSpace[i] = letterKeyUp;
                                //publish changes
                                wordHolder.innerHTML= wordSpace.join(" ");
                                NextRound();
                            }
                            else {
                                validator = validator - 1;
                            }
                        }
                                    
                                    function NextRound(){
                                        if (wordSpace === gameCar){
                                                document.onkeyup = function(event){
                                                Supercar();
                                                letters();
                                                blankspace();
                                                liveUpdate();
                                                }
                                            }
                                        }
                                    


                                    if (validator < 0 ) {liveCount = liveCount - 1;
                                    liveDisplay.innerHTML = liveCount;
                                    validator = 0;
                                    }   
                                    
                                    if (liveCount === 0){
                                        gameText.style.visibility="hidden";
                                        overText.style.visibility="visible";

                                        function TryAgain(){
                                            document.getElementById("try").addEventListener("click", function(){
                                                    if (chooseSupercar === true){
                                                        Supercar();
                                                    }
                                                    
                                            });
                                            
                                        }
                                        TryAgain();

                                        function MainMenu(){
                                            document.getElementById("menu").addEventListener("click", function(){
                                                overText.style.visibility = "hidden";
                                                onKeyText.style.visibility = "visible";
                                                liveCount=20;
                                                StartGame();
                                                
                                    
                                        });
                                        }
                                        MainMenu();    


                                        

                                    }
                            }
                        }

            



    };

}



