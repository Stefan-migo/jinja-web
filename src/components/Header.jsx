import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import { navigation } from '../constants/index';
import Button from './Button';
import JinjaLogo from '../assets/header/Jinja.svg';
import MenuSvg from '../assets/header/MenuSvg.jsx';
import { HamburgerMenu } from "./design/Header.jsx";

const Header = () => {
  const pathName = useLocation().pathname;
  const [openNavigation, setOpenNavigation] = useState(false);

  useEffect(() => {
    if (openNavigation) {
      disablePageScroll();
    } else {
      enablePageScroll();
    }
  }, [openNavigation]);

  const toggleNavigation = () => {
    setOpenNavigation((prevState) => !prevState);
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div className="fixed top-0 left-0 z-50 w-full header-container  bg-color-4">
      <div className="flex items-center px-15 lg:px-7.5">
        <Link to="/">
          <img src={JinjaLogo} width={120} alt="Jinja Logo" />
        </Link>
        <nav
          className={`${
            openNavigation ? 'flex nav-open' : 'hidden'
          } fixed top-[4rem] left-0 right-0 bottom-0 bg-color-4 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <HamburgerMenu />
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <Link
                key={item.id}
                to={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-color-2 transition-colors nav-link ${
                  item.onlyMobile ? 'lg:hidden' : ''
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathName ? 'z-2 lg:text-color-3' : 'lg:text-color-2'
                } lg:leading-5 lg:hover:text-color-3 xl:px-12`}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </nav>
        <Link to={navigation[5].url}>
          <Button
            className={`hidden lg:flex bg-color-3 text-color-4 hover:text-color-1 ${
              navigation[5].url === pathName ? 'z-2 lg:text-color-1' : 'lg:text-color-4'
            }`}
          >
            {navigation[5].title}
          </Button>
        </Link>
        <Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
