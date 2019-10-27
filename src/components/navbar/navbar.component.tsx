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
      activeClass="active"
      to={link.sectionName}
      spy={true}
      smooth={true}
      offset={-40}
      duration={500}
    >{link.text}</Link>
  });
}
