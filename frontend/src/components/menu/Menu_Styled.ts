import { Link } from "react-scroll";
import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Menu = styled.nav`
  /* @media screen and (max-width: 768px) {
    display: none;
  }
    */
`;

const MenuList = styled.ul`
  display: flex;
  align-items: center;
  width: 590px;
  justify-content: space-between;
  font-size: 18px;
  color: white;
`;

const ListItem = styled.li`
  position: relative;
`;

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
  transition: ${theme.animation.transition};

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
    transition: ${theme.animation.transition};
  }

  &:hover,
  &.active {
    &::before {
      transform: scale(1);
    }

    ${Mask} {
      /* transform: skewX(10deg) translateX(5px); */

     
      & + ${Mask} {
        transform: skewX(10deg) translateX(-5px);
      }
    }
  }
`;

export const S = {
  Menu,
  ListItem,
  NavLink,
  MenuList,
  Mask,
};
