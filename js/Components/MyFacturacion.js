

export let ProductosMedia =async ()=>{
    const url = 'http://localhost:41987/compra';
    try {
        const response = await fetch(url);
        let result = await response.json();   
        result.forEach(val => {
            operaciones(val)
            contador++;
        });  
        if (contador == result.length){
            console.log("wea gome");
        }
        } catch (error) {
                console.error(error);
        }
}

let TotalSinIva = 0
let contador = 0;
function operaciones(data) {
    TotalSinIva = TotalSinIva + data.precio;
    return TotalSinIva
}



export default{
    showForm(data){
        const ws = new Worker("./js/Components/wsMyInicio.js", {type: "module"});
        let id = [];
        let count= 0;
        ws.postMessage({module: "displayForm", data: data})
        id = [".contenedorPart1"]
        ws.addEventListener("message", (e)=>{
        let doc = new DOMParser().parseFromString(e.data, "text/html");
        document.querySelector(id[count]).append(...doc.body.children);
        (id.length-1==0) ? ws.terminate(): count++;
        });
    }
}
