import styled from "styled-components";
import { Theme } from "../../base/themes";

const Header = styled.header<{ theme: Theme; mode: string }>`
  background: ${({ theme, mode }) =>
    mode === "dark" ? theme.dark.elements : theme.light.elements};
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin-bottom: 12.5rem;

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 20px 0;

    @media (max-width: 388px) {
      flex-direction: column;
      gap: 20px;
    }

    h1 {
      margin: 0;
    }

    button {
      font-family: ${({ theme }) => theme.font};
      background: transparent;
      border: none;
      outline: none;
      color: ${({ theme, mode }) =>
        mode === "dark" ? theme.dark.text : theme.light.text};
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      font-size: 1rem;
      font-weight: 300;
      cursor: pointer;
    }
  }
`;

export default Header;
