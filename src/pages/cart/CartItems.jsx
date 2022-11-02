import React from 'react'

export default function CartItems({ productName, productCollection, article, size, color, price, productImage }) {
    return (
        <div>
            <section className='mt-5'>
                <div className='container'>
                    <div className='row'>
                        <div className="col-md-6 col-sm-12">
                            <img src={productImage} className="" alt={productName} />
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <h5 className="name">{productName}</h5>
                            <h5 className="collection">{productCollection}</h5>
                            <h5 className="article">{article}</h5>
                            <div className="row">
                                <p className="size">{size}</p>
                                <p className="color">{color}</p>
                                {/* <p className="qty">Quantity: <button className='btn'>-</button>  1 <button className='btn'>+</button> </p> */}
                            </div>
                            <div className="d-flex justify-content-between">
                                <p className="card-text">&#8364;{price}</p>
                                <button className='btn'>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
