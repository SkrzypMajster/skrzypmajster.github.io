import React from 'react';
import './home.page.scss';
import {
  NavbarComponent,
  SliderComponent,
  SectionHeaderComponent,
  ResumeComponent,
  ProjectsComponent,
  ContactComponent,
  FooterComponent
} from '../../components';

interface IProps { }

export const HomePage: React.SFC<IProps> = (props: IProps) => {
  return (
    <div className="home">
      <NavbarComponent />
      <SliderComponent />
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
