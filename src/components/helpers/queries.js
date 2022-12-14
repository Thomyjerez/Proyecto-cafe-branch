// archivo que nos sirve para hacer las consultas a la api (json-server)

// const URL = 'http://localhost:3004/productos'; json-server

const URL = process.env.REACT_APP_API_CAFE;
console.log(URL)

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

// para dar de alta mi api
// objetos que envio o recibo en la api es por body
export const crearProductoAPI = async(producto)=> {
    try{
       
         const respuesta = await fetch(URL,{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(producto)

         });
        
        return respuesta;       
    }catch(error){
        console.log(error)
    }
}
export const borrarProductoAPI = async(id)=> {
    try{
       
         const respuesta = await fetch(`${URL}/${id}`,{
            method:'DELETE'
         });
        
        return respuesta;       
    }catch(error){
        console.log(error)
    }
}

// para editar el producto/obtener el producto

export const obtenerProductoAPI = async(id)=> {
    try{
        // fetch peticion
        // await esperar
         const respuesta = await fetch(URL+'/'+id);
         const productoBuscado = {
            dato: await respuesta.json(),
            status:respuesta.status
        }
        
        return productoBuscado;       
    }catch(error){
        console.log(error)
    }
}

export const editarProductoAPI = async(id, datosActualizados)=>{
    try{
        const respuesta = await fetch(URL+'/'+id,{
            method: 'PUT',
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(datosActualizados)
        });
        return respuesta;
    }catch (error){
        console.log(error)
    }
} 