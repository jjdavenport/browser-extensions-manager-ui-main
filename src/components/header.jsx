import logoIcon from "../assets/logo.svg";
import sunIcon from "../assets/icon-sun.svg";
import moonIcon from "../assets/icon-moon.svg";
import useTheme from "../hooks/theme-provider";

const Header = () => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <>
      <header className="flex w-full justify-between">
        <img src={logoIcon} />
        <button onClick={() => setDarkMode(!darkMode)}>
          <img
            className={`${darkMode ? "scale-0" : "scale-100"} size-4`}
            src={sunIcon}
          />
          <img
            className={`${darkMode ? "scale-100" : "scale-0"} size-4`}
            src={moonIcon}
          />
        </button>
      </header>
    </>
  );
};

export default Header;
