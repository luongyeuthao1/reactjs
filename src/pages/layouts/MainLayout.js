import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from '../../component/Main/Header';
import Footer from '../../component/Main/Footer';


const MainLayout = ({ children }) => {

    return (
        <div className="site-wrap">
            <Header />
            <div >
                {children}
            </div>
            <Footer />
        </div>
    )
}

MainLayout.propTypes = {

}

export default MainLayout
