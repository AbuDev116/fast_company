import React from 'react';

const Qualitie = ({ color, name }) => {
  const renderBagdeColor = (color) => {
    let classes = 'badge m-2 bg-';
    classes += color;
    return classes;
  };
  return <span className={renderBagdeColor(color)}>{name}</span>;
};
export default Qualitie;
