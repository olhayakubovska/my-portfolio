import styled from "styled-components";
import { font } from "../../styles/Common";
import { theme } from "../../styles/Theme";

const Footer = styled.footer`
  width: 100%;
  position: relative;
  min-height: 70px;
  padding: 10px;
  background-color: #ffffff25;
  z-index: 2222;
`;


const WrapperContact = styled.div`
  display: flex;
  flex-direction: column;
`;

const Contact = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;

  & span {
    font-size: 16;
    font-weight: 900;
    ${font({
      weight: 600,
      Fmax: 16,
      Fmin: 12,
      lineHeight: 1.2,
      color: "#000000",
    })}
  }
`;

const SocialList = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 18px;
  color: #000000;
`;

const SocialLink = styled.a`
  display: inline-flex; 
  justify-content: center;
  align-items: center; 
  width: 50px; 
  height: 50px; 

  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }

    /* @media ${theme.media.smallMobile} {
    svg {
      width: 50px;
      height: 50px;
    }
  } */
`;




export const S = {
  Footer,

  WrapperContact,
  Contact,
  SocialList,
  SocialLink,

};
