import styled from "styled-components";
import iconsSprite from "../../assets/images/sprite.svg";

type IconProps = {
  iconId: string;
  width?: string;
  height?: string;
  transform?: string;
  viewBox?: string;

  transformOrigin?: string;
};

export const Icon = (props: IconProps) => {
  return (
    <StyledSvg
      width={props.width}
      height={props.height}
      viewBox={props.viewBox}
    >
      <StyledUse
        xlinkHref={`${iconsSprite}#${props.iconId}`}
        transform={props.transform}
      />
    </StyledSvg>
  );
};

const StyledSvg = styled.svg.attrs<IconProps>((props) => ({
  viewBox: props.viewBox || "30 30 260 260",
}))`
 width: ${(props) => props.width || "150px"};
height: ${(props) => props.height || "150px"};
`;

const StyledUse = styled.use.attrs<IconProps>((props) => ({
  transform: props.transform || "scale(0.2)",
}))``;
