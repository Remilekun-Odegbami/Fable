import React from 'react';
import { NavLink } from 'react-router-dom';
import ProductCard from '../../components/Products/productCard/ProductCard';
import { AllProducts } from '../../AllProducts';
import './home.css';


export default function Home() {
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
                            AllProducts ? AllProducts.map(product => (
                                <NavLink to={`/products/${product.id}`} className='col-md-4' key={product.id}>
                                    <ProductCard
                                        productName={product.name}
                                        ProductId={product.id}
                                        productImage={product.img}
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
