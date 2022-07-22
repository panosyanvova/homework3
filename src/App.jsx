
import { Component } from 'react';
import './App.css';

class MyHomework extends Component {
  render() {
    return ( 
      <div className="main">
        <div className="header">
          <div className="onePage">
            <h3 className="onePageStyle"> OnePage</h3>
          </div>
          <div>
            <ul className="menu">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Tema</li>
              <li>Pricing</li>
              <li>Drop Down </li>

            </ul>
          </div>
          <div className="contact">
            <p className="contact-title">Contact</p>
            <button className="getStarted-kojak">Get Started</button>
          </div>
        </div>

        <div className="body">
          <div><h1 className="bodyVernagir">One Page Bootstrap <br/>Website Template</h1></div> 
          <div><p className="bodytapancikText">We are tema of talanted designers</p></div> 
          <div><button className="body-kojak">Get Started</button></div> 
        </div>

        <div className="footer">
          <div className="footerCont1">
            <h3 className="footerVernagir">Lorem lpsum</h3>
            <p className="footerText">Volupatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
          </div>
          <div className="footerCont2">
            <h3 className="footerVernagir">Sed ut perspiciatis</h3>
            <p className="footerText">Volupatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
          </div>
          <div className="footerCont3">
            <h3 className="footerVernagir">Magin Dolorse</h3>
            <p className="footerText">Volupatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
          </div>
          <div className="footerCont4">
            <h3 className="footerVernagir">Nemo Enim </h3>
            <p className="footerText">Volupatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
          </div>
        </div>
      </div> 
    )
  }
}




export default MyHomework;
