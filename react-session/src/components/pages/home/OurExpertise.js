import { Button, Card, Col, Container, Row } from "react-bootstrap";
import profileImg from '../../../media/images/profile-img.jpg';

const OurExpertise = () => {
    return (
        <Container>
            <Row>
                <Col>
                    Our Expertise
                </Col>
                <Col>
                    <Card >
                        <Card.Img variant="top" src={profileImg} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card >
                        <Card.Img variant="top" src={profileImg} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
                <Col><Card >
                    <Card.Img variant="top" src={profileImg} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    );
}
export default OurExpertise;