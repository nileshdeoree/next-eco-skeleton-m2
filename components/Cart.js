import React from 'react'

const Cart = ({cart, addToCart, removeFromCart, clearCart, subTotal}) => {
  return (
    <div>
        <h1>Cart</h1>
        <ul>
            {Object.keys(cart).map((itemCode)=>(
                <li key={itemCode}>
                    <span>{cart[itemCode].name}</span>
                    <span>{cart[itemCode].qty}</span>
                    <span>{cart[itemCode].price}</span>
                    <button onClick={()=> removeFromCart(itemCode, 1)}>Remove</button>
                </li>
            ))}
        </ul>
        <p>Subtotal: {subTotal}</p>
        <button onClick={()=>clearCart()}>Clear Cart</button>
    </div>
  )
}

export default Cart