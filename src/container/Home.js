import React, {Component} from 'react';
import '../css/index.css';

//DEPENDENCIAS
import Particles from 'react-particles-js';

//COMPONENTES
import Header from '../componentes/estaticos/Header';
import Footer from '../componentes/estaticos/Footer';

// IMAGENES
import Avatar from '../assets/img/avatar.jpg';


//Particles params
import Options from '../assets/util/particlesjs-config.json';

//Chart.js
import {Pie} from 'react-chartjs-2';

class Home extends Component {

  state={
    listerner: true,
    stickyNav: "header",
    recentPos: "800px",
    recentOp: 0,
    pie: false
  }

  componentDidMount(){
    //HEADERSTICK
    let stick = false
    window.addEventListener('scroll',()=>{
      if(window.scrollY >= this.refs.bio.offsetTop)
      {
        stick = true;
        this.setState({
          stickyNav:"header openedH",
        })
      }
      else if(window.scrollY <= this.refs.bio.offsetTop && !stick)
      {
        this.setState({
          stickyNav:"header"
        })
      }
      else
      {
        this.setState({
          stickyNav:"header closedH"
        })
      }

      if(this.state.listerner){

        //bio
        if(window.scrollY + window.innerHeight >= this.refs.bio.offsetTop + this.refs.bio.offsetHeight - 200)
        {
          this.refs.bioTitle.classList.add('show')
          this.refs.bioText.classList.add('show')
          this.refs.bioButton.classList.add('showButton')
        }

        //WORK
        if(window.scrollY >= this.refs.workInfo.offsetTop - this.refs.workInfoWrap.offsetHeight - 170)
        {
          this.refs.workInfoWrap.classList.add('showWork')
        }

        //MEJORES
        if(window.scrollY + window.innerHeight >= this.refs.recent.offsetTop + this.refs.recent.offsetHeight)
        {
          this.refs.recentTitle.classList.add('show');
          this.setState({
            recentPos: 0,
            recentOp: 1
          })
          this.refs.recentButton.classList.add('showButton');
        }

        //STACK
        if(window.scrollY + window.innerHeight >= this.refs.stack.offsetTop + this.refs.stack.offsetHeight) {
          this.refs.stackTitle.classList.add('show');
          this.refs.stackTexto.classList.add('show');
          this.refs.stackSubTitle.classList.add('show');
          this.refs.stackItem1.classList.add('show');
          this.refs.stackItem2.classList.add('show');
          this.refs.stackItem3.classList.add('showR');
        }

        //actTexto
        if(window.scrollY + window.innerHeight >= this.refs.act.offsetTop + this.refs.act.offsetHeight)
        {
          this.refs.actTitle.classList.add('show');
          this.refs.actTexto.classList.add('show');
        }

        //ESTUDIOS
        if(window.scrollY + window.innerHeight >= this.refs.estudios.offsetTop + this.refs.estudios.offsetHeight)
        {
          this.refs.estudiosTitle.classList.add('show');
          this.refs.estudiosText.classList.add('show');
          this.refs.estudiosButton.classList.add('showButton');
        }

        //SKILLS
        if(window.scrollY + window.innerHeight >= this.refs.skills.offsetTop + this.refs.skills.offsetHeight)
        {
          this.refs.skillsTitle.classList.add('show');
          this.setState({pie:true})
        }

        //BLOG

        if(window.scrollY + window.innerHeight >= this.refs.blog.offsetTop +this.refs.blog.offsetHeight)
        {
          this.refs.blogTitle.classList.add('show');
          this.refs.blogText.classList.add('show');
          this.refs.blogButton.classList.add('showButton');
          this.setState({listerner: false})
        }
      }

    })

  }

