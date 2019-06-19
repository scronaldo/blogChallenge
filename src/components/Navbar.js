import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'
import Git from './Git'

const Navbar = (props) => {
    return (
        <nav className="nav-wrapper black darken-3">
            <div className="container">
                <a className="brand-logo">MY REACT BLOG</a>
                <ul className="right">
                {/* here i changed a links to Link tags to avoid browser requests/ a href into Link to */}
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/about">About this blog</NavLink></li>
                    <li><NavLink to="/contact">Contact me</NavLink></li>
                    <Git />
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar);
// use withRouter HOC compoenent (another comp as arg) to get the Router props. we exort it by default so the import name does'nt matter