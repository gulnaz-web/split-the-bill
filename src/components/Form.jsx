import { useState } from 'react';

const Form = ({ onAddItems }) => {
   const [description, setDescription] = useState('');
   const [quantity, setQuantity] = useState(1);

   const handleSubmit = (event) => {
      event.preventDefault();

      if (!description) return;

      const newItem = {
         description,
         quantity,
         packed: false,
         id: Date.now(),
      };
      onAddItems(newItem);

      // после отправки очистить форму
      setDescription('');
      setQuantity(1);
   };

   return (
      <form className="add-form" onSubmit={handleSubmit}>
         <h3>What do you need for your 😍 trip?</h3>
         <select value={quantity} onChange={(event) => setQuantity(Number(event.target.value))}>
            {Array.from({ length: 20 }, (_, i) => i + 1).map((optionNum) => (
               <option value={optionNum} key={optionNum}>
                  {optionNum}
               </option>
            ))}
         </select>
         <input
            type="text"
            placeholder="Item..."
            value={description}
            onChange={(event) => setDescription(event.target.value)}
         />
         <button type="submit">Add</button>
      </form>
   );
};
export default Form;
