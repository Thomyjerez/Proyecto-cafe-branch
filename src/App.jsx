import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/views/Home'
import Administrador from './components/views/Administrador'
import Error from './components/views/Error'
import CrearProducto from './components/views/producto/CrearProducto'
import EditarProducto from './components/views/producto/EditarProducto'
import DetalleProducto from './components/views/DetalleProducto'
import Menu from './components/common/Menu'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './components/views/Login'
import Registro from './components/views/Registro';
import Footer from './components/common/Footer'

function App() {
  return (
    <BrowserRouter>
    <Menu></Menu>
      <Routes>
        <Route exac path='/' element={<Home></Home>}></Route>
        <Route exac path='/administrador' element={<Administrador></Administrador>}></Route>
        <Route exac path='*' element={<Error></Error>}></Route>
        <Route exact path='/administar/crear' element={<CrearProducto></CrearProducto>}></Route>
        <Route exact path='/administar/editar/:id' element={<EditarProducto></EditarProducto>}></Route>
        <Route exact path='/detalle-producto' element={<DetalleProducto></DetalleProducto>}></Route>
        <Route exact path='/login' element={<Login></Login>}></Route>
        <Route exact path='/registro' element={<Registro></Registro>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
