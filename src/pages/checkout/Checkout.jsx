import React from 'react';
import cardImg from '../../Media/7.png';
import './checkout.css';
import Table from './Table';

export default function Checkout() {
    return (
        <div className='container checkout'>
            <div className="row">
                <h6 className="intro">Profile  —  Main</h6>
                <h1 className="greet">Hello, Darya!</h1>
                <div className="col-md-4 col-sm-12">
                    <div className="card">
                        <img src={cardImg} className="card-img-top img-fluid" alt="fable" />
                        <div className="card-body">
                            <div className="d-flex justify-content-between card-info-one">
                                <h6 className="card-title">Bonus card</h6>
                                <h6 className="card-text">250 points</h6>
                            </div>
                            <div className="d-flex justify-content-between card-info-two">
                                <p className="card-title">Cashback</p>
                                <p className="card-text">5%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-sm-12">
                    <h2 className="order">Recent order</h2>
                    <Table />
                </div>
            </div>
        </div>
    )
}
