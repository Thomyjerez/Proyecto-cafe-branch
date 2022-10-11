// archivo que nos sirve para hacer las consultas a la api (json-server)

const URL = 'http://localhost:3004/productos';

// peticion get que trae todos los productos

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
