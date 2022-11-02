import React from 'react';
import './cart.css'

export default function CartItems({ productName, productCollection, article, size, color, price, productImage }) {
    return (
        <div>
            <section className='cartItems mt-2'>
                <div className='container'>
                    <div className='row'>
                        <div className="col-md-4 col-sm-12">
                            <img src={productImage} className="img-fluid" alt={productName} />
                        </div>
                        <div className="col-md-8 col-sm-12 data">
                            <h5 className="name">{productName}</h5>
                            <p className="collection">Collection: {productCollection}</p>
                            <p className="article">Article: {article}</p>
                            <div className="d-flex justify-content-between">
                                <p className="size">Size: {size}</p>
                                <p className="color">Color: {color}</p>
                                <p className="qty">Quantity: <button className='btn btn-qty'>-</button>  1 <button className='btn btn-qty'>+</button> </p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p className="card-text">&#8364;{price}</p>
                                <button className='btn del'>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
