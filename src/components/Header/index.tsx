import { forwardRef, useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';

import { Container, Navbar, NavMenu, NavSocial } from './styles';

import LogoImg from '../../assets/logo.svg';
import HeaderMobile from '../HeaderMobile';

const Header: React.ForwardRefRenderFunction<HTMLHeadingElement> = (
  { children },
  ref,
) => {
  const [active, setActive] = useState(false);

  const handleScroll = useCallback(() => {
    console.log(window.scrollY);

    if (window.scrollY > 30) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <Container ref={ref} active={active}>
      <Navbar>
        <NavMenu>
          <div className="logo">
            <LogoImg />
          </div>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">Sobre</Link>
            </li>
            <li>
              <Link href="/characters">Personagens</Link>
            </li>
            <li>
              <Link href="/costumes">#Trajes</Link>
            </li>
          </ul>
        </NavMenu>

        <NavSocial>
          <FaInstagram />
          <FaFacebook />
          <FaYoutube />
          <FaTwitter />
        </NavSocial>

        <HeaderMobile />

        {children}
      </Navbar>
    </Container>
  );
};

export default forwardRef(Header);
