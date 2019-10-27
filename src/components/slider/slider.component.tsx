import React from 'react';
import './slider.component.scss';

interface IProps {
  text: string;
}

export const SliderComponent: React.SFC<IProps> = (props: IProps) => {
  const { text } = props;

  return (
    <div id="home" className="slider">
      <div className="slider__text">{text}</div>
    </div>
  );
}
