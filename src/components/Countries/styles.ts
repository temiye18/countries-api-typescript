import styled from "styled-components";
import { Theme } from "../../base/themes";

const Card = styled.div<{ theme: Theme; mode: string }>`
  img {
    width: 320px;
    height: 192px;
  }
  .country-card {
    background: ${({ theme, mode }) =>
      mode === "dark" ? theme.dark.elements : theme.light.elements};
    border-radius: 4px;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.08),
      -3px -3px 3px rgba(0, 0, 0, 0.08);
    height: 100%;

    img {
      width: 100%;
      margin: 0;
      border-radius: 4px 4px 0 0;
    }
  }

  .country-details {
    padding: 2rem;

    button {
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

    h3 {
      font-weight: 800;
    }

    p {
      font-weight: 600;
    }

    .country-span {
      font-weight: 300;
    }
  }
`;

export default Card;
