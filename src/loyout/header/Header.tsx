import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { HeaderMenu } from "../../components/menu/HeaderMenu";
import { StyledContainer } from "../../components/styled-componets/StyledContainer";
import { StyledFlexWrapper } from "../../components/styled-componets/FlexWrapper";
import { MobileMenu } from "../../components/menu/MobilMenu";


export const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <StyledFlexWrapper align="center" justify="space-between">
          <Logo />
          <HeaderMenu />
          <MobileMenu />
        </StyledFlexWrapper>
      </StyledContainer>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
/* border: 1px solid red; */
  /* height: 65px; */
  top: 0;
  right: 0;
  left: 0;
  /* margin: 0 auto ; */
  padding: 10px 0;
  width: 100%;
  position: fixed;
  background-color: #1c1c1c;
  z-index: 99999;
`;
