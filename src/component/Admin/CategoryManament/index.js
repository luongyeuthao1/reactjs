import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';
import apiRequest from '../../../api/productApi';

export default function CategoryManament() {
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

    const onDelete = async (id) => {
        try {
            Swal.fire({
                title: 'Bạn có chắc chắn xóa',
                showDenyButton: true,
                confirmButtonText: `OK`,
                denyButtonText: `Cancel`,
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await apiRequest.removeCategory(id);
                    const { data } = await apiRequest.getAllCategory();
                    setCategory(data);
                    Swal.fire({
                        title: 'Xóa thành công',
                        showDenyButton: true,
                        confirmButtonText: `OK`,
                    })
                } else if (result.isDenied) {

                }
            })
        } catch (error) {
            console.log('failed to request API: ', error)
        }

    }


    return (
        <div>
            <Link className="btn btn-success large" to='/admin/addcategory' >Thêm danh mục mới</Link> <br />

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Mã</th>
                        <th style={{ textAlign: 'center' }} width={40 + '%'}>Tên danh mục</th>
                        <th style={{ textAlign: 'center' }} width={35 + '%'}>Mô tả</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {category.map((category, i) =>
                        <tr key={i}>
                            <td width={10}>{category.id}</td>
                            <td style={{ textAlign: 'center' }} width={40 + '%'}>{category.categoryName}</td>
                            <td style={{ textAlign: 'center' }} width={35 + '%'}>{category.desc}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => onDelete(category.id)}>Xóa</button>
                                <Link className="btn btn-warning" to={`/admin/editcategory/${category.id}`}>Sửa</Link>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
