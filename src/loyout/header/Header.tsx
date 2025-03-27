import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { HeaderMenu } from "../../components/menu/HeaderMenu";
import { StyledContainer } from "../../components/styled-componets/StyledContainer";
import { StyledFlexWrapper } from "../../components/styled-componets/FlexWrapper";
import { MobileMenu } from "../../components/menu/MobilMenu";

export const Header = () => {
  return (
    <>
      <StyledHeader>
        <StyledContainer>
          <StyledFlexWrapper align="center" justify="space-between">
            <Logo />
            <HeaderMenu />
            <MobileMenu />
          </StyledFlexWrapper>
        </StyledContainer>
      </StyledHeader>
    </>
  );
};

const StyledHeader = styled.header`
  top: 0;
  right: 0;
  left: 0;
  padding: 10px 0;
  width: 100%;
  position: fixed;
  background-color: #1c1c1c;
  z-index: 99999;
`;
