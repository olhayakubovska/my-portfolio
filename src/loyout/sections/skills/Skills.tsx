import styled from "styled-components";
import { StyledFlexWrapper } from "../../../components/styled-componets/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";
import { StyledContainer } from "../../../components/styled-componets/StyledContainer";
import { theme } from "../../../styles/Theme";
import { StyledTitle } from "../works/Works";
import { Fade } from "react-awesome-reveal";

export const Skills = () => {
  return (
    <StyledSkills id={"skills"}>
      <StyledContainer>
        <StyledTitle>Мои знания</StyledTitle>
        <StyledFlexWrapper
          justify="center"
          wrap="wrap"
          gap="20px"
          align="center"
        >
          <Fade cascade={true} damping={0.3}>
            <StyledIcon>
              <Icon iconId="html" viewBox="5 5  100 100" />
            </StyledIcon>

            <StyledIcon>
              <Icon iconId="css" viewBox="5 5  100 100" />
            </StyledIcon>
            <StyledIcon>
              <Icon iconId="react" viewBox="0 0 103 103" />
            </StyledIcon>
            <StyledIcon>
              <Icon iconId="js" viewBox="0 0 102 102" />
            </StyledIcon>
            <StyledIcon>
              <Icon iconId="nodeJs" viewBox="0 0 102 102" />
            </StyledIcon>
            <StyledIcon>
              <Icon iconId="figma" viewBox="-5 -7 110 110" />
            </StyledIcon>
            <StyledIcon>
              <Icon iconId="git" viewBox=" 0 0 103 103" />
            </StyledIcon>
            <StyledIcon>
              <Icon iconId="github" viewBox=" 0 0 102 102" />
            </StyledIcon>
          </Fade>
        </StyledFlexWrapper>
      </StyledContainer>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  /* border: 1px solid red; */
  /* transform: translateY(150px); */
  /* position: relative; */
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;

  @media screen and (max-width: 1000px) {
    transform: translateY(130px);
  }

  /* @media ${theme.media.mobile} {
    transform: translateY(130px);
  } */
  /* @media screen and (max-width: 550px) {
    margin-top: 40px;
  } */
`;
const StyledIcon = styled.div`
  border-radius: 29px;
  width: 250px;
  height: 250px;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.47);
  background: #2a2a2a;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  /* gap: 30px; */
  /* padding: 20px 20px 50px 20px; */

  svg {
    width: 100px;
    height: 100px;

    filter: drop-shadow(3px 0px 1px rgba(104, 233, 245, 0.733));
  }

  @media ${theme.media.laptop} {
    width: 220px;

    height: 220px;
    padding: 20px 20px 20px 20px;
    gap: 20px;

    svg {
      width: 90px;
      height: 90px;
    }
  }
  @media ${theme.media.tablet} {
    width: 160px;
    height: 160px;
    padding: 20px 20px 20px 20px;
    gap: 20px;

    svg {
      width: 90px;
      height: 90px;
    }
  }
  @media ${theme.media.smallMobile} {
    width: 70px;
    height: 70px;
    /* overflow: hidden; */

    /* svg {
      width: 40px;
      height: 40px;
    } */
  }
`;
