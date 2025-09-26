import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";

type StyledEllipseAboutMeType = {
  width?: string;
  height?: string;
  boxShadow?: string;
  inset?: string;
};

const AboutMe = styled.section`
  min-height: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* overflow: hidden; */

  @media ${theme.media.mobile} {
    height: 90vh;
  }

  @media screen and (max-width: 950px) {
    min-height: 950px;
    overflow: hidden;
  }

  @media screen and (max-width: 764px) {
    padding: 0 0 65px 0;
  }
`;

const WrapperAboutMe = styled.div`
  position: relative;
  width: 100%;

  overflow: visible;
`;

const EllipseAboutMe = styled.div<StyledEllipseAboutMeType>`
  position: absolute;
  border-radius: 50%;
  width: ${(props) => props.width || "792px"};

  /* width: 1400px; */

  /* смещаем за пределы контейнера */
  /* top: -150px;
  left: -200px;

  z-index: 1; */

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

const EllipseAboutMe2 = styled.div`
  position: absolute;
  border-radius: 50%;
  width: 361px;
  inset: 15px 46px auto auto;
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

const TextAndImgWrapper = styled.div`
  position: relative;
  display: flex;
  z-index: 10;

  @media ${theme.media.tablet} {
    flex-wrap: wrap;
  }
`;

const PhotoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 372px;
  transform: translateX(22px);
  z-index: 9;

  @media screen and (max-width: 1124px) {
    display: none;
  }
`;

const ContentWrapper = styled.div`
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

const TextAboutMe = styled.p`
  ${font({
    weight: 300,
    Fmax: 18,
    Fmin: 12,
    lineHeight: 1.4,
  })}
  max-width: 370px;
  max-height: 696px;
  background-color: #2c2c2c;
  padding: 10px;

  @media ${theme.media.smallMobile} {
    padding: 5px;
  }
`;

const Photo = styled.div`
  padding: 23px;
  background-color: #2c2c2c;
  border-radius: 14px;
`;

const Photo2 = styled.div`
  padding: 23px;
  background-color: #2c2c2c;
  border-radius: 14px;
  margin: 223px 0 0 -23px;
  position: relative;
  z-index: 22222;

  @media screen and (max-width: 768px) {
    margin: 0;
  }

  @media ${theme.media.smallMobile} {
    margin: 55px 0 0 0;
  }
`;

const Image = styled.img`
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

const Title = styled.h2`
  ${font({
    family: "NEXT ART",
    weight: 600,
    Fmax: 65,
    Fmin: 20,
    lineHeight: 1.2,
  })}
  transform: translate(0px, -85px);
  color: white;
  position: absolute;

  @media ${theme.media.mobile} {
    transform: translate(0px, -36px);
  }
`;

const PhotoBox = styled.div`
  max-width: 496px;
  position: relative;

  @media ${theme.media.tablet} {
    margin: 0 auto;
  }

  @media ${theme.media.smallMobile} {
    max-width: 251px;
  }
`;

export const S = {
  AboutMe,
  WrapperAboutMe,
  EllipseAboutMe,
  EllipseAboutMe2,
  TextAndImgWrapper,
  PhotoWrap,
  ContentWrapper,
  TextAboutMe,
  Photo,
  Photo2,
  Image,
  Title,
  PhotoBox,
};
