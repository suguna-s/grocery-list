import { useState } from 'react';
import Form from './components/Form';
import { nanoid } from 'nanoid';
import SingleItem from './components/SingleItem';
import { ToastContainer, toast } from 'react-toastify';

//user's local storage
const setBrowserStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items));
};
const getBrowserStorage = JSON.parse(localStorage.getItem('list') || '[]');

const App = () => {
  const [list, setList] = useState(getBrowserStorage);

  //Add new item to list and update users's local storage
  const addItem = (name) => {
    const newItem = {
      item: name,
      isDone: false,
      id: nanoid(),
    };
    const newList = [...list, newItem];
    setList(newList);
    setBrowserStorage(newList);
    toast.success('Item added!');
  };

  //Delete item from list and update user's local storage
  const handleDelete = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
    setBrowserStorage(newList);
    toast.error('Item deleted');
  };

  //Edit item from list and update user's local storage
  const handleEdit = (id) => {
    const newList = list.map((item) => {
      if (item.id === id) {
        return { ...item, isDone: !item.isDone };
      } else {
        return item;
      }
    });
    setList(newList);
    setBrowserStorage(newList);
  };

  return (
    <section className="section">
      <ToastContainer position="top-center" />
      <Form addItem={addItem} />
      <div className="list">
        {list.map((item) => {
          return (
            <SingleItem
              key={item.id}
              {...item}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          );
        })}
      </div>
    </section>
  );
};

export default App;
