import React from 'react'
import bg from '../public/img/overlay-bg.jpg'

const Footer = () => {
    return (
        <section className="paralax-mf footer-paralax bg-image sect-mt4 route" style={{ backgroundImage: `url(${bg.src})` }}>
            <footer>
            <div className="container">
                <div className="row">
                <div className="col-sm-12">
                    <div className="copyright-box">
                    <p className="copyright">&copy; Copyright <strong>DevFolio</strong>. All Rights Reserved</p>
                    </div>
                </div>
                </div>
            </div>
            </footer>
        </section>
    )
}

export default Footer