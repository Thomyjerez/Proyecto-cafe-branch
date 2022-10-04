import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/views/Home'
import Administrador from './components/views/Administrador'
import Error from './components/views/Error'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exac path='/' element={<Home></Home>}></Route>
        <Route exac path='/administrador' element={<Administrador></Administrador>}></Route>
        <Route exac path='*' element={<Error></Error>}></Route>
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
