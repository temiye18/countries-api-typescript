import styled from "styled-components";
import { Theme } from "../../base/themes";

const Main = styled.main<{ theme: Theme; mode: string }>`
  margin-top: 8rem;

  .reload-container {
    text-align: center;

    .reload-btn {
      padding: 10px 20px;
      color: ${({ theme, mode }) =>
        mode === "dark" ? theme.light.text : theme.dark.text};
      background-color: ${({ theme, mode }) =>
        mode === "dark" ? theme.light.elements : theme.dark.elements};
      font-size: 16px;
      font-weight: 600;
      font-style: italic;
      border: none;
      outline: none;
      font-family: var(--nunito-sans);
      border-radius: 4px;
      cursor: pointer;
      box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.08),
        -3px -3px 3px rgba(0, 0, 0, 0.08);
    }
  }

  .reload {
    padding: 10px 20px;
    color: ${({ theme, mode }) =>
      mode === "dark" ? theme.light.text : theme.dark.text};
    background-color: ${({ theme, mode }) =>
      mode === "dark" ? theme.light.elements : theme.dark.elements};
    font-size: 16px;
    font-weight: 600;
    font-style: italic;
    border: none;
    outline: none;
    font-family: var(--nunito-sans);
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.08),
      -3px -3px 3px rgba(0, 0, 0, 0.08);
  }

  .error-message {
    max-width: 600px;
    text-align: center;
    margin: 2rem auto;
  }

  .countries {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
    gap: 2rem;
    margin-top: 5rem;
  }
`;

export default Main;
