import { useState } from "react";
import NavButton from "./nav-button";

const Nav = () => {
  const [state, setState] = useState("all");

  return (
    <>
      <section className="flex justify-between">
        <h1 className="text-2xl">Extensions List</h1>
        <nav>
          <ul className="flex gap-4">
            <NavButton
              buttonState="all"
              state={state}
              onClick={() => setState("all")}
              text="All"
            />
            <NavButton
              buttonState="active"
              state={state}
              onClick={() => setState("active")}
              text="Active"
            />
            <NavButton
              buttonState="inactive"
              state={state}
              onClick={() => setState("inactive")}
              text="Inactive"
            />
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Nav;
