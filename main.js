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

