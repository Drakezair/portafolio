import React, { Component } from 'react';
import '../css/biografia.css'
import Footer from '../componentes/estaticos/Footer';

import Avatar from '../assets/img/avatar.jpg';



export default class Biografia extends Component {

  render(){
    return(
      <div>

        <div className="socialContain">
          <a href="https://www.github.com/drakezair">
            <i className="icono fab fa-github"></i>
          </a>
          <a href="https://twitter.com/drakezair1">
            <i className="icono fab fa-twitter-square"></i>
          </a>
          <a href="https://instagram.com/drakezair">
            <i className="icono fab fa-instagram"></i>
          </a>
          <a href="https://platzi.com/@drakezair">
            <img src={require('../assets/img/Platzi.png')} className="a-img" alt="platzi"/>
          </a>
        </div>

        <div className="Banner">
          <h1 className="Banner-title">Sobre mí</h1>
        </div>
        <div className="contain">
          <div className="textContain">
            <h1 className="title">¿Quién soy?</h1>
            <p className="text">
              Hola me llamo Luis Andrade, tengo 19 años, soy venezolano y soy desarrollador de software. <br/>
              Me gustan los videojuegos, la musica y me apasiona la tecnología. Mi interes por la programación
              empezo a mis 14 años gracias a mi hermano, en aquel entonces solo hacia calculadoras en c++, recuerdo que
              lo mas importante que hice en ese entonces fue un juego de Snake.
              <br/> <br/>
              A mis 15 años empece con el desarrollo de videojuegos, fue cuando conoci Unity3D, lo estudie y utilice durante dos año,
              durante el cual tuve la oportunidad de llevar a cabo un proyecto en mi escuela, que consistío en desarrollar un juego de preguntas
              para enseñar cosas acerca de las clases.
              <br/><br/>
              Luego a mis 17 años me contrato un equipo local para desarrollar una app que consistia en una agenda medica complementada con un visor
              DICOM; Yo desarrollaba la app desde unity3D pero poco a poco sin darme cuenta me fui uniendo al desarrollo de la aplicación web.
              Fue un reto enorme debido a que tuve que ir aprendiendo al mismo tiempo que cumplia con el limite de tiempo para entregar mi trabajo, y
              aunque fue dificil logre hacerlo. Y aunque nunca llego a hacerse publico puedo decir que fue una gran experiencia.
              <br/>
              <br/>
              En todo ese proceso compre una suscripcion de platzi, eso cambio todo.
              Desde entonces me dedico a frontend y mobile, he realizado muchos proyectos personales y sigo haciendolo.
              <br/>
              <br/>
              <strong>Intento aprender algo nuevo cada día y me encanta asumir nuevos retos.</strong>
              <br/>
              <br/>
            </p>
          </div>
          <div className="textContain">
            <h1 className="title">¿Cuales son mis metas?</h1>
            <p className="text">
              Siempre he querido colaborar con grandes proyectos que marquen un antes y un despues, y con esto me refiero a que
              quiero que mi trabajo ayude a cambiar para bien la vida de las personas. Quiero principalmente inscentivar al estudio.
              Pienso que el conociemiento nos acerca mas a un mundo mejor.
              <br/>
              <br/>
              Para resumirlo en una oración, <strong> "Mi meta es aprender y enseñar para cambiar el mundo"</strong>.
            </p>
          </div>
          <div className="textContain">
            <h1 className="title">Mi actitud</h1>
            <p className="text">
              Poseo una mezcla un poco extraña entre ser introvertido y extrovertidp al mismo tiempo. Soy capaz de aceptar cuando me equivoco
              y me gusta aprender de mis errores para no volver a cometerlos y poder ayudar a otros a no fallar en los mismo.
              <br/>
              <br/>
              Me empapo de lleno con mi trabajo y me fascina trabajar en grupo y mantener relaciones transparentes y respetuosas.
              <br/>
              <br/>
              Soy en extremo curioso en el sentido que cuando me dicen algo que me llama la atención ó que no entiendo
              tengo que investigar; hasta que no sepa sobre el tema no me siento a gusto.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
