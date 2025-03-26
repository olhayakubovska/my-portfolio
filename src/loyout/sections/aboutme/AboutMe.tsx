import styled from "styled-components";
import image1 from "../../../assets/images/image1.jpg";
import image1x2 from "../../../assets/images/image1@2x.png";
import image1x3 from "../../../assets/images/image1@3x.png";
import image2 from "../../../assets/images/image2.jpg";
import image2x2 from "../../../assets/images/image2@2x.png";
import image2x3 from "../../../assets/images/image2@3x.png";
import image3 from "../../../assets/images/image3.jpg";
import image3x2 from "../../../assets/images/image3@2x.png";
import image3x3 from "../../../assets/images/image3@3x.png";

import { StyledContainer } from "../../../components/styled-componets/StyledContainer";
import { font } from "../../../styles/Common";
import { theme } from "../../../styles/Theme";
import Tilt from "react-parallax-tilt";

type StyledEllipseAboutMeType = {
  width?: string;
  height?: string;
  boxShadow?: string;
  inset?: string;
};

export const AboutMe = () => {
  return (
    <StyledAboutMe id="aboutme">
      <StyledContainer>
        <StyledWrapperAboutMe>
          <StyledEllipseAboutMe
            inset="31px auto auto -186px"
            boxShadow="0px 4px 70px rgba(225, 225, 225, 0.7)"
          >
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="#E4E4E4"
                strokeWidth="10"
                fill="#414141"
              />
            </svg>
          </StyledEllipseAboutMe>

          <StyledEllipseAboutMe
            width="486px"
            height="486px"
            inset="auto 2px -48px auto"
            boxShadow="0 4px 70px rgba(0, 196, 240, 0.7)"
          >
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="#00C4F0"
                strokeWidth="10"
                fill="#414141"
              />
            </svg>
          </StyledEllipseAboutMe>

          <StyledTextAndImgWrapper>
            <StyledPhotoWrap>
              <StyledPhoto>
                <picture>
                  <source
                    srcSet={`${image2} 1x, ${image2x2} 2x, ${image2x3} 3x`}
                    type="image/jpeg"
                  />
                  <Tilt
                    className="parallax-effect-img"
                    tiltMaxAngleX={20}
                    tiltMaxAngleY={20}
                    perspective={1200}
                    transitionSpeed={1500}
                    scale={0.9}
                    gyroscope={true}
                  >
                    <StyledImage src={image2} alt="My photo 1" />
                  </Tilt>
                </picture>
              </StyledPhoto>
              <StyledPhoto>
                <picture>
                  <source
                    srcSet={`${image1} 1x, ${image1x2} 2x, ${image1x3} 3x`}
                    type="image/jpeg"
                  />
                  <Tilt
                    className="parallax-effect-img"
                    tiltMaxAngleX={20}
                    tiltMaxAngleY={20}
                    perspective={1200}
                    transitionSpeed={1500}
                    scale={0.9}
                    gyroscope={true}
                  >
                    <StyledImage src={image1} alt="My photo 2" />
                  </Tilt>
                </picture>
              </StyledPhoto>
            </StyledPhotoWrap>

            <StyledContentWrapper>
              <StyledTitle>Обо мне</StyledTitle>
              <StyledTextAboutMe>
                Всем привет! Меня зовут Оля. Мне 25 лет, я из Украины, но живу в
                Польше. Я начинающий фронтенд-разработчик. Я активно занимаюсь
                самообучением и совершенствую свои навыки в веб-разработке. У
                меня уже есть опыт работы с React, Redux и CSS Modules, а также
                я работала над проектами, связанными с интернет-магазинами и
                управлением состоянием приложений. Почему я выбрала
                программирование? Это профессия будущего, которая мне
                действительно нравится. Я стремлюсь развиваться в этой сфере,
                чтобы достичь своих целей и реализовать мечту — путешествовать.
                <br />
                Если я вас заинтересовала, вы хотите узнать обо мне больше или
                воспользоваться моими услугами, то все мои контакты я укажу
                ниже.
              </StyledTextAboutMe>
            </StyledContentWrapper>

            <StyledPhotoBox>
              <StyledPhoto2>
                <picture>
                  <source
                    srcSet={`${image3} 1x, ${image3x2} 2x, ${image3x3} 3x`}
                    type="image/jpeg"
                  />
                  <Tilt
                    className="parallax-effect-img"
                    tiltMaxAngleX={20}
                    tiltMaxAngleY={20}
                    perspective={1200}
                    transitionSpeed={1500}
                    scale={0.9}
                    gyroscope={true}
                  >
                    <StyledImage src={image3} alt="My photo 3" />
                  </Tilt>
                </picture>
              </StyledPhoto2>

              <StyledEllipseAboutMe2>
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="#E2A200"
                    strokeWidth="10"
                    fill="#414141"
                  />
                </svg>
              </StyledEllipseAboutMe2>
            </StyledPhotoBox>
          </StyledTextAndImgWrapper>
        </StyledWrapperAboutMe>
      </StyledContainer>
    </StyledAboutMe>
  );
};

