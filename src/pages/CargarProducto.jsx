import React, { useContext, useState } from "react";
import { ProductosContext } from "../context/ProveedorProductos";
import Navegador from "../components/Navegador"

const CargarProducto = () => {
    const { agregarProducto, setProductos } = useContext(ProductosContext);
    const [nuevoProducto, setNuevoProducto] = useState({ precio: "", name: "", imagen: "" });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNuevoProducto((prevProducto) => ({
            ...prevProducto,
            [name]: value,
        }));
    };

    const handleSubmitProducto = () => {
        // Validar y enviar el nuevo producto al servidor
        if (nuevoProducto.name.trim() === '' || nuevoProducto.precio.trim() === '' || nuevoProducto.imagen.trim() === '') {
            alert('Por favor, completa todos los campos.');
            return;
        }

        fetch("https://664bfe9435bbda10987ea2c9.mockapi.io/users/productos", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(nuevoProducto),
        })
            .then((response) => response.json())
            .then((nuevoProductoCreado) => {
                // Agregar el producto creado al contexto
                agregarProducto(nuevoProductoCreado);
                // Limpiar los campos después de agregar el producto
                setNuevoProducto({ precio: "", name: "", imagen: "" });
                // Actualizar la lista de productos
                return fetch("https://664bfe9435bbda10987ea2c9.mockapi.io/users/productos");
            })
            .then((response) => response.json())
            .then((data) => setProductos(data))
            .catch((error) => console.error(error.message));
    };

    return (
        <div>
        <Navegador></Navegador>
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <div className="card p-4" style={{ width: '100%', maxWidth: '500px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <h2 className="mb-4 text-center">Agregar Producto</h2>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Nombre:</label>
                        <input type="text" name="name" className="form-control" value={nuevoProducto.name} onChange={handleInputChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Precio:</label>
                        <input type="text" name="precio" className="form-control" value={nuevoProducto.precio} onChange={handleInputChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Imagen (url):</label>
                        <input type="text" name="imagen" className="form-control" value={nuevoProducto.imagen} onChange={handleInputChange} />
                    </div>
                    <button type="button" className="btn btn-primary w-100" onClick={handleSubmitProducto}>
                        Cargar Producto
                    </button>
                </form>
            </div>
        </div>
        </div>
    );
};

export default CargarProducto;
