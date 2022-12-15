import React from "react";

import { BsFillMoonFill } from "react-icons/bs";
import { BsSun } from "react-icons/bs";
import { useTheme } from "../../store";
import Container from "../Utilities/Container/Container.styles";
import Header from "./styles";

const Navbar = () => {
  const { mode, toggleTheme } = useTheme();
  return (
    <Header mode={mode}>
      <Container>
        <nav className="navbar">
          <h1>Where in the world?</h1>
          <button onClick={toggleTheme}>
            {mode === "light" ? <BsSun /> : <BsFillMoonFill />}
            {mode === "light" ? "Light Mode" : "Dark Mode"}
          </button>
        </nav>
      </Container>
    </Header>
  );
};

export default Navbar;
