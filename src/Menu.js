import React, { Component } from 'react';
import './css/App.css';


class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <hr />
                <div className="menuListado">
                    <ul>
                        <li>INICIO</li>
                        <li>TRAMITES EN LINEA</li>
                        <li>VERIFICACION DE DOCUMENTOS</li>
                        <li>REQUISITOS TECNICOS</li>
                        <li className="contacto">CONTACTO</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Menu;