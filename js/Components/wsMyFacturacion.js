export let wsMyFacturacion = {
    displayForm(p1){
        return`
        <fieldset id="FormDatos">
        <legend>Datos Para La Compra</legend>
        <form id="myFormulario">
            <fieldset>
                <legend>Datos De Regitro</legend>
                <h4 id="text1">Ingresa tus datos iniciales</h4>
                <div class="underline">
                </div><br>
                <select name="sede">
                    <option>Tarjeta De Credito</option>
                    <option>Tarjeta De Debito</option>
                    <option>Nequi</option>
                    <option>Efectivo</option>
                </select>
                <input type="text" name="nombre" placeholder="Nombre del Usuario">
                <input type="tel" name="telefono" placeholder="Telefono del Usuario"><br>
                <input type="email" name="Correo" placeholder="Correo del Usuario"><br>
            </fieldset>

            <h4 id="text1>Datos De compra</h4>
            </fieldset>
        </form>     
        `
    }
}

self.addEventListener("message", (e)=>{
    postMessage(wsMyFacturacion[`${e.data.module}`](e.data.data));
})