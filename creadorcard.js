const mostrarProductos = () => {
    const cards = document.getElementById("producto-contenedor");

    productos.forEach( producto => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `<div class="card-image">
                            <div><img src=${producto.img}></div>
                            <span class="card-title">${producto.nombre}</span>
                            <div class="card-title">${producto.precio}</div>
                            
                        </div>
                        `
        cards.appendChild(div);
    });
};

mostrarProductos();