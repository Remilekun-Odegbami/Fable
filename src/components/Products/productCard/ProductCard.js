import './productCard.css';

export default function ({ productImage, productName, price }) {
    return (
        <div>
            <section className='mt-3 product-card'>
                <div className='container'>
                    <div className='row'>
                        <div className="card">
                            <img src={productImage} className="card-img-top" alt={productName} />
                            <div className="card-body text-center">
                                <h5 className="card-title">{productName}</h5>
                                <h4 className="card-text">&#8364;{price}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
