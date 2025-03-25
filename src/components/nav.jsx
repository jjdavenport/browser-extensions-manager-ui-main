import NavButton from "./nav-button";

const Nav = ({ filter, setFilter }) => {
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
              state={filter}
              onClick={() => setFilter("all")}
              text="All"
            />
            <NavButton
              buttonState="active"
              state={filter}
              onClick={() => setFilter("active")}
              text="Active"
            />
            <NavButton
              buttonState="inactive"
              state={filter}
              onClick={() => setFilter("inactive")}
              text="Inactive"
            />
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Nav;
