import { useState } from "react";

// import image1 from "../../../assets/images/mywork1.png";
import image2 from "../../../assets/images/my-work-2.png";
import image3 from "../../../assets/images/my-work-3.png";
import image1 from "../../../assets/images/my-work-1.png";
import image4 from "../../../assets/images/my-work-4.png";
import image5 from "../../../assets/images/my-work-5.png";
import image6 from "../../../assets/images/my-work-6.png";
import image7 from "../../../assets/images/my-work-7.png";

import { StyledContainer } from "../../../components/styled-componets/StyledContainer";
import { S } from "./Works_Styled";
import { Title } from "../../../components/styled-componets/Title";

export const Works = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(false);

  const slides = [
    {
      id: 1,
      img: image1,
      title: "My Shop",
      text: "Проект представляет собой интернет-магазин одежды с фронтендом на React и бэкендом на Node.js/Express с использованием MongoDB. В приложении реализованы управление товарами, корзина и авторизация пользователей. Основной стек технологий: React, Redux, React Hook Form, styled-components/CSS Modules на фронтенде, а на бэкенде — Express, Mongoose, JWT и bcryptjs.",
      link: "https://github.com/olhayakubovska/my-shop-project",
    },
    {
      id: 2,
      title: "Blog",
      img: image3,
      link: "https://github.com/olhayakubovska/blog-result-school-project",

      text: "Платформа для управления постами, где пользователи могут создавать, просматривать и управлять постами. Фронтенд реализован на React с использованием Redux, React Hook Form и styled-components/CSS Modules, а бэкенд — на Node.js/Express с MongoDB, JWT и bcryptjs для авторизации. Приложение поддерживает регистрацию и аутентификацию пользователей, создание, редактирование и удаление постов, а также валидацию форм и управление доступом через токены.",
    },
    {
      id: 3,
      title: "Todolist",
      img: image2,
      text: "SPA-приложение, созданное с использованием React, TypeScript, Redux Toolkit, RTK Query и Material UI, позволяющее добавлять, редактировать и удалять задачи через удобный интерфейс. Реализованы CRUD-операции, отметка выполнения задач, валидация данных с React Hook Form и Zod, интеграция с API и управление состоянием через Redux Toolkit, а также навигация по страницам и адаптивная стилизация интерфейса.",
      link: "https://github.com/olhayakubovska/todolist-main",
    },
    {
      id: 4,
      title: "Quiz App",
      img: image4,
      text: "Веб-приложение для создания и прохождения квизов с удобным и понятным интерфейсом. Пользователи могут создавать собственные тесты с несколькими вопросами, проходить их, видеть результаты и историю попыток. Проект разработан на Node.js и Express с использованием EJS для серверной отрисовки и MongoDB/Mongoose для хранения данных.",
      link: "https://github.com/olhayakubovska/quiz-nodejs-mongoDB-app",
    },
    {
      id: 5,
      title: "Doctor Appointment Web Application",
      img: image5,
      text: "Веб-приложение для записи пациентов к врачу с админ-панелью. Пользователи могут отправлять заявки с именем, телефоном и описанием проблемы, а администратор после входа в систему просматривать их в удобной таблице с пагинацией, поиском и сортировкой. Проект реализован на Node.js, Express, MongoDB/Mongoose, с серверной отрисовкой через EJS и аутентификацией с помощью JWT и bcryptjs.",
      link: "https://github.com/olhayakubovska/clinic-appointment-node-mongo-jwt-app",
    },
    {
      id: 6,
      title: "Tic-Tac-Toe",
      img: image6,
      text: "Tic-Tac-Toe интерактивная игра «Крестики-нолики», созданная на React 18 с использованием Redux 5 и React-Redux 9 для централизованного управления состоянием. Приложение хранит ходы, текущего игрока и победителя в Redux Store, позволяет сбрасывать игру и начинать новую партию, а также имеет удобный адаптивный интерфейс",
      link: "https://github.com/olhayakubovska/tic-tac-toe",
    },
    {
      id: 7,
      title: "Counter",
      img: image7,
      text: "Приложение-счётчик, созданное на React, TypeScript и Redux Toolkit. Оно позволяет увеличивать и уменьшать значение счётчика, а также задавать минимальное и максимальное значения. Все данные управляются централизованно через Redux Toolkit, что демонстрирует современный подход к управлению состоянием в React-приложениях.",
      link: "https://github.com/olhayakubovska/counter-app",
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
    <S.Slider id="portfolio">
      <StyledContainer>
        <Title>Мои работы</Title>

        <S.SlideContainer>
          <S.SlideImage className={fade ? "fade-out" : "fade-in"}>
            <img src={slides[currentSlide].img} />
          </S.SlideImage>
          <S.WrapperTextAndLink>
            <S.TitleProject>{slides[currentSlide].title}</S.TitleProject>
            <S.SlideText>{slides[currentSlide].text}</S.SlideText>
            <S.Link href={slides[currentSlide].link}>Больше &#8594;</S.Link>
          </S.WrapperTextAndLink>
        </S.SlideContainer>

        <S.Controls>
          <S.Button onClick={handlePrev}>&#8592;</S.Button>
          <S.Button onClick={handleNext}>&#8594;</S.Button>
        </S.Controls>
      </StyledContainer>
    </S.Slider>
  );
};
