import React, { Component } from 'react';

class Footer extends Component {
    render() {
      return (
          <div class = "footer">
                <div class="adressContact">
                    <div class="adress">
                            Dirección <br/>
                            Lorem ipsum dolor, 30<br/>
                            30500 Las Palmas de Gran Canaria<br/>
                            España
                    </div>
                    <div class="contact">
                            Contacto<br/>
                            Email: ipsum@ipsum.es
                    </div>
                </div>
                <hr />
                <div class="help">
                    <a> Accesibilidad</a>
                    <a>Mapa Web</a>
                    <a>Tablon de anuncio</a>
                    <a>Aviso Legal</a>
                    <a>Proteccion de datos</a>
                    <a>Ayuda</a>
                </div>
          </div>
      );
    }
}
export default Footer;