/*programa para validar que no és un número*/

var numero= "2";
var esNumero= !isNaN(numero);
var NoesNumero = isNaN(numero);


if(esNumero) {
    window.alert(numero + " no és un nombre")
    document.getElementById("demo").innerHTML = numero + " no és un número"
} else {
    window.alert(numero + "no és un nombre")
    document.getElementById("demo").innerHTML = numero + " és un numero";
}
