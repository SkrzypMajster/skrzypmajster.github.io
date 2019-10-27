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
import { NavbarLinkModel, SocialMediaModel, ContactDataModel } from '../../models';

interface IProps { }

export const HomePage: React.SFC<IProps> = (props: IProps) => {
  const navbarLinks: NavbarLinkModel[] = [
    { sectionName: 'home', text: 'Home' },
    { sectionName: 'about', text: 'About' },
    { sectionName: 'resume', text: 'My resume' },
    { sectionName: 'portfolio', text: 'Portfolio' },
    { sectionName: 'contact', text: 'Contact' }
  ];

  const sliderText = 'Dawid "SkrzypMajster" Skrzypczyk';

  const userSentence = 'I love programming'
  const userImageUrl = 'https://avatars3.githubusercontent.com/u/22637715?s=280';
  const aboutTextParagraphs = [
    'Welcome to my website. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  ];

  const socialMediasArray: SocialMediaModel[] = [
    {
      name: 'Facebook',
      icon: 'facebook',
      link: 'https://www.facebook.com/dskrzypczyk'
    },
    {
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/SkrzypMajster'
    },
    {
      name: 'Linkedin',
      icon: 'linkedin',
      link: 'https://www.linkedin.com/in/dawid-skrzypczyk/'
    }
  ];

  const contactData: ContactDataModel = {
    address: "Łęcka 63, 32-626 Jawiszowice",
    email: "skrzypmajster@gmail.com",
    phoneNumber: "+48796769178",
  }

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
      <SectionHeaderComponent
        text="Resume"
        className="section-header--resume"
        sectionId="resume"/>
      <ResumeComponent />
      <SectionHeaderComponent
        text="Portfolio"
        className="section-header--portfolio"
        sectionId="portfolio"/>
      <ProjectsComponent />
      <SectionHeaderComponent
        text="Contact"
        className="section-header--contact"
        sectionId="contact"/>
      <ContactComponent
        data={contactData}/>
      <FooterComponent
        author={sliderText}
        socialMedias={socialMediasArray}/>
    </div>
  );
};
