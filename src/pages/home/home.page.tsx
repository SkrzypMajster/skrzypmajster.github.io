import React from 'react';
import './home.page.scss';
import {
  NavbarComponent,
  SliderComponent,
  SectionHeaderComponent,
  ResumeComponent,
  ProjectsComponent,
  ContactComponent,
  FooterComponent,
  AboutComponent
} from '../../components';
import { NavbarLinkModel } from '../../models';

interface IProps { }

export const HomePage: React.SFC<IProps> = (props: IProps) => {
  const navbarLinks: NavbarLinkModel[] = [
    {
      path: '#home',
      text: 'Home',
    },
    {
      path: '#about',
      text: 'About'
    },
    {
      path: '#resume',
      text: 'My resume'
    },
    {
      path: '#portfolio',
      text: 'Portfolio'
    },
    {
      path: '#contact',
      text: 'Contact'
    }
  ];

  return (
    <div className="home">
      <NavbarComponent
        links={navbarLinks}/>
      <SliderComponent />
      <AboutComponent />
      <SectionHeaderComponent />
      <ResumeComponent />
      <SectionHeaderComponent />
      <ProjectsComponent />
      <SectionHeaderComponent />
      <ContactComponent />
      <FooterComponent />
    </div>
  );
};
