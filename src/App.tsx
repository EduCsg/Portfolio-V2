import MainHeader from "./components/MainHeader";
import HeroSection from "./sections/HeroSection";
import AboutMe from "./sections/AboutMe";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <>
      <MainHeader toggleTheme={toggleTheme} />

      <HeroSection theme={theme} />

      <AboutMe theme={theme} />
    </>
  );
}

export default App;
