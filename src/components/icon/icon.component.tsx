import React from 'react';
import './fontello.css';

interface IProps {
  name: string;
  className?: string;
}

export const Icon: React.FunctionComponent<IProps> = (props: IProps): JSX.Element => {
  const {
    name,
    className
  } = props;

  return <i className={`icon-${name} ${className ? className : ''}`} />;
}
