import styled from "styled-components";
import { Theme } from "../../base/themes";

const Section = styled.section<{ theme: Theme; mode: string }>`
  margin-top: 8rem;

  .back-link {
    max-width: 100px;
  }

  .back {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 5px 25px;
    color: ${({ theme, mode }) =>
      mode === "dark" ? theme.light.text : theme.dark.text};
    background-color: ${({ theme, mode }) =>
      mode === "dark" ? theme.light.elements : theme.dark.elements};
    font-size: 16px;
    border: none;
    outline: none;
    font-family: ${({ theme }) => theme.font};
    font-size: 1rem;
    font-weight: 600;
    font-style: italic;
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 3rem;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.08),
      -3px -3px 3px rgba(0, 0, 0, 0.08);
  }

  .error-text {
    text-align: center;
  }
`;

export default Section;
