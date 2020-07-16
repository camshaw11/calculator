
// create variables to keep track of totals
// 1. we need to keep track of the running total
// 1. and the previous operator to hold our -+/* that was clicked
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

// run function on button click //
function buttonClicked(e) {
    // set value = to user click
    let value = e.target.innerText;

    // if value clicked on is a number 
    // or if value is a decimal point
    // run function to handle value
    if (value === "." || !isNaN(value)){
        handleNumber(value);
    }

    // if value clicked on is not a number
    // run function to handle the symbol
    else if (!parseInt(value)) {
        handleSymbol(value);
    }

    // call function to re render screen
    reRender();
}

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
        case "CE":
            break;
        // if value clicked is '=' //
        case "=":
            // make sure last click was not null
            // if it was null , end switch
            if (previousOperator === null) {
                return;
            }

            // otherwise run calculate function with temp value 
            calculate(temp);
            // set previous operator back to null because equation has finished
            previousOperator = null;
            // temp value now equals our running total
            temp = runningTotal;
            break;
        // otherwise default option is to run math function
        default: 
        doMath(value);
    }


}
// if value clicked is <- //




/////////-----------------------//////////



/////////-----------------------//////////

// run function to handle math
function doMath(value) {
    // store temp as integer so we dont lose it
    const integerTemp = parseInt(temp);

    // if our current total is 0 change it the temp integer
    if (runningTotal === 0) {
        runningTotal = integerTemp;
    }
    // we know if we are in this function our previous operator is an operator
    // set our previous operator to the value we just clicked so we dont lose it
    previousOperator = value;

    // ready for next value to come in, set temp back to "0"
    temp = "0";
}


/////////-----------------------//////////



/////////-----------------------//////////

// run calculate function with temp int as argument
function calculate(temp) {
    console.log(temp)
    console.log(runningTotal)
    // if operator was +
    if (previousOperator === "+") {
        // add the temp value to running total
        runningTotal += parseInt(temp);
    // if operator was -
    } else if (previousOperator === "-") {
        // minus temp value from running total
        runningTotal -= parseInt(temp);
    // if operator was x
    } else if (previousOperator === "×") {
        // multiply temp value by the running total
        runningTotal *= parseInt(temp);
    } else {
        // divide temp value by the running total
        runningTotal /= parseInt(temp);
    }
}

/////////-----------------------//////////



/////////-----------------------//////////

// run re render function
function reRender() {
    // sets the text on screen to the current value
    screen.innerText = temp;
}

/////////-----------------------//////////














