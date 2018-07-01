import React, { Component } from 'react';
import './css/App.css';

class Header extends Component {
    render() {
      return (
          <div className="header"> 
            <div className="phone">
                Llámanos
                <i class="fas fa-phone"></i>
                (+34) 555 55 55
            </div>
            <div className="nav" align="right">
                    <div className="search"><i class="fas fa-search"></i><a>Buscar</a></div>
                    <div className="library"><i class="fas fa-book"></i><a>Biblioteca</a></div>
                    <div className="mail"><i class="fas fa-envelope"></i><a>Correo</a></div>
                    <div className="personal"><i class="fas fa-key"></i><a>Área personal</a></div>
                    <div className="language"><a>Español </a><i class="fas fa-sort-down"></i></div>
               
            </div>
          </div>
      );
    }
}
export default Header;

