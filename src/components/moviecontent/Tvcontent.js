import React from 'react';
import './tvshowcontent.css';
import Figure from 'react-bootstrap/Figure';
import FigureImage from 'react-bootstrap/FigureImage';
import { withContext } from "../../components/AppContext";
import Row from 'react-bootstrap/Row'


class TvShowContent extends React.Component {
    render () {
        // {console.log(this.props.getTopRateTvShow)}
        if(this.props.getTopRateTvShow) {
            return ( 
                <div>
                    {this.props.getTopRateTvShow.map(content => {
                        return  <Figure bsPrefix ="imageclass" >
                        <Figure.Image
                            width={300}
                            height={300}
                            alt="171x180"
                            src={`http://image.tmdb.org/t/p/original${content.backdrop_path}`}
                        />
                        <Figure.Caption className="movietitle">
                            {content.name}
                        </Figure.Caption>
                        </Figure>
                        
                
                    })}
                    {this.props.topRated2.map(content2 => {
                        return  <Figure bsPrefix ="imageclass" >
                        <Figure.Image
                            width={300}
                            height={300}
                            alt="171x180"
                            src={`http://image.tmdb.org/t/p/original${content2.backdrop_path}`}
                        />
                        <Figure.Caption className="movietitle">
                            {content2.name}
                        </Figure.Caption>
                        </Figure>
                        
                
                    })}
       
                    
                </div>


                
            )
        }
        
    }
}


export default withContext(TvShowContent);