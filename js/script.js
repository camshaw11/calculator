// dom elements to manipulate

let screen = document.querySelector(".screen-number");
let screenSmall = document.querySelector(".text-small");
let btnGroup = document.querySelector(".button-wrapper");

// variables to keep track of totals
// 1. keep track of the running total
// 2. the previous operator to hold our -+/* that was clicked
// 3. the temporary value 

let runningTotal = 0;
let previousOperator = 0;
let temp = "0";

// create event listener to listen for clicks
// event bubbling on all buttons
btnGroup.addEventListener("click", buttonClicked);

// run function on button click
function buttonClicked(e) {
    // set value = to user click
    let value = e.target.innerText;
    // if value clicked on is a number 
    // or if value is a decimal point
    if (value === "." || !isNaN(value)){
        // run function to handle value
        handleNumber(value);
    }
    // if value clicked on is not a number
    else if (!parseInt(value)) {
        // run function to handle the symbol
        handleSymbol(value);
    }
    // call function to re render screen
    reRender();
}

// function if value is a number or decimal 
handleNumber = (value) => {
    // if temp number is 0
    // temp is now assigned the value that was clicked  
    if (temp === "0") {
        temp = value;
    } else if (screenSmall.innerText.includes("=")) {
        // if equation has finished and user types in another number
        // clear screen and empty values
        // our total is cleared back to 0
        runningTotal = 0;
        // we set our previous operator to null
        previousOperator = null;
        screenSmall.innerText = "";
        // set temp as value clicked
        temp = value; 
    } else {
        // else we append the value to the temp
        temp += value;
    }
}

// function if value is a special symbol AC, =, CE 
handleSymbol = (value) => {
    // switch statement to check value
    switch (value) {
        // if value clicked is AC //
        case "AC":
            // our total is cleared back to 0
            runningTotal = 0;
            // we set our previous operator to null
            previousOperator = null;
            // clear screen
            screenSmall.innerText = "";
            // set our temp back to 0
            temp = "0";    
            break;
        // if value clicked is CE //
        case "CE":
            // set our temp value back to 0
            temp = "0";
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
            // show full equation on screen
            screenSmall.innerText += ` ${temp} =`;
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

// function to handle math
doMath = (value) => {
    // store temp as integer so we dont lose it
    const integerTemp = parseFloat(temp);
    // if our current total is 0 change it the temp integer
    if (runningTotal === 0) {
        runningTotal = integerTemp;
    }
    // set our previous operator to the value we just clicked so we dont lose it
    previousOperator = value;
    // show equation on screen
    screenSmall.innerText = `${temp} ${previousOperator}`;
    // ready for next value to come in, set temp back to "0"
    temp = "0";
}

// function to handle calculations
calculate = (temp) => {
    if (previousOperator === "+") {
        // add the temp value to running total
        runningTotal += parseInt(temp);
    } else if (previousOperator === "-") {
        // minus temp value from running total
        runningTotal -= parseInt(temp);
    } else if (previousOperator === "×") {
        // multiply temp value by the running total
        runningTotal *= parseInt(temp);
    } else {
        // divide temp value by the running total
        runningTotal /= parseInt(temp);
    }
}

// rerender function
reRender = () => {
    // sets the text on screen to the current value
    screen.innerText = temp;
}