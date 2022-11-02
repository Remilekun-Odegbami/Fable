import React from 'react'

export default function Table() {
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Number</th>
                        <th scope="col">Order</th>
                        <th scope="col">Date</th>
                        <th scope="col">Summary</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">849234</th>
                        <td>Jacket KLS Black M, Trousers KLS Black M, Shirt KLS White M</td>
                        <td>20.09.2022</td>
                        <td>&#8364; 180</td>
                    </tr>
                    <tr>
                        <th scope="row">835012</th>
                        <td>Short KLS Graphite S, Jacket KLS Graphite M</td>
                        <td>03.11.2021</td>
                        <td>&#8364; 340</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
