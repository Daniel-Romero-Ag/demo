var $num1 = document.getElementById("num1");
var $num2 = document.getElementById("num2");
var $suma = document.getElementById("suma");
var $resta = document.getElementById("resta");
var $multiplicacion = document.getElementById("multiplicacion");
var $division = document.getElementById("division");
var $resultado = document.getElementById("resultado");

$suma.addEventListener("click", sumar);
$resta.addEventListener("click", restar);
$multiplicacion.addEventListener("click", multiplicar);
$division.addEventListener("click", dividir);

function sumar(e) {
    e.preventDefault();
    var resultado = parseInt($num1.value) + parseInt($num2.value);
    $resultado.innerText = resultado;
}

function restar(e) {
    e.preventDefault();
    var resultado = parseInt($num1.value) + parseInt($num2.value);
    $resultado.innerText = resultado;
}

function multiplicar(e) {
    e.preventDefault();
    var resultado = parseInt($num1.value) + parseInt($num2.value);
    $resultado.innerText = resultado;
}

function dividir(e) {
    e.preventDefault();
    var resultado = parseInt($num1.value) + parseInt($num2.value);
    $resultado.innerText = resultado;
}