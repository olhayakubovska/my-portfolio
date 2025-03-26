type FontPropTypes = {
  family?: string;
  weight?: number;
  color?: string;
  lineHeight?: number;
  Fmin?: number;
  Fmax?: number;
};

export const font = ({
  family,
  weight,
  color,
  lineHeight,
  Fmax,
  Fmin,
}: FontPropTypes) => `
        font-family: ${family || "Arodora Pro"};
        font-weight: ${weight || 300};
        color: ${color || "white"};
        line-height: ${lineHeight || 1.2};
        // font-size: calc(
        //   (100vw - 370px) / (1920 - 370) * (${Fmax} - ${Fmin}) + ${Fmin} px
        // );
          font-size: clamp(${Fmin}px, calc( (100vw - 375px)/(1920 - 375) * (${Fmax} - ${Fmin}) + ${Fmin}px ), ${Fmax}px);

      `;

//font-size: calc( (100vw - Vmin)/(Vmax - Vmin) * (Fmax - Fmin) + Fmin) px;
