import styled from "styled-components";
import { Theme } from "../../base/themes";

const Section = styled.section<{ theme: Theme; mode: string }>`
  .page-btn-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .page-number-container {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 1rem;
    margin: 3rem 0;
  }

  .prev-btn,
  .next-btn {
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
    padding: 8px 14px;
    color: ${({ theme, mode }) =>
      mode === "dark" ? theme.light.text : theme.dark.text};
    background-color: ${({ theme, mode }) =>
      mode === "dark" ? theme.light.elements : theme.dark.elements};
    font-size: 16px;
    font-weight: 600;
    /* font-style: italic; */
    border: none;
    outline: none;
    font-family: ${({ theme }) => theme.font};
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.08),
      -3px -3px 3px rgba(0, 0, 0, 0.08);
  }

  .prev-btn:disabled,
  .next-btn:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  .page-number {
    padding: 4px 12px;
    color: ${({ theme, mode }) =>
      mode === "dark" ? theme.light.text : theme.dark.text};
    background-color: ${({ theme, mode }) =>
      mode === "dark" ? theme.light.elements : theme.dark.elements};
    font-size: 16px;
    font-weight: 600;
    border: ${({ theme, mode }) =>
      mode === "dark" ? "none" : `1px solid ${theme.dark.elements}`};
    outline: none;
    font-family: ${({ theme }) => theme.font};
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.08),
      -3px -3px 3px rgba(0, 0, 0, 0.08);
    transition: background-color 0.4s ease-in-out;

    @media (max-width: 768px) {
      display: none;
    }

    &:hover,
    &.active {
      background-color: ${({ theme }) => theme.dark.elements};
      color: ${({ theme }) => theme.dark.text};
      border: 1px solid white;
    }

    &.active {
      transform: scale(1.3);
    }
  }

  .page-dots {
    font-weight: 800;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .pages-mobile {
    display: none;
    padding: 0.7rem 2rem;
    font-weight: 600;
    line-height: 20px;
    border-radius: 20px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

export default Section;
