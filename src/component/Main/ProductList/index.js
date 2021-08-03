import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import apiRequest from '../../../api/productApi';

const ProductList = ({ products }) => {
    return (
        <div className="row mb-5">
            {products.map((product, i) =>
                <div key={i} className="col-sm-6 col-lg-4 mb-4" >
                    <div className="block-4 text-center border">
                        <figure className="block-4-image">
                            <Link to={"product/" + product.id}><img src={product.image} alt="Image placeholder" className="img-fluid" /></Link>
                        </figure>
                        <div className="block-4-text p-4">
                            <h3><a href="shop-single.html">{product.name}</a></h3>
                            <p className="mb-0">{product.category}</p>
                            <p className="text-primary font-weight-bold">{product.price}$</p>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

ProductList.propTypes = {

}

export default ProductList
