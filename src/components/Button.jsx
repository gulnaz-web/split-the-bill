const Button = ({ text, onClickButton }) => (
   <button className="button" onClick={() => onClickButton && onClickButton()}>
      {text}
   </button>
);

export default Button;
