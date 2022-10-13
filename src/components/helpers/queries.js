// archivo que nos sirve para hacer las consultas a la api (json-server)

const URL = 'http://localhost:3004/productos';

// peticion GET que trae  una lista de productos o un producto
// tipos de peticiones
// peticion para crear un prod dentro de la api se llama POST
// peticion DELETE, peticion para borrar
// peticion para modificar un producto, PUT


export const consultarAPI = async()=> {
    try{
        // fetch peticion
        // await esperar
         const respuesta = await fetch(URL);
         const listaProductos = await respuesta.json()
        //  console.log(listaProductos) 
        return listaProductos;       
    }catch(error){
        console.log(error)
    }
}
