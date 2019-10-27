import React from 'react';
import './navbar.component.scss';
import { NavbarLinkModel } from '../../models';
import { Link } from 'react-scroll';

interface IProps {
  links: NavbarLinkModel[]
}

export const NavbarComponent: React.SFC<IProps> = (props: IProps) => {
  const {
    links
  } = props;

  const navbarLinks: JSX.Element[] = renderNavbarLinks(links);

  window.onscroll = function() {spyNavbarPosition()};

  return (
    <nav className="navbar">
      {navbarLinks}
    </nav>
  );
}

function renderNavbarLinks(links: NavbarLinkModel[]): JSX.Element[] {
  return links.map((link: NavbarLinkModel, index: number) => {
    return <Link
      className="navbar__link"
      key={index}
      to={link.sectionName}
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
    >{link.text}</Link>
  });
}

function spyNavbarPosition() {
  const navbar: Element | null = document.querySelector(".navbar");

  const windowHeight: number = window.innerHeight;
  const scrollPosition: number = document.documentElement.scrollTop;

  // || document.documentElement.scrollTop > 100

  if (navbar) {
    if (scrollPosition > windowHeight) {
      navbar.className = "navbar navbar--fixed";
    } else {
      navbar.className = navbar.className.replace("navbar--fixed", "");
    }
  }
}
