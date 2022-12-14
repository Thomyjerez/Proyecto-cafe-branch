import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { crearProductoAPI } from "../../helpers/queries";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CrearProducto = () => {
  // validacion de formulario
  const {register, handleSubmit, formState:{errors},reset} = 
  useForm({
      defaultValues:{
      nombreProducto:'',
      precio: 1,
      imagen:'',
      categoria:''
    }}
  );
  // inicializar a useNavigate
const navegacion = useNavigate();


  const onSubmit = (datos)=>{
    // los datos ya estan validados
    console.log(datos)
    console.log('desde submit')
    // enviar los datos a la API
    crearProductoAPI(datos).then((respuesta)=>{
      if (respuesta.status === 201){
        // el producto se creo
        Swal.fire('Producto creado','El producto fue creado correctamente','success')
        // para resetear los values
        reset();
        // redireccionar
        navegacion('/administrador')
      }else{
        // mostrar un mensaje de error al usuario
        Swal.fire('Ocurrio un error','Vuelva a intentarlo mas tarde','error')
      }
    })
  } 


  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Nuevo producto</h1>
      <hr />

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombreProdcuto">
          <Form.Label>Nombre producto*</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Ej: Cafe"
          {...register('nombreProducto',
          {required:'Este dato es obligatorio', 
            minLength:{
              value:2,
              message:'Debe ingresar un minimo de 2 caracteres'
            },
            maxLength:{
              value:50,
              message:'Debe ingresar un maximo de 20 caracteres'
            }    
        })}
          />
          <Form.Text className="text-danger">
            {errors.nombreProducto?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Precio*</Form.Label>
          <Form.Control type="number" placeholder="Ej: 50"
          {...register('precio',{
            required:'El precio es un valor requerido',
            min:{
              value:1,
              message:'El precio minimo debe ser de $1'
            },
            max:{
              value: 10000,
              message:'El precio maximo debe ser de $10.000'
            }
          })} />
          <Form.Text className="text-danger">
            {errors.precio?.message}
            </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
            {...register('imagen',{
              required:'La url de la imagen es obligatoria',
              pattern:{
                value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                message:'Debe ingresar una URL valida'
              }
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select {...register('categoria',{
            required:'Debe seleccionar una categoria'
          })}>
            <option value="">Seleccione una opcion</option>
            <option value="bebida caliente">Bebida caliente</option>
            <option value="bebida fria">Bebida fria</option>
            <option value="dulce">Dulce</option>
            <option value="salado">Salado</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.categoria?.message}
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default CrearProducto;
