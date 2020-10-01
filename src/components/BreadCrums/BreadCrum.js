import React from 'react'
import './BreadCrum.css'
import HomeIcon from '@material-ui/icons/Home';

const BreadCrum = (props) => {
    console.log(window.location.href)

    const data = window.location.href.split('/')

    console.log(data)
    return (
        <div className="breadcrum">
            <div className="breadcrum_content">
                <HomeIcon /> / {data[3]}
            </div>
        </div>
    )
}

export default BreadCrum
