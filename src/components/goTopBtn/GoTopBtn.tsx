import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { animateScroll } from "react-scroll";
import { useEffect, useState } from "react";
import { theme } from "../../styles/Theme";

export const GoTopBtn = () => {
  const [showBtn, setSwhowBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setSwhowBtn(true);
      } else {
        setSwhowBtn(false);
      }
    });
  }, []);

  return (
    <>
      {showBtn && (
        <GoTopBtnStyled onClick={() => animateScroll.scrollToTop()}>
          <Icon
            iconId="goTopBtn"
            viewBox="0 -1 15 15"
            transform="scale(0.6)"
            width="15px"
            height="15px"
          />
        </GoTopBtnStyled>
      )}
    </>
  );
};

const GoTopBtnStyled = styled.button`
  position: fixed;
  z-index: 999999999999999;
  right: 30px;
  bottom: 30px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #e2a300;
  cursor: pointer;
  transition: ${theme.animation.transition};

  &:hover{
    background-color: rgba(243, 101, 13, 0.8);
  }

`;
