import React, { useState } from 'react';
import './cart.css'
import { Carts } from '../../Carts';
import CartItems from './CartItems';
import axios from 'axios';

export default function Cart() {
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newOrder = {
            city, address, fullName, phone, email
        }
        try {
            await axios.post("https://charming-ray-flannel-nightgown.cyclic.app/api/customer", newOrder)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='container-fluid cart'>
            <div className="row">
                <h6 className="intro">Shopping Bag  —  Order</h6>
                <div className="col-md-5 col-sm-12">
                    <form className='mt-3' onSubmit={handleSubmit}>
                        <div className="location">
                            <div className="mb-3 col-md-6">
                                <label htmlFor="city">City</label>
                                <input type="text" className='form-control' id='city' placeholder='Enter city' onChange={e => setCity(e.target.value)} />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="address">Address</label>
                                <input type="text" className='form-control' id='address' placeholder='Enter address' onChange={e => setAddress(e.target.value)} />
                            </div>
                        </div>

                        <h2 className='details'>Recipient's details</h2>
                        <div className="mb-3">
                            <label htmlFor="name">Name and surname</label>
                            <input type="text" className='form-control' id='name' placeholder='Enter name and surname' onChange={e => setFullName(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone">Phone</label>
                            <input type="number" className='form-control' id='phone' placeholder='Enter phone number' onChange={e => setPhone(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email">Email</label>
                            <input type="email" className='form-control' id='email' placeholder='Enter email' onChange={e => setEmail(e.target.value)} />
                        </div>

                        <h2 className='details'>Payment method</h2>
                        <div className="d-grid gap-2 btns">
                            <button className='btn'>Payment card</button>
                            <button className='btn'>Cash on delivery</button>
                        </div>

                        <div className="form-check agree">
                            <input className="form-check-input" type="checkbox" value="" id="agree" />
                            <label className="form-check-label" htmlFor="agree">
                                I agree to the terms of the offer and the loyalty policy
                            </label>
                        </div>
                        <button type="submit" className='btn submit'>Place an order</button>
                    </form>
                </div>
                <div className="col-md-7 col-sm-12 cart-items">
                    {
                        Carts ? Carts.map(cart => (
                            <CartItems
                                key={cart.id}
                                productName={cart.name}
                                productImage={cart.img}
                                productCollection={cart.collection}
                                article={cart.article}
                                size={cart.size}
                                color={cart.color}
                                price={cart.price}
                            />

                        )) : null
                    }

                    <div className="grand-total">
                        <div className="tot">
                            <h3 className="text">Summary:</h3>
                            <h3 className="amount">&#8364;340</h3>
                        </div>
                        <div className="tot">
                            <h3 className="text">Delivery:</h3>
                            <h3 className="amount">&#8364;0</h3>
                        </div>
                        <div className="tot">
                            <h3 className="text">Promocode:</h3>
                            <h3 className="amount">&#8364;0</h3>
                        </div>
                        <div className="tot">
                            <h2 className="total">Total:</h2>
                            <h2 className="amount">&#8364;340</h2>
                        </div>
                        <div className="tot promo">
                            <input type="number" name="promocode" placeholder='Enter promocode' />
                            <button type="submit" className='btn'>Apply</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
