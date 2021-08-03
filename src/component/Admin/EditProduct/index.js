import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import PropTypes from 'prop-types'
import axios from 'axios'
import firebase from "./../../../firebase"
import { useHistory, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import apiRequest from '../../../api/productApi';
import Swal from 'sweetalert2';

const EditProduct = () => {
    const { id } = useParams();

    const [product, setProduct] = useState({});
    const [category, setCategory] = useState([]);
    let history = useHistory();

    const { handleSubmit, register, errors } = useForm();

    useEffect(() => {
        const getProduct = async () => {
            try {
                const { data } = await apiRequest.get(id);
                setProduct(data)
            } catch (error) {
                console.log('failed to request API: ', error)
            }
        }
        const getCategory = async () => {
            try {
                const { data } = await apiRequest.getAllCategory();
                setCategory(data);
            } catch (error) {
                console.log('failed to request API: ', error)
            }
        }
        getProduct();
        getCategory();
    }, []);


    const onHandledSubmit = async data => {
        Swal.showLoading()
        if (data.image[0] !== undefined) {
            let file = data.image[0];
            // tạo reference chứa ảnh trên firesbase
            let storageRef = firebase.storage().ref(`images/${file.name}`);
            // đẩy ảnh lên đường dẫn trên
            storageRef.put(file).then(function () {
                storageRef.getDownloadURL().then(async (url) => {
                    console.log(url);
                    // Tạo object mới chứa toàn bộ thông tin từ input
                    const newData = {
                        ...data,
                        image: url
                    }
                    console.log(newData);
                    try {
                        await apiRequest.update(id, newData).then(data => {
                            Swal.close()
                        });
                        Swal.fire({
                            icon: 'success',
                            title: 'Thêm mới sản phẩm thành công',
                            confirmButtonText: `Oke`,
                        }).then((result) => {
                            if (result.isConfirmed) {
                                history.push('/admin/products')
                            }
                        })
                    } catch (error) {
                        console.log('failed to request API: ', error)
                    }
                })
            });
        } else {
            const newData = {
                ...data,
                image: product.image
            }
            try {
                await apiRequest.update(id, newData).then(data => {
                    Swal.close()
                });
                Swal.fire({
                    icon: 'success',
                    title: 'Thêm mới sản phẩm thành công',
                    confirmButtonText: `Oke`,
                }).then((result) => {
                    if (result.isConfirmed) {
                        history.push('/admin/products')
                    }
                })
            } catch (error) {
                console.log('failed to request API: ', error)
            }
        }
    }
    return (
        <div className="row">

            <div className="col-5">
                <form onSubmit={handleSubmit(onHandledSubmit)}>

                    <div className="form-group">
                        <label htmlFor="productPrice">Ảnh sản phẩm</label>
                        <div className="input-group">
                            <div className="custom-file">
                                <input type="file"
                                    className="custom-file-input"
                                    id="inputGroupFile02"
                                    name="image"
                                    ref={register}
                                />
                                <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="imageHelp">Choose image</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Tên Sản Phẩm</label>
                        <input name="name"
                            type="text"
                            defaultValue={product.name}
                            className="form-control"
                            aria-describedby="nameHelp"
                            ref={register({
                                required: "Required",
                            })} />
                        {errors.name && errors.name.type === "required" && <span>Không để trống</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Giá</label>
                        <input name="price" type="number" className="form-control"
                            defaultValue={product.price}
                            ref={register({
                                required: "Required",
                                validate: value => value > 0 || "Giá phải lớn hơn 0"
                            })} />
                        {errors.price && errors.price.type === "required" && <span>Không để trống</span>}
                        {errors.price && errors.price.message}
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputState">Loại sản Phẩm</label>
                        <select name="category" id="inputState" className="form-control" ref={register}>
                            {/* <option value='None'>Chưa Chọn</option>
                            <option value='Nam'>Nam</option>
                            <option value='Nữ' >Nữ</option>
                            <option value='Trẻ Em'>Trẻ Em</option> */}
                            {category.map((obj, i) =>
                                <option key={i} value={obj.categoryName}>{obj.categoryName}</option>
                            )}
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

EditProduct.propTypes = {

}

export default EditProduct
