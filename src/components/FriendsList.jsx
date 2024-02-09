import Button from './Button';

const FriendsList = ({ friends, current, onOpenModal, onCloseModalFriend }) => {
   const friend = friends.map((item) => {
      const { id, link, name, balance } = item;

      const handleOpenModalSplit = (item) => {
         onOpenModal(item);
         onCloseModalFriend();
      };

      return (
         <li key={id}>
            <img src={link} alt={`фотография ${name}`} />
            <h3>{name}</h3>
            {balance < 0 && (
               <p className="red">
                  You owe {name} {Math.abs(balance)}€
               </p>
            )}
            {balance > 0 && (
               <p className="green">
                  {name} owes you {balance}€
               </p>
            )}
            {balance === 0 && <p>You and {name} are even</p>}
            <Button
               text={current?.id === id ? 'Close' : 'Select'}
               onClickButton={() =>
                  current?.id === id ? onOpenModal(null) : handleOpenModalSplit(item)
               }
            />
         </li>
      );
   });

   return <ul>{friend}</ul>;
};

export default FriendsList;
