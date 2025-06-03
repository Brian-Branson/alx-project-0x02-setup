import React from 'react';

interface CardProps {
  title: string;
  content: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, content }) => (
  <div className="card">
    <h2>{title}</h2>
    <div>{content}</div>
  </div>
);

export default Card;