const NavButton = ({ text, onClick, state, buttonState }) => {
  return (
    <>
      <li>
        <button
          className={`${state === buttonState ? "bg-orange-600 text-white" : "bg-white"} cursor-pointer rounded-full p-2 px-6`}
          onClick={onClick}
        >
          {text}
        </button>
      </li>
    </>
  );
};

export default NavButton;
