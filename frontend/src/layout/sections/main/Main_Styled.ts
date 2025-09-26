import styled from "styled-components";
import { font } from "../../../styles/Common";
import { theme } from "../../../styles/Theme";
import { StyledFlexWrapper } from "../../../components/styled-componets/FlexWrapper";

type MainSkillType = {
  inset?: string;
};

const Main = styled.section`
  position: relative;
  /* min-height: 100vh; */
    /* min-height: 80vh; */

  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: white;
  padding: 60px 0;
  /* background-color: black; */
  z-index: 11;

    /* position: relative; */
  width: 100%;
  min-height: 80vh; /* или 100vh, если нужно */

  overflow: hidden; /* важно! чтобы частицы не вылезали */
  /* z-index: 999; */
  /* opacity: 0.2; */
  /* background-color: rgba(33, 33, 33, 0.3); */
  /* background-image: linear-gradient(0deg, #2b2a2a79, #09090979); */
  /* background-color: #09090979; */

  @media screen and (min-width: 940px) {
    margin-top: 85px;
  }

  @media screen and (max-width: 1015px) {
    margin-top: 85px;

    min-height: auto; /* секция сама растягивается под контент */
    ${StyledFlexWrapper} {
      flex-wrap: wrap;
    }
  }
`;

// const PhotoShadow = styled.div`
//   position: absolute;
//   bottom: 40px; /* регулируй отступ от низа */
//   left: 50%;
//   transform: translateX(-50%);
//   width: 70%;
//   height: 50px;
//   background: radial-gradient(
//     ellipse at center,
//     rgba(0, 0, 0, 0.45) 0%,
//     transparent 70%
//   );
//   filter: blur(8px);
//   z-index: 2;
// `;

const SmallEllipse = styled.div<MainSkillType>`
  position: absolute;
  color: #00c4f0;
  z-index: 10;
  width: 80px;
  height: 80px;
  background-color: #414141;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 900;
  inset: ${(props) => props.inset || "auto 0 0 auto"};

  @media ${theme.media.laptop} {
    width: 60px;
    height: 60px;
    font-size: 28px;
  }

  @media ${theme.media.tablet} {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }
  @media ${theme.media.smallMobile} {
    width: 30px;
    height: 30px;
    font-size: 12px;
  }
`;

const WrapperPhotoAndEllipse = styled.div`
  position: relative;
  width: 100%;
  max-width: 540px;
  height: 540px;

  @media ${theme.media.laptop} {
    transform: translateY(30px);
    max-width: 400px;
    height: 400px;
    margin: 0 auto;
  }

  @media ${theme.media.tablet} {
    margin-top: 20px;
    max-width: 300px;
    height: 300px;
  }

  @media ${theme.media.smallMobile} {
    width: 240px;
    height: 240px;
  }
`;

const Ellipse2 = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: 50%;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const MainPhoto = styled.img`
  position: absolute;
  z-index: 3;
  inset: -16% 9%;
  width: 100%;
  max-width: 456px;
  filter: drop-shadow(0 20px 10px rgba(0, 0, 0, 0.5));

  @media ${theme.media.laptop} {
    max-width: 350px;
  }

  @media ${theme.media.tablet} {
    inset: -16% 10%;
    max-width: 250px;
  }
  @media ${theme.media.smallMobile} {
    inset: -14% 14%;

    max-width: 190px;
    width: 100%;
  }
`;

const MainText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  max-width: 450px;
  width: 100%;
`;

const Title = styled.h2`
  ${font({
    family: "NEXT ART",
    weight: 600,
    Fmax: 38,
    Fmin: 18,
    lineHeight: 1.2,
  })}
`;
const Subtitle = styled.h1`
  ${font({
    family: "NEXT ART",
    weight: 900,
    Fmax: 51,
    Fmin: 18,
    lineHeight: 1.2,
  })}
`;
const Description = styled.p`
  ${font({
    weight: 900,
    Fmax: 21,
    Fmin: 18,
    lineHeight: 1.2,
  })}
`;

const ContactButton = styled.button`
  max-width: 200px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  background: linear-gradient(45deg, #25edff, #383d3d);
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: linear-gradient(45deg, #307c88, #05191e);
  }

  &:focus {
    outline: none;
  }
`;

export const S = {
  Main,
  SmallEllipse,
  WrapperPhotoAndEllipse,
  Ellipse2,
  MainPhoto,
  MainText,

  Title,
  Subtitle,
  Description,
  ContactButton,
  // PhotoShadow,
};
