import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./base/globalStyles";
import { Home, CountryDetails } from "./pages";
import { AppRoute } from "./constants";
import theme from "./base/themes";
import { useTheme } from "./store";
import { NavBar } from "./components";

function App() {
  const { mode } = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle mode={mode} />
      <NavBar />
      <Routes>
        <Route path={AppRoute.home} element={<Home />} />
        <Route
          path={`${AppRoute.details}/:name`}
          element={<CountryDetails />}
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
