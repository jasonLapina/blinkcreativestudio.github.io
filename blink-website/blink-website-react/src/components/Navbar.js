import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { NavbarItems } from './NavbarItems';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <Logo />
          </Link>
          
          <div className='menu-icon' onClick={handleClick}>
            <FontAwesomeIcon icon={click ? faXmark : faBars}/>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            {NavbarItems.map((item, index) => {
                return(
                    <li key={index} className="nav-item">
                        <Link to={item.url} className={item.cName} onClick={closeMobileMenu}>
                            {item.title}
                        </Link>
                    </li>
                );
            })}
          </ul>
          {button && <Button buttonStyle='btn--outline'>Subscribe</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;