


/////////-----------------------//////////

// create variables to keep track of totals
// 1. we need to keep track of the running total
// 1. and the previous operator
// 1. and the temporary value 

let screen = document.querySelector(".screen");
let btnGroup = document.querySelector(".button-wrapper");
let runningTotal = 0;
let previousOperator = 0;
let temp = "0";



// create event listener to listen for clicks
// event bubbling on all buttons
btnGroup.addEventListener("click", buttonClicked);

/////////-----------------------//////////



/////////-----------------------//////////

// run function on button click //
function buttonClicked(e) {

    let value = e.target.innerText;

    // if value clicked on is a number 
    // or if value is a decimal point
    // run function to handle value
    if (value === "." || !isNaN(value)){
        handleNumber(value)
        console.log(value);
    }

    // if value clicked on is not a number
    // run function to handle the symbol
    else if (!parseInt(value)) {
        handleSymbol(value)
        console.log(value);
    }

    // call function to re render screen
    reRender();
}


// call function to re render screen


/////////-----------------------//////////



/////////-----------------------//////////

// run function if value is a number or decimal //
function handleNumber(value) {
    // if temp number is 0
    // temp is now assigned the value that was clicked  
    if (temp === "0") {
        temp = value;
    } else {
        // else we append the value to the temp 1 1 = 11
        temp += value;
    }
}

/////////-----------------------//////////




/////////-----------------------//////////

// run function if value is a special symbol AC, =, <- //
function handleSymbol(value) {
    // switch statement to check value
    switch (value) {
        // if value clicked is AC //
        case "AC":
            // our total is cleared back to 0
            runningTotal = 0;
            // we set our previous operator to null
            previousOperator = null;
            // set our temp back to 0
            temp = "0";    
            break;
        // if value clicked is '=' //
        case "=":
            // make sure last click was not null
            // if it was null , end switch

            // otherwise run calculate function with temp value 

            // set previous operator back to null because equation has finished

            // temp value now equals out running total
            break;
        // otherwise default option is to run math function
        default: 
        doMath();
    }


}
// if value clicked is <- //




/////////-----------------------//////////



/////////-----------------------//////////

// run function to handle math
function doMath() {

}
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
function reRender() {
    screen.innerText = temp;
}
// sets the text on screen to the current value

/////////-----------------------//////////





// random hsl color
// function randomHsl() {
//     return 'hsla(' + (Math.floor(Math.random()*360) + ', 100%, 70%, 1)';
// }















