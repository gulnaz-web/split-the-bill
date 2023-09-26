const Item = ({ item, onDeleteItem, onTogglePacked }) => {
   const { description, quantity, packed, id } = item;

   return (
      <li>
         <input type="checkbox" value={packed} onChange={() => onTogglePacked(id)} />
         <span style={packed ? { textDecoration: 'line-through' } : {}}>
            {description} (quantity: {quantity})
         </span>
         <button onClick={() => onDeleteItem(id)}>❌</button>
      </li>
   );
};
export default Item;
