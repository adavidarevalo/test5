import React, {useState} from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import {Link} from 'gatsby'
import logo from "../../images/logo.png"
import { ContainerHeader, LogoContainer } from '../../styles/components/Header.js'

const Header = (props) =>{
  const [menu, setMenu] = useState(true)

  return(
    <ContainerHeader>
      <div>
        <LogoContainer to="/">
          <img src={logo} alt="Logo"/>
          <p>David</p>
        </LogoContainer>
        {menu 
        ? <AiOutlineMenu onClick={()=> setMenu(false)}/> 
        : < AiOutlineClose onClick={()=> setMenu(true)}/>
        }
        <ul className={!menu && 'Active'}>
          <Link 
          to='/'
          activeClassName="activePage"
          >Home</Link>
          <Link 
          to='/AboutMePage'
          activeClassName="activePage"
          >About Me</Link>
          <Link 
          to='/Portafolio'
          activeClassName="activePage"
          >Projects</Link>
          <Link
          to='/Contact'
          activeClassName="activePage"
          >Contact</Link>
        </ul>
        <nav>
            <Link 
            to='/'
            activeClassName="activePage"
            >Home</Link>
            <Link 
            to='/AboutMePage'
            activeClassName="activePage"
            >About Me</Link>
            <Link 
            to='/Portafolio'
            activeClassName="activePage"
            >Projects</Link>
          <Link
          to='/Contact'
          activeClassName="activePage"
          >Contact</Link>
        </nav>
      </div>
    </ContainerHeader>
  )
}

export default Header

