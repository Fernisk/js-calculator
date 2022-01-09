//main logic

const calculator = () => {
    //temp result for each operation
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
    
    // return result

    //more logic to be done
    
}
calculator();