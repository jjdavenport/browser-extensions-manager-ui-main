import { useState } from "react";
import NavButton from "./nav-button";

const Nav = ({ setFilteredData, data }) => {
  const [buttonState, setButtonState] = useState("all");

  const filterAll = () => {
    setButtonState("all");
    setFilteredData(data);
  };

  const filterActive = () => {
    setButtonState("active");
    setFilteredData(data.filter((i) => i.isActive));
  };

  const filterInactive = () => {
    setButtonState("inactive");
    setFilteredData(data.filter((i) => !i.isActive));
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
              state={buttonState}
              onClick={() => filterAll("all")}
              text="All"
            />
            <NavButton
              buttonState="active"
              state={buttonState}
              onClick={() => filterActive("active")}
              text="Active"
            />
            <NavButton
              buttonState="inactive"
              state={buttonState}
              onClick={() => filterInactive("inactive")}
              text="Inactive"
            />
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Nav;
