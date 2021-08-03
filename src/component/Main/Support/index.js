import React from 'react'
import PropTypes from 'prop-types'

const Support = props => {
    return (
        <div className="site-section site-section-sm site-blocks-1">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" >
                        <div className="icon mr-4 align-self-start">
                            <span className="icon-truck" />
                        </div>
                        <div className="text">
                            <h2 className="text-uppercase">Free Shipping</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" >
                        <div className="icon mr-4 align-self-start">
                            <span className="icon-refresh2" />
                        </div>
                        <div className="text">
                            <h2 className="text-uppercase">Free Returns</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4">
                        <div className="icon mr-4 align-self-start">
                            <span className="icon-help" />
                        </div>
                        <div className="text">
                            <h2 className="text-uppercase">Customer Support</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Support.propTypes = {

}

export default Support
