import logoIcon from "../assets/logo.svg";
import sunIcon from "../assets/icon-sun.svg";
import moonIcon from "../assets/icon-moon.svg";
import useTheme from "../hooks/theme-provider";

const Header = () => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <>
      <header className="flex w-full justify-between rounded-2xl bg-white p-3 shadow-xs">
        <img src={logoIcon} />
        <button
          className="rounded-md bg-gray-500 p-3"
          onClick={() => setDarkMode(!darkMode)}
        >
          <img
            className={`${darkMode ? "scale-100" : "scale-0"} absolute size-5`}
            src={sunIcon}
          />
          <img
            className={`${darkMode ? "scale-0" : "scale-100"} size-5`}
            src={moonIcon}
          />
        </button>
      </header>
    </>
  );
};

export default Header;
