import React from 'react';
import './about.component.scss';

interface IProps {
  paragraphs: string[],
  sentence: string,
  imageSrc: string
}

export const AboutComponent: React.SFC<IProps> = (props: IProps) => {
  const {
    paragraphs,
    sentence,
    imageSrc
  } = props;

  const textParagraphs: JSX.Element[] = renderParagraphs(paragraphs);

  return (
    <section className="about" id="about">
      <h3 className="about__header">About me</h3>
      <p className="about__sentence">{sentence}</p>
      <div className="about__content">
        <img className="about__image" src={imageSrc} alt="Author's avatar"></img>
        <article className="about__text">
          {textParagraphs}
        </article>
      </div>
    </section>
  );
}

function renderParagraphs(paragraphs: string[]): JSX.Element[] {
  return paragraphs.map((paragraph: string, index: number) => {
    return <p key={index}>{paragraph}</p>
  });
}
