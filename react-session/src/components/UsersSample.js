import React, { Component } from 'react';
import './Users.css';

class UsersSample extends Component {
    constructor() {

        super();
        this.userDetails = {
            name: 'Manisha',
            location: 'BLR, India',
            phone: '+91-987654326'
        }
    }

    // showUpperCase(str){
    //     return str.toUpperCase();
    // }
    showUpperCase = str => str.toUpperCase();
    render() {

        return (
            <div className="user-details">
                <div className="User">
                    <h3>{this.userDetails.name}</h3>
                    <div>Location: {this.showUpperCase(this.userDetails.location)} | Phone: {this.userDetails.phone}</div>
                    <div>{2 + 2}</div>
                </div>
            </div>
        );
    }
}

export default UsersSample;