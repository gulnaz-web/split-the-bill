import { useState } from 'react';
import Item from './Item';

const PackingList = ({ items, onDeleteItem, onTogglePacked, onClearInputs }) => {
   const [sortby, setSortBy] = useState('input');

   let sortedItems;

   if (sortby === 'packed') {
      sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
   } else if (sortby === 'description') {
      sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
   } else {
      sortedItems = items;
   }

   const initial = sortedItems.map((item) => (
      <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onTogglePacked={onTogglePacked} />
   ));

   return (
      <div className="list">
         <ul>{initial}</ul>
         <div className="actions">
            <select value={sortby} onChange={(event) => setSortBy(event.target.value)}>
               <option value="input">Sort by input order</option>
               <option value="description">Sort by description</option>
               <option value="packed">Sort by packed status</option>
            </select>
            <button onClick={onClearInputs}>Clear list</button>
         </div>
      </div>
   );
};
export default PackingList;
