let dataCompras = []

import { newCompra } from "../getCompras.js";
import { deleteCompra } from "../getCompras.js";

let ProductosModal =async (botonid)=>{
    const url = 'http://localhost:41987/productos/';
    try {
        const response = await fetch(url + botonid);
        let result = await response.json();    
        showCompra(result);
        newCompra(result);
        } catch (error) {
                console.error(error);
        }
}

let ProductosList =async ()=>{
    const url = 'http://localhost:41987/compra';
    try {
        const response = await fetch(url);
        let result = await response.json();   
        result.forEach(val => {
            showCompra(val);
        });  
        
        } catch (error) {
                console.error(error);
        }
}

function showCompra(productos){
    const ws = new Worker("./js/Components/wsMyTienda.js", {type: "module"});
    let id = [];
    let count= 0;
    ws.postMessage({module: "displayCompras", data: productos})
    id = [".Compras"]
    ws.addEventListener("message", (e)=>{
    let doc = new DOMParser().parseFromString(e.data, "text/html");
    document.querySelector(id[count]).append(...doc.body.children);
    (id.length-1==0) ? ws.terminate(): count++; 
    });
}

export default{
    showInicio(){
        const ws = new Worker("./js/Components/wsMyTienda.js", {type: "module"});
        let id = [];
        let count= 0;
        ws.postMessage({module: "displaySection", data: this.data})
        id = [".contenedorPart2"]
        ws.addEventListener("message", (e)=>{
        let doc = new DOMParser().parseFromString(e.data, "text/html");
        document.querySelector(id[count]).append(...doc.body.children);
        (id.length-1==0) ? ws.terminate(): count++;
        });
    }
    
}

export let dismensadorData ={
    showCards(productos){
        let ButtonPromesa = new Promise((resolve, reject) => {
            const ws = new Worker("./js/Components/wsMyTienda.js", {type: "module"});
            let id = [];
            let count= 0;
            ws.postMessage({module: "displayCards", data: productos})
            id = [".products"]
            ws.addEventListener("message", (e)=>{
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector(id[count]).append(...doc.body.children);
            (id.length-1==0) ? ws.terminate(): count++;
            if (productos.id == 6) {
                resolve();
            }
            });
            
          });
        ButtonPromesa.then(() => {
            let botones = document.querySelectorAll(".btn")
            let count = 0;
            ProductosList()
            botones.forEach(boton => boton.addEventListener("click", (event) => {
                const botonId = event.currentTarget.id;
                ProductosModal(botonId)
                alert("Se ha registrado el producto")
             }));
            setTimeout(() => {
                let EliminarBoton = document.querySelectorAll(".btn3");
                EliminarBoton.forEach(boton => boton.addEventListener("click", (event) => {
                    const botonId = event.currentTarget.id;
                    let confirmar = confirm("¿Seguro quieres borrar tu pedido? :c");
                    if (confirmar) {
                        deleteCompra(botonId);
                        }
                 }));
            }, 1000);
        }).catch((error) => {
            console.error(error);
        });     

        
    },
    showModal(){
        const ws = new Worker("./js/Components/wsMyTienda.js", {type: "module"});
        let id = [];
        let count= 0;
        ws.postMessage({module: "displayModal", data: this.data})
        id = ["#contenido"]
        ws.addEventListener("message", (e)=>{
        let doc = new DOMParser().parseFromString(e.data, "text/html");
        document.querySelector(id[count]).append(...doc.body.children);
        (id.length-1==0) ? ws.terminate(): count++;
        });
    }
}
