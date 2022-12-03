function randomNumber(min, max) {
    let number = Math.round(Math.random() * (max - min));
    return number;
}

var number1, result, number2, operator, True = 0, False = 0;

let selectOperator = ["+", "-", "X", "/"];

document.getElementById("showResult").addEventListener("click", resultValue);


window.onload = newQestions();

function newQestions() {

    number1 = randomNumber(0, 50);
    number2 = randomNumber(0, 50);
    operator = selectOperator[randomNumber(0, 3)];

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


    //  document.getElementById("result").innerHTML = result;

}

function resultValue() {

    let answer = Number(document.getElementById("answer").value);

    if (result === answer) {

        True += 1;

    } else {

        False += 1;

    }

    document.getElementById("True").innerHTML = True;
    document.getElementById("False").innerHTML = False;
    document.getElementById("answer").value = "";
    document.getElementById("answer").focus();

    if (True == 10 || False == 10) {

        if (True == 10) {
            document.getElementById("score").innerHTML = "Tebrikler Kazandınız";
            document.getElementById("container-main").style.display = "none";
            setTimeout(() => {
                window.location.reload();
            }, 5000);
        } else {
            document.getElementById("score").innerHTML = "Kaybettiniz";
            document.getElementById("container-main").style.display = "none";
            setTimeout(() => {
                window.location.reload();
            }, 5000);
        }

    }

    newQestions();

}

document.getElementById("refresh").addEventListener("click", function () {

    window.location.reload();

});


document.body.addEventListener("keydown", function (e) {

    if (e.key == "Enter") {

        if (True < 10 && False < 10) {

            resultValue();
        } else {
            console.log("oyun bitti");
        }
    }

})