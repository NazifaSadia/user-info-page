import React, {useState} from 'react';
import users from '../../fakeData/users_data';
import './Body.css';
import User from '../Users/User';
import Cart from '../Cart/Cart';



const Body = () => {
    //console.log(users);
    const [customers, setCustomers] = useState(users);
    const [cart, setCart] = useState([]);
    
    const handleAddFriend = (customer) => {
        //console.log("Product Added",customer);
        const newCart = [...cart, customer];
        setCart(newCart);
    }
    return (
        <div className= "body_container">
            <div className="user_container">
                {
                     customers.map(cm => <User customer = {cm}
                        handleAddFriend={handleAddFriend}></User>)
                }
               
            </div>
            <div className="cart_container">
                <Cart cart= {cart}></Cart>
            </div>
        </div>
    );
};

export default Body;