  render(){
    return(
      <div ref='home' >
        <header >
          <div className="particlesFix socialContain">
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
              <img src={require('../assets/img/Platzi.png')} alt="platzi"/>
            </a>
          </div>
          <a href="" className="contactoButton particlesFix">Contáctame</a>
          <h1 className='particlesFix' >Sigue hambriento, Sigue alocado, Nunca pares de aprender</h1>
          <img src={Avatar} alt="Avatar" className="avatar particlesFix"/>
          <h1 className="headerText particlesFix" >Front-end | Videojuegos | Aplicaciones | Otros <br/><span>@Drakezair</span></h1>
          <i className="fas fa-angle-double-down downIcon"></i>
          <div className="particlesContain">
            <Particles params={Options} style={{height: 2}} />
          </div>
        </header>
        <Header animName={this.state.stickyNav} />
        <div className="bio" ref="bio" >
          <div className="contain">
            <h1 ref='bioTitle' >Hola, soy Luis. Mucho gusto!</h1>
            <p ref='bioText' >
              Empece mi camino Front-end desde hace 2, <br/>
              desarrollo videojuegos hace un año. Me encanta enfrentarme
              a todo tipo de retos. Vivo para aprender y me fascina enseña. <br/>
              Soy curioso y me apasiona la tecnología. <br/>
              Soy estudiante en Platzi.
            </p>
            <a href="biografia" ref='bioButton' className='bioButton' >Conoceme más</a>
          </div>
        </div>
        <div className="workInfo" ref="workInfo" >
          <div className="workInfoWrap" ref='workInfoWrap' >
            <div className="tagWork">
              <img src={require('../assets/img/tagIcons/design.png')} alt=""/>
              <p className="tagTitle" >Diseño</p>
              <p className="tagInfo">Amo los diseños simples, elegantes y llamativos</p>
              <p className="tagSubTitle">Cosas que me gusta diseñar:</p>
              <p className="tagText">UI, UX, Web, aplicaciones, sprites</p>
              <p className="tagSubTitle">Herramientas de diseño:</p>
              <p className="tagText">
                <br/>
                <br/>
                Photoshop
                <br/>
                <br/>
                inVision
                <br/>
                <br/>
                Krita
                <br/>
                <br/>
                Gravit Designer
                <br/>
                <br/>
                Marvel
                <br/>
                <br/>
                Illustrator
                <br/>
                <br/>
                Sketch
              </p>
            </div>
            <div className="tagWork">
              <img src={require('../assets/img/tagIcons/web.png')} alt=""/>
              <p className="tagTitle" >Front-end</p>
              <p className="tagInfo">Convierto ideas en codigo que cobra vida en el navegador</p>
              <p className="tagSubTitle">Lenguajes que hablo:</p>
              <p className="tagText">html, css, scss, PHP, javascript, webpack</p>
              <p className="tagSubTitle">Herramientas de desarrollo:</p>
              <p className="tagText">
                <br/>
                <br/>
                Atom
                <br/>
                <br/>
                yarn
                <br/>
                <br/>
                git
                <br/>
                <br/>
                github
                <br/>
                <br/>
                gitlab
                <br/>
                <br/>
                terminal
                <br/>
                <br/>
                Prepros
              </p>
            </div>
            <div className="tagWork">
              <img src={require('../assets/img/tagIcons/games.png')} alt=""/>
              <p className="tagTitle" >Videojuegos</p>
              <p className="tagInfo">Jugarlos es divertido, pero crearlos es emocionante.</p>
              <p className="tagSubTitle">Generos que mas uso:</p>
              <p className="tagText">plataforma, casual, AR</p>
              <p className="tagSubTitle">Herramientas de creación:</p>
              <p className="tagText">
                <br/>
                <br/>
                Vs code
                <br/>
                <br/>
                Unity3D
                <br/>
                <br/>
                GameMaker
                <br/>
                <br/>
                BitBucket
                <br/>
                <br/>
                Aseprite
                <br/>
                <br/>
                blender3D
              </p>
            </div>
          </div>
        </div>
        <div className="recentWork" ref='recent' >
          <div className="contain">
            <h2 className="recentTitle" ref='recentTitle' >Mis mejores trabajos frontend</h2>
            <div className="recentGrid">
              <RecentCard delay=".4s" pos={this.state.recentPos} op={this.state.recentOp} {...RecentOptions.catpic} />
              <RecentCard delay='.6s' pos={this.state.recentPos} op={this.state.recentOp} {...RecentOptions.cronew} />
              <RecentCard delay='.8s' pos={this.state.recentPos} op={this.state.recentOp} {...RecentOptions.sinmarca} />
            </div>
            <a href="" className="recentButton" ref="recentButton" >Mira todos mis proyectos</a>
          </div>
        </div>
        <div className="divider"></div>
        <div className="stack" ref='stack' >
          <div className="contain">
            <h2 ref='stackTitle' className="stackTitle">¿Que tecnologías uso?</h2>
            <p className="stackTexto" ref='stackTexto' >
              Entre las tecnología que utilizo se encuentran:
              <br/>
              Angular, Vue, React, IBM cloud, Firebase, Bootstrap, Bulma, Redux, Vuforia.
            </p>
            <h2 className="stackSubTitle" ref='stackSubTitle' >Mi stack favorito</h2>
            <div className="stackLogos" ref='stackLogos'>
              <img src={require('../assets/img/stackLogos/Image_3.png')} className="stackItem1" ref='stackItem1' alt="Reac"/>
              <img src={require('../assets/img/stackLogos/Image_2.png')} className="stackItem2" ref='stackItem2' alt="Redux" alt=""/>
              <img src={require('../assets/img/stackLogos/Image_1.png')} className="stackItem3" ref='stackItem3' alt="Firebase" alt=""/>
            </div>
          </div>
        </div>
        <div className="act" ref='act' >
          <div className="contain">
            <h2 className="actTitle" ref='actTitle' >Actualmente</h2>
            <p className="actTexto" ref='actTexto' >
              Colaboro con el desarrollo de "sinMarca", <br/>
              desarrollo proyectos personales; Realizo trabajos Freelance debes en cuando. <br/>
              Imparto cursos de programación basica.
            </p>
          </div>
        </div>
        <div className="estudios" ref='estudios'>
          <div className="contain">
            <h2 className="estudiosTitle" ref='estudiosTitle' >Mis estudios</h2>
            <p className="estudiosText" ref='estudiosText' >
              Ultimamente estoy haciendo mucho enfasis al estudio de tecnologías
              para desarrollo de AR e inteligencia artificial ya que veo un gran potencial en estas tecnologías.
              Tambien estoy aprendiendo sobre PWA y fortalezco mis conocimientos en diseño de interfacez,
              Y constantemente estoy buscando conocimientos en el area del videojuego. <br/>
              Todos mis estudios los realizo a travez de platzi y su comunidad.
            </p>
            <a href="" className="estudiosButton" ref='estudiosButton' >Mis Certificados</a>
          </div>
        </div>
        <div className="divider"></div>
        <div className="Skills" ref='skills'>
          <div className="contain">
            <h2 className="skillsTitle" ref='skillsTitle'>Habilidades</h2>
            {
              this.state.pie ?
                <Pie
                  ref='pie'
                  height={150}
                  data={{
                    labels: ["Web", "Aplicaciones Mobiles", "Diseño",  "VideoJuegos"],
                    datasets: [{
                      label: "My First dataset",
                      backgroundColor: [
                      '#0A58CC',
                      '#CC0A7E',
                      '#ffe226',
                      '#9ECC0A'
                      ],
                      borderColor: '#fff',
                      data: [40,30,20,10],
                    }]
                  }}
                  options={{
                    maintainAspectRatio: true,
                    animations: {
                      easing: 'easeInOutElastic'
                    },
                    legend: {
                      position: 'bottom',
                      labels: {
                        fontSize: 20,
                        fontColor: '#000',
                        fontFamily: 'Montserrat Alternates'
                      }
                    }
                  }}
                />
              :
              null
            }
          </div>
        </div>
        <div className="divider"></div>
        <div className="blog" ref='blog' >
          <div className="contain">
            <h2 className="blogTitle" ref='blogTitle' >Blog</h2>
            <p className="blogText" ref='blogText' >
              Echale un vistazo a mi maravilloso y amado blog, donde escribo no solo de
              tecnología sino tambien de las cosas que disfruto hacer y un poco de
              de mi vida.
            </p>
            <a href="https://medium.com/drakezair" ref='blogButton' ><i className="fab fa-medium"></i></a>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

var RecentOptions = {
  catpic: {
    imagen: require('../assets/img/cardProj/catpic.jpeg'),
    titulo: "Catpic's",
    texto: "Comparte tus fotos donde y cuando quieras.",
    url: 'https://drakezair.github.io/catpic'
  },
  cronew: {
    imagen: require('../assets/img/cardProj/cronew.jpeg'),
    titulo: "Cronew",
    texto: "Compra facíl y rápido (Maqueta)",
    url: 'https://drakezair.github.io/cronew'
  },
  sinmarca: {
    imagen: require('../assets/img/cardProj/sinmarca.jpeg'),
    titulo: "sinMarca",
    texto: "El diseño de un proyecto que no tiene marca",
    url: 'https://drakezair.github.io/sinmarca'
  }
}

//Function COMPONENTES
function RecentCard(props) {


  const styleSheet = {
    background: 'url('+props.imagen+')',
    height: 200,
    width: 260,
    borderRadius: 35,
    overflow: 'hidden',
    position: 'relative',
    top: props.pos,
    transition: `.8s ease-out ${props.delay}`,
    opacity: props.op,
    margin: '0 auto'
  }

  return(
    <div  style={styleSheet}  >
      <div className="recentCard">
        <p className="recentCardTitle">{props.titulo}</p>
        <p className="recentCardText" >{props.texto}</p>
        <a href={props.url} className="recentCardButton">Ver más</a>
      </div>
    </div>
  );
}

export default Home;
