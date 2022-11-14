import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ProductCard from '../../components/Products/productCard/ProductCard';
import axios from 'axios';
import { AllProducts } from '../../AllProducts';
import './home.css';


export default function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async function () {
            try {
                const res = await axios.get("https://charming-ray-flannel-nightgown.cyclic.app/api/products")
                setProducts(res.data.data)
            } catch (error) {
                console.log(error);
            }
        })()
    }, [])


    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="main">
                        <h1 className="main-header">Fable of klassik</h1>
                        <h2 className="info">Jackets KLS</h2>
                    </div>
                    <div className="products row">
                        {
                            products ? products.map(product => (
                                <NavLink to={`/products/${product._id}`} className='col-md-4' key={product._id}>
                                    <ProductCard
                                        productName={product.name}
                                        ProductId={product._id}
                                        productImage={product.image[0]}
                                        price={product.price}
                                    />
                                </NavLink>
                            )) : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
