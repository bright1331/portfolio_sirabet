import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '..//..//assets/logo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const  Navbar = () => {

  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }
  const closeMenu = () =>{
    menuRef.current.style.right = "-350px"
  }

  return (
    <div className='navbar'>
      <div className='navbar-logo'>
          <img src={logo} alt=''/>
        </div>
        <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open'/>
        <ul ref={menuRef} className="nav-menu">
          <img src={menu_close} onClick={closeMenu} alt='' className='nav-mob-close'/>
          <li><AnchorLink className='anchor-mod-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink></li>
          <li><AnchorLink className='anchor-mod-link' href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink></li>
          <li><AnchorLink className='anchor-mod-link' href='#project'><p onClick={()=>setMenu("project")}>Project</p></AnchorLink></li>
          <li><AnchorLink className='anchor-mod-link' href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink></li>
      </ul>
    <div className="nav-connect"><AnchorLink className='anchor-mod-link' href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar
