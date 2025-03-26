import { useState } from "react";
import styled from "styled-components";
import image1 from "../../../assets/images/img1.png";
import image2 from "../../../assets/images/img2.png";
import image3 from "../../../assets/images/img3.png";
import { StyledContainer } from "../../../components/styled-componets/StyledContainer";
import { font } from "../../../styles/Common";
// import { theme } from "../../../styles/Theme";

export const Works = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(false);

  const slides = [
    {
      id: 1,
      img: image1,
      text: " Интернет-магазин одежды на React с использованием TypeScript,Redux Toolkit и React Router. Реализован каталог товаров с фильтрацией, поиском, корзиной, страницей администратора для управления товарами и адаптивной вёрсткой. Данные подтягиваются с сервера через Axios, формы валидируются с react-hook-form и yup. Интернет-магазин одежды на  с использованием TypeScript, Redux Toolkit и  Router. Реализован каталог товаров.",
    },
    {
      id: 2,
      img: image2,
      text: "Одностраничное приложение на React для портфолио с разделами «Обо мне», «Навыки», «Проекты» и «Контакты». Используются React Router для навигации, анимации Framer Motion, адаптивная вёрстка и плавная прокрутка. Все данные динамически подгружаются и структурированы для удобства отображения.Одностраничное приложение на React для портфолио с разделами «Обо мне», «Навыки», «Проекты» и «Контакты». Используются React Router для",
    },
    {
      id: 3,
      img: image3,
      text: "Веб-приложение на React для отображения проектов с фильтрацией по категориям и подробными карточками. Используются Redux для управления состоянием, TypeScript для типизации, Axios для запросов к API и адаптивная вёрстка для корректного отображения на всех устройствах.Веб-приложение на React для отображения проектов с фильтрацией по категориям и подробными карточками. Используются Redux для управления состоянием",
    },
  ];

  const handleNext = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setFade(false);
    }, 300);
  };

  const handlePrev = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setFade(false);
    }, 300);
  };

  return (
    <StyledSlider id="portfolio">
      <StyledContainer>
        <StyledTitle>Мои работы</StyledTitle>

        <StyledSlideContainer>
          <StyledSlideImage className={fade ? "fade-out" : "fade-in"}>
            <img src={slides[currentSlide].img} />
          </StyledSlideImage>
          <StyledWrapperTextAndLink>
            <StyledTitleProject>Магазин</StyledTitleProject>
            <StyledSlideText>{slides[currentSlide].text}</StyledSlideText>
            <StyledLink>Больше &#8594;</StyledLink>
          </StyledWrapperTextAndLink>
        </StyledSlideContainer>

        <StyledControls>
          <StyledButton onClick={handlePrev}>&#8592;</StyledButton>
          <StyledButton onClick={handleNext}>&#8594;</StyledButton>
        </StyledControls>
      </StyledContainer>
    </StyledSlider>
  );
};

const StyledSlider = styled.section`
  display: flex;
  max-height: 90vh;
`;

const StyledSlideContainer = styled.div`
  max-width: 970px;
  width: 100%;
  display: flex;
  gap: 40px;
  padding: 40px;
  border-radius: 29px;
  background-color: #2c2c2c;
  justify-content: space-around;
  margin: 0 auto;

  flex-wrap: wrap;
  /* transition: opacity 0.3s ease; */

  /* &.fade-in {
    opacity: 1;
  }
  &.fade-out {
    opacity: 0;
  } */
`;

const StyledSlideImage = styled.div`
  border-radius: 29px;
  transition: opacity 0.3s ease;

  &.fade-in {
    opacity: 1;
  }
  &.fade-out {
    opacity: 0;
  }

  @media screen and (max-width: 576px) {
    & img {
      max-width: 296px;
      width: 100%;
    }

    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }
  @media screen and (max-width: 350px) {
    & img {
      max-width: 250px;
      width: 100%;
    }

    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }
`;
const StyledWrapperTextAndLink = styled.div`
  max-width: 296px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    max-width: 396px;
  }
  @media screen and (max-width: 576px) {
    max-width: 296px;
  }
`;

const StyledSlideText = styled.div`
  font-size: 18px;
  font-weight: 200;
  line-height: 1.2;
  color: white;

  ${font({
    weight: 200,
    Fmax: 18,
    Fmin: 12,
    lineHeight: 1.2,
  })}
`;

export const StyledTitle = styled.h2`
  text-align: center;

  ${font({
    family: "NEXT ART",
    weight: 600,
    Fmax: 65,
    Fmin: 18,
    lineHeight: 1.2,
  })}
  margin: 60px 0 60px 0;
`;
const StyledTitleProject = styled.h2`
  color: white;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
`;

const StyledLink = styled.a`
  text-align: center;
  color: #e2a300;
`;

const StyledControls = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  transform: translate(0px, -270px);

  @media screen and (max-width: 1200px) {
    display: flex;
    width: 100%;
    justify-content: space-around;
    padding: 20px 0;
    transform: translate(0);
  }
`;

const StyledButton = styled.button`
  width: 60px;
  height: 60px;
  font-size: 25px;
  background-color: #e2a300;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  transition: background-color 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: rgba(243, 101, 13, 0.8);
  }
`;
