import React from 'react';
import { Link } from "react-router-dom";

function Cart(props) {
    const { cartItems, onAdd, onRemove } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    
    return(
        <aside className='block col-1'>
            <h2>Cart Items</h2>
            <div>
                {cartItems.length === 0 && <div>Cart is empty</div>}
                {cartItems.map((item) => (
                    <div key={item.id} className='row'>
                        <div className='col-1'>{item.name}</div>
                        <div className='col-1'>
                            <button onClick={() => onRemove(item)} className='remove'>
                                -
                            </button>
                            <button onClick={() => onAdd(item)} className='add'>
                                +
                            </button>
                        </div>
                        <div className='col-1 text-right'>
                            {item.qty} x Rs.{item.price.toFixed(2)}
                        </div>
                    </div>
                ))}
                {cartItems.length !== 0 && (
                    <>
                    <hr />
                    <div className='row'>
                        <div className='col-2'>Items price</div>
                        <div className='col-1 text-right'>Rs.{itemsPrice.toFixed(2)}</div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>Tax price</div>
                        <div className='col-1 text-right'>Rs.{taxPrice.toFixed(2)}</div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>Shipping price</div>
                        <div className='col-1 text-right'>Rs.{shippingPrice.toFixed(2)}</div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <strong>Total price</strong></div>
                        <div className='col-1 text-right'>
                            <strong>Rs.{itemsPrice.toFixed(2)}</strong>
                            </div>
                    </div>
                    <hr />
                    <div className='row'>
                    <button style={{width:"fit-Content",justifyContent:"center",alignItems:"center", display:'flex'}} onClick={() => alert('Implement Checkout!')}>
                       <Link to = "/buynow"> Checkout </Link>
                        </button>

                    </div>
                    </>
                )}
            </div>
        </aside>
    )
}
export default Cart;