import React from "react";
import { Link } from 'react-router-dom';
import Navegador from "../components/Navegador";

const Home = () => {
    return (
        <>
            <Navegador />
            <div className="container mt-5">
                <div className="jumbotron p-5 text-center" style={{ backgroundColor: '#f8f9fa', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <h1 className="display-4">¡Bienvenido a Mercado Libre!</h1>
                    <p className="lead">Tu sitio de confianza para encontrar los mejores productos al mejor precio.</p>
                    <hr className="my-4" />
                    <p>Explora nuestras secciones para encontrar lo que necesitas:</p>
                    <div className="d-flex justify-content-around mt-4">
                        <Link to="/productos" className="btn btn-primary btn-lg" style={{ minWidth: '150px' }}>Ver Productos</Link>
                        <Link to="/cargar" className="btn btn-success btn-lg" style={{ minWidth: '150px' }}>Carga Tu Producto</Link>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-4 mb-4">
                        <div className="card h-100" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                            <div className="card-body text-center">
                                <h5 className="card-title">Productos Destacados</h5>
                                <p className="card-text">Descubre nuestros productos más populares y mejor valorados.</p>
                                <Link to="/productos" className="btn btn-secondary">Ver Más</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card h-100" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                            <div className="card-body text-center">
                                <h5 className="card-title">Ofertas Especiales</h5>
                                <p className="card-text">No te pierdas nuestras ofertas y descuentos especiales.</p>
                                <Link to="/productos" className="btn btn-secondary">Ver Más</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card h-100" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                            <div className="card-body text-center">
                                <h5 className="card-title">Nuevos Productos</h5>
                                <p className="card-text">Mira los productos más recientes añadidos a nuestro catálogo.</p>
                                <Link to="/productos" className="btn btn-secondary">Ver Más</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
