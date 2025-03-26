import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { animateScroll } from "react-scroll";

export const Logo = () => {
  return (
    <StyledLogo>
      <a onClick={() => animateScroll.scrollToTop()}>
        <Icon
          iconId="girl"
          viewBox="0 -12 270 270"
          width="60px"
          height="60px"
          transform="scale(0.5)"
        />
      </a>
      {/* <StyledLogoTitle>Hello</StyledLogoTitle> */}
    </StyledLogo>
  );
};

const StyledLogo = styled.div`
  display: flex;
  font-size: 18px;
  cursor: pointer;
  /* margin-top: 29px; */
`;

// const StyledLogoTitle = styled.div`
//   margin-top: 20px;
//   color: white;
// `;
