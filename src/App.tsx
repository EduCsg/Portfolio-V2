import MainHeader from "./components/MainHeader";
import HeroSection from "./sections/HeroSection";
import AboutMe from "./sections/AboutMe";
import useLocalStorage from "./hooks/useLocalStorage";
import SkillsSection from "./sections/SkillsSection";

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

      <SkillsSection theme={theme} />
    </>
  );
}

export default App;
