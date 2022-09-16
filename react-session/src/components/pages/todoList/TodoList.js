import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
const TodoList = () => {
    const todoList = [
        {
            id: 1,
            title: 'To do item title 1',
            desc: 'To do item 1 shot description To do item 1 shot description',
            time: '09-16-2022'
        },
        {
            id: 2,
            title: 'To do item title 2',
            desc: 'To do item 2 shot description To do item 2 shot description',
            time: '09-16-2022'
        },
        {
            id: 3,
            title: 'To do item title 3',
            desc: 'To do item 3 shot description To do item 3 shot description',
            time: '09-16-2022'
        }
    ]
    return (
        <>
            <Container>
                <h3>Todo List</h3>
                <hr />
                <Row>
                    <Col sm={3} className="my-1">
                        <Card >
                            <Card.Body>
                                <Card.Title>{todoList[0].title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted"  style={{fontSize:'0.8em'}}>{todoList[0].time}</Card.Subtitle>
                                <Card.Text>
                                    {todoList[0].desc}
                                </Card.Text>
                                {/* <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link> */}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col  sm={3} className="my-1">
                        <Card >
                            <Card.Body>
                                <Card.Title>{todoList[1].title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted"  style={{fontSize:'0.8em'}}>{todoList[1].time}</Card.Subtitle>
                                <Card.Text>
                                    {todoList[1].desc}
                                </Card.Text>
                                {/* <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link> */}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col  sm={3} className="my-1">
                        <Card >
                            <Card.Body>
                                <Card.Title>{todoList[2].title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted"  style={{fontSize:'0.8em'}}>{todoList[2].time}</Card.Subtitle>
                                <Card.Text>
                                    {todoList[2].desc}
                                </Card.Text>
                                {/* <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link> */}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>



            </Container>
        </>
    );
}
export default TodoList;

