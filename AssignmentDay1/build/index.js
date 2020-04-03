var InterestCalculator = /** @class */ (function () {
    function InterestCalculator(principalAmt, interestRate, timeInYears) {
        if (principalAmt === void 0) { principalAmt = 1000; }
        if (interestRate === void 0) { interestRate = 1; }
        if (timeInYears === void 0) { timeInYears = 1; }
        this.principalAmt = principalAmt;
        this.interestRate = interestRate;
        this.timeInYears = timeInYears;
    }
    InterestCalculator.prototype.calculate = function () {
        console.log("This is an interest calculator!");
        console.log("Simple interest is: " + this.principalAmt * this.interestRate * this.timeInYears / 100);
    };
    return InterestCalculator;
}());
var ShapeCalculator = /** @class */ (function () {
    function ShapeCalculator(numberOfSides) {
        if (numberOfSides === void 0) { numberOfSides = 4; }
        this.numberOfSides = numberOfSides;
    }
    ShapeCalculator.prototype.calculate = function () {
        console.log("This is a shape calculator!");
        console.log("Shape has " + this.numberOfSides + " sides.");
    };
    return ShapeCalculator;
}());
var IntCal = new InterestCalculator(2000, 4, 1);
IntCal.calculate();
var ShapeCal = new ShapeCalculator(3);
ShapeCal.calculate();
