let url="http://localhost:41987/factura"

let Myheaders = new Headers({
    "content-Type" : "application/json"
});


export let newFactura = async (factura)=>{
    try{
       
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
        },
        body: JSON.stringify(compras)})
    }catch(error){
        console.log(error)
    }
}

export let deleteFactura = async (id) =>{
    try{
        await fetch(`${url}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }catch(error){
        console.log(error)
    }
}