const calculator = {
    plus: function(a, b){
        return a + b;
    },

    minus: function(a, b){
        return a - b;
    },

    divide: function(a, b){
        return a / b;
    },

    multi: function(a, b){
        return a * b;
    },

    power: function(a, b){
        return a**b;
    }
}

//console.log(greetJun);
const plus = calculator.plus(5, 5)
const minus = calculator.minus(5, 5)
const divide = calculator.divide(5, 5)
const multi = calculator.multi(5, 5)
const power = calculator.power(5, 5)

console.log(plus);
console.log(minus);
console.log(divide);
console.log(multi);
console.log(power);

