let displayValue = document.querySelector("#display")

const add = function(x,y) {
    let ans = x + y
    return ans
}

const subtract = function(x,y) {
    let ans = x - y
    return ans
}

const multiply = function(x,y) {
    let ans = x * y
    return ans
}

const divide = function(x,y) {
    if (y === 0) {
        return "ERROR"
    }
    let ans = x / y 
    return ans
}

const operate = function (num1, num2, operater){
    switch (operater){
        case '+':
            return add(num1,num2);
        case '-':
            return subtract(num1,num2)
        case '*':
            return multiply(num1,num2)
        case '/':
            return divide(num1,num2)
    }



}



console.log(add(2,2))
console.log(subtract(5,2))
console.log(multiply(5,5))
console.log(divide(25,5))
console.log(operate(5,6,'-'))