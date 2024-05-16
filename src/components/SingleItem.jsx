import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';

const SingleItem = ({ item, id, isDone, handleDelete, handleEdit }) => {
  return (
    <div className="single-item">
      <input
        type="checkBox"
        checked={isDone}
        onChange={() => handleEdit(id)}
        className="checkbox"
      />
      <h4 style={{ textDecoration: isDone && 'line-through' }}>{item}</h4>
      <MdDelete
        type="button"
        onClick={() => handleDelete(id)}
        className="delete-icon"
      />
    </div>
  );
};

export default SingleItem;
