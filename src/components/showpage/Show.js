import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class ShowComponent extends  React.Component {
    render () {
        return (
            <Container fluid bsPrefix="showcontainer">
                <Row>
                    <Col>
                       <div> 
                       <div className="SearchBar">
                        <h1>Hello John</h1>
                        </div>
                        </div> 
                    </Col>
                </Row>
            </Container>
        )
    }
}


export default ShowComponent;