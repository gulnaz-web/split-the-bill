import { useState } from 'react';
import Button from './components/Button';
import FriendsList from './components/FriendsList';
import FormAddFriend from './components/FormAddFriend';
import FromSplitBill from './components/FromSplitBill';

const initialFriends = [
   {
      id: 118836,
      name: 'Clark',
      link: 'https://i.pravatar.cc/48?u=118836',
      balance: -7,
   },
   {
      id: 933372,
      name: 'Sarah',
      link: 'https://i.pravatar.cc/48?u=933372',
      balance: 20,
   },
   {
      id: 499476,
      name: 'Anthony',
      link: 'https://i.pravatar.cc/48?u=499476',
      balance: 0,
   },
];

function App() {
   const [friends, setFriends] = useState(initialFriends);
   const [current, setCurrent] = useState(null);
   const [openAddFriendModal, setOpenAddFriendModal] = useState(false);

   const handleAddNewFriend = (newFriend) => {
      setFriends((friends) => [...friends, newFriend]);
   };

   const handleSplitBill = (value) => {
      setFriends((friends) =>
         friends.map((item) =>
            item.id === current.id ? { ...item, balance: item.balance + value } : item,
         ),
      );

      setCurrent(null);
   };

   return (
      <div className="app">
         <div className="sidebar">
            <FriendsList
               friends={friends}
               current={current}
               onOpenModal={(value) => setCurrent(value)}
               onCloseModalFriend={() => setOpenAddFriendModal(false)}
            />
            {openAddFriendModal && (
               <FormAddFriend
                  onAddNewFriend={(newFriend) => handleAddNewFriend(newFriend)}
                  onClose={() => setOpenAddFriendModal(false)}
               />
            )}
            <Button
               text={openAddFriendModal ? 'Close' : 'Add friend'}
               onClickButton={() => {
                  setCurrent(null);
                  setOpenAddFriendModal(!openAddFriendModal);
               }}
            />
         </div>
         {current && <FromSplitBill current={current} onSplitBill={handleSplitBill} />}
      </div>
   );
}

export default App;
