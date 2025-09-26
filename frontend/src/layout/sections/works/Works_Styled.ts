import styled from "styled-components";
import { font } from "../../../styles/Common";

const Slider = styled.section`
  display: flex;
  @media screen and (min-width: 939px) {
    padding: 50px 0;
  }
`;

const SlideContainer = styled.div`
  max-width: 970px;
  min-height: 500px;
  width: 100%;
  display: flex;
  gap: 40px;
  padding: 40px;
  align-items: center;
  border-radius: 29px;

  background-color: #262626;
  justify-content: space-around;
  margin: 0 auto;
  flex-wrap: wrap;
  position: relative;
`;

const SlideImage = styled.div`
  overflow: hidden;
  transition: opacity 0.3s ease;

  &.fade-in {
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &.fade-out {
    opacity: 0;
  }

  img {
    width: 100%;
   max-width: 520px;
    max-height: 400px;
    /* min-height: 400px; */
    display: block;
    margin: 0 auto;
    object-fit: cover;
  }

  @media screen and (max-width: 838px) {
    img {
      max-width: 296px;
      max-height: 250px;
    }
  }

  @media screen and (max-width: 350px) {
    img {
      max-width: 250px;
      max-height: 200px;
    }
  }
`;

const WrapperTextAndLink = styled.div`
  max-width: 296px;
  /* width: 100%; */
  /* display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  height: 300px; */
`;

const SlideText = styled.div`
  font-size: 16px;
  font-weight: 200;
  line-height: 1.2;
  color: white;
  height: 300px;
  margin-top: 20px;
  /* ${font({ weight: 200, Fmax: 18, Fmin: 12, lineHeight: 1.2 })} */
`;

const Title = styled.h2`
  text-align: center;
  ${font({
    family: "NEXT ART",
    weight: 600,
    Fmax: 65,
    Fmin: 18,
    lineHeight: 1.2,
  })}
  margin: 60px 0;
`;

const TitleProject = styled.h2`
  color: white;
  font-size: 18px;
  font-weight: 700;
  /* text-align: center; */
`;

const Link = styled.a`
  text-align: center;
  color: #e2a300;
`;

const Controls = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  transform: translate(0px, -270px);
  @media screen and (max-width: 1200px) {
    justify-content: space-around;
    padding: 20px 0;
    transform: translate(0);
  }
`;

const Button = styled.button`
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

export const S = {
  Slider,
  SlideContainer,
  SlideImage,
  WrapperTextAndLink,
  SlideText,
  Title,
  TitleProject,
  Link,
  Controls,
  Button,
};
