import { useState } from "react";
import NavButton from "./nav-button";

const Nav = ({ setData, data }) => {
  const [state, setState] = useState("all");

  const filter = (state) => {
    setState(state);
    setData(
      state === "all"
        ? data
        : data.filter((item) =>
            state === "active" ? item.isActive : !item.isActive,
          ),
    );
  };

  return (
    <>
      <section className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">
          Extensions List
        </h1>
        <nav>
          <ul className="flex gap-4">
            <NavButton
              buttonState="all"
              state={state}
              onClick={() => filter("all")}
              text="All"
            />
            <NavButton
              buttonState="active"
              state={state}
              onClick={() => filter("active")}
              text="Active"
            />
            <NavButton
              buttonState="inactive"
              state={state}
              onClick={() => filter("inactive")}
              text="Inactive"
            />
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Nav;
