<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Calculator</title>
    <style>
        /* Basic CSS for Calculator */
        body {
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 100vh;
            background-color: #282c34;
            color: white;
            margin: 0;
            padding: 20px;
            box-sizing: border-box;
        }

        .calculator {
            background-color: #333;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
            margin-bottom: 20px;
        }

        .display {
            background-color: #222;
            padding: 15px;
            font-size: 2em;
            text-align: right;
            color: #fff;
            border-radius: 5px;
            margin-bottom: 20px;
        }

        .buttons {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
        }

        .button {
            padding: 20px;
            font-size: 1.5em;
            border: none;
            border-radius: 5px;
            background-color: #444;
            color: #fff;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        .button:hover {
            background-color: #555;
        }

        .operator {
            background-color: #ff9500;
        }

        .operator:hover {
            background-color: #e08900;
        }

        .equals {
            background-color: #1e90ff;
            grid-column: span 2;
        }

        .equals:hover {
            background-color: #187bcd;
        }

        .clear {
            background-color: #ff3b30;
            grid-column: span 2;
        }

        .clear:hover {
            background-color: #e32d20;
        }

        /* Output section styling */
        .output-section {
            width: 100%;
            max-width: 400px;
            background-color: #333;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
            margin-bottom: 20px;
        }

        .output-title {
            font-size: 1.5em;
            margin-bottom: 10px;
            color: #1e90ff;
        }

        .output-content {
            font-size: 1.2em;
        }
    </style>
</head>
<body>
    <div class="calculator">
        <div id="display" class="display">0</div>
        <div class="buttons">
            <button class="button clear" onclick="clearDisplay()">C</button>
            <button class="button operator" onclick="inputOperator('/')">/</button>
            <button class="button operator" onclick="inputOperator('*')">*</button>
            <button class="button" onclick="inputNumber(7)">7</button>
            <button class="button" onclick="inputNumber(8)">8</button>
            <button class="button" onclick="inputNumber(9)">9</button>
            <button class="button operator" onclick="inputOperator('-')">-</button>
            <button class="button" onclick="inputNumber(4)">4</button>
            <button class="button" onclick="inputNumber(5)">5</button>
            <button class="button" onclick="inputNumber(6)">6</button>
            <button class="button operator" onclick="inputOperator('+')">+</button>
            <button class="button" onclick="inputNumber(1)">1</button>
            <button class="button" onclick="inputNumber(2)">2</button>
            <button class="button" onclick="inputNumber(3)">3</button>
            <button class="button equals" onclick="calculateResult()">=</button>
            <button class="button" onclick="inputNumber(0)">0</button>
            <button class="button" onclick="inputDot()">.</button>
        </div>
    </div>

    <div class="output-section">
        <div class="output-title">Code 2: Array Operations Output</div>
        <div id="code2-output" class="output-content"></div>
    </div>

    <div class="output-section">
        <div class="output-title">Code 3: Object Manipulation Output</div>
        <div id="code3-output" class="output-content"></div>
    </div>

    <script>
        let displayValue = '0';
        let firstOperand = null;
        let secondOperand = false;
        let currentOperator = null;

        function updateDisplay() {
            document.getElementById('display').textContent = displayValue;
        }

        function clearDisplay() {
            displayValue = '0';
            firstOperand = null;
            secondOperand = false;
            currentOperator = null;
            updateDisplay();
        }

        function inputNumber(num) {
            if (secondOperand) {
                displayValue = String(num);
                secondOperand = false;
            } else {
                displayValue = displayValue === '0' ? String(num) : displayValue + num;
            }
            updateDisplay();
        }

        function inputDot() {
            if (!displayValue.includes('.')) {
                displayValue += '.';
            }
            updateDisplay();
        }

        function inputOperator(operator) {
            if (firstOperand === null) {
                firstOperand = parseFloat(displayValue);
            } else if (currentOperator) {
                const result = calculate(firstOperand, parseFloat(displayValue), currentOperator);
                displayValue = `${parseFloat(result.toFixed(7))}`;
                firstOperand = result;
            }
            secondOperand = true;
            currentOperator = operator;
            updateDisplay();
        }

        function calculateResult() {
            if (currentOperator && !secondOperand) {
                const result = calculate(firstOperand, parseFloat(displayValue), currentOperator);
                displayValue = `${parseFloat(result.toFixed(7))}`;
                firstOperand = null;
                currentOperator = null;
                secondOperand = false;
                updateDisplay();
            }
        }

        function calculate(num1, num2, operator) {
            switch(operator) {
                case '+':
                    return num1 + num2;
                case '-':
                    return num1 - num2;
                case '*':
                    return num1 * num2;
                case '/':
                    return num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
                default:
                    return num2;
            }
        }

        // CODE :2 Array Operations
        function sumEN(arr) {
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] % 2 === 0) {
                    sum += arr[i];
                }
            }
            return sum;
        }
        // Display Code 2 output
        document.getElementById('code2-output').textContent = 
            `Sum of even numbers [1, 2, 3, 4, 5, 6]: ${sumEN([1, 2, 3, 4, 5, 6])}, 
             Sum of even numbers [2, 7, 8, 1, 3, 5]: ${sumEN([2, 7, 8, 1, 3, 5])}`;

        // CODE :3 : Object Manipulation
        const Person = {
            firstName: 'Saranya',
            lastName: 'Pabbineedi',
            age: 18,
            getFullName() {
                return `${this.firstName} ${this.lastName}`;
            },
            incrementAge() {
                this.age += 1;
            }
        };

        // Display Code 3 output
        document.getElementById('code3-output').textContent = 
            `Full Name: ${Person.getFullName()}, Age: ${Person.age}`;
        Person.incrementAge();
        document.getElementById('code3-output').textContent += `, Age after increment: ${Person.age}`;
    </script>
</body>
</html>
