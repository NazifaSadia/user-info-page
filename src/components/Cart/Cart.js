import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;

    let total = 0;
    for(let i = 0; i < cart.length; i++){
        const customer = cart[i];
        total = total + customer.salary;
    }


    return (
        <div>
            <h3>Total Friends : {cart.length}</h3>
             <h5>Total Salary : ${total}</h5>
        </div>
    );
};

export default Cart;