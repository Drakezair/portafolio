import React,{ Component } from 'react';
import '../../css/Footer.css';

class Footer extends Component {

  render() {
    return(
      <footer className="footer">
        <div className="contain">
          <h3 className="footerTitle">Luis Andrade</h3>
          <p className="footerSubTitle">
            Andradex.js07@gmail.com
            <br/>
            @Drakezair
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
