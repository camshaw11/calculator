


/////////-----------------------//////////

// create variables to keep track of totals
// 1. we need to keep track of the running total
// 1. and the previous operator
// 1. and the temporary value 



// create event listener to listen for clicks
// event bubbling on all buttons

/////////-----------------------//////////





/////////-----------------------//////////

// run function on button click //


// if value clicked on is not a number
// run function to handle the symbol


// if value clicked on is a number 
// or if value is a decimal point
// run function to handle value


// call function to re render screen


/////////-----------------------//////////







/////////-----------------------//////////

// run function if value is a number or decimal //
// if temp number is 0
// temp is now assigned the value that was clicked

// else we append the value to the buffer 1 1 = 11

/////////-----------------------//////////







/////////-----------------------//////////

// run function if value is a special symbol AC, =, <- //

// switch statement to check value

// if value clicked is AC //

// our total is cleared back to 0
// we set our previous operator to null
// set our temp back to 0


// if value clicked is '=' //
 
// make sure last click was not null
// if it was null , end switch

// otherwise run calculate function with temp value 

// set previous operator back to null because equation has finished

// temp value now equals out running total


// if value clicked is <- //


// otherwise default option is to run math function
// end switch


/////////-----------------------//////////








/////////-----------------------//////////

// run function to handle math
// store temp as integer so we dont lose it

// if our current total is 0 change it the temp number


// we know if we are in this function our previous operator is an operator
// set our previous operator to the value we just clicked so we dont lose it


// ready for next value to come in, set temp back to "0"
/////////-----------------------//////////








/////////-----------------------//////////

// run calculate function with temp int as argument

// if operator was +
// add the temp integer to running total


// if operator was -
// minus temp integer from running total


// if operator was X
// multiply temp integer to the running total


// if operator was /
// divide temp integer by the running total


/////////-----------------------//////////



/////////-----------------------//////////

// run re render function
// sets the text on screen to the current value

/////////-----------------------//////////





// random hsl color
// function randomHsl() {
//     return 'hsla(' + (Math.floor(Math.random()*360) + ', 100%, 70%, 1)';
// }















