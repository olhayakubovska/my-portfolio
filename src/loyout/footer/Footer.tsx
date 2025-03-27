import { Icon } from "../../components/icon/Icon.tsx";
import { StyledFlexWrapper } from "../../components/styled-componets/FlexWrapper.tsx";
import { StyledContainer } from "../../components/styled-componets/StyledContainer.tsx";
import { font } from "../../styles/Common.ts";
import { theme } from "../../styles/Theme.ts";
import styled from "styled-components";

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledContainer>
        <StyledFlexWrapper justify="space-between" align="center" wrap="wrap">
          <StyledWrapperContactAndCopyright>
            <StyledWrapperContact>
              <StyledContact>
                <Icon
                  iconId={"phone"}
                  transform={"scale(0.1)"}
                  width={"20px"}
                  height={"20px"}
                  viewBox={"0 0 60 60"}
                />
                <span>+48 576 964 522</span>
              </StyledContact>

              <StyledContact>
                <Icon
                  iconId={"mail"}
                  transform={"scale(0.1)"}
                  width={"20px"}
                  height={"20px"}
                  viewBox={"0 0 60 60"}
                />
                <span>oyakubovska80@gmail.com</span>
              </StyledContact>
            </StyledWrapperContact>
            <Copyright>©copyright copyright</Copyright>
          </StyledWrapperContactAndCopyright>

          <SocialList>
            <SocialItem>
              <SocialLink href="#">
                <Icon
                  iconId={"gitHub"}
                  transform={"scale(0.5)"}
                  width={"60px"}
                  height={"60px"}
                  viewBox={"0 0 260 260"}
                />
              </SocialLink>
            </SocialItem>

            <SocialItem>
              <SocialLink href="#">
                <Icon
                  iconId={"telegram"}
                  transform={"scale(0.5)"}
                  width={"60px"}
                  height={"60px"}
                  viewBox={"0 0 260 260"}
                />
              </SocialLink>
            </SocialItem>

            <SocialItem>
              <SocialLink href="#">
                <Icon
                  iconId={"linkedin"}
                  transform={"scale(0.5)"}
                  width={"60px"}
                  height={"60px"}
                  viewBox={"0 0 260 260"}
                />
              </SocialLink>
            </SocialItem>
          </SocialList>
        </StyledFlexWrapper>
      </StyledContainer>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  position: relative;
  min-height: 100px;
  background-color: #1c1c1cd9;
  z-index: 2222;
`;

const StyledWrapperContactAndCopyright = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
`;

const StyledWrapperContact = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;
const StyledContact = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;

  & span {
    font-size: 18;
    font-weight: 900;
    ${font({
      weight: 600,
      Fmax: 18,
      Fmin: 12,
      lineHeight: 1.2,
      color: "#000000",
    })}
  }
`;

const SocialList = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 18px;
  color: #000000;
`;

const SocialLink = styled.a`
  display: inline-block;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

const SocialItem = styled.li`
  list-style-type: none;
  max-width: 160px;
  max-height: 160px;
  width: 100%;

  @media ${theme.media.smallMobile} {
    svg {
      width: 50px;
      height: 50px;
    }
  }
`;

const Copyright = styled.small`
  color: #808080;
  padding: 0 0 10px 0;
`;
