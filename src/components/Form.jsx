import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

const Form = ({ addItem }) => {
  const [item, setItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!item) {
      toast.error('Please provide value');
      return;
    }
    addItem(item);
    setItem('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Grocery List</h2>
      <div className="heading-underline"></div>
      <div className="form-row">
        <input
          type="text"
          value={item}
          className="form-input"
          onChange={(event) => setItem(event.target.value)}
        />
        <button type="submit" className="form-button">
          Add Item
        </button>
      </div>
    </form>
  );
};

export default Form;
