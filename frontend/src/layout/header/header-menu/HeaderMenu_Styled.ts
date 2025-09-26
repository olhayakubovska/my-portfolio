import styled, { css } from "styled-components";

const DesktoprMenu = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

/////

const MobileMenu = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;
const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: -100px;
  right: -100px;
  width: 200px;
  height: 200px;
  z-index: 9999;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: white;
    position: absolute;
    left: 40px;
    bottom: 50px;

    ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        background-color: rgb(255, 255, 255, 0);
      `}

    &::before {
      content: "";

      display: block;
      width: 36px;
      height: 2px;
      background-color: white;
      position: absolute;
      transform: translateY(-10px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(-45deg) translateY(0);
        `}
    }
    &::after {
      content: "";

      display: block;
      width: 24px;
      height: 2px;
      background-color: white;
      position: absolute;
      transform: translateY(10px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(45deg) translateY(0);
          width: 36px;
        `}
    }
  }
`;

const MenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 999;
  background-color: rgba(31, 31, 32, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-100%);
  transition: 1s ease-in-out;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 18px;
    color: white;
    transition: 1s ease-in-out;
  }

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      transform: translateY(0);

      ul {
        gap: 30px;
        transition: 1s ease-in-out;
      }
    `}
`;
export const S = {
  DesktoprMenu,
  MobileMenu,
  BurgerButton,
  MenuPopup,
};
