import React from 'react';
import './showpage.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Figure from 'react-bootstrap/Figure'
import FigureImage from 'react-bootstrap/FigureImage'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { withContext } from "../../components/AppContext";
import TvShowContent from "../../components/moviecontent/Tvcontent"
import MovieContent from "../../components/moviecontent/moviecontent"
import TopMovieContent from "../../components/moviecontent/Topmovie"
import {Redirect, Route} from 'react-router-dom';


class ShowComponent extends  React.Component {
     state = {
         value: ''
     }


  
     handleSelect = (e) => {
         console.log(e)
         this.setState({value: e})
         
     }

 


    render () {
        {console.log(this.state.value)}
        return (
            <div>
        { this.props.token ?
                            <React.Fragment>
                            <Row>
                                <Col className="dropdownclass">
                                <div  >
                                <DropdownButton id="dropdown-basic-button" title="Select" onSelect={this.handleSelect}>
                                <Dropdown.Item eventKey="Popular TV Show">Popular TV Show</Dropdown.Item>
                                <Dropdown.Item eventKey="Popular Movies">Popular Movies</Dropdown.Item>
                                <Dropdown.Item eventKey="Top rated">Top Rated</Dropdown.Item>
                                </DropdownButton>
                                </div>
                                </Col>
                            </Row>
                            <Row className="contentrow">
                            {
                                (() => {
                                    switch (this.state.value) {
                                      case 'Popular TV Show':
                                        return <TvShowContent/>;
                                      case 'Popular Movies':
                                        return <MovieContent />;
                                      case 'Top rated':
                                        return <TopMovieContent />;
                                      default:
                                        return ' ';
                                    }
                                  })()
                              
                            }
                       
                            </Row>
                            
                            </React.Fragment>
                             :
                             <React.Fragment>
                                
                            <Redirect to='/'/>
                             </React.Fragment>
    
    }
           




                </div>



        )
    }
}


export default withContext (ShowComponent);