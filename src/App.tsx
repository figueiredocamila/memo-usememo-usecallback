import React, { useState, useMemo, useCallback } from 'react';
import './App.css';
import { Item } from './components/Item';

function App() {
  const [items, setItems] = useState<string[]>([]);
  const [wishList, setWishList] = useState<string[]>([]);

  const [newItem, setNewItem] = useState<string>('');

  function addItemToList() {
    setItems([...items, `Item ${items.length}`]);
  }

  const addItemToWishList = useCallback((item: string) => {
    setWishList(state => [...state, item])
  }, []);

  const countItemsWithOne = useMemo(() => {
    console.log('teste');
    return items.filter(item => item.includes('1')).length;
  }, [items]);

  return (
    <div>
      <input type="text" onChange={e => setNewItem(e.target.value)} value={newItem} />
      <button onClick={addItemToList}>Add</button>
      <ul>
        {items.map(item => {
          return ( 
            <Item 
              key={item} 
              title={item} 
              onAddItemToWishList={addItemToWishList} 
              countItemsWithOne={countItemsWithOne}
            />
          )
        })}
      </ul>
      <p>Contagem: {countItemsWithOne}</p>
    </div>
  );
}

export default App;
