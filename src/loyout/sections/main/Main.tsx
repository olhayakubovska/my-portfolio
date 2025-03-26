import { StyledFlexWrapper } from "../../../components/styled-componets/FlexWrapper";
// import { StyledEllipse } from "../../../components/styled-componets/StyledEllipse";
import { useDispatch } from "react-redux";
import mainPhoto from "../../../assets/images/mainPhoto.png";
import mainPhotox1 from "../../../assets/images/mainPhoto@1x.png";
import mainPhotox2 from "../../../assets/images/mainPhoto@2x.png";
import mainPhotox3 from "../../../assets/images/mainPhoto@3x.png";

import styled from "styled-components";
import { StyledContainer } from "../../../components/styled-componets/StyledContainer";
import { font } from "../../../styles/Common";
import { theme } from "../../../styles/Theme";
// import { theme } from "../../../styles/Theme";
import Typewriter from "typewriter-effect";
// import { Particle } from "../../../components/particle/Particle";
// import Tilt from "react-parallax-tilt";

type StyledMainSkillType = {
  inset?: string;
};

// type EllipseType2 = {
//   width?: string;
//   height?: string;
//   boxShadow?: string;
//   borderRadius?: string;
//   inset?: string;
// };

export const Main = () => {
  const dispatch = useDispatch();

  const onOpenModal = () => {
    dispatch({ type: "ON_OPEN_MODAL" });
  };

  return (
    <StyledMain id="main">
      {/* <Particle /> */}

      <StyledContainer>
        <StyledFlexWrapper gap="20px" justify="space-between">
          <StyledMainText>
            <StyledTitle>
              <Typewriter
                options={{
                  strings: ["Привет!"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </StyledTitle>
            <StyledSubtitle>Меня зовут Оля</StyledSubtitle>
            <StyledDescription>
              Я начинающий Frontend Developer
              <br />
              Занимаюсь веб-разработкой, как фронтенд, так и бэкенд. Если вам
              нужно создать красивый и функциональный сайт — свяжитесь со мной,
              и я помогу вам!
            </StyledDescription>
            <StyledContactButton onClick={onOpenModal}>
              Свяжитесь со мной
            </StyledContactButton>
          </StyledMainText>

          <StyledWrapperPhotoAndEllipse>
            <StyledEllipse2>
              <svg viewBox="152 152 575 575" xmlns="http://www.w3.org/2000/svg">
                <circle
                  cx="439"
                  cy="439"
                  r="254"
                  stroke="#00C4F0"
                  strokeWidth="67"
                  fill="#2c2c2c61"
                />
              </svg>
            </StyledEllipse2>
            <StyledSmallEllipse inset="6% 8%">js</StyledSmallEllipse>

            <StyledSmallEllipse inset="47% -9%">js</StyledSmallEllipse>
            <StyledSmallEllipse inset="81% 9%">js</StyledSmallEllipse>
            <StyledSmallEllipse inset="6% 76%">js</StyledSmallEllipse>
            <picture>
              <source
                srcSet={` ${mainPhotox1} 1x , ${mainPhotox2} 2x, ${mainPhotox3} 3x`}
                type="image/png"
              />
              <StyledMainPhoto src={mainPhoto} />
            </picture>
          </StyledWrapperPhotoAndEllipse>
        </StyledFlexWrapper>
      </StyledContainer>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  /* border: 1px solid red; */

  position: relative;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: white;
  transform: translateY(50px);

  @media screen and (max-width: 1015px) {
    transform: translateY(120px);

    ${StyledFlexWrapper} {
      flex-wrap: wrap;
    }
  }
`;

const StyledSmallEllipse = styled.div<StyledMainSkillType>`
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
  font-size: 34px;
  font-weight: 700;
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

const StyledWrapperPhotoAndEllipse = styled.div`
  position: relative;
  width: 100%;
  max-width: 540px;
  height: 540px;

  @media ${theme.media.laptop} {
    transform: translateY(30px);
    /* margin-top: 40px; */
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
    min-width: 180px;
    height: 200px;
    overflow: hidden;
  }
`;

const StyledEllipse2 = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  /* box-shadow: 0px 4px 70px 0 rgba(0, 196, 240, 0.4); */

  svg {
    width: 100%;
    height: 100%;
  }
`;

const StyledMainPhoto = styled.img`
  position: absolute;
  z-index: 3;
  inset: -16% 9%;
  width: 100%;
  max-width: 456px;

  @media ${theme.media.laptop} {
    /* inset: 0 10%; */
    max-width: 350px;
  }

  @media ${theme.media.tablet} {
    inset: -16% 10%;
    max-width: 250px;
  }
  @media ${theme.media.smallMobile} {
    inset: -16% 10%;

    max-width: 170px;
    width: 100%;
  }
`;

const StyledMainText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  max-width: 450px;
  width: 100%;
`;

const StyledTitle = styled.h2`
  ${font({
    family: "NEXT ART",
    weight: 600,
    Fmax: 38,
    Fmin: 18,
    lineHeight: 1.2,
  })}
`;
const StyledSubtitle = styled.h1`
  ${font({
    family: "NEXT ART",

    weight: 900,
    Fmax: 51,
    Fmin: 18,
    lineHeight: 1.2,
  })}
`;
const StyledDescription = styled.p`
  ${font({
    weight: 900,
    Fmax: 21,
    Fmin: 18,
    lineHeight: 1.2,
  })}
`;

const StyledContactButton = styled.button`
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
