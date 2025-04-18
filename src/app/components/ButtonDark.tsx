import { useState, useEffect } from "react";
import { FaSun, FaMoon } from 'react-icons/fa';

const ButtonDark = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("dark-mode");
    if (savedMode === "true") {
      document.body.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.body.classList.toggle("dark", newMode);
    localStorage.setItem("dark-mode", newMode.toString());
  };

  return (
    <button onClick={toggleDarkMode} style={{ fontSize: '24px', background: 'none', border: 'none', cursor: 'pointer' }}>
      {isDarkMode ? <FaSun color="gold" /> : <FaMoon color="purple" />}
    </button>
  );
};

export default ButtonDark;