/*
-------------------------------------------------------------------------------------------------
///////////////////////////////////////////////DESAFIOS//////////////////////////////////////////
-------------------------------------------------------------------------------------------------

PRIMER DESAFIO COMPLEMENTARIO PRIMER DESAFIO COMPLEMENTARIO PRIMER DESAFIO COMPLEMENTARIO/APROBADO!

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

/////ENTREGABLE 1 ///////APROBADO////////////////////////////////////////////////////////////////
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

-------------------------------------------------------------------------------------------------
//////////////////////////TEMAS DE LA CLASE, PRACTICA, APUNTES Y EJEMPLOS////////////////////////
-------------------------------------------------------------------------------------------------



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
//a correjir un error en la suma (no suma y concaneta)
//correjido: le agrege el "parseint" antes del promp <<<<<<------------------------------------------------------------

numero1 = parseInt(prompt("ingrese el dato"));
numero2 = parseInt(prompt("ingrese otro dato"));
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

/* ////////////////////////////////////////////////OBJETOS////////////////////////////////////////////////

//objeto literal

/*const persona1 = {
    nombre: "Nico",          
    edad: 39,               //lado derecha es la propiedad y izquierda el valor (nombre / "nico")
    calle: "avenida 123"                                                    
};

//obtener el valor (se puede usar consol.log)
//console.log(persona1.nombre)  //mediante el nombre de su cont + un punto y nombre de la propiedad//

//FUNCION CONSTRUCTORA///


function Persona(nombre, edad, calle) {
    this.nombre = nombre,
    this.edad = edad,
    this.calle = calle
}

//el objeto fue creado en la funcion "Persona" (siempre la primera letra con mayuscula)
//luego con el new le asignas los valores como se ve abajo
//luego se guarde en una variable const asignandole el nombre (lo que esta delante del new)
//esta misma funcion podria usarla para crearvarios objetos solo cambio el nombre de la variable const que cree y los datos de los parametros como se ve abajo
//tambien se puede usar la palabra class que remplazaria al function pero es lo mismo vacicamente, la diferencia es que cuando llames a un metodo perzonalizado no hace falta agregarle la palabra "function" por delante del metodo

const persona1 = new Persona("Nico", 26, "avenida 123");
const persona2 = new Persona("Gaston", 27, "avenida 456");
const persona3 = new Persona("Lucas", 26, "avenida 789");

console.log(persona1);
console.log(persona2);
console.log(persona3);    

//ejemplo con un producto//
function Producto(nombre, precio, caducacion) {
    this.nombre = nombre,
    this.precio = precio,
    this.caducacion = caducacion
};

const producto1 = new Producto("Blueberry", 1500, 2025);

console.log(producto1);




//METODOS///////////////////
//METODOS PERSONALIZADOS/////////
//cuando invoco el metodo se ve lo que tiene la funcion dentro (ejemplo"hola soy") + el nombre, ya que lo concateno llamandolo con el this.nombre

function Producto(nombre, precio, caducacion) {
    this.nombre = nombre,
    this.precio = precio,
    this.caducacion = caducacion

    this.hablar = function () {                 //metodo personalizado "hablar"//
        console.log("hola soy "+this.nombre)
    }
};


const persona1 = new Producto("Blueberry", 2000, 2025);

//invocacion de metodo (se ve enconsola)
persona1.hablar();




//OPERADOR FOR IN//////////////////////////
//creando un for como se ve abajo creo una variable const con el nombre propiedades, al poner "in" + el nombre de la const creada antes(producto)
//al hacer un console.log me arroja lo que hay dentro de la const osea las propiedades y si quiero ver los valores uso los corchetes[] invocando en el console.log("compre de la const" + entre corchetes nombre de la const creada en el for)
const producto = {
    nombre: "Blueberry",
    precio: 2000,
    caducacion: 2025
};

for (const propiedades in producto) {
    

    console.log(producto[propiedades]);
}



// clases//////////////////////////////////////////////////////////////////////////////////////////
//tambien se puede usar la palabra class que remplazaria al function pero es lo mismo vacicamente, la diferencia es que cuando llames a un metodo perzonalizado no hace falta agregarle la palabra "function" por delante del metodo, es lo que se usa ahora

//ejemplo1:

class Producto {
        constructor(nombre, precio, caducacion) {
            this.nombre = nombre,
            this.precio = precio,
            this.caducacion = caducacion
        }
        price() {
            console.log("el precio es "+this.precio)
        }
    };

const producto1 = new Producto("Blueberry", 2000, 2025);

producto1.price();


//ejemplo2
//puedo aplicar metodos antes vistos como number

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = Number(precio);
        this.vendido = false;
    }

    //metodo personalizado//
    sumarIva() {
        this.precio = this.precio * 1.21;
    }
    vender() {
        this.vendido = true;
    }

}

const producto1 = new Producto("Blueberry", 2000);
const producto2 = new Producto("ak47", 2100);

//le suma el iva al invocarl el metodo
producto1.sumarIva();
producto1.vender();
console.log(producto1);

*/






