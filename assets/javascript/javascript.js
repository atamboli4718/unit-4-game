/* Logic thought out:

^create a var for each crystal (crystal1, crystal2, etc)
^create a var for the 4 options the computer can guess from to assign to each crystal 1-12 (options ??)
^create a var for the target numbers for the computer to guess from 19-120 (targetNumber)
^create a function to randomly generat 4 numbers to put in crystal vars
^create a function to randomly generate the target number
^create a function for when the user clicks on each each crystal to add to the sum var    
create a var for the user to add to when they click on each crystal (userGuess)
    disply ^ on the DOM
^create a var for wins (wins)
create an alert for when targetOption == clicks, user wins! adds that win to the wins var above
    rerun function to generation the 4 numbers and the target numbers
create a function for if the userGuess > targetNumber   then
    alert "you loose!"
    rerun function to generate #'s 
    wins return to 0 and game starts over

*/

function setUp () {
    var sum; 
    var targetNumber;

    //function for generating random numbers for crystals
    var crystal1 = Math.floor(Math.random() * 12) + 1 ;
        console.log(crystal1);
    var crystal2 = Math.floor(Math.random() * 12) + 1 ;
        console.log(crystal2);
    var crystal3 = Math.floor(Math.random() * 12) + 1 ;
        console.log(crystal3);
    var crystal4 = Math.floor(Math.random() * 12) + 1 ;
        console.log(crystal4);

    //function to randomly generate target number
    targetNumber = Math.floor(Math.random() * 120) + 19;
        console.log(targetNumber);

    //var for guesses to increment into
    sum = 0;

    //click functions for clicks to increment into sum var
    $("#crystal1").on("click", function () {
        sum = sum + crystal1; 
        console.log("User guessed: " + crystal1);
        console.log("Total user guess thus far: " + sum);
        sumCheck(sum,targetNumber); //sum and target are put here because they are scoped inside of the setUp function and need to be referenced in the sumCheck function
    });
    
    $("#crystal2").on("click", function () {
        sum = sum + crystal2; 
        console.log("User guessed: " + crystal2);
        console.log("Total user guess thus far: " + sum);
        sumCheck(sum,targetNumber);
    });
    
    $("#crystal3").on("click", function () {
        sum = sum + crystal3; 
        console.log("User guessed: " + crystal3);
        console.log("Total user guess thus far: " + sum);
        sumCheck(sum,targetNumber);
    });    
    
    $("#crystal4").on("click", function () {
        sum = sum + crystal4; 
        console.log("User guessed: " + crystal4);
        console.log("Total user guess thus far: " + sum);
        sumCheck(sum,targetNumber);
    });
}
setUp();
// var for total wins
var wins;

//function to compare sum var to wins var
function sumCheck (sum,targetNumber) {
    console.log("sumCheck is running");
    console.log("sum: " + sum);
    console.log("target: " + targetNumber);
    if (sum === targetNumber) {
        console.log("You won! Good game!");
        wins[i]=wins[i]+1;
        console.log("wins: " + wins); 
        setUp(); 
    }
    else if (sum > targetNumber) {
        console.log("Uh oh too many numbers! Computer wins");
        setUp ();
    }
}

/*
helpful scope example:

var x = 8;
var y = 10;

function squared(z) {
    var multiply = (z*z);
    console.log(multiply);
}
squared(x)
squared(y)

This would console.log 
64
100

*/
