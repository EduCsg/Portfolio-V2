import { useEffect, useRef, useState } from "react";
import { Divide as Hamburger } from "hamburger-react";

const MainHeader = () => {
  const sections = ["home", "about", "skills", "projects", "contact"];

  const [activeSection, setActiveSection] = useState(sections[0]);
  const [menuOpen, setMenuOpen] = useState(false);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  // Intersection Observer
  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId);
        }
      });
    }, options);

    sectionRefs.current = sections.map((section) =>
      document.getElementById(section),
    );

    sectionRefs.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [sections]);

  // Toggle Menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <button
        className="fixed right-5 top-2 z-50 flex h-10 w-10 flex-col items-center justify-center rounded-full bg-opacity-90 sm:hidden"
        onClick={() => toggleMenu()}
      >
        <Hamburger
          rounded
          color="#fff"
          duration={0.5}
          size={25}
          toggled={menuOpen}
        />
      </button>

      <header className="fixed left-1/2 top-0 z-40 -translate-x-1/2 sm:top-8">
        <nav
          className={`flex items-center justify-around bg-black bg-opacity-90 px-5 py-3 backdrop-blur-sm transition-all duration-500 sm:flex sm:translate-x-0 sm:rounded-full sm:bg-white sm:backdrop-blur-0           ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } `}
        >
          <ul className="flex h-screen w-screen flex-col items-center justify-center gap-4 sm:h-auto sm:w-auto sm:flex-row">
            {sections.map((section) => (
              <li className="px-4 py-1" key={section}>
                <a
                  href={`#${section}`}
                  onClick={() => {
                    toggleMenu();
                  }}
                  className={`z-40 border-b-2 font-medium transition-all hover:text-primary 
                  ${
                    activeSection === section.toLowerCase()
                      ? "border-primary text-primary"
                      : "border-transparent text-gray-400"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
