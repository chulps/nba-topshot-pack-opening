import React from "react";
import PackOpener from "./components/PackOpener/PackOpener";
import styled from "styled-components";
import "./styles/global.css"
import logo from "./images/logo.png"

const AppContainer = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  min-height: 100vh;
`;

const Heading = styled.h1`
  position: absolute;
  padding: var(--space-1);
`;

const Logo = styled.img`
  src: ${props => props.src};
  alt: "NBA Top Shot Logo";
  width: var(--space-5);
`;

function App() {
  return (
    <AppContainer>
      <Heading>

        <Logo src={logo} />
      </Heading>
      <PackOpener />
    </AppContainer>
  );
}

export default App;