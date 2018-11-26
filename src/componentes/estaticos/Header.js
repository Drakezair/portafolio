import React, {Component} from 'react';
import '../../css/header.css';

//IMAGENES
import Avatar from '../../assets/img/avatar.jpg';

class Header extends Component {

  render(){
    return(
      <div className={this.props.animName} >
        <div className="socialContainH">
          <a href="https://www.github.com/drakezair">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://twitter.com/drakezair1">
            <i className="fab fa-twitter-square"></i>
          </a>
          <a href="https://instagram.com/drakezair">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://platzi.com/@drakezair">
            <img src={require('../../assets/img/Platzi.png')} alt="platzi"/>
          </a>
        </div>
        <img src={Avatar} alt="Icono" className="icono-imgH" />
        <a href="mailto:andradex.js07@gmail.com" className="contactoButtonH">Contáctame</a>
      </div>
    )
  }
}

export default Header;
