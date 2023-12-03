const CustomButton = ({ text, onClick, className }) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
      <span>&#8594;</span>
    </button>
  );
};

export default CustomButton;
