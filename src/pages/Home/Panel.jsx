import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

export default function Panel({ side }) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  const isPhoto  = side === 'photo';
  const label    = isPhoto ? 'Photography'    : 'Computer Science';
  const sublabel = isPhoto ? '— Creative Portfolio'  : '— Technical Portfolio';
  const route    = isPhoto ? '/photography'   : '/cs';

  return (
    <div
      className={`panel panel--${side} ${hovered ? 'panel--hovered' : ''}`}
      onClick={() => navigate(route)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="panel__bg" />
      <div className="panel__grid" />
      <span className="panel__sub">{sublabel}</span>
      <span className="panel__title">{label}</span>
      <div className="panel__arrow" />
    </div>
  );
}
