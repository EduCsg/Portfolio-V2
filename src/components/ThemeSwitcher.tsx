import "./ThemeSwitcher.css";

interface Props {
  toggleTheme: () => void;
}

const ThemeSwitcher = ({ toggleTheme }: Props) => {
  return (
    <>
      <label className="switch">
        <input type="checkbox" onChange={toggleTheme} />
        <span className="slider"></span>
      </label>
    </>
  );
};

export default ThemeSwitcher;
