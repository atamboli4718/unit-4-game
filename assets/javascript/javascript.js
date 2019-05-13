
//set up neccesary vars with global scope
var sum = 0;
var wins = 0;
var crystal1;
var crystal2;
var crystal3;
var crystal4;
var targetNumber;

//function to reset the wins only - yes I have to break them out!
function resetWins() {
    wins = 0; 
    $("#wins").html(wins); //written here to reset the 0 on the DOM
};
//function to reset the sum only - yes I have to break them out!
function resetSum () {
    sum = 0;
    $("#userGuess").html(sum); //written here to reset the 0 on the DOM
}

//function to setup the crystals and the target number values
function setUp() {

    //functions for generating random numbers for crystals
    crystal1 = Math.floor(Math.random() * 12) + 1;
    console.log(crystal1);
    crystal2 = Math.floor(Math.random() * 12) + 1;
    console.log(crystal2);
    crystal3 = Math.floor(Math.random() * 12) + 1;
    console.log(crystal3);
    crystal4 = Math.floor(Math.random() * 12) + 1;
    console.log(crystal4);

    //functions to create variables (a,b,c,d) for the targetNumber generator below
    var a = Math.floor(Math.random()*2) + 1;
    console.log("a is: "+a)
    var b = Math.floor(Math.random()*3) + 1;
    console.log("b is: "+b)
    var c = Math.floor(Math.random()*3) + 1;
    console.log("c is: "+c)
    var d = Math.floor(Math.random()*2) + 1;
    console.log("d is: "+d)


    //function to generate target number 
    targetNumber = a*crystal1 + b*crystal2 + c*crystal3 + d*crystal4
    console.log("target number is: " + targetNumber);
    $("#targetNumber").html(targetNumber); 

}

//click functions for clicks to increment into sum var
$("#crystal1").on("click", function () {
    sum = sum + crystal1;
    console.log("User guessed: " + crystal1);
    console.log("Total user guess thus far: " + sum);
    $("#userGuess").html(sum);
    sumCheck(); 
});

$("#crystal2").on("click", function () {
    sum = sum + crystal2;
    console.log("User guessed: " + crystal2);
    console.log("Total user guess thus far: " + sum);
    $("#userGuess").html(sum);
    sumCheck();
});

$("#crystal3").on("click", function () {
    sum = sum + crystal3;
    console.log("User guessed: " + crystal3);
    console.log("Total user guess thus far: " + sum);
    $("#userGuess").html(sum);
    sumCheck();
});

$("#crystal4").on("click", function () {
    sum = sum + crystal4;
    console.log("User guessed: " + crystal4);
    $("#userGuess").html(sum);
    sumCheck();
});

//calls set up function
setUp();

//function to compare sum var to wins var
function sumCheck() {
    console.log("sumCheck is running");
    console.log("sum: " + sum);
    console.log("target: " + targetNumber);
    if (sum === targetNumber) {
        alert("You won! Good game!");
        wins++; //adds one to the wins var
        $("#wins").html(wins); //writes wins to the html
        setUp();
        resetSum();
    } else if (sum > targetNumber) {
        alert("Computer wins! Your guesses were too high.");
        setUp();
        resetSum();
        resetWins();
    }
}