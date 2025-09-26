import { StyledContainer } from "../../../components/styled-componets/StyledContainer";

import Tilt from "react-parallax-tilt";

import image1 from "../../../assets/images/image1.jpg";
import image1x2 from "../../../assets/images/image1@2x.png";
import image1x3 from "../../../assets/images/image1@3x.png";
import image2 from "../../../assets/images/image2.jpg";
import image2x2 from "../../../assets/images/image2@2x.png";
import image2x3 from "../../../assets/images/image2@3x.png";
import image3 from "../../../assets/images/image3.jpg";
import image3x2 from "../../../assets/images/image3@2x.png";
import image3x3 from "../../../assets/images/image3@3x.png";

import { S } from "./AboutMe_Styled";

export const AboutMe = () => {
  return (
    <S.AboutMe id="aboutme">
      <StyledContainer>
        <S.WrapperAboutMe>
          <S.EllipseAboutMe
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
                fill="#2626267c"
              />
            </svg>
          </S.EllipseAboutMe>

          <S.EllipseAboutMe
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
                fill="#2626267c"
              />
            </svg>
          </S.EllipseAboutMe>

          <S.TextAndImgWrapper>
            <S.PhotoWrap>
              <S.Photo>
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
                    <S.Image src={image2} alt="My photo 1" />
                  </Tilt>
                </picture>
              </S.Photo>
              <S.Photo>
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
                    <S.Image src={image1} alt="My photo 2" />
                  </Tilt>
                </picture>
              </S.Photo>
            </S.PhotoWrap>

            <S.ContentWrapper>
              <S.Title>Обо мне</S.Title>
              <S.TextAboutMe>
                Меня зовут Оля, мне 25 лет, я родом из Украины, но живу в
                Польше. Я — начинающий Frontend-разработчик, изучаю
                веб-разработку и совершенствую свои навыки. Использую JavaScript
                (ES6+), TypeScript, React, Redux Toolkit (RTK Query), React
                Router, React Hook Form, а также Axios, REST API и принципы
                CRUD. Знакома с ExpressJS и MongoDB, работаю с Git, тестирую с
                помощью Jest и Storybook, оформляю интерфейсы с HTML5, CSS3,
                SCSS, CSS Modules, Styled Components и Material UI. Среди моих
                проектов — ToDo List с CRUD-операциями, валидацией через React
                Hook Form и Zod, управлением состоянием и интеграцией API, а
                также интернет-магазин My Shop (React + Node.js/Express +
                MongoDB) с авторизацией и удобным интерфейсом. Программирование
                — это профессия будущего, которая мне нравится; я стремлюсь
                развиваться и реализовать мечту — путешествовать.
                <br />
                Если я вас заинтересовала, вы хотите узнать обо мне больше или
                воспользоваться моими услугами, то все мои контакты я укажу
                ниже.
              </S.TextAboutMe>
            </S.ContentWrapper>

            <S.PhotoBox>
              <S.Photo2>
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
                    <S.Image src={image3} alt="My photo 3" />
                  </Tilt>
                </picture>
              </S.Photo2>

              <S.EllipseAboutMe2>
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="#E2A200"
                    strokeWidth="10"
                    fill="#41414176"
                  />
                </svg>
              </S.EllipseAboutMe2>
            </S.PhotoBox>
          </S.TextAndImgWrapper>
        </S.WrapperAboutMe>
      </StyledContainer>
    </S.AboutMe>
  );
};
