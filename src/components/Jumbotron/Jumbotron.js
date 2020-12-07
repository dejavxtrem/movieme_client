import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './jumbotron.css';
import Button from 'react-bootstrap/Button'
import narcos from './narcos.jpg'

class JumbotronClass extends React.Component {
    
    
    render() {
        return (
            <div id="hero" className="Hero" style={{backgroundImage: `url(${narcos})`}}>
            <div className="content">
              <img className="logo" src="/images/narcos.logo.png" alt="narcos background" />
              <h2>Season 2 now available</h2>
              <p>The true story of Colombia's infamously violent and powerful drug cartels fuels this gritty gangster drama series</p>
              <div className="button-wrapper">
              </div>
            </div>
            <div className="overlay"></div>
          </div>

        )
    }
}

export default JumbotronClass;