const StyledAboutMe = styled.section`
  /* border: 1px solid red; */

  /* padding: 140px 0 100px 0; */
  min-height: 1200px;
  /* min-height: 100vh; */
  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  /* @media ${theme.media.laptop} {
    height: 100vh;
  } */

  @media ${theme.media.mobile} {
    height: 90vh;
  }

  @media screen and (max-width: 900px) {
    transform: translateY(140px);
  }
  @media screen and (max-width: 764px) {
    transform: translateY(30px);
  }
  @media ${theme.media.mobile} {
    transform: translateY(110px);
  }
`;

const StyledWrapperAboutMe = styled.div`
  position: relative;
`;

const StyledEllipseAboutMe = styled.div<StyledEllipseAboutMeType>`
  position: absolute;
  border-radius: 50%;
  width: ${(props) => props.width || "792px"};
  height: ${(props) => props.height || "792px"};
  box-shadow: ${(props) =>
    props.boxShadow || "0px 4px 70px rgba(228, 228, 228, 1)"};
  inset: ${(props) => props.inset || "auto auto auto auto"};

  @media screen and (max-width: 1124px) {
    &:nth-child(1),
    &:nth-child(2) {
      display: none;
    }
  }
`;

const StyledEllipseAboutMe2 = styled.div`
  position: absolute;
  border-radius: 50%;
  width: 361px;
  /* width: 100%; */
  /* height: 361px; */
  inset: 15px 46px auto auto;
  /* inset: 39px 5px auto auto; */
  /* overflow: hidden; */
  box-shadow: 0 4px 70px rgba(231, 185, 60, 0.868);

  @media screen and (max-width: 1024px) {
    width: 361px;
  }

  @media screen and (max-width: 768px) {
    inset: 171px 121px;
    box-shadow: none;
    width: 100%;
  }
`;

const StyledTextAndImgWrapper = styled.div`
  position: relative;
  display: flex;
  z-index: 10;

  @media ${theme.media.tablet} {
    flex-wrap: wrap;
  }
`;

const StyledPhotoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 372px;
  transform: translateX(22px);
  z-index: 9;

  @media screen and (max-width: 1124px) {
    display: none;
  }
`;

const StyledContentWrapper = styled.div`
  max-width: 496px;
  max-height: 750px;
  background-color: #2c2c2c;
  padding: 45px;
  transform: translate(0, 60px);
  border-radius: 14px;
  z-index: 22222222;
  @media screen and (max-width: 768px) {
    margin: 0 auto;
  }

  @media ${theme.media.smallMobile} {
    padding: 0;
  }
`;

const StyledTextAboutMe = styled.p`
  ${font({
    weight: 300,
    Fmax: 20,
    Fmin: 12,
    lineHeight: 1.4,
  })}
  max-width: 370px;
  max-height: 696px;
  background-color: #2c2c2c;
  padding: 20px;

  @media ${theme.media.smallMobile} {
    padding: 5px;

    /* font-size: ; */
  }
`;

const StyledPhoto = styled.div`
  padding: 23px;
  background-color: #2c2c2c;
  border-radius: 14px;
