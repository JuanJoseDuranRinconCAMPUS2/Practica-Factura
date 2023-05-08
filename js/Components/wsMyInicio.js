export let wsMyInicio ={
    displayInicio(p1){
        return`
        <div id="DonTienda">
                <div id="DonTienda-img">
                    <img src="./img/DonLucho.jpeg" alt="DonLucho">
                </div>
                <div id="DonTienda-p">
                    <p>
                    Bienvenido a la tienda virtual de Don lucho aqui podras encontrar todos los productos de mi tienda, solo tendras que pedirlos y nosotros te llevaremos tu encargo directamente a tu domicilio
                    </p>
                </div>
        </div>
        `
    },
    displaySectionInicial(p1){
        return`
        <div id="introduccion">
            <h2 class="Titulo2">¡Pide lo que quieras!</h2>
            <p>
                ¡Estamos para servirte!, pide lo que necesites en nuestra tienda virtual y nosotros haremos hasta lo imposible para
                llevartelo directamente a tu casa
            </p>
            <button class="botonunu" >
                <span><a href="./productos.html">Vamos a la tienda</a></span>
            </button>
        </div>
        `
    },
}

self.addEventListener("message", (e)=>{
    postMessage(wsMyInicio[`${e.data.module}`](e.data.data));
    })