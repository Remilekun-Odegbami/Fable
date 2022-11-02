import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { AllProducts } from '../../../AllProducts';
import './singleProduct.css'

export default function SingleProduct() {
    const { id } = useParams();
    const [product, setProducts] = useState([]);

    useEffect(() => {
        setProducts(AllProducts[id - 1]);
    }, [])

    return (
        <section className="single-product" key={id}>
            <div className="container">
                <div className="row">
                    <h6 className="intro">Fable of Klassik  —  Jacket</h6>
                    <div className="col-md-5">
                        <div className="product-image">
                            <img src={product?.img} alt={product?.name} className="img-fluid" />
                        </div>
                    </div>

                    <div className="col-md-7">
                        <div className="product-info">
                            <h1 className="name">{product?.name}</h1>
                            <h5 className="price">&#8364;{product?.price}</h5>
                            <button
                                className="btn"

                            >
                                Add to Cart
                            </button>
                            <div className="product-info mt-4 mb-4">
                                <h3 className="heading">Product Info</h3>
                                <h3 className="full-info">Jacket made of a loose fit makes the product a universal element of the upper layer. Two patch pockets and one hidden pocket. Branded lining with FABLE pattern. Shoulder pads of medium rigidity for shaping.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
