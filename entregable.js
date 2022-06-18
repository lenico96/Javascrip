let producto = "";
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