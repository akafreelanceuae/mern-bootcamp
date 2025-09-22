class Calculator {
    constructor() {
        this.history = [];
    }

    add(a, b) {
        const result = a + b;
        this.history.push({
            operation: 'addition',
            operands: [a, b],
            result
        });
        return result;
    }

    subtract(a, b) {
        const result = a - b;
        this.history.push({
            operation: 'subtraction',
            operands: [a, b],
            result
        });
        return result;
    }

    multiply(a, b) {
        const result = a * b;
        this.history.push({
            operation: "multiplication",
            operands: (a, b),
            result
        });
        return result;
    }

    devide(a, b) {
        if (b == 0) throw new Error("Cannot devide by zerp");
        const result = a / b;
        this.history.push({
            operation: "devide",
            operands: (a, b),
            result
        });
        return result;
    }

    getHistory() {
        return this.history;
    }
}

const calc = new Calculator();
console.log(calc.add(5, 3));
console.log(calc.subtract(10, 4));
console.log(calc.multiply(6, 7));
console.log(calc.devide(20, 4));
console.log(calc.getHistory());