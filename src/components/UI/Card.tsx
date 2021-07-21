import React, { ReactNode } from 'react';

import './Card.scss';

type CardProps = {
  className: string;
  children: ReactNode;
};

const Card = (props: CardProps) => {
  return <div className={`card ${props.className}`}>{props.children}</div>;
};

export default Card;
