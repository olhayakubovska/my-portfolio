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
      text: "This project is an online clothing store with a React frontend and a Node.js/Express backend using MongoDB. The app implements product management, a shopping cart, and user authorization. Main tech stack: React, Redux, React Hook Form, styled-components/CSS Modules on the frontend, and Express, Mongoose, JWT and bcryptjs on the backend.",
      link: "https://github.com/olhayakubovska/my-shop-project",
    },
    {
      id: 2,
      title: "Blog",
      img: image3,
      link: "https://github.com/olhayakubovska/blog-result-school-project",

      text: "A platform for managing posts where users can create, view and manage posts. The frontend is built with React using Redux, React Hook Form and styled-components/CSS Modules, while the backend uses Node.js/Express with MongoDB, JWT and bcryptjs for authorization. The app supports user registration and authentication, creating, editing and deleting posts, as well as form validation and token-based access control.",
    },
    {
      id: 3,
      title: "Todolist",
      img: image2,
      text: "An SPA built with React, TypeScript, Redux Toolkit, RTK Query and Material UI, allowing tasks to be added, edited and deleted through a convenient interface. It implements CRUD operations, marking tasks as complete, data validation with React Hook Form and Zod, API integration and state management via Redux Toolkit, as well as page navigation and responsive UI styling.",
      link: "https://github.com/olhayakubovska/todolist-main",
    },
    {
      id: 4,
      title: "Quiz App",
      img: image4,
      text: "A web app for creating and taking quizzes with a clean, user-friendly interface. Users can create their own tests with multiple questions, take them, and view results and attempt history. The project is built with Node.js and Express, using EJS for server-side rendering and MongoDB/Mongoose for data storage.",
      link: "https://github.com/olhayakubovska/quiz-nodejs-mongoDB-app",
    },
    {
      id: 5,
      title: "Doctor Appointment Web Application",
      img: image5,
      text: "A web app for booking doctor appointments with an admin panel. Users can submit requests with their name, phone number and a description of the issue, while the administrator, after logging in, can view them in a convenient table with pagination, search and sorting. The project is built with Node.js, Express, MongoDB/Mongoose, with server-side rendering via EJS and authentication using JWT and bcryptjs.",
      link: "https://github.com/olhayakubovska/clinic-appointment-node-mongo-jwt-app",
    },
    {
      id: 6,
      title: "Tic-Tac-Toe",
      img: image6,
      text: "Tic-Tac-Toe is an interactive game built with React 18, using Redux 5 and React-Redux 9 for centralized state management. The app stores moves, the current player and the winner in the Redux Store, allows resetting the game and starting a new match, and features a convenient responsive interface.",
      link: "https://github.com/olhayakubovska/tic-tac-toe",
    },
    {
      id: 7,
      title: "Counter",
      img: image7,
      text: "A counter app built with React, TypeScript and Redux Toolkit. It allows incrementing and decrementing the counter value, as well as setting minimum and maximum limits. All data is managed centrally via Redux Toolkit, demonstrating a modern approach to state management in React applications.",
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
        <Title>My Works</Title>

        <S.SlideContainer>
          <S.SlideImage className={fade ? "fade-out" : "fade-in"}>
            <img src={slides[currentSlide].img} />
          </S.SlideImage>
          <S.WrapperTextAndLink>
            <S.TitleProject>{slides[currentSlide].title}</S.TitleProject>
            <S.SlideText>{slides[currentSlide].text}</S.SlideText>
            <S.Link href={slides[currentSlide].link}>More &#8594;</S.Link>
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
