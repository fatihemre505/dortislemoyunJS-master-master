function randomNumber(min, max) {
    let number = Math.round(Math.random() * (max - min));
    return number;
}

var number1, result, number2, operator, True = 0, False = 0;

let selectOperator = ["+", "-", "X", "/"];

let btncvp = document.getElementById("btncvp");

window.onload = function () {

    number1 = randomNumber(0, 100);
    number2 = randomNumber(0, 100);
    operator = selectOperator[3];

    if (operator == "/") {
        while (true) {
            // number 2 ye bölünene kadar devam et 
            if (number1 % number2 == 0) {
                //  console.log("sayı bölünecek artık")
                break;
            }
            number2 = randomNumber(0, 100);
        }
    }

    document.getElementById("operator").innerHTML = operator;
    document.getElementById("number1").innerHTML = number1;
    document.getElementById("number2").innerHTML = number2;

    switch (operator) {
        case "+":
            result = number1 + number2
            break;
        case "-":
            result = number1 - number2
            break;
        case "X":
            result = number1 * number2
            break;
        case "/":
            result = number1 / number2
            break;
        default:
            result = "Geçersiz Seçim";
    }

    document.getElementById("result").innerHTML = result;

}


document.getElementById("refresh").addEventListener("click", function () {

    window.location.reload();

})