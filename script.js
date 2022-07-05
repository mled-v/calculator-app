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



console.log(add(2,2))
console.log(subtract(5,2))
console.log(multiply(5,5))
console.log(divide(25,5))
