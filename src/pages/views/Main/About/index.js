import React from 'react'
import PropTypes from 'prop-types'
import Support from '../../../../component/Main/Support'

const About = props => {
    return (
        <div className="site-section border-bottom">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-6">
                        <div className="block-16">
                            <figure>
                                <img src="images/blog_1.jpg" alt="Image placeholder" className="img-fluid rounded" />
                                <a href="https://vimeo.com/channels/staffpicks/93951774" className="play-button popup-vimeo"><span className="ion-md-play" /></a>
                            </figure>
                        </div>
                    </div>
                    <div className="col-md-1" />
                    <div className="col-md-5">
                        <div className="site-section-heading pt-3 mb-4">
                            <h2 className="text-black">How We Started</h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius repellat, dicta at laboriosam, nemo exercitationem itaque eveniet architecto cumque, deleniti commodi molestias repellendus quos sequi hic fugiat asperiores illum. Atque, in, fuga excepturi corrupti error corporis aliquam unde nostrum quas.</p>
                        <p>Accusantium dolor ratione maiores est deleniti nihil? Dignissimos est, sunt nulla illum autem in, quibusdam cumque recusandae, laudantium minima repellendus.</p>
                    </div>
                </div>
            </div>



            <div className="site-section border-bottom" >
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-md-7 site-section-heading text-center pt-4">
                            <h2>The Team</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-3">
                            <div className="block-38 text-center">
                                <div className="block-38-img">
                                    <div className="block-38-header">
                                        <img src="images/luong.jpg" alt="Image placeholder" className="mb-4" />
                                        <h3 className="block-38-heading h4">Lương Đẹp Trai Bố Đời Quá</h3>
                                        <p className="block-38-subheading">CEO/Co-Founder</p>
                                    </div>
                                    <div className="block-38-body">
                                        <p>Thanh niên quê tôi làm chiếc gậy hành quân. Đặt cho tên gọi là chiếc gậy Trường Sơn. Luyện cho đôi chân vượt đường xa không mỏi. Luyện cho tinh thần là chỉ tiến không lui. Gậy trong tay mồ hôi đã bóng, màu gỗ quê hương mang cả mối tình dân. Như nhắn nhủ những ai lên đường mà lời hứa với bao người thân.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="block-38 text-center">
                                <div className="block-38-img">
                                    <div className="block-38-header">
                                        <img src="images/luong.jpg" alt="Image placeholder" className="mb-4" />
                                        <h3 className="block-38-heading h4">Lương Đẹp Trai Bố Đời Quá</h3>
                                        <p className="block-38-subheading">CEO/Co-Founder</p>
                                    </div>
                                    <div className="block-38-body">
                                        <p>Thanh niên quê tôi làm chiếc gậy hành quân. Đặt cho tên gọi là chiếc gậy Trường Sơn. Luyện cho đôi chân vượt đường xa không mỏi. Luyện cho tinh thần là chỉ tiến không lui. Gậy trong tay mồ hôi đã bóng, màu gỗ quê hương mang cả mối tình dân. Như nhắn nhủ những ai lên đường mà lời hứa với bao người thân.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="block-38 text-center">
                                <div className="block-38-img">
                                    <div className="block-38-header">
                                        <img src="images/luong.jpg" alt="Image placeholder" className="mb-4" />
                                        <h3 className="block-38-heading h4">Lương Đẹp Trai Bố Đời Quá</h3>
                                        <p className="block-38-subheading">CEO/Co-Founder</p>
                                    </div>
                                    <div className="block-38-body">
                                        <p>Thanh niên quê tôi làm chiếc gậy hành quân. Đặt cho tên gọi là chiếc gậy Trường Sơn. Luyện cho đôi chân vượt đường xa không mỏi. Luyện cho tinh thần là chỉ tiến không lui. Gậy trong tay mồ hôi đã bóng, màu gỗ quê hương mang cả mối tình dân. Như nhắn nhủ những ai lên đường mà lời hứa với bao người thân.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="block-38 text-center">
                                <div className="block-38-img">
                                    <div className="block-38-header">
                                        <img src="images/luong.jpg" alt="Image placeholder" className="mb-4" />
                                        <h3 className="block-38-heading h4">Lương Đẹp Trai Bố Đời Quá</h3>
                                        <p className="block-38-subheading">CEO/Co-Founder</p>
                                    </div>
                                    <div className="block-38-body">
                                        <p>Thanh niên quê tôi làm chiếc gậy hành quân. Đặt cho tên gọi là chiếc gậy Trường Sơn. Luyện cho đôi chân vượt đường xa không mỏi. Luyện cho tinh thần là chỉ tiến không lui. Gậy trong tay mồ hôi đã bóng, màu gỗ quê hương mang cả mối tình dân. Như nhắn nhủ những ai lên đường mà lời hứa với bao người thân.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Support />
        </div>
    )
}

About.propTypes = {

}

export default About
