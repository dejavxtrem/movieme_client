import React from 'react';
import './topmovie.css';
import Figure from 'react-bootstrap/Figure';
import FigureImage from 'react-bootstrap/FigureImage';
import { withContext } from "../../components/AppContext";
import Row from 'react-bootstrap/Row'


class   TopMovieContent extends React.Component {
    render () {
        {console.log(this.props.topMovies2)}
        if(this.props.topMovies1) {
            return ( 
                <div>
                    {this.props.topMovies1.map(content => {
                        return  <Figure bsPrefix ="movieclass" >
                        <Figure.Image
                            width={300}
                            height={300}
                            alt="171x180"
                            src={`http://image.tmdb.org/t/p/original${content.backdrop_path}`}
                        />
                        <Figure.Caption className="topdetails">
                            {content.title}
                        </Figure.Caption>
                        <Figure.Caption className="topdetails">
                        {content.vote_average}
                        </Figure.Caption>
                        </Figure>
                    })}
                    
                    {this.props.topMovies2.map(content2 => {
                        return  <Figure bsPrefix ="imageclass" >
                        <Figure.Image
                            width={300}
                            height={300}
                            alt="171x180"
                            src={`http://image.tmdb.org/t/p/original${content2.backdrop_path}`}
                        />
                        <Figure.Caption className="topdetails">
                            {content2.title}
                        </Figure.Caption>
                        <Figure.Caption className="topdetails">
                        {content2.vote_average}
                        </Figure.Caption>
                        </Figure>
                        
                
                    })}
                    
               
                    
                </div>


                
            )
        }
        
    }
}


export default withContext(TopMovieContent);