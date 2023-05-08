export default{
    showInicio(){
        const ws = new Worker("./js/Components/wsMyInicio.js", {type: "module"});
        let id = [];
        let count= 0;
        ws.postMessage({module: "displayInicio", data: this.data})
        ws.postMessage({module: "displaySectionInicial", data: this.data})
        id = [".contenedorPart1", ".section"]
        ws.addEventListener("message", (e)=>{
        let doc = new DOMParser().parseFromString(e.data, "text/html");
        document.querySelector(id[count]).append(...doc.body.children);
        (id.length-1==0) ? ws.terminate(): count++;
        });
    }
}
