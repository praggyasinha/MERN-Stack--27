import profileImg from '../media/images/profile-img.jpg';
import './Users.css';
function Users() {
    const userDetails = {
        name: 'Manisha',
        location: 'BLR, India',
        phone: '+91-98765432190'
    }
    // function showUpperCase(str){
    //     return str.toUpperCase();
    // }
    const showUpperCase = str => str.toUpperCase();
    const userDetailBody = (
        <div className="User">
            <img src={profileImg} alt={userDetails.name + ' profile image'} className="profile-image" />
            <h3>{userDetails.name}</h3>
            <div>Location: {showUpperCase(userDetails.location)} | Phone: {userDetails.phone}</div>
            <div>{2 + 2}</div>
        </div>
    );

    return (

        <div className="user-details">
            {userDetailBody}
        </div>
    );
}

export default Users;


