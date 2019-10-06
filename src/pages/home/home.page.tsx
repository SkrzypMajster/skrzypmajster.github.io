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

  const sliderText = 'Dawid "SkrzypMajster" Skrzypczyk';

  const userSentence = 'I love programming'
  const userImageUrl = 'https://avatars3.githubusercontent.com/u/22637715?s=280';
  const aboutTextParagraphs = [
    'Welcome to my website. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  ];

  return (
    <div className="home">
      <NavbarComponent
        links={navbarLinks}/>
      <SliderComponent
        text={sliderText} />
      <AboutComponent
        sentence={userSentence}
        imageSrc={userImageUrl}
        paragraphs={aboutTextParagraphs} />
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
