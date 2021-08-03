import React from 'react';
import HomeConten from './component/Main/HomeConten';
import ProductList from './component/Main/ProductList';
import Cart from './component/Main/Cart';
import Login from './component/Main/Login';
import CheckOut from './component/Main/CheckOut';
import NotFound from './component/Main/NotFound';
import ProductsManage from './component/Main/ProductsManage';
import ProductAdd from './component/Main/ProductAdd';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomeConten />
    },
    {
        path: '/products',
        exact: false,
        main: () => <ProductList />
    },
    {
        path: '/manage',
        exact: false,
        main: () => <ProductsManage />
    },
    {
        path: '/cart',
        exact: false,
        main: () => <Cart />
    },
    {
        path: '/login',
        exact: false,
        main: () => <Login />
    },
    {
        path: '/checkout',
        exact: false,
        main: () => <CheckOut />
    },
    {
        path: '/product/add',
        exact: false,
        main: () => <ProductAdd />
    },
    {

        exact: false,
        main: () => <NotFound />
    },
]

export default routes;