import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './jumbotron.css';
import Button from 'react-bootstrap/Button'


class JumbotronClass extends React.Component {
    
    
    render() {
        return (
            <div id="hero" className="Hero" style={{backgroundImage: 'url(https://images.alphacoders.com/633/633643.jpg)'}}>
            <div className="content">
              <img className="logo" src="http://www.returndates.com/backgrounds/narcos.logo.png" alt="narcos background" />
              <h2>Season 2 now available</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque id quam sapiente unde voluptatum alias vero debitis, magnam quis quod.</p>
              <div className="button-wrapper">
              </div>
            </div>
            <div className="overlay"></div>
          </div>

        )
    }
}

export default JumbotronClass;