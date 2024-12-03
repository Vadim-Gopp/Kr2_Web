function count() {
    console.log("X, Y")
    let X = parseInt(elementX.value);
    let Y = parseInt(elementY.value);
    console.log(X, Y)

    // Проверка на ноль, чтобы избежать деления на ноль
    if (X === 0 || Y === 0) {
        result = "Z не определено, X и Y не могут быть равны нулю!"
        check = false
        document.getElementById('Z').value = result;
    } else {
        result = 1 / (X * Y);
        check = true
        document.getElementById('Z').value = String(result);
    }
}

function send() {
    if (check) {
        document.getElementById("UserEnter").submit();
    } else {
        alert("Есть недостатки. Повторите ввод")
    }
}


let result;
let check = false;

const elementX = document.getElementById("X");
const elementY = document.getElementById("Y");

const elementVerify = document.getElementById("count");
elementVerify.addEventListener('click', count);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)