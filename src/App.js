import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import apiRequest from './api/productApi';
import axios from 'axios'
import Swal from 'sweetalert2'


import Routers from './routers';


function App() {

	const [product, setProduct] = useState([]);
	const history = useHistory();


	useEffect(() => {
		const getProducts = async () => {
			try {
				const { data } = await apiRequest.getAll();
				setProduct(data.items);
			} catch (error) {
				console.log('failed to request API: ', error)
			}
		}
		getProducts();
	}, []);

	const onHandleRemove = async (id) => {
		try {
			if (confirm('Bạn chắc chắn muốn xóa ?')) { //eslint-disable-line
				await apiRequest.remove(id);
				const { data } = await apiRequest.getAll();
				setProduct(data.items);
			}
		} catch (error) {
			console.log('failed to request API: ', error)
		}
	}


	const onHandleAdd = async (product) => {
		try {
			await apiRequest.create(product).then(data => {
				Swal.close()
			});
			const { data } = await apiRequest.getAll();
			setProduct(data.items);
			Swal.fire({
				icon: 'success',
				title: 'Thêm mới sản phẩm thành công',
				confirmButtonText: `Oke`,
			}).then((result) => {
				if (result.isConfirmed) {
				}
			})
		} catch (error) {
			console.log('failed to request API: ', error)
		}
	}


	const onHandleUpdate = async (id, data) => {
		Swal.showLoading()
		try {
			await apiRequest.update(id, data).then(data => {
				Swal.close()
				Swal.fire({
					icon: 'success',
					title: 'Cập nhật sản phẩm thành công',
					confirmButtonText: `Oke`,
				})
			});
		} catch (error) {
			console.log('failed to request API: ', error)
		}
	}

	return (
		<div className="App">
			<Routers products={product} onRemove={onHandleRemove} onAdd={onHandleAdd} onUpdate={onHandleUpdate} />
		</div>
	);
}

export default App;
