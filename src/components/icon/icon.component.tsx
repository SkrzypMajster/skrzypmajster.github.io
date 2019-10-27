import React from 'react';
import './fontello.css';

interface IProps {
    name: string;
}

export const Icon: React.FunctionComponent<IProps> = (props: IProps): JSX.Element => {
    const { name } = props;

    return <i className={`icon-${name}`} />;
}
