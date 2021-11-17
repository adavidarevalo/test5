import React from 'react'
import Logo from '../../images/Logo.png'
import { Link } from "@reach/router";

const headerPdf = () => {
    return(
        <header>
            <div>
                <Link to='/'>
                    <img src={Logo} alt='Logo' className='Logo'/>
                </Link>
            </div>
            <div></div>
        </header>
    )
}

export default headerPdf