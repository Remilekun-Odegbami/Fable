import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './singleProduct.css'

export default function SingleProduct() {
    const { id } = useParams();
    const [product, setProducts] = useState([]);

    useEffect(() => {
        (
            async function () {
                try {
                    const res = await axios.get(`http://localhost:5000/api/products/${id}`)
                    setProducts(res.data.data);
                } catch (error) {
                    console.log(error);
                }
            }
        )()
    }, [])

    return (
        <section className="single-product">
            <div className="container-fluid">
                <div className="row">
                    <h6 className="intro">Fable of Klassik  —  Jacket</h6>
                    <div className="col-md-5">
                        <div className="product-image">
                            {
                                product?.image?.map((img, index) => (
                                    <img src={img} alt={product?.name} className="img-fluid" key={index} />
                                ))
                            }
                        </div>
                    </div>

                    <div className="col-md-7">
                        <div className="product-details">
                            <h1 className="name">{product?.name}</h1>
                            <h5 className="price">&#8364;{product?.price}</h5>
                            <button
                                className="btn"

                            >
                                Add to Cart
                            </button>
                        </div>
                        <div className="product-info mt-4 mb-4">
                            <h3 className="heading">Product Info</h3>
                            <h3 className="full-info">{product?.desc}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
