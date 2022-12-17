import styled from "styled-components";

const Main = styled.main`
  margin-top: 5rem;

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
