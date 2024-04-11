// src/ProductList.js
import React from 'react';
// komponenta pro zobrazeni seznamu produku
const ProductList = ({ products }) => {
    return (
        //seznam produktu
        <div className="product-list"> 
        <h2>Seznam produktů</h2>
        <table>
            <thead>
                <tr>
                    <th>Název</th>
                    <th>Úhrada</th>
                    <th>Výskyt na trhu</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product, index) => (
                    <tr key={index}>
                    <td>{product.name}</td>
                    <td>{product.payment}</td>
                    <td>{product.marketPresence ? 'Ano' : 'Ne'}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
};

export default ProductList;
