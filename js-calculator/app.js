window.onload = () => {

    // Get browser elements and values
    const firstNumber = document.getElementById('firstNumber');
    const secondNumber = document.getElementById('secondNumber');
    const dropdown = document.querySelector('select');
    const submit = document.getElementById('equals');
    const answer = document.querySelector('.answer');

    console.log(firstNumber.value);
    console.log(dropdown.value);
    console.log(secondNumber.value);

    // Write the logic, a calculator
    // Inputs: firstNumber, operator, secondNumber
    // Return: answer
    const calculate = (firstNumber, operator, secondNumber) => {
        const firstFloat = parseFloat(firstNumber);
        const secondFloat = parseFloat(secondNumber);
        switch (operator) {
            case "+":
                return firstFloat + secondFloat;
            case "-":
                return firstFloat - secondFloat;
            case "/":
                return firstFloat / secondFloat;
            case "*":
                return firstFloat * secondFloat;
        }
    }

    // Run the calculator with the data from the page
    console.log(calculate(firstNumber.value, dropdown.value, secondNumber.value));
    
    submit.addEventListener("click", (event) => {
        event.preventDefault();
        // console.log("click!!!!!");
    });
    submit.addEventListener("click", (event) => {
        event.preventDefault();
        // console.log("click!!!!!");
        // Run the calculator with the data from the page
        const result = calculate(firstNumber.value, dropdown.value, secondNumber.value);
        answer.innerHTML = result;
    });
}