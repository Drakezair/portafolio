import React, { Component } from 'react';
import '../css/certificados.css';

//COMPONENTES
import Header from '../componentes/estaticos/Header';
import Carrera from '../componentes/funcionales/Carrera';

//Imagenes
import wordpress from '../assets/img/carreras/Wordpress.webp'
import fundamentos from '../assets/img/carreras/Fundamentos.png'
import react from '../assets/img/carreras/badge-dorado-carrera-desarrollador-react-622a4de6-3fad-4d10-91ba-d68d060cab4c.png'
import arq from '../assets/img/carreras/badge-arquitecto-frontend.webp'
import ibm from '../assets/img/carreras/badges-IBM.webp'

export default class Certificados extends Component {

  state= {
    badge: [react, wordpress, fundamentos, arq, ibm],
    carrera: ['Desarrollo con React', 'Fundamentos de programación','Desarrollo con Wordpress','Arquitectura Frontend', 'IBM CLoud'],
    current: 0,
  }


  componentDidMount() {
    setInterval(()=>{
      this.setState({
          current: this.state.current === 4 ? 0 : this.state.current + 1
        })
    },5000)
  }

  dataL = [
    {
      titulo: 'Desarrolo con React',
      badge: react,
      cursos: [
        {
          name: "Fundamentos de JavaScript",
          icon: require('../assets/img/cursos/badge-Fundamentos-js.webp')
        },
        {
          name: 'Curso de React.js',
          icon: require('../assets/img/cursos/badge-react-2018-79c5d310-f07d-4398-aca8-311ee5df65a9.png')
        },
        {
          name: 'Curso de Redux',
          icon: require('../assets/img/cursos/badge-redux-8a706f7b-6979-485b-8d5f-68c9663665fd (1).webp')
        },
        {
          name: 'Curso de Webpack',
          icon: require('../assets/img/cursos/badge-webpack-a5cc6702-7344-4973-931b-6981858ae6a7.png')
        },
        {
          name: 'Curso de GraphQL',
          icon: require('../assets/img/cursos/badge-graphql.png')
        },
        {
          name: 'Curso de React Native',
          icon: require('../assets/img/cursos/badge-react-native.png')
        }
      ]
    },
    {
      titulo: 'ARQUITECTURA FRONTEND',
      badge: arq,
      cursos: [
        {
          name: "Curso profesional de Git y Github",
          icon: require('../assets/img/cursos/badge-github.png')
        },
        {
          name: 'Curso de Desarrollo Web Online',
          icon: require('../assets/img/cursos/badge-html-y-css-para-mails.webp')
        },
        {
          name: 'Curso de Responsive Design',
          icon: require('../assets/img/cursos/badge-responsive-design.webp')
        },
        {
          name: 'Curso de CSS Grid Layout',
          icon: require('../assets/img/cursos/badges-css-grids-9809b2c1-434f-45bf-9333-379f5735e570.png')
        },
        {
          name: 'Curso de Animaciones para la Web',
          icon: require('../assets/img/cursos/badge-animaciones-para-web.webp')
        },
        {
          name: 'Curso de PostCSS',
          icon: require('../assets/img/cursos/badges-postcss-b52efd44-2409-4ba6-afab-d913762b4557.png')
        }
      ]
    },
    {
      titulo: 'IBM Cloud',
      badge: ibm,
      cursos: [
        {
          name: 'Fundamentos de IBM Cloud',
          icon: require('../assets/img/cursos/badge-ibm-9524b309-95e5-48dd-8431-fc9a82ce9c70.png')
        }
      ]
    }
  ]

  dataR = [
    {
      titulo: 'Desarrolo con Wordpress',
      badge: wordpress,
      cursos: [
        {
          name: "Curso profesional de Git y Github",
          icon: require('../assets/img/cursos/badge-github.png')
        },
        {
          name: "Fundamentos de Bases de Datos",
          icon: require('../assets/img/cursos/badge-Fundamentos-de-Bases-de-Datos.webp')
        },
        {
          name: 'Introducción a PHP',
          icon: require('../assets/img/cursos/badge-intro-php-nuevo.webp')
        },
        {
          name: 'Curso de Temas y Plugins en WordPress',
          icon: require('../assets/img/cursos/badge-WordPress.webp')
        }
      ]
    },
    {
      titulo: 'Fundamentos de programación',
      badge: fundamentos,
      cursos: [
        {
          name: "Curso profesional de Git y Github",
          icon: require('../assets/img/cursos/badge-github.png')
        },
        {
          name: 'Curso de Programacón Básica',
          icon: require('../assets/img/cursos/badge-prog-basica-2017.png')
        },
        {
          name: 'Fundamentos de Ingeniería de Software',
          icon: require('../assets/img/cursos/badge-ing-software-2017.webp')
        },
        {
          name: 'Fundamentos de Bases de Datos',
          icon: require('../assets/img/cursos/badge-Fundamentos-de-Bases-de-Datos.webp')
        },
        {
          name: 'Curso de Algorítmos con C',
          icon: require('../assets/img/cursos/badge-algoritmos-ad65b237-2c3f-4921-9f5f-8e9d0ce24f15.png')
        },
        {
          name: 'Cursos de Programacón para Padres y Niños',
          icon: require('../assets/img/cursos/badge-prog-padres-y-ninos.png')
        }
      ]
    },

  ]

  render(){
    return(
      <div>
        <Header animName="header" />
        <article className="cer-header">
          <div className="contain">
            <div className="headerWrap">
              <h1 className="title" >Con Platzi aprendí:</h1>
              <div className="slide">
                <img src={this.state.badge[this.state.current]} alt="Badge"/>
                <p>{this.state.carrera[this.state.current]}</p>
              </div>
            </div>
          </div>
        </article>
        <div className="carrerasGrid contain">
          <div className="left">
            {
              this.dataL.map((item, i)=>{
                return <Carrera {...item} key={i} />
              })
            }
          </div>
          <div className="right">
            {
              this.dataR.map((item, i)=>{
                return <Carrera {...item} key={i} />
              })
            }
          </div>
        </div>
      </div>
    );
  }
}
