


/////ENTREGABLE COMPLEMENTARIO ///////AGREGE UN ARRAY CONST PRODUCTOS CON 3 OBJETOS EN EL////////////////////////////////////////////////////////////////////////
let producto = "";
let precio = 0;
let cantidad =0;
let precioFinal = 0;
let volver = false;
let total = 0;

const PRODUCTOS = [
   
    { 
    "id": 1,
    "nombre": "AK47",
    "precio": 2000,
    "cantidad": 1
    },
    { 
    "id": 1,
    "nombre": "BLUEBERRY",
    "precio": 2000,
    "cantidad": 1
    },
    { 
    "id": 1,
    "nombre": "LEMON",
    "precio": 2000,
    "cantidad": 1
    },                                                      
]

console.log(PRODUCTOS);
     
     
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
        case "LEMON":
            precio = 2000;
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
