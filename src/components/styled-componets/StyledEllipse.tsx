import styled from "styled-components";

type EllipseType = {
  width?: string;
  height?: string;
  boxShadow?: string;
  borderRadius?: string;
  inset?: string;
};

export const StyledEllipse = styled.div<EllipseType>`
  max-width: ${(props) => props.width || "575px"};
  /* width: 100%; */

  max-height: ${(props) => props.height || "575px"};
  box-shadow: ${(props) =>
    props.boxShadow || "0px 4px 70px 0 rgba(0, 196, 240, 0.4);"};
  border-radius: ${(props) => props.borderRadius || "50%"};
  inset: ${(props) => props.inset || "auto"};
  position: absolute;
  
  svg {
    min-width: 100%;
    min-height: 100%;
  }
`;
