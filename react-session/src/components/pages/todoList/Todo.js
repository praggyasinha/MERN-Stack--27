import React from "react";
import { Card, Col, Button } from "react-bootstrap";
const Todo = (props) => {
    let {title,time,desc} = props.details;
    const updateTitle=()=>{
        console.log('updateTitle function call',title)
        title='updated title';
        console.log(title);
    }
    return (
        <Col sm={3} className="my-1">
            <Card >
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: '0.8em' }}>{time}</Card.Subtitle>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                    <Button variant="primary" onClick={updateTitle}>Update Title</Button>
                    {/* <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link> */}
                </Card.Body>
            </Card>
        </Col>
    )
};

export default Todo;
