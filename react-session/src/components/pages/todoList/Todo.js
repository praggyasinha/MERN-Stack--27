import React from "react";
import { Card, Col } from "react-bootstrap";
const Todo = (props) => {
    const todo = props.details;
    return (
        <Col sm={3} className="my-1">
            <Card >
                <Card.Body>
                    <Card.Title>{todo.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: '0.8em' }}>{todo.time}</Card.Subtitle>
                    <Card.Text>
                        {todo.desc}
                    </Card.Text>
                    {/* <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link> */}
                </Card.Body>
            </Card>
        </Col>
    )
};

export default Todo;
