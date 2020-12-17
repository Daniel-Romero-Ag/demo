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
asdasdas

function multiplicar(e) {
    e.preventDefault();
    var resultado = parseInt($num1.value) + parseInt($num2.value);
    $resultado.innerText = resultado;
}
sadasdasdas

function dividir(e) {
    e.preventDefault();
    var resultado = parseInt($num1.value) + parseInt($num2.value);
    $resultado.innerText = resultado;
}

function master() {
    return "adios";
}

function conflicto() {
    return "hola";
}

function intento1() {
    return "intento1";
}