//main logic

const calculator = () => {
    //temp result for each operation
    let forDisplay = "";
    let tempNum = 0;
    let newNum1 = 0;
    let newNum2 = 0;
    let result = 0;
    //main operations - add, subtract, multiply, divide
    //add()
    const add = (a, b) => a + b;
    //subtract()
    const subtract = (a, b) => a - b;
    //multiply()
    const multiply = (a, b) => a * b;
    //divide()
    const divide = (a, b) => a / b;

    //operator() takes an operator and 2 numbers,
    //and then calls one of the above functions on the numbers
    const operator = (num1, arithmetic, num2) => {
        //switch loop selects which function to apply
        switch (arithmetic) {
            case "+":
            result += add(num1, num2);
            break;
            case "-":
            result += subtract(num1, num2);
            break;
            case "*":
            result += multiply(num1, num2);
            break;
            case "/":
            result += divide(num1, num2);
            default:
            return "error"
        }
    }
    const display = () => {
//not done yet
        const numbersBtns = document.querySelectorAll(".number");
        //selects display
        const display = document.querySelector(".display");
        //everytime a number is selected the value
        //gets added to the display
        numbersBtns.forEach( (numBtn) => {
            numBtn.addEventListener("click", (e) => {
                forDisplay += e.target.value;
                if(forDisplay.length < 10) {
                display.textContent = forDisplay;
                tempNum = parseInt(forDisplay);
                }
            });
        });
  
    }
    display()
    console.log(tempNum)
        //selects every number
    // return result

    //more logic to be done
    
}
calculator();
// const text = document.querySelector(".text");
// text.textContent = 102012090