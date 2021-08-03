import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
// import PropTypes from 'prop-types'
// import axios from 'axios'
import firebase from "./../../../firebase"
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import apiRequest from '../../../api/productApi';

const AddProduct = ({ onAdd }) => {
    const [product, setProduct] = useState([]);
    const { handleSubmit, register, errors } = useForm();
    let history = useHistory();

    const [category, setCategory] = useState([]);
    useEffect(() => {
        const getCategory = async () => {
            try {
                const { data } = await apiRequest.getAllCategory();
                setCategory(data);
            } catch (error) {
                console.log('failed to request API: ', error)
            }
        }
        getCategory();
    }, []);

    const onHandledSubmit = async data => {
        Swal.showLoading()
        console.log(data.image[0]);
        let file = data.image[0];
        // tạo reference chứa ảnh trên firesbase
        let storageRef = firebase.storage().ref(`images/${file.name}`);
        // đẩy ảnh lên đường dẫn trên
        storageRef.put(file).then(function () {
            storageRef.getDownloadURL().then(async (url) => {
                // Tạo object mới chứa toàn bộ thông tin từ input
                const newData = {
                    ...data,
                    image: url
                }
                console.log(newData);
                try {
                    Swal.showLoading()
                    await apiRequest.create(newData).then(data => {
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
                                    ref={register({
                                        required: "Required",
                                    })}
                                />
                                <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="imageHelp">Choose image</label>
                            </div>
                        </div>
                        {errors.image && errors.image.type === "required" &&
                            <span className="text-danger">Chọn ảnh đã</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Tên Sản Phẩm</label>
                        <input name="name"
                            type="text"
                            className="form-control"
                            aria-describedby="nameHelp"
                            ref={register({
                                required: "Required",
                            })} />
                        {errors.name && errors.name.type === "required" &&
                            <span className="text-danger">Không để trống</span>}

                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Giá</label>
                        <input name="price" type="number" className="form-control"
                            ref={register({
                                required: "Required",
                                validate: value => value > 0 || "Giá phải lớn hơn 0"
                            })} />
                        {errors.price && errors.price.type === "required" && <span className="text-danger">Không để trống</span>}
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

AddProduct.propTypes = {

}

export default AddProduct
