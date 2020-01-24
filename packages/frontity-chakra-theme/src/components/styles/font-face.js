import React from "react";
import { Global, css } from "frontity";
import kelsonBoldWOFF from "../../fonts/KelsonSans-Bold.woff";
import kelsonBoldTTF from "../../fonts/KelsonSans-Bold.ttf";

const FontFace = () => (
  <Global
    styles={css`
      @font-face {
        font-family: "Kelson";
        src: url(${kelsonBoldWOFF}) format("woff"),
          url(${kelsonBoldTTF}) format("ttf");
        font-weight: 700;
        font-display: swap;
      }
    `}
  />
);

export default FontFace;
