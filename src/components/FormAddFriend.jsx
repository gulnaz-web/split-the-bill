import { useState } from 'react';
import Button from './Button';

const FormAddFriend = ({ onAddNewFriend, onClose }) => {
   const [name, setName] = useState('');
   const [image, setImage] = useState('https://i.pravatar.cc/48');

   const handleSubmit = (event) => {
      const id = crypto.randomUUID();
      event.preventDefault();

      if (!name || !image) return;

      const newFriend = {
         name,
         link: `${image}?=${id}`,
         balance: 0,
         id: id,
      };
      
      onAddNewFriend(newFriend);

      setName('');
      setImage('');
      onClose();
   };

   return (
      <form className="form-add-friend" onSubmit={handleSubmit}>
         <label>👩🏻‍🤝‍👩🏻 Friend name</label>
         <input
            type="text"
            value={name}
            onChange={(event) => {
               setName(event.target.value);
            }}
         />
         <label>🖼 Image URL</label>
         <input
            type="text"
            value={image}
            onChange={(event) => {
               setImage(event.target.value);
            }}
         />

         <Button text="Add" />
      </form>
   );
};
export default FormAddFriend;
