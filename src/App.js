import { useState } from 'react';
import Form from './components/Form';
import Logo from './components/Logo';
import PackingList from './components/PackingList';
import Stats from './components/Stats';

function App() {
   const [items, setItems] = useState([]);

   const handleAddItems = (item) => {
      setItems((prev) => [...prev, item]);
   };

   const handleDeleteItem = (id) => {
      setItems((prev) => prev.filter((item) => item.id !== id));
   };

   const handleTogglePacked = (id) => {
      setItems((prev) =>
         prev.map((item) => (item.id === id ? { ...item, packed: !item.packed } : item)),
      );
   };
   const handleClearInputs = () => {
      setItems([])
   }

   return (
      <div className="app">
         <Logo />
         <Form onAddItems={handleAddItems} />
         <PackingList items={items} onDeleteItem={handleDeleteItem} onTogglePacked={handleTogglePacked} onClearInputs={handleClearInputs} />
         <Stats items={items} />
      </div>
   );
}

export default App;
