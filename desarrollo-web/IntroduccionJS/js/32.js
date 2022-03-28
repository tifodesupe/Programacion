

function descargarNuevosClientes() {
    return new Promise(resolve =>{
        console.log("Descargando clientes .......");
        setTimeout( ()=>{
         resolve("..... Listo clientes descargados");
        } ,5000)
    })
}



function descargarUltimosPedidos() {
    return new Promise(resolve =>{
        console.log("Descargando pedidos .......");
        setTimeout( ()=>{
         resolve("..... Listo, pedidos descargados");
        } ,3000)
    })
}



async function app() {
    try {
        // const resultado = await descargarNuevosClientes()
        // console.log(resultado);

         const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos])
    } catch (error) {
        console.error(error);
        
    }
    
    
}
app()