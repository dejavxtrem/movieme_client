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
                    <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} onKeyPress={this.handlePressKey} onClick={this.handleClick}/>
                    <a onClick={this.search}>SEARCH</a>
                        </div>
                        </div> 
                    </Col>
                </Row>
            </Container>
        )
    }
}


export default ShowComponent;