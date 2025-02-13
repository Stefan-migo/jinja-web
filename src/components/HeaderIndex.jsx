import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import { navigation } from '../constants/indexHeader';
import Button from './Button.jsx';
import JinjaLogo from '../assets/header/Jinja.svg';
import MenuSvg from '../assets/header/MenuSvg.jsx';
import { HamburgerMenu } from './design/Header.jsx';

const HeaderIndex = () => {
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

  useEffect(() => {
    const handleAnchorClick = (e) => {
      e.preventDefault();

      const targetId = e.currentTarget.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      const offset = 70; // Adjust this value according to your fixed header height

      if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth',
        });
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((anchor) => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-4 z-50 w-full header-container bg-color-4">
      <div className="flex items-center px-15 lg:px-[4.5rem]">
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
            {navigation.map((item) =>
              item.title === "Catálogo" ? (
                <a
                  key={item.id}
                  href={item.url}
                  download="catalogoWeb.pdf"
                  onClick={handleClick}
                  className={`block relative font-code text-2xl uppercase text-color-2 transition-colors nav-link ${
                    item.onlyMobile ? 'lg:hidden' : ''
                  } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                    pathName === item.url ? 'z-2 lg:text-color-3' : 'lg:text-color-2'
                  } lg:leading-5 lg:hover:text-color-3 xl:px-12`}
                >
                  {item.title}
                </a>
              ) : item.url.startsWith('#') ? (
                <HashLink
                  key={item.id}
                  to={item.url}
                  onClick={handleClick}
                  className={`block relative font-code text-2xl uppercase text-color-2 transition-colors nav-link ${
                    item.onlyMobile ? 'lg:hidden' : ''
                  } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                    pathName === item.url ? 'z-2 lg:text-color-3' : 'lg:text-color-2'
                  } lg:leading-5 lg:hover:text-color-3 xl:px-12`}
                  smooth
                >
                  {item.title}
                </HashLink>
              ) : (
                <Link
                  key={item.id}
                  to={item.url}
                  onClick={handleClick}
                  className={`block relative font-code text-2xl uppercase text-color-2 transition-colors nav-link ${
                    item.onlyMobile ? 'lg:hidden' : ''
                  } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                    pathName === item.url ? 'z-2 lg:text-color-3' : 'lg:text-color-2'
                  } lg:leading-5 lg:hover:text-color-3 xl:px-12`}
                >
                  {item.title}
                </Link>
              )
            )}
          </div>
        </nav>
        <Link to={navigation[4].url}>
        <Button
            className={`hidden lg:flex bg-color-3 text-color-4 hover:text-color-1 ${
              navigation[4].url === pathName ? 'z-2 lg:text-color-1' : 'lg:text-color-4'
            }`}
          >
            {navigation[4].title}
          </Button>
        </Link>
        <Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default HeaderIndex;
