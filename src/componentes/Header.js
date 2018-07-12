import React, {Component} from 'react';
import '../css/index.css';

//IMAGENES
import Avatar from '../assets/img/avatar.jpg';

class Header extends Component {

  render(){
    return(
      <div className="header" >
        <div className="contain">
          <img src={Avatar} alt="Icono" className="icono-img" />
        </div>
      </div>
    )
  }
}

export default Header;
