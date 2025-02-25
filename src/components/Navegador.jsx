
import React from 'react';
import { Link } from 'react-router-dom';

const Navegador = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Mercado Libre</Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/productos">Productos</Link>
            </li>
            <li className="nav-item dropdown">
              <Link 
                className="nav-link dropdown-toggle" 
                to="/" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                Acciones
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/cargar">Cargar Producto</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled" aria-disabled="true" to="#">Contacto</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Buscar</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navegador;
