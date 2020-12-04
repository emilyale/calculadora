var numero1 = 0
var operador = ""
var numero2 = 0


function calcular(numero1, operador, numero2) {
    switch (operador) {
        case "+": return numero1 + numero2
        case "-": return numero1 - numero2
        case "*": return numero1 * numero2
        case "/": return numero1 / numero2
        case "%": return numero1 % numero2
    }
}

function setarNumero(numeroDigitado) {
    var textoVisor = document.getElementById("visor").innerText
    if (!operador) {
        numero1 = textoVisor + numeroDigitado
    } else {
        numero2 = numero2 + "" + numeroDigitado
    }
    document.getElementById("visor").innerHTML += numeroDigitado
}
function setarOperador(operadorDigitado) {
   if (!operador){
       operador = operadorDigitado
   }else{
       setarResultado()
       operador = operadorDigitado
   }
    document.getElementById("visor").innerHTML += operadorDigitado
}
function setarResultado() {
    var resultado
    if (numero1 && numero2 && operador) {
    resultado = calcular(parseFloat(numero1),operador,parseFloat(numero2))
    }else{
        resultado = 0
    }
    document.getElementById("visor").innerHTML = resultado
    numero1 = resultado 
    numero2 = 0
    operador = ""
}



