import React  from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import profileImg from '../../../media/images/profile-img.jpg';

const OurExpertise = () => {
    return (
        <Container className="mt-4">
            <Row>
                <Col className="text-center d-flex align-items-center">
                    <h3>Our Expertise</h3>
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