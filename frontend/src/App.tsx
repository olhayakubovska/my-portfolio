import styled from "styled-components";
import { Header } from "./layout/header/Header";
import { Main } from "./layout/sections/main/Main";
import { Skills } from "./layout/sections/skills/Skills";
import { Works } from "./layout/sections/works/Works";
import { Footer } from "./layout/footer/Footer";
import { AboutMe } from "./layout/sections/aboutme/AboutMe";
import { Modal } from "./components/modal/Modal";
import { GoTopBtn } from "./components/goTopBtn/GoTopBtn";
import { Particle } from "./components/particle/Particle";
// import { useEffect } from "react";

function App() {
  // useEffect(() => {
  //   fetch("/api/message")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data.message))
  //     .catch((err) => console.error(err));
  // }, []);

  return (
    <AppColumn>
      {/* <StyledContainerApp> */}
      <Particle />
      <Header />
      <Main />
      <Skills />
      <AboutMe />
      <Works />
      <Footer />
      <GoTopBtn />
      <Modal />
      {/* </StyledContainerApp> */}
    </AppColumn>
  );
}

export default App;

// const StyledContainerApp = styled.div`
//   /* max-width: 1920px; */
//   margin: 0 auto;
//   /* position: relative; */
//   /* background-image: linear-gradient(0deg, #2b2a2a79, #1f1e1e79); */
//   /* padding: 120px 0 20px; */
// `;

const AppColumn = styled.div`
  display: flex;
  flex-direction: column;

  /* background-color: rgba(33, 33, 33, 0.3); */

  /* background-image: linear-gradient(0deg, #2b2a2a79, #1f1e1e79); */

  /* justify-content: space-between; */
  position: relative;
  /* max-width: 1200px; */
  min-height: 100%;
  margin: 0 auto;
  /* padding: 80px 20px; */

  /* background-color:#393b3c79 */
`;

// const Page = styled.div`
// 	padding: 120px 0 20px;
// `;
