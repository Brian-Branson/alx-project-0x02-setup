import React from 'react';
import { type CardProps } from '@/interfaces';

const Card: React.FC<CardProps> = ({ title, content }) => (
  <div className="card">
    <h2>{title}</h2>
    <div>{content}</div>
  </div>
);

export default Card;