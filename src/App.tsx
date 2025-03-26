import styled from "styled-components";
import { Header } from "./loyout/header/Header";
import { Main } from "./loyout/sections/main/Main";
import { Skills } from "./loyout/sections/skills/Skills";
import { Works } from "./loyout/sections/works/Works";
import { Footer } from "./loyout/footer/Footer";
import { AboutMe } from "./loyout/sections/aboutme/AboutMe";
import { Modal } from "./components/modal/Modal";
import { GoTopBtn } from "./components/goTopBtn/GoTopBtn";
// import { Particle } from "./components/particle/Particle";

function App() {
  return (
    <StyledContainerApp>
      <Header />
      <Main />
      <Skills />
      <AboutMe />
      <Works />
      <Footer />
      <GoTopBtn />
      <Modal />
    </StyledContainerApp>
  );
}

export default App;

const StyledContainerApp = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  position: relative;
  /* background-image: linear-gradient(120deg, #1c1c1c, #414141); */
`;
