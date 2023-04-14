import React, { useState } from "react";
import './Cart.css'
export default function Cart() {
  const [showCart, setShowCart] = useState(false);

  const handleClick = () => {
    setShowCart(!showCart);
  };
  const cartElements = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    quantity: 2,
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    quantity: 3,
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    quantity: 1,
    
    }
    
    ]
    const totalAmount = cartElements.reduce((total, item) => {
        return total + (item.price * item.quantity);
      }, 0);
      
    const items=cartElements.map((user)=>{
        return(
        <ul className="list">
        <li>{user.title}</li>

        </ul>
    )})
    const price=cartElements.map((user)=>{
        return(
            <ul className="list">
                <li>{user.price}</li>
            </ul>
        )
    })
    const quantity=cartElements.map((user)=>{
        return(
            <ul className="list">
                <li>{user.quantity}</li>
            </ul>
        )
    })
 

  return (
    <div>
      <button onClick={handleClick}>Cart</button>
      {showCart && (
        <div className="cart-icon"><div>
        <h2>Cart</h2>
        <div className="cart-items">
            <div>
        <span>Items </span>
        {items}</div>
        <div>
        <span>Price</span>
        {price}</div>
        <div>
        <span>Quantity</span>
        {quantity}</div>
        
        </div>
        
      </div>
      <span>Total Amount:{totalAmount}</span></div>
          
      )}
      
    </div>
  );
}
