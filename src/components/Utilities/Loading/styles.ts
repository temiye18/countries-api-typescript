import styled from "styled-components";
import { Theme } from "../../../base/themes";

const Section = styled.section<{ mode: string; theme: Theme }>`
  .lds__center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .lds-ring {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid
      ${({ mode, theme }) =>
        mode === "dark" ? theme.dark.text : theme.light.text};
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({ mode, theme }) =>
        mode === "dark" ? theme.dark.text : theme.light.text}
      transparent transparent transparent;
  }

  .light .lds-ring div {
    border: 8px solid var(--light-mode-text);
    border-color: var(--light-mode-text) transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Section;
