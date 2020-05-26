import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import JumbotronClass from './Jumbotron/Jumbotron';
import TitleImg from './titlelist/Title'

class Home extends React.Component {
    render () {
        return (
            <>
      <Row >
        <Col className="colcheck">
        <JumbotronClass/>
        </Col>
      </Row>
      </>
        )
    }
}

export default Home;