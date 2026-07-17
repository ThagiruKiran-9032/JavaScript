function Calculator() {}

Calculator.prototype.add = function (a, b) {
    return a + b;
};

Calculator.prototype.subtract = function (a, b) {
    return a - b;
};

function ScientificCalculator() {}

ScientificCalculator.prototype = Object.create(Calculator.prototype);
ScientificCalculator.prototype.constructor = ScientificCalculator;

ScientificCalculator.prototype.square = function (n) {
    return n * n;
};

ScientificCalculator.prototype.cube = function (n) {
    return n * n * n;
};

const scientificCalculator = new ScientificCalculator();

console.log(scientificCalculator.add(10, 20));
console.log(scientificCalculator.subtract(20,10));
console.log(scientificCalculator.square(5));
console.log(scientificCalculator.cube(3));
