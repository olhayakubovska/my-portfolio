import styled from "styled-components";
import { font } from "../../styles/Common";

export const Title = styled.h2`
  text-align: center;
  ${font({ family: "NEXT ART", weight: 600, Fmax: 65, Fmin: 18, lineHeight: 1.2 })}
  margin: 60px 0;
`;