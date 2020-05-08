import React from 'react';
import './User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus } from '@fortawesome/free-solid-svg-icons'


const User = (props) => {
    //console.log(props);
    const {img, name, phone, email, address, salary} = props.customer;

    return (
        <div className= "user">
            <div className="image">
                <img src={img} alt=""/>
            </div>
            <div className="info_area">
                <h3 className="customer_name">Name: {name}</h3>
                <h6>Phone no: {phone}</h6>
                <h6>Email: {email}</h6>
                <h4>Yearly Income: ${salary}</h4>
                <h6>Address: {address.city}</h6>
                <button className="main_button"
                onClick={()=>props.handleAddFriend(props.customer)}>
                    <FontAwesomeIcon icon={faPlus}/>  Add Friend</button>
            </div>
        </div>
    );
};

export default User;