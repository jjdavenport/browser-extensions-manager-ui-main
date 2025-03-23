import { useState } from "react";
import ToggleButton from "./toggle-button";

const Extension = ({ data }) => {
  const [active, setActive] = useState(data.isActive);

  const toggle = () => {
    setActive(!active);
  };

  return (
    <>
      <li className="flex flex-col justify-between gap-4 rounded-lg bg-white p-4 shadow-xs">
        <div className="flex items-start gap-2">
          <img src={data.logo} />
          <div className="flex flex-col gap-2">
            <span className="text-xl">{data.name}</span>
            <p>{data.description}</p>
          </div>
        </div>
        <div className="flex justify-between">
          <button className="cursor-pointer rounded-full border px-3 py-1">
            Remove
          </button>
          <ToggleButton onClick={toggle} active={active} />
        </div>
      </li>
    </>
  );
};

export default Extension;
