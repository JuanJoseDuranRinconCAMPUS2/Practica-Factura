import { dismensadorData } from "./MyTienda.js";

dismensadorData.showModal()
export let Productos =async ()=>{
    const url = 'http://localhost:41987/productos';
    try {
        const response = await fetch(url);
        let result = await response.json();    
        
        result.forEach(val => {
            dismensadorData.showCards(val)
        });  
        console.log(result);
        } catch (error) {
                console.error(error);
        }
}

export let wsMyTienda = {
    displaySection(p1){
        return`
        <div id="DonTienda">
                <div id="DonTienda-img">
                    <img src="./img/tiendavirtual.jpg" alt="DonLucho">
                </div>
                <div id="DonTienda-p">
                    <p>
                    Bienvenido a la tienda virtual de Don lucho, en esta seccion podras hacer tu canasta familiar!, recuerda
                    presionar el simbolo del carrito de mercado para revisar tus compras, cuando este todo el pedido hecho preciona comprar y dirigete a la 
                    seccion de Facturacion.
                    </p>
                </div>
        </div>
        `
    },
    displayCards(p1){
        return`
        <div class="mercado">
            <div class="mercado-imagen">
                <img src="${p1.img}" alt="${p1.name}" width="50px">
            </div>
            <div class="mercado-info">
                <div class="nombre-contenedor">
                    <h2 class="mercado-nombre">${p1.name}</h2>
                    <p>${p1.description}</p><br>
                    <p class="mercado-id">COP$${p1.precio}</p><br>
                </div>
                <button class="btn" id="${p1.id}">
                        ¡Comprar!
                </button>
            </div>
         </div>
        `
    },
    displayModal(p1){
        return`
        <section class="modal">
            <div class="modal__container">
            <h2 class="modal__title">Carrito De Compras!</h2><a href="#" class="modal__close">Cerrar Carrito</a>
            <div class="Compras">
            
            </div>
                <button class="btn2" id="comprar">
                        ¡Comprar!
                </button>
            </div>
        </section>
        `
    },
    displayCompras(p1){
        return`
        <div class="mercado" id="contenedor-${p1.id}">
        <div class="mercado-imagen">
            <img src="${p1.img}" alt="${p1.name}" width="50px">
        </div>
        <div class="mercado-info">
            <div class="nombre-contenedor">
                <h2 class="mercado-nombre">${p1.name}</h2><br>
                <p class="mercado-id">COP$${p1.precio}</p><br>
            </div>
        </div>
        <button class="btn3" id="${p1.id}">
            Eliminar :c!
        </button>
     </div>  
        `
    }
}

self.addEventListener("message", (e)=>{
    postMessage(wsMyTienda[`${e.data.module}`](e.data.data));
})
