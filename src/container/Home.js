import React, {Component} from 'react';
import '../css/index.css';

//DEPENDENCIAS
import Particles from 'react-particles-js';

//COMPONENTES
import Header from '../componentes/Header';

// IMAGENES
import Avatar from '../assets/img/avatar.jpg';


//Particles params
import Options from '../assets/util/particlesjs-config.json'

class Home extends Component {

  render(){
    return(
      <div>
        <header >
          <a href="" className="contactoButton particlesFix">Contacto</a>
          <h1 className='particlesFix' >Front-end | Videojuegos | Aplicaciones</h1>
          <img src={Avatar} alt="Avatar" className="avatar particlesFix"/>
          <h1 className="headerText particlesFix" >Sigue hambriento, Sigue alocado<br/><span>@Drakezair</span></h1>
          <i class="fas fa-angle-double-down downIcon"></i>
          <div className="particlesContain">
            <Particles params={Options} style={{height: 2}} />
          </div>
        </header>
        <div className="bio">
          <div className="contain">
            <h2>Hola, soy Luis Andrade</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
