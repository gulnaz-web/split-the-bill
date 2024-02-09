import { useState } from 'react';
import Button from './Button';

const FromSplitBill = ({ current, onSplitBill }) => {
   const [bill, setBill] = useState();
   const [paidByUser, setByUser] = useState();
   const paidByFriend = bill ? bill - paidByUser || 0 : '';
   const [whoIsPaying, setWhoIsPaying] = useState('user');

   const handleSubmit = (event) => {
      event.preventDefault();

      if (!bill || !paidByUser) return;

      onSplitBill(whoIsPaying === 'user' ? paidByFriend : -paidByUser);
   };

   return (
      <form className="form-split-bill" onSubmit={handleSubmit}>
         <h2>Split the bill with {current.name}</h2>

         <label>💰 Bill value</label>
         <input
            type="text"
            value={bill}
            onChange={(event) => {
               setBill(Number(event.target.value));
            }}
         />

         <label>🙍‍♀️ Your expense</label>
         <input
            type="text"
            value={paidByUser}
            onChange={(event) => {
               setByUser(
                  Number(event.target.value) > bill ? paidByFriend : Number(event.target.value),
               );
            }}
         />

         <label>👩🏻‍🤝‍👩🏻 {current.name}'s expense</label>
         <input type="text" disabled value={paidByFriend} />

         <label>🤑 Who is paying the bill?</label>
         <select
            value={whoIsPaying}
            onChange={(event) => {
               setWhoIsPaying(event.target.value);
            }}>
            <option value="user">You</option>
            <option value="friend">{current.name}</option>
         </select>

         <Button text="Split bill" />
      </form>
   );
};
export default FromSplitBill;
