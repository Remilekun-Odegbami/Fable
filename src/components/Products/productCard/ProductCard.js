import React from 'react';
import './productCard.css'

export default function ({ productName, price, productImage }) {
    return (
        <div>
            <section className='mt-5'>
                <div className='container'>
                    <div className='row'>
                        <div className="card">
                            <img src={productImage} className="card-img-top" alt={productName} />
                            <div className="card-body text-center">
                                <h5 className="card-title">{productName}</h5>
                                <p className="card-text">&#8364;{price}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
