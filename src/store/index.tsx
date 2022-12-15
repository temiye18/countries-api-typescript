import React, { useEffect, useState, useContext } from "react";

interface Theme {
  mode: string;
  toggleTheme(): void;
}

const ThemeContext = React.createContext<Theme>({
  mode: "",
  toggleTheme: () => {},
});

const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [mode, setMode] = useState("dark");

  useEffect(() => {
    const myTheme = localStorage.getItem("theme") || "";
    // console.log("getting");
    // console.log(myTheme);
    setMode(myTheme);
  }, []);

  const toggleTheme = () => {
    setMode((curr) => (curr === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    localStorage.setItem("theme", mode);
    // console.log("setting");
    // console.log(mode);
  }, [mode]);

  const themeValue: Theme = {
    mode,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
export default ThemeContextProvider;
