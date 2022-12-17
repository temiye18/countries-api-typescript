import React from "react";
import Container from "../Container/Container.styles";
import Section from "./styles";
import { useTheme } from "../../../store";
const Loading = () => {
  const { mode } = useTheme();
  return (
    <Section mode={mode}>
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