`;

const StyledPhoto2 = styled.div`
  padding: 23px;
  background-color: #2c2c2c;
  border-radius: 14px;
  margin: 223px 0 0 -23px;
  /* transform: translateY(223px) translateX(-23px); */
  position: relative;
  z-index: 22222;

  @media screen and (max-width: 768px) {
    margin: 0;
    /* transform: translateY(200px);  */
  }

  @media ${theme.media.smallMobile} {
    margin: 55px 0 0 0;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 310px;
  border: 4px solid #686868;

  @media ${theme.media.tablet} {
    max-width: 241px;
  }

  @media ${theme.media.smallMobile} {
    max-width: 241px;
  }
`;

const StyledTitle = styled.h2`
  ${font({
    family: "NEXT ART",
    weight: 600,
    Fmax: 65,
    Fmin: 18,
    lineHeight: 1.2,
  })}
  transform: translate(0px, -85px);
  color: white;
  position: absolute;
`;

const StyledPhotoBox = styled.div`
  max-width: 496px;
  position: relative;
  /* overflow: hidden; */
  @media ${theme.media.tablet} {
    margin: 0 auto;
  }

  @media ${theme.media.smallMobile} {
    max-width: 251px;
    /* margin: 40px auto; */
  }
`;

// const StyledAboutMe = styled.section`
//   padding: 140px 0 100px 0;
//   overflow: hidden;
// `;

// const StyledWrapperAboutMe = styled.div`
//   position: relative;
// `;

// const StyledEllipseAboutMe = styled.div<StyledEllipseAboutMeType>`
//   position: absolute;
//   border-radius: 50%;
//   width: ${(props) => props.width || "792px"};
//   height: ${(props) => props.height || "792px"};
//   box-shadow: ${(props) =>
//     props.boxShadow || "0px 4px 70px rgb(228, 228, 228)"};
//   inset: ${(props) => props.inset || "auto auto auto auto"};

//   @media screen and (max-width: 1124px) {
//     &:nth-child(1) {
//       display: none;
//     }
//     &:nth-child(2) {
//       display: none;
//     }
//   }
// `;
// const StyledEllipseAboutMe2 = styled.div`
//   position: absolute;
//   border-radius: 50%;
//   width: 361px;
//   height: 361px;
//   /* box-shadow: 0 4px 70px rgba(226, 162, 0, 0.7); */
//   inset: 39px 5px auto auto;
//   overflow: hidden;

//   @media screen and (max-width: 768px) {
//     inset: 101px 63px;
//   }
// `;

// const StyledTextAndImgWrapper = styled.div`
//   position: relative;
//   display: flex;
//   z-index: 9999;

//   @media ${theme.media.tablet} {
//     display: flex;
//     flex-wrap: wrap;
//   }
// `;

// const StyledPhotoWrap = styled.div`
//   display: flex;
//   flex-direction: column;

//   gap: 372px;
//   width: 100%;
//   height: 100%;
//   transform: translateX(22px);
//   z-index: 99999;

//   @media screen and (max-width: 1124px) {
//     display: none;
//   }
// `;

// const StyledContentWrapper = styled.div`
//   max-width: 496px;
//   max-height: 800px;
//   background-color: #2c2c2c;
//   padding: 45px;
//   transform: translate(0, 60px);
//   border-radius: 14px;
//   width: 100%;
//   z-index: 22222;

//   @media screen and (max-width: 768px) {
//     margin: 0 auto;
//   }
//   @media ${theme.media.smallMobile} {
//     padding: 0;
//   }
// `;

// const StyledTextAboutMe = styled.p`
//   ${font({
//     weight: 300,
//     Fmax: 22,
//     Fmin: 18,
//     lineHeight: 1.3,
//   })}

//   @media ${theme.media.smallMobile} {
//     padding: 5px;
//   }
//   background-color: #2c2c2c;
// `;

// const StyledPhoto = styled.div`
//   padding: 23px;
//   background-color: #2c2c2c;
//   border-radius: 14px;
// `;
// const StyledPhoto2 = styled.div`
//   padding: 23px;
//   background-color: #2c2c2c;
//   border-radius: 14px;

//   transform: translateY(223px) translateX(-23px);

//   z-index: 200000;
//   position: relative;

//   @media screen and (max-width: 768px) {
//     transform: translate(0);
//   }
// `;

// const StyledImage = styled.img`
//   width: ${(props) => props.width || "281px"};
//   border: 4px solid #686868;

//   @media ${theme.media.tablet} {
//     max-width: 241px;
//     width: 100%;
//   }
//   @media ${theme.media.smallMobile} {
//     max-width: 241px;
//     width: 100%;
//   }
// `;

// const StyledTitle = styled.h2`
//   ${font({
//     family: "NEXT ART",
//     weight: 600,
//     Fmax: 65,
//     Fmin: 18,
//     lineHeight: 1.2,
//   })}
//   transform: translate(0px, -85px);
//   color: white;
//   position: absolute;
// `;

// const StyledPhotoBox = styled.div`
//   /* transform: translateY(223px) translateX(-23px); */
//   max-width: 496px;
//   /* height: 700px; */
//   position: relative;

//   @media ${theme.media.tablet} {
//     transform: translate(0);
//     margin: 20px auto;
//     /* overflow: hidden; */
//   }
//   @media ${theme.media.smallMobile} {
//     max-width: 251px;
//     margin: 40px auto;

//   }
// `;
