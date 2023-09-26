const Stats = ({ items }) => {
   if (!items.length) {
      return (
         <p className="stats">
            <em>Start adding some items to your packing list 🚀</em>
         </p>
      );
   }

   const sumItems = items.length;
   const sumPacked = items.filter((item) => item.packed).length;
   const persent = Math.round((sumPacked / sumItems) * 100);

   return (
      <footer className="stats">
         <em>
            {persent === 100
               ? 'You got everything! Ready to go ✈'
               : `💼 You have ${sumItems} items on your list, and you alredy packed ${sumPacked} (
            ${persent}%)`}
         </em>
      </footer>
   );
};
export default Stats;
