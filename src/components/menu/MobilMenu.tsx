import { useState } from "react";
import { Link } from "react-scroll";
import styled, { css } from "styled-components";

const menuItems = [
  { title: "Главная", href: "main" },
  { title: "Мои знания", href: "skills" },
  { title: "Обо мне", href: "aboutme" },
  { title: "Мои работы", href: "portfolio" },
];

export const MobileMenu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <StyledMobileMenu onClick={() => setMenuIsOpen(!menuIsOpen)}>
      <BurgerButton
        isOpen={menuIsOpen}
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      >
        <span></span>
      </BurgerButton>

      <StyledMenuPopup isOpen={menuIsOpen}>
        <ul>
          {menuItems.map((item, index) => (
            <ListItemStyled key={index}>
              <NavLink
                activeClass="active"
                to={item.href}
                smooth={true}
                spy={true}
                offset={50}
                onClick={() => setMenuIsOpen(!menuIsOpen)}
              >
                {item.title}
                <Mask>
                  <span>{item.title}</span>
                </Mask>
                <Mask>
                  <span>{item.title}</span>
                </Mask>
              </NavLink>
            </ListItemStyled>
          ))}
        </ul>
      </StyledMenuPopup>
    </StyledMobileMenu>
  );
};

const StyledMobileMenu = styled.div`
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

const StyledMenuPopup = styled.div<{ isOpen: boolean }>`
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
    align-items: flex-start;
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

// const StyledHeaderMenu = styled.nav`
//   ul {
//     display: flex;
//     align-items: center;
//     width: 590px;
//     /* width: 100%; */
//     justify-content: space-between;
//     font-size: 18px;
//     color: white;
//   }
// `;

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  width: 100%;

  height: 50%;
  overflow-y: hidden;
  color: white;
  white-space: nowrap;

  & + & {
    top: 50%;

    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`;

const NavLink = styled(Link)`
  font-family: Arodora Pro, sans-serif;
  font-weight: 300;
  font-size: 18px;
  color: transparent;
  cursor: pointer;

  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    height: 2px;
    background-color: #e2a300;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 2;
    transform: scale(0);
  }

  &:hover,
  &.active {
    &::before {
      transform: scale(1);
    }

    ${Mask} {
      transform: skewX(10deg) translateX(5px);

      & + ${Mask} {
        transform: skewX(10deg) translateX(-5px);
      }
    }
  }
`;

const ListItemStyled = styled.li`
  position: relative;
`;
