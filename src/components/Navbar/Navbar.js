import React from 'react'
import './Navbar.css';
import logo from '../../img/logo1.jpg';
const Navbar = (props) => {
    return (
        <nav className='navbar'>
            <div className='navbar_logo'>
                <img className="logo_image" src={logo} alt="ProjectSakura" onClick={() => props.logoClicked()} />
                <div>
                    <div><h2><span className="logo_project_span">Project</span> Sakura</h2></div>
                    <div className="feels_like_spring"><h6><i>feels like spring.</i></h6></div>
                </div>
            </div>
            <div className='navbar_searchbar'>
                <input className="navbar_search" placeholder="Search.."></input>
                <div className="search_by_tag"></div>
            </div>
        </nav>
    )
}

export default Navbar
