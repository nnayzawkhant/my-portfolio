import React, {useRef, useEffect} from 'react';

import {Container} from 'reactstrap';
import classes from './header.module.css';
import Link from 'next/link';

const NAV__LINK = [
  {
    path: '/',
    display: 'Home',
  },
  {
    path: '#about',
    display: 'About',
  },
  {
    path: '#services',
    display: 'Experience',
  },
  {
    path: '#portfolio',
    display: 'Works',
  },
  {
    path: '#contact',
    display: 'Contact',
  },
];

const Header = () => {
  const headerRef = useRef (null);

  const menuRef = useRef (null);

  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add (`${classes.header__shrink}`);
    } else {
      headerRef.current.classList.remove (`${classes.header__shrink}`);
    }
  };

  useEffect (() => {
    window.addEventListener ('scroll', headerFunc);

    return () => window.removeEventListener ('scroll', headerFunc);
  }, []);

  const toggleMenu = () =>
    menuRef.current.classList.toggle (`${classes.menu__active}`);

  return (
    <header className={`${classes.header}`} ref={headerRef}>
      <Container>
        <div className={`${classes.nav__wrapper}`}>
          {/* ======== navigation logo ======== */}
          <div className={`${classes.logo}`}>
            <h1>
              <span>N</span>ZK
            </h1>
          </div>

          {/* ========= nav menu =========== */}
          <div
            className={`${classes.navigation}`}
            ref={menuRef}
            onClick={toggleMenu}
          >
            <div className={`${classes.nav__menu}`}>
              {NAV__LINK.map ((item, index) => (
                <Link href={item.path} key={index}>
                  {item.display}
                </Link>
              ))}
              <div className={`${classes.nav__right}`}>
                <Link
                  href={`/cv.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.nav__link}
                >
                  Resume
                </Link>

              </div>

            </div>

          </div>

          <span className={`${classes.mobile__menu}`}>
            <i className="ri-menu-line" onClick={toggleMenu} />
          </span>
        </div>
      </Container>
    </header>
  );
};

export default Header;
