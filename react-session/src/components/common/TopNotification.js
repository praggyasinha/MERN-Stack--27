import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tick from './Tick';
import SocialLink from './SocialLink';
function TopNotification() {
    return (
        <Container fluid className="top-notification-bar">
            <Row>
                <Col md="auto">
                    <Tick />
                </Col>
                <Col>
                    <marquee> Some notification will go here.</marquee>
                </Col>
                <Col md="auto">
                    <SocialLink />
                </Col>
            </Row>
        </Container>

    );
}

export default TopNotification;