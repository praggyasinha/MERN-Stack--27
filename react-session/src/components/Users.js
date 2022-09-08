import profileImg from '../media/images/profile-img.jpg';
import './Users.css';

import Card from 'react-bootstrap/Card';

function Users() {
    const userDetails = {
        name: 'Manisha',
        location: 'BLR, India',
        phone: '+91-98765432190'
    }
    const showUpperCase = str => str.toUpperCase();

    return (
        <div className="user-details">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" className='profile-image' src={profileImg} />
                <Card.Body>
                    <Card.Title>{userDetails.name}</Card.Title>
                    <Card.Text>
                        Location: {showUpperCase(userDetails.location)} | Phone: {userDetails.phone}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Users;


