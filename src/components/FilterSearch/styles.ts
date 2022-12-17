import styled from "styled-components";
import { Theme } from "../../base/themes";

const Filter = styled.div<{ mode: string; theme: Theme }>`
  padding-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, auto));
  justify-content: space-between;
  row-gap: 2rem;

  @media (max-width: 494px) {
    grid-template-columns: 1fr;
  }

  .search {
    background: ${({ mode, theme }) =>
      mode === "dark" ? theme.dark.elements : theme.light.elements};
    color: ${({ theme, mode }) =>
      mode === "dark" ? theme.dark.text : theme.light.text};
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    font-family: var(--nunito-sans);
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.08),
      -3px -3px 3px rgba(0, 0, 0, 0.08);

    input[type="text"] {
      border-radius: 0 4px 4px 0;
      font-family: var(--nunito-sans);
      font-size: 14px;
      background: ${({ mode, theme }) =>
        mode === "dark" ? theme.dark.elements : theme.light.elements};
      color: ${({ theme, mode }) =>
        mode === "dark" ? theme.dark.text : theme.light.text};
      border: none;
      outline: none;
      padding: 15px 1.5rem;
      max-width: 400px;
    }

    input::placeholder {
      color: ${({ theme, mode }) =>
        mode === "dark" ? theme.dark.text : theme.light.text};
    }
  }

  .select-box {
    background: ${({ mode, theme }) =>
      mode === "dark" ? theme.dark.elements : theme.light.elements};
    border-radius: 4px;
    padding: 0 10px;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.08),
      -3px -3px 3px rgba(0, 0, 0, 0.08);
    max-width: 180px;

    .select {
      background: ${({ mode, theme }) =>
        mode === "dark" ? theme.dark.elements : theme.light.elements};
      border: none;
      outline: none;
      font-family: ${({ theme }) => theme.font};
      color: var(--dark-mode-text);
      padding: 15px 0;
      padding-right: 2.5rem;
    }
  }
`;

export default Filter;
