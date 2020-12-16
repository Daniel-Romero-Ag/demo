var $num1 = document.getElementById("num1");
var $num2 = document.getElementById("num2");
var $suma = document.getElementById("suma");
var $resta = document.getElementById("resta");
var $resultado = document.getElementById("resultado");

$suma.addEventListener("click", sumar);

function sumar(e) {
    e.preventDefault();
    var resultado = $num1.value + $num2.value;
    console.log(resultado);
}