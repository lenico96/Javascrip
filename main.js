/*PRIMER DESAFIO COMPLEMENTARIO PRIMER DESAFIO COMPLEMENTARIO PRIMER DESAFIO COMPLEMENTARIO/APROBADO!

let pregunta = prompt("Hay una nueva oferta flash (duracion 1hs), queres verlas? No te la podes perder! Si | No");
for(let i=0; i<4; i++){
    if (pregunta == 'Si' || pregunta == 'si'){
        pregunta = prompt(
            "Oferta flash por un blisterx3 semillas de ak47auto al valor de 2000$ , deseas añadir al carro? Si | No");
    } if (pregunta == 'Si' || pregunta == 'si'){
        alert("Añadido al carro exitosamente, procede a el para finalizar la compra con la oferta aplicada, gracias por tu compra ♥ :)");
        break;
        
        
    } if (pregunta.toUpperCase() == 'NO'){
    pregunta = prompt("seguro? Es una oferta unica por tiempo limitado Para finalizar la oferta escribe SALIR");

        
    } else if (pregunta.toUpperCase() == "SALIR"){
        alert("Vuelve pronto para mas ofertas!");
        break;
        
    }       
}

--------------------------------------------------------------------------------------------------------------------------


//FUNCIONES
conjunto de instrucciones que se agrupan para realizar una tarea concreta que luego
se puede reutilizar, se declara usando el "function" + nombre() y se puede invocar
en cualquier linea de codigo

ejemplos y practica


/*function SolicitarNombre() {
    let NombreIngresado = prompt("ingrese nombre")
alert("nombre:" +NombreIngresado);

}

//

//PRACTICANDO (multiplicacion)

/*let resultado = 0;
let numero1 = prompt("ingrese un numero");
let numero2 = prompt("Ingrese otro");

function suma(numero1, numero2) {
    resultado = numero1 * numero2;
    
}



suma(numero1, numero2)
alert(resultado)

//

//CALCULADORA PRACTICA
//a correjir un error en la suma <<<<<<------------------------------------------------------------

numero1 = prompt("ingrese un dato");
numero2 = prompt("ingrese otro dato");
operacion = prompt("ingrese una operacion")
function calculadora(numero1, numero2, operacion) {
    switch (operacion) {
        case "+":
            return numero1 + numero2

        case "-":
            return numero1 - numero2

        case "*":
            return numero1 * numero2    

        case "/":
            return numero1 / numero2    

        

    
        default:
            break;
    }
}

let resultado = calculadora(numero1, numero2, operacion)
alert("el resultado es:" +resultado)


/*



//FUNCIONES ANONIMAS//

const suma = function (a, b) { return a + b};
const resta = function (a, b) { return a - b};

suma(20, 10)
resta(40, 30)

alert(suma(20, 10))
alert(resta(40, 30))
//


/*const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const iva = (x) => x * 0.21;

let precioProducto = 300;
let precioDescuento = 50;
let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto )), precioDescuento)

alert(nuevoPrecio);
