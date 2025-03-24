const NavButton = ({ text, onClick, state, buttonState }) => {
  return (
    <>
      <li>
        <button
          className={`${state === buttonState ? "border-transparent bg-red-700 text-white hover:bg-red-500 focus:outline-red-400 dark:bg-red-400 dark:text-neutral-900 dark:outline-neutral-900" : "dark:text-neutral-0 bg-neutral-0 border-neutral-200 hover:opacity-60 focus:outline-red-500 dark:border-neutral-600 dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:hover:opacity-100 focus:dark:bg-neutral-600"} cursor-pointer rounded-full border p-2 px-5 font-medium shadow-sm transition-discrete duration-300 ease-in-out focus:outline-2 focus:outline-offset-2 dark:focus:outline-red-400`}
          onClick={onClick}
          style={{
            "--transition-property": "background-color, box-shadow, transform",
            "--transition-duration": "300ms",
            "--transition-timing": "ease-in-out",
          }}
        >
          {text}
        </button>
      </li>
    </>
  );
};

export default NavButton;
