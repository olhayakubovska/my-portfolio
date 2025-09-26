import { Logo } from "../../components/logo/Logo";
import { StyledContainer } from "../../components/styled-componets/StyledContainer";
import { StyledFlexWrapper } from "../../components/styled-componets/FlexWrapper";
import { MobileMenu } from "./header-menu/mobile-menu/MobilMenu";
import { DesktoprMenu } from "./header-menu/desktop-menu/DesktopMenu";
import {S} from "./Header_Styled";

export const Header = () => {
  return (
      <S.Header>
        <StyledContainer>
          <StyledFlexWrapper align="center" justify="space-between">
            <Logo />
            <DesktoprMenu />
            <MobileMenu />
          </StyledFlexWrapper>
        </StyledContainer>
      </S.Header>
  );
};
