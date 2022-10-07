import React from 'react';

const Bookmark = ({ status, id, onChange }) => {
  if (status) {
    return <i className="bi bi-suit-heart-fill" onClick={() => onChange(id)}></i>;
  } else {
    return <i className="bi bi-suit-heart" onClick={() => onChange(id)}></i>;
  }
};

export default Bookmark;
