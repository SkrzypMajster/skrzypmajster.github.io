import React from 'react';
import './section-header.component.scss';

interface IProps {
  text: string;
  className: string;
  sectionId: string;
}

export const SectionHeaderComponent: React.SFC<IProps> = (props: IProps) => {
  const {
    text,
    className,
    sectionId
  } = props;

  return (
    <div id={sectionId} className={`section-header ${className}`}>
      <h2 className="section-header__text">{text}</h2>
    </div>
  );
}
