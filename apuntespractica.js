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


function SolicitarNombre() {
    let NombreIngresado = prompt("ingrese nombre")
alert("nombre:" +NombreIngresado);

}

//

//PRACTICANDO (multiplicacion)

let resultado = 0;
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



--------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------

//ENTREGABLE NUMERO 1
/* let producto = "";
let precio = 0;
let cantidad =0;
let precioFinal = 0;
let volver = false;
     
     
     alert("ESTAS POR VER UNAS OFERTAS FLASH, APROVECHALAS ♥");
     
do{

     const compra = (a, b) => { return a * b};
     
     
     let producto = prompt("blisterx3: ak47 \n blueberry \n Ambos").toUpperCase();

     let cantidad = Number(prompt('Ingresa la cantidad?'));
     
     switch(producto){
          case "AK47":
               precio = 2000;
               break;
          case "BLUEBERRY":
               precio = 2000;
               break;
          case "AMBOS":
               precio = 3500;
               break;
          default:
               alert("No elejiste correctamente");
               precio = 0;
               cantidad = 0;
               break;
     }
     
     let precioFinal = compra(precio, cantidad);

     

     
     alert("El valor de la compra es: " + precioFinal);

     alert("Se añadio todo al carrito correctamente.");
     
     
     volver = confirm("Queres volver a elegir tus productos?");

     
     
     
     
     
} while (volver);

alert("Volve pronto para mas ofertas flash :)") 




///////////////////////////////////VERSION MEJORADA DEL ENTREGABLE 1/////////////////////////////////////////////////////////////////

let producto = "";
let precio = 0;
let cantidad =0;
let precioFinal = 0;
let volver = false;
let total = 0;
     
     
alert("ESTAS POR VER UNAS OFERTAS FLASH, APROVECHALAS ♥");
     
do {

    const compra = (a, b) => { return a * b};

     
    let producto = prompt(`
Por favor elija alguna de nuestras ofertas:

* ak47 (blister x 3) - $2000
* blueberry - $2000
* Ambos - $3500

escriba el nombre y presione "aceptar" para continuar,
o presione "cancelar" para salir.
    `).toUpperCase();

    let cantidad = Number(prompt(`
Ingresa la cantidad?

escriba cuantos desea comprar y presione "aceptar" para continuar,
    `));
     
    switch(producto){
        case "AK47":
            precio = 2000;
            break;
        case "BLUEBERRY":
            precio = 2000;
            break;
        case "AMBOS":
            precio = 3500;
            break;
        default:
            alert("No se elijio ninguna opcion");
            precio = 0;
            cantidad = 0;
            break;
    };
     
    precioFinal += compra(precio, cantidad);

    alert("Se añadio todo al carrito correctamente.");

    alert("El valor de la compra es: " + "$" + precioFinal + "-");

    volver = confirm("Queres volver a elegir tus productos?");

} while (volver);

alert(`
Gracias por tu compra 

Volve pronto para mas ofertas flash :)`);

//CORRECCION  <--------------
//agregandole el "+=" puedo hacer que los productos del switch se sumen (precioFinal += compra(precio, cantidad);)//
------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------
*/


