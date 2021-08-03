import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import apiRequest from '../../../api/productApi';
import { useHistory, useParams } from 'react-router-dom';

export default function EditCategory() {
    const { handleSubmit, register, errors } = useForm();
    let history = useHistory();
    const { id } = useParams();
    const [category, setCategory] = useState({});
    useEffect(() => {
        const getCategory = async () => {
            try {
                const { data } = await apiRequest.getCategory(id);
                // setCategory({ desc: data.desc })
                setCategory(data)
            } catch (error) {
                console.log('failed to request API: ', error)
            }
        }
        getCategory();
    }, []);

    const onHandledSubmit = async category => {
        try {
            Swal.showLoading()
            await apiRequest.updateCategory(id, category).then(data => {
                Swal.close()
            });
            Swal.fire({
                icon: 'success',
                title: 'Cập nhật sản phẩm thành công',
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
                            defaultValue={category.categoryName}
                            className="form-control"
                            aria-describedby="nameHelp"
                            ref={register({
                                required: "Required",
                            })} />
                        {errors.categoryName && errors.categoryName.type === "required" && <span className="text-danger">Không để trống</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Mô tả</label>
                        <textarea name="desc"
                            defaultValue={category.desc}
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
