/* Logic thought out:

^create a var for each crystal (crystal1, crystal2, etc)
^create a var for the 4 options the computer can guess from to assign to each crystal 1-12 (options ??)
^create a var for the target numbers for the computer to guess from 19-120 (targetNumber)
^create a function to randomly generat 4 numbers to put in crystal vars
^create a function to randomly generate the target number
^create a function for when the user clicks on each each crystal to add to the sum var    
create a var for the user to add to when they click on each crystal (userGuess)
    disply ^ on the DOM
create a var for wins (wins)
create an alert for when targetOption == clicks, user wins! adds that win to the wins var above
    rerun function to generation the 4 numbers and the target numbers
create a function for if the userGuess > targetNumber   then
    alert "you loose!"
    rerun function to generate #'s 
    wins return to 0 and game starts over

*/


        var crystal1 = $("#crystal1");
        var crystal2 = $("#crystal2");
        var crystal3 = $("#crystal3");
        var crystal4 = $("#crystal4");

        var targetNumber = $("#targetNumber");

        //function for generating random numbers for crystals
        crystal1 = Math.floor(Math.random() * 12) + 1 ;
            console.log(crystal1);
        crystal2 = Math.floor(Math.random() * 12) + 1 ;
            console.log(crystal2);
        crystal3 = Math.floor(Math.random() * 12) + 1 ;
            console.log(crystal3);
        crystal4 = Math.floor(Math.random() * 12) + 1 ;
            console.log(crystal4);

        //function to randomly generate target number
        targetNumber = Math.floor(Math.random() * 120) + 19;
            console.log(targetNumber);

    //var for guesses to increment into
    var sum = 0;

     //functions for clicks to increment into yourGuess var
    $("#crystal1").on("click", function () {
        sum = sum + crystal1; 
        console.log("User guessed: " + crystal1);
        console.log("Total user guess thus far: " + sum);
    });
    
    $("#crystal2").on("click", function () {
        sum = sum + crystal2; 
        console.log("User guessed: " + crystal2);
        console.log("Total user guess thus far: " + sum);
    });
    
    $("#crystal3").on("click", function () {
        sum = sum + crystal3; 
        console.log("User guessed: " + crystal3);
        console.log("Total user guess thus far: " + sum);
    });    
    
    $("#crystal4").on("click", function () {
        sum = sum + crystal4; 
        console.log("User guessed: " + crystal4);
        console.log("Total user guess thus far: " + sum);
    });








    
    


