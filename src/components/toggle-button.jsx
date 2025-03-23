const ToggleButton = ({ active, onClick }) => {
  return (
    <>
      <div
        className={`${active ? "bg-orange-500" : "bg-gray-400"} flex h-fit items-center rounded-full px-1 py-1`}
      >
        <button
          onClick={onClick}
          className={`${!active ? "bg-white" : "bg-transparent"} size-5 cursor-pointer rounded-full`}
        ></button>
        <button
          onClick={onClick}
          className={`${active ? "bg-white" : "bg-transparent"} size-5 cursor-pointer rounded-full`}
        ></button>
      </div>
    </>
  );
};

export default ToggleButton;
