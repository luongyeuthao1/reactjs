import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import apiRequest from '../../../api/productApi';
import { useEffect } from 'react';
import Pagination from "react-js-pagination";


const ProductsManage = () => {

    const [products, setProduct] = useState([]);

    // current page
    const [currentPage, setCurrentPage] = useState(1);

    // total records per page to display
    const [recordPerPage, setRecordPerPage] = useState(10);

    // total number of the records
    const [totalRecords, setTotalRecords] = useState();

    // range of pages in paginator
    const pageRange = 10;

    // handle change event
    const handlePageChange = pageNumber => {
        setCurrentPage(pageNumber);
        // call API to get data based on pageNumber
        const getProduct = async () => {
            try {
                const { data } = await apiRequest.getAllPage(pageNumber, recordPerPage);
                setProduct(data.items);
            } catch (error) {
                console.log('failed to request API: ', error)
            }
        }
        getProduct();
    }


    useEffect(() => {
        const getProduct = async () => {
            try {
                const { data } = await apiRequest.getAllPage(1, 10);
                setProduct(data.items);
                setTotalRecords(data.count)
            } catch (error) {
                console.log('failed to request API: ', error)
            }
        }
        getProduct();
    }, []);

    const onDelete = (id) => {
        try {
            Swal.fire({
                title: 'Bạn có chắc chắn xóa',
                showDenyButton: true,
                confirmButtonText: `OK`,
                denyButtonText: `Cancel`,
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await apiRequest.remove(id);
                    const { data } = await apiRequest.getAll();
                    setProduct(data.items);
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

    const onChange = (e) => {
        // setRecordPerPage(e.target.value)
        const x = parseInt(e.target.value);
        setRecordPerPage(x)
        const getProduct = async () => {
            try {
                const { data } = await apiRequest.getAllPage(1, x);
                setProduct(data.items);
                setTotalRecords(data.count)
            } catch (error) {
                console.log('failed to request API: ', error)
            }
        }
        getProduct();

    }



    return (
        <div>
            <Link className="btn btn-success large" to='/admin/add' >Thêm sản phẩm mới</Link> <br />
            <a />
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Mã</th>
                        <th>Hình ảnh</th>
                        <th>Tên Sản Phẩm</th>
                        <th>Loại Sản Phẩm</th>
                        <th>Giá</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, i) =>
                        <tr key={i}>
                            <td width={10}>{product.id}</td>
                            <td><a href="#"><img width={55} height={75} src={product.image} /></a></td>
                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td>{product.price}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => onDelete(product.id)}>Xóa</button>
                                <Link className="btn btn-warning" to={`/admin/edit/${product.id}`}>Sửa</Link>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div>
                <div className="form-group row">
                    <div className="col-sm-1">
                        <select onChange={(event) => onChange(event)} id="recordNum" className="form-control">
                            <option value={10}>10</option>
                            <option value={20}>20</option>
                            <option value={50}>50</option>
                            <option value={100}>100</option>
                        </select>
                    </div>
                    <div className="col-sm-3">
                        <label className="col-form-label" htmlFor="recordNum">
                            Bản ghi/trang
                        </label>
                    </div>
                    <div className="col-sm-5" />
                    <Pagination
                        itemClass="page-item" // add it for bootstrap 4
                        linkClass="page-link" // add it for bootstrap 4
                        activePage={currentPage}
                        itemsCountPerPage={recordPerPage}
                        totalItemsCount={totalRecords}
                        pageRangeDisplayed={pageRange}
                        onChange={handlePageChange}
                    />
                </div>
            </div>
        </div>

    )
}

ProductsManage.propTypes = {

}

export default ProductsManage
