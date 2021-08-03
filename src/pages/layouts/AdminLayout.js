import React from 'react'
import Sidebar from '../../component/Admin/Sidebar'
import Topbar from '../../component/Admin/TopBar'
import Footer from '../../component/Admin/Footer'
import '../../assets/css/admin/main.scss'
import '../../assets/css/admin/sb-admin-2.min.css'
// import '../../assets/css/admin/sb-admin-2.min.css'




export default ({ children }) => {

    return (
        <div className="admin-page">
            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Topbar />
                        <div className="container-fluid">
                            {children}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}