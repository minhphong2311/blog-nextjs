import Link from 'next/link'
import React from 'react'

const Nav = () => {
    return (
        <nav className="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav">
            <div className="container">
                <Link className="navbar-brand js-scroll" href="/">DevFolio</Link>
                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault"
                    aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div className="navbar-collapse collapse justify-content-end" id="navbarDefault">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link js-scroll active" href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link js-scroll" href="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link js-scroll" href="/blog">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link js-scroll" href="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav