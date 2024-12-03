function count() {
    console.log("X, Y")
    let X = parseInt(elementX.innerText);
    let Y = parseInt(elementY.innerText);
    console.log(X, Y)

    // Проверка на ноль, чтобы избежать деления на ноль
    if (X === 0 || Y === 0) {
        result = "Z не определено, X и Y не могут быть равны нулю!"
        document.getElementById('Z').innerText = result;
    } else {

        result = 1 / (X * Y);
        document.getElementById('Z').innerText = result;
    }

}
let result;

const elementX = document.getElementById("X");
const elementY = document.getElementById("Y");

const elementVerify = document.getElementById("count");
elementVerify.addEventListener('click', count);