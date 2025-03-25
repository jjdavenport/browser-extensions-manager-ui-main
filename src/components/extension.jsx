import { useState } from "react";
import ToggleButton from "./toggle-button";

const Extension = ({ data }) => {
  const [active, setActive] = useState(data.isActive);

  const toggle = () => {
    setActive(!active);
  };

  return (
    <>
      <li className="bg-neutral-0 flex flex-col justify-between gap-4 rounded-2xl p-5 shadow-md dark:bg-neutral-800 dark:outline dark:outline-neutral-600">
        <div className="flex items-start gap-4">
          <img src={data.logo} />
          <div className="flex flex-col gap-2">
            <span className="dark:text-neutral-0 text-xl font-bold text-neutral-900">
              {data.name}
            </span>
            <p className="text-neutral-600 dark:text-neutral-300">
              {data.description}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button className="dark:text-neutral-0 hover:text-neutral-0 dark:focus:text-neutral-0 cursor-pointer rounded-full px-4 py-[6px] font-medium text-neutral-900 outline outline-neutral-300 transition-colors duration-300 ease-in-out hover:bg-red-700 hover:outline-transparent focus:bg-neutral-100 focus:text-neutral-900 focus:outline-2 focus:outline-offset-2 focus:outline-red-500 dark:outline-neutral-600 dark:hover:bg-red-500 dark:hover:text-neutral-900 dark:hover:outline-transparent focus:dark:bg-neutral-600 dark:focus:outline-red-400">
            Remove
          </button>
          <ToggleButton onClick={toggle} active={active} />
        </div>
      </li>
    </>
  );
};

export default Extension;
