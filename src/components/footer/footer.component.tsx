import React from 'react';
import './footer.component.scss';
import { SocialMediaModel } from '../../models';
import { Icon } from '../icon/icon.component';

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
      <a className="footer__up" href="#home">
        <Icon name="up" /> To the top
      </a>
      <div className="footer__social">
        {socialMediaLinks}
      </div>
      <span>Created by {author}</span>
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
