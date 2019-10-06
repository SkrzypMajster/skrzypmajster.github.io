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

interface IProps { }

export const HomePage: React.SFC<IProps> = (props: IProps) => {
  return (
    <div className="home">
      <NavbarComponent />
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
