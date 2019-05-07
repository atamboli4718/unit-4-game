/* Logic thought out:

create a var for each crystal (crystal1, crystal2, etc)
create a var for the 4 options the computer can guess from to assign to each crystal 1-12 (options ??)
create a var for the target numbers for the computer to guess from 19-120 (targetNumber)
create a function to randomly generat 4 numbers to put in crystal vars
create a function to randomly generate the target number
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