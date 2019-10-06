import React from 'react';
import './navbar.component.scss';
import { NavbarLinkModel } from '../../models';

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
    return <a
      className="navbar__link"
      key={index}
      href={link.path}>{link.text}</a>
  });
}
