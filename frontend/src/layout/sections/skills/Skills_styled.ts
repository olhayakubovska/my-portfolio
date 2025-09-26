import styled from "styled-components";
import { theme } from "../../../styles/Theme";

const Skills = styled.section`
  /* min-height: 80vh; */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  /* background-image: linear-gradient(0deg, #09090979, #2b2a2a79); */

  /* background-image: linear-gradient(0deg, #3f3e3e79, #1f1e1e79); */

  /* background-color: rgba(53, 52, 52, 0.3); */

  @media screen and (max-width: 969px) {
    padding: 0 0 50px 0;
  }
`;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  max-width: 1000px;
  /* padding: 50px 0 50px 0; */
`;

const IconBox = styled.div`
  border-radius: 29px;
  width: 200px;
  height: 200px;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.47);
  background: #2a2a2a;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100px;
    height: 100px;
    filter: drop-shadow(3px 0px 1px rgba(104, 233, 245, 0.733));
  }

  @media ${theme.media.laptop} {
    width: 220px;
    height: 220px;
    padding: 20px;
    gap: 20px;

    svg {
      width: 90px;
      height: 90px;
    }
  }

  @media ${theme.media.tablet} {
    width: 160px;
    height: 160px;
    padding: 20px;
    gap: 20px;

    svg {
      width: 90px;
      height: 90px;
    }
  }

  @media ${theme.media.smallMobile} {
    width: 70px;
    height: 70px;
  }
`;

export const S = {
  Skills,
  Wrap,
  IconBox,
};
