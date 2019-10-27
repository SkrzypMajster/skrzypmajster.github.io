import React from 'react';
import './footer.component.scss';
import { SocialMediaModel } from '../../models';
import { Icon } from '../icon/icon.component';
import { Link } from 'react-scroll';

interface IProps {
  author: string;
  socialMedias: SocialMediaModel[];
}

export const FooterComponent: React.SFC<IProps> = (props: IProps) => {
  const {
    author,
    socialMedias
  } = props;

  const socialMediaLinks: JSX.Element[] = renderSocialMediaLinks(socialMedias);

  return (
    <footer className="footer">
      <Link
        className="footer__up"
        to="home"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <Icon name="up" className="footer__up-icon" />
        <span className="footer__up-text">To the top</span>
      </Link>
      <div className="footer__social">
        {socialMediaLinks}
      </div>
      <span className="footer__created">Created by {author}</span>
    </footer>
  );
};

function renderSocialMediaLinks(socialMedias: SocialMediaModel[]): JSX.Element[] {
  return socialMedias.map((socialMedia: SocialMediaModel, index: number) => {
    return (
      <a key={index} className="footer__social-link" href={socialMedia.link} rel="noopener">
        <Icon name={socialMedia.icon} />
      </a>
    );
  });
}
