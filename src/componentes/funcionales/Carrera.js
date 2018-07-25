import React, {Component} from 'react';


export default class Carrera extends Component
{

  state={
    open: 'carreraOpen',
    disp: ''
  }

  handle(){
    this.setState({
      open: this.state.open === 'carreraOpen' ? '' : 'carreraOpen',
      disp: this.state.open === 'carreraOpen' ? 'none' : '',
    })
  }

  render(){
    return(
      <div className="carreraContain">
        <div className="carreraHeader">
          <img src= {this.props.badge} alt="badge"/>
          <h2>{this.props.titulo}</h2>
        </div>
        <div className="cursosContain" style={{display: this.state.disp}} >
          {
            this.props.cursos.map((curso,i) => {
              return(
                <a href="" className='cursoButton' key={i} >
                  <div className="curso" >
                    <img src={curso.icon} alt=""/>
                    <p>{curso.name}</p>
                  </div>
                </a>
              )
            })
          }
        </div>
        <div className="carreraFooter" onClick={()=>this.handle()} >
          <i className={`fas fa-chevron-down ${this.state.open}`} ></i>
        </div>
      </div>
    )
  }
}
