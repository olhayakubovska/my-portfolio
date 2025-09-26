import ArodoraProLightEot from "../assets/fonts/ArodoraPro-Light.eot";
import ArodoraProLightWoff from "../assets/fonts/ArodoraPro-Light.woff";
import ArodoraProLightWoff2 from "../assets/fonts/ArodoraPro-Light.woff2";

import NextArtBoltEot from "../assets/fonts/NEXTART-Bold.eot";
import NextArtBoltWoff from "../assets/fonts/NEXTART-Bold.woff";
import NextArtBoltWoff2 from "../assets/fonts/NEXTART-Bold.woff2";

import NextArtRegularEot from "../assets/fonts/NEXTART.eot";
import NextArtRegularWoff from "../assets/fonts/NEXTART.woff";
import NextArtRegularWoff2 from "../assets/fonts/NEXTART.woff2";

import NextArtSemiBoldEot from "../assets/fonts/NEXTART-SemiBold.eot";
import NextArtSemiBoldWoff from "../assets/fonts/NEXTART-SemiBold.woff";
import NextArtSemiBoldWoff2 from "../assets/fonts/NEXTART-SemiBold.woff2";

import NicoMojiRegularEot from "../assets/fonts/NicoMoji.eot";
import NicoMojiRegularWoff from "../assets/fonts/NicoMoji.woff";
import NicoMojiRegularWoff2 from "../assets/fonts/NicoMoji.woff2";
import { createGlobalStyle } from "styled-components";

export const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'Arodora Pro';
    src: url(${ArodoraProLightEot}) format('eot'),
        url(${ArodoraProLightWoff}) format('woff'),
        url(${ArodoraProLightWoff2}) format('woff2');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'NEXT ART';
    src: url(${NextArtRegularEot}) format('eot'),
        url(${NextArtRegularWoff}) format('woff'),
        url(${NextArtRegularWoff2}) format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'NEXT ART';
    src: url(${NextArtSemiBoldEot}) format('eot'),
        url(${NextArtSemiBoldWoff}) format('woff'),
        url(${NextArtSemiBoldWoff2}) format('woff2');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'NEXT ART';
    src: url(${NextArtBoltEot}) format('eot'),
        url(${NextArtBoltWoff}) format('woff'),
        url(${NextArtBoltWoff2}) format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Nico Moji';
    src: url(${NicoMojiRegularEot}) format('eot'),
        url(${NicoMojiRegularWoff}) format('woff'),
        url(${NicoMojiRegularWoff2}) format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
`;
