import React, { useState } from "react"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "@reach/router";

const Header = () =>{
  const [Menu, setMenu] = useState(false)
  const [ElementSelect, setElementSelect] = useState(1)



  const changeMenu = () => {
    setMenu(!Menu)
  }
  return(
    <>
  <header>
    <div>
    <Link to='#Home'>
      <p>Yes baby</p>
    </Link>
    <button onClick={changeMenu}>
      {Menu
      ? <AiOutlineClose/>
      : <AiOutlineMenu/>
      }
    </button>
    <nav>
      <Link 
      to='#AboutMe' 
      className={ElementSelect === 1 && 'Active'}
      onClick={()=> setElementSelect(1)}
      >About Me</Link>
      <Link 
      to='#Services' 
      className={ElementSelect === 2 && 'Active'}
      onClick={()=> setElementSelect(2)}
      >Services</Link>
      <Link 
      to='#MySkills' 
      className={ElementSelect === 3 && 'Active'}
      onClick={()=> setElementSelect(3)}
      >My Skills</Link>
      <Link 
      to='#Portfolio' 
      className={ElementSelect === 4 && 'Active'}
      onClick={()=> setElementSelect(4)}
      >Portfolio</Link>
      <Link 
      to='#ContactMe' 
      className={ElementSelect === 5 && 'Active'}
      onClick={()=> setElementSelect(5)}
      >Contact Me</Link>
    </nav>
    </div>
    <div className={Menu ? 'MenuMovil Active' :'MenuMovil'}>
      <a href='#AboutMe' onClick={changeMenu}>About Me</a>
      <a href='#Services' onClick={changeMenu}>Services</a>
      <a href='#MySkills' onClick={changeMenu}>My Skills</a>
      <a href='#Portfolio' onClick={changeMenu}>Portfolio</a>
      <a href='#ContactMe' onClick={changeMenu}>Contact Me</a>
    </div>
  </header>
  </>
)}


export default Header
