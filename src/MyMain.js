import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import MainImg from './images-restrightResort/homepage-hotel-room-img.jpg';
import './MyMain.css';

const MyMain = () => {
    return (
        <Container fluid className="landingPageContainer">
        <Row className="landingRow justify-content-end">
          <Col md={4} className="landingCol landingCol-glass">
            <div className='brand rest-text'>
                Rest
                </div>
          </Col>
          <Col md={4} className="landingCol landingCol-opaque">
            <div className='slogan slogan-top'>
                You're in the
                </div>
            <div className='brand right-text'>
                right
                </div>
            <div className='slogan slogan-bottom'>
                Place
            </div>    
          </Col>
        </Row>
      </Container>
    )
}

export default MyMain;
