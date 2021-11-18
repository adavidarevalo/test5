import React from 'react'
import '../../styles/components/Layout/Header.scss'
import { Link } from "@reach/router";
import logo from '../../images/logo.png'

const HeaderContainer = () =>{
    return(
        <header>
        <div>
        <Link to='/'>
          <img src={logo} alt="Logo" className='Logo'/>
        </Link>
        <div></div>
        </div>
      </header>
    )
}

export default HeaderContainer