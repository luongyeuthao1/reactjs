import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ProductDetail = props => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    axios({
        method: 'GET',
        url: 'https://5f13a2bc2710570016b37801.mockapi.io/api/products/' + id,
        data: null
    }).then(res => {
        setProduct(res.data)
    }).catch(err => {
        console.log(err);
    });
    return (
        <div className="site-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={product.image} alt="Image" className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <h2 className="text-black">{product.name}</h2>
                        <p>{product.category}</p>
                        <p className="mb-4">Description Description Description Description Description Description Description </p>
                        <p><strong className="text-primary h4">{product.price}$</strong></p>
                        <div className="mb-1 d-flex">
                            <label htmlFor="option-sm" className="d-flex mr-3 mb-3">
                                <span className="d-inline-block mr-2" style={{ top: '-2px', position: 'relative' }}><input type="radio" id="option-sm" name="shop-sizes" /></span> <span className="d-inline-block text-black">Small</span>
                            </label>
                            <label htmlFor="option-md" className="d-flex mr-3 mb-3">
                                <span className="d-inline-block mr-2" style={{ top: '-2px', position: 'relative' }}><input type="radio" id="option-md" name="shop-sizes" /></span> <span className="d-inline-block text-black">Medium</span>
                            </label>
                            <label htmlFor="option-lg" className="d-flex mr-3 mb-3">
                                <span className="d-inline-block mr-2" style={{ top: '-2px', position: 'relative' }}><input type="radio" id="option-lg" name="shop-sizes" /></span> <span className="d-inline-block text-black">Large</span>
                            </label>
                            <label htmlFor="option-xl" className="d-flex mr-3 mb-3">
                                <span className="d-inline-block mr-2" style={{ top: '-2px', position: 'relative' }}><input type="radio" id="option-xl" name="shop-sizes" /></span> <span className="d-inline-block text-black"> Extra Large</span>
                            </label>
                        </div>
                        <div className="mb-5">
                            <div className="input-group mb-3" style={{ maxWidth: '120px' }}>
                                <div className="input-group-prepend">
                                    <button className="btn btn-outline-primary js-btn-minus" type="button">−</button>
                                </div>
                                <input type="text" className="form-control text-center" defaultValue={1} aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-primary js-btn-plus" type="button">+</button>
                                </div>
                            </div>
                        </div>
                        <p><a href="cart.html" className="buy-now btn btn-sm btn-primary">Add To Cart</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

ProductDetail.propTypes = {

}

export default ProductDetail
