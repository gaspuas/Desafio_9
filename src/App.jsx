import { useState } from 'react'
import './App.css'
import { BrowserRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Productos from './pages/Productos';
import CargarProducto from './pages/CargarProducto';
import { ProveedorProductos } from './context/ProveedorProductos';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/slate/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ProveedorProductos>
      <BrowserRouter>
      <Routes>
        <Route path= "/"  element={<Home></Home>}></Route>
        <Route path= "/productos" element= {<Productos></Productos>}></Route>
        <Route path= "/cargar" element={<CargarProducto></CargarProducto>}></Route>
      </Routes>
      </BrowserRouter>
      </ProveedorProductos>
    </>
  )
}

export default App
