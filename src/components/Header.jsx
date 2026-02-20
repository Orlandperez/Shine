import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import SVGComponen from "./SVGComponen"

function Header() {
  const [menuOpen, setMenuOpen] = useState (false)
  const [dropdownOpen, setDropdownOpen] = useState (false)

  const toggleMenu = () => {
    setMenuOpen (prev => !prev);
  };
  const closeMenu = () => {
    setMenuOpen (false);
    setDropdownOpen(false);
  };
  const toggleDropdown = () => {
        setDropdownOpen(prev => !prev);
  };



  return (
    <header>
      <Link className="logo-contain" to="/" onClick={closeMenu}>
        <SVGComponen className="logo" />
      </Link>


      <nav className={menuOpen ? "nav-open" : ""}>
        <span className='close' onClick={closeMenu}>x</span>
        <Link to= "/" onClick={closeMenu}>Hogar</Link>
        <Link to= "/about" onClick={closeMenu}>Acerca de mi</Link>
        <li>
          <Link onClick={toggleDropdown}>Servicios <i className="bi bi-chevron-down"></i></Link>
          { dropdownOpen && (
            <ul>
              <li onClick={closeMenu}><Link to="/identidadVisual">Identidad Visual</Link></li>
              <li onClick={closeMenu}><Link to="/editorial">Editorial</Link></li>
              <li onClick={closeMenu}><Link to="/ilustracion">Ilustración / Grafica Aplicada</Link></li>
              <li onClick={closeMenu}><Link to="/packaging">Packaging</Link></li>
              <li onClick={closeMenu}><Link to="/audioVisual">Audiovisual / Motion Design</Link></li>
            </ul>
          )}
        </li>
        <Link to= "/contact" onClick={closeMenu}>Contacto</Link>
      </nav>

      <span className='menu' onClick={toggleMenu}><i className="bi bi-list" ></i></span>
    </header>
  )
}

export default Header