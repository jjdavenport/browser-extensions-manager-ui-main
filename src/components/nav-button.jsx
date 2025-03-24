const NavButton = ({ text, onClick, state, buttonState }) => {
  return (
    <>
      <li>
        <button
          className={`${state === buttonState ? "bg-red-700 text-white dark:bg-red-400 dark:text-neutral-900 dark:outline-neutral-900" : "dark:text-neutral-0 bg-neutral-0 dark:bg-neutral-700 dark:outline-neutral-600"} cursor-pointer rounded-full p-2 px-5 font-medium shadow-md dark:outline`}
          onClick={onClick}
        >
          {text}
        </button>
      </li>
    </>
  );
};

export default NavButton;
