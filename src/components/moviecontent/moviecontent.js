import React from 'react';
import './moviecontent.css';
import Figure from 'react-bootstrap/Figure';
import FigureImage from 'react-bootstrap/FigureImage';
import { withContext } from "../../components/AppContext";
import Row from 'react-bootstrap/Row'


class   MovieContent extends React.Component {
    render () {
        {console.log(this.props.popularMovies)}
        if(this.props.popularMovies) {
            return ( 
                <div>
                    {this.props.popularMovies.map(content => {
                        return  <Figure bsPrefix ="movieclass" >
                        <Figure.Image
                            width={300}
                            height={300}
                            alt="171x180"
                            src={`http://image.tmdb.org/t/p/original${content.backdrop_path}`}
                        />
                        <Figure.Caption className="moviedetails">
                            {content.original_title}
                        </Figure.Caption>
                        </Figure>
                        
                
                    })}
                    
                    {this.props.popularMovies2.map(content2 => {
                        return  <Figure bsPrefix ="imageclass" >
                        <Figure.Image
                            width={300}
                            height={300}
                            alt="171x180"
                            src={`http://image.tmdb.org/t/p/original${content2.backdrop_path}`}
                        />
                        <Figure.Caption className="movietitle">
                            {content2.original_title}
                        </Figure.Caption>
                        </Figure>
                        
                
                    })}
            
                    
                </div>


                
            )
        }
        
    }
}


export default withContext(MovieContent);