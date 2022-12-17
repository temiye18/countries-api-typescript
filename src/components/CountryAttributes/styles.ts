import styled from "styled-components";
import { Theme } from "../../base/themes";

const Attributes = styled.div<{ theme: Theme; mode: string }>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;

  img {
    width: 320px;
    height: 192px;
  }

  .country-flag {
    max-width: 500px;

    & img {
      width: 100%;
      height: 100%;
    }
  }

  .country-attributes {
    align-self: center;

    .attribute-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
    }
  }

  .attribute-1 p,
  .attribute-2 p,
  .border-countries p {
    font-weight: 600;
  }

  .details-span {
    font-weight: 300;
  }

  .border-countries {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    gap: 10px;
    align-items: center;

    .borders {
      display: block;

      & button {
        cursor: pointer;
        background: ${({ theme, mode }) =>
          mode === "dark" ? theme.light.elements : theme.dark.elements};
        border: none;
        border-radius: 4px;
        outline: none;
        color: ${({ theme, mode }) =>
          mode === "dark" ? theme.light.text : theme.dark.text};
        padding: 5px 25px;
        font-family: ${({ theme }) => theme.font};
        font-size: 1rem;
        font-style: italic;
        box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.08),
          -3px -3px 3px rgba(0, 0, 0, 0.08);
        font-weight: 600;
      }
    }
  }
`;

export default Attributes;
