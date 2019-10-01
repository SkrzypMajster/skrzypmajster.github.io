import * as React from 'react';
import './comming-soon.page.scss';

interface IProps {
  appName: string;
  messageHeader: string;
  messageText: string;
  authorName: string;
  authorLink: string
}

export const CommingSoonPage: React.SFC<IProps> = (props: IProps) => {
  const {
    appName,
    messageHeader,
    messageText,
    authorName,
    authorLink
  } = props;

  return (
    <div className="comming-soon">
      <header className="comming-soon__name">{appName}</header>
      <section className="comming-soon__container">
        <h1 className="comming-soon__header">{messageHeader}</h1>
        <div className="comming-soon__text">{messageText}</div>
      </section>
      <footer className="comming-soon__footer">
        Created by <a href={authorLink}>{authorName}</a>
      </footer>
    </div>
  );
}
