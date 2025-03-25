const ToggleButton = ({ active, onClick }) => {
  return (
    <>
      <button
        className={`${active ? "bg-red-700 dark:bg-red-400" : "bg-neutral-300 dark:bg-neutral-600"} flex h-fit w-10 cursor-pointer items-center rounded-full px-[2px] py-[2px] transition-discrete duration-300 ease-in-out focus:outline-2 focus:outline-offset-2 focus:outline-red-400 dark:focus:outline-red-500`}
        onClick={onClick}
        style={{
          "--transition-property": "background-color, box-shadow, transform",
          "--transition-duration": "300ms",
          "--transition-timing": "ease-in-out",
        }}
      >
        <div
          className={`${!active ? "bg-neutral-0" : "bg-neutral-0 translate-x-5"} size-4 cursor-pointer rounded-full transition-all duration-300 ease-in-out`}
        ></div>
      </button>
    </>
  );
};

export default ToggleButton;
