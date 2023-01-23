"use strict"
function calculation() {
    let prevResult = 0
    return function (numb, operator){
        switch (operator) {
            case '+':
                prevResult += numb;
                break;
            case '-':
                prevResult -= numb;
                break;
            case '*':
                prevResult *= numb;
                break;
            case '/':
                if(!numb) return "Error: divide by 0."
                prevResult /= numb;
                break;
        }
        return prevResult;
    }
}

const calc = calculation();


console.log(calc(5, "+")); // 5
console.log(calc(2, "*")); // 10
console.log(calc(3, "-")); // 7
console.log(calc(2, "*")); // 14
console.log(calc(7, "/")); // 2
