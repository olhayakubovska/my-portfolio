import { useDispatch } from "react-redux";
import { StyledContainer } from "../../../components/styled-componets/StyledContainer";
import { StyledFlexWrapper } from "../../../components/styled-componets/FlexWrapper";
import Typewriter from "typewriter-effect";

import mainPhoto from "../../../assets/images/mainPhoto.png";
import mainPhotox1 from "../../../assets/images/mainPhoto@1x.png";
import mainPhotox2 from "../../../assets/images/mainPhoto@2x.png";
import mainPhotox3 from "../../../assets/images/mainPhoto@3x.png";
import { S } from "./Main_Styled";

export const Main = () => {
  const dispatch = useDispatch();

  const onOpenModal = () => {
    dispatch({ type: "ON_OPEN_MODAL" });
  };

  return (
    <S.Main id="main">
      <StyledContainer>
        <StyledFlexWrapper gap="20px" justify="space-between">
          <S.MainText>
            <S.Title>
              <Typewriter
                options={{
                  strings: ["Привет!"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </S.Title>
            <S.Subtitle>Меня зовут Оля</S.Subtitle>
            <S.Description>
              Я начинающий Frontend Developer,
              <br />
              увлечённая созданием современных, удобных и адаптивных
              веб-приложений. Если вам нужен красивый и функциональный сайт —
              свяжитесь со мной, и я помогу вам!
            </S.Description>
            <S.ContactButton onClick={onOpenModal}>
              Свяжитесь со мной
            </S.ContactButton>
          </S.MainText>

          <S.WrapperPhotoAndEllipse>
            <S.Ellipse2>
              <svg viewBox="152 152 575 575" xmlns="http://www.w3.org/2000/svg">
                <circle
                  cx="439"
                  cy="439"
                  r="254"
                  stroke="#00C4F0"
                  strokeWidth="67"
                  fill="#1d1d1d7b"
                />
              </svg>
            </S.Ellipse2>
            <S.SmallEllipse inset="6% 8%">JS</S.SmallEllipse>
            <S.SmallEllipse inset="47% -9%">API</S.SmallEllipse>
            <S.SmallEllipse inset="81% 9%">UI</S.SmallEllipse>
            <S.SmallEllipse inset="6% 76%">UX</S.SmallEllipse>

            <picture>
              <source
                srcSet={` ${mainPhotox1} 1x , ${mainPhotox2} 2x, ${mainPhotox3} 3x`}
                type="image/png"
              />
              <S.MainPhoto src={mainPhoto} />
            </picture>
          </S.WrapperPhotoAndEllipse>
        </StyledFlexWrapper>
      </StyledContainer>
    </S.Main>
  );
};
