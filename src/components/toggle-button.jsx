const ToggleButton = ({ active, onClick }) => {
  return (
    <>
      <div
        className={`${active ? "bg-red-700 dark:bg-red-400" : "bg-neutral-300 dark:bg-neutral-600"} flex h-fit items-center rounded-full px-[2px] py-[2px]`}
      >
        <button
          onClick={onClick}
          className={`${!active ? "bg-neutral-0" : "bg-transparent"} size-4 cursor-pointer rounded-full`}
        ></button>
        <button
          onClick={onClick}
          className={`${active ? "bg-neutral-0" : "bg-transparent"} size-4 cursor-pointer rounded-full`}
        ></button>
      </div>
    </>
  );
};

export default ToggleButton;
