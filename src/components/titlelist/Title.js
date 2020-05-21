import React from 'react';
import './title.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'


class TitleImg extends React.Component {
    render () {
        return (

                <Row bsPrefix="rowchange">
                <Col >
                <Image src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/rOar34cNLn2sgDH5FmAa1bvMpBv.jpg" rounded   className="imageclass" />
                </Col>

                <Col >
                <Image src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/rOar34cNLn2sgDH5FmAa1bvMpBv.jpg" rounded  className="imageclass" />
                </Col>

                <Col >
                <Image src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/rOar34cNLn2sgDH5FmAa1bvMpBv.jpg" rounded  className="imageclass" />
                </Col>
                
                <Col >
                <Image src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/rOar34cNLn2sgDH5FmAa1bvMpBv.jpg" rounded  className="imageclass" />
                </Col>

                <Col >
                <Image src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/rOar34cNLn2sgDH5FmAa1bvMpBv.jpg" rounded  className="imageclass" />
                </Col>
                </Row>

                


        )
    }
}


export default TitleImg;