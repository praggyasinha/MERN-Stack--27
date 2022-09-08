import profileImg from '../media/images/profile-img.jpg';
import './Users.css';

import Card from 'react-bootstrap/Card';
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: black;
  font-size: 32px;
  color: white;
`;
const ShowMoreStyledLink = styled.a`
    color:red;
    text-transform: uppercase;
`

function Users() {
    const userDetails = [{
        name: 'Manisha',
        location: 'BLR, India',
        phone: '+91-98765432190'
    }, {

        name: 'Deepa',
        location: 'BLR, India',
        phone: '+91-987655590'
    }, {

        name: 'Praggya',
        location: 'BLR, India',
        phone: '+91-999995590'
    }

    ];
    const showUpperCase = str => str.toUpperCase();
    const detailsList = userDetails.map(user => {
        return <Card style={{ width: '100%', border: '1px solid gray', padding: '5px 10px', marginBottom: '5px', borderRadius: '5px' }}>
            <Card.Img variant="top" className='profile-image' src={profileImg} />
            <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>
                    Location: {showUpperCase(user.location)} | Phone: {user.phone}
                </Card.Text>
                <ShowMoreStyledLink href='#'>
                    {/* <StyledButton>Show More</StyledButton> */}
                    some link
                </ShowMoreStyledLink>
            </Card.Body>
        </Card>
    })

    return (
        <div className="user-details">
            {detailsList}
        </div>
    );
}

export default Users;


