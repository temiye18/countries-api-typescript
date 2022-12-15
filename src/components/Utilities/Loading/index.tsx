import React from "react";
import Container from "../Container/Container.styles";
import Section from "./styles";

const Loading = () => {
  return (
    <Section>
      <Container>
        <div className="lds__center">
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Loading;
