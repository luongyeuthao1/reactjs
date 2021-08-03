import React from 'react'
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import apiRequest from '../../../api/productApi';
import { useHistory } from 'react-router-dom';

export default function AddCategory() {
    const { handleSubmit, register, errors } = useForm();
    let history = useHistory();

    const onHandledSubmit = async category => {
        try {
            Swal.showLoading()
            await apiRequest.createCategory(category).then(data => {
                Swal.close()
            });
            Swal.fire({
                icon: 'success',
                title: 'Thêm mới danh mục thành công',
                confirmButtonText: `Oke`,
            }).then((result) => {
                if (result.isConfirmed) {
                    history.push('/admin/category')
                }
            })
        } catch (error) {
            console.log('failed to request API: ', error)
        }
    }

    return (
        <div className="row">
            <div className="col-5">
                <form onSubmit={handleSubmit(onHandledSubmit)}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Tên Danh Mục</label>
                        <input name="categoryName"
                            type="text"
                            className="form-control"
                            aria-describedby="nameHelp"
                            ref={register({
                                required: "Required",
                            })} />
                        {errors.categoryName && errors.categoryName.type === "required" &&
                            <span className="text-danger">Không để trống</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Mô tả</label>
                        <textarea name="desc"
                            type="text"
                            className="form-control"
                            aria-describedby="nameHelp"
                            ref={register()}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>

        </div>
    )
}
