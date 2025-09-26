import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*,
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0 ;


  font-family:  "Arodora Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* background-image: linear-gradient(120deg, #151515ff, #313131ff); */
  background-color:  #151515ff;
  /* background-image: linear-gradient(120deg, #131313ff, #2a2a2aff); */
   /* background-image: linear-gradient(0deg, #2b2a2a79, #1f1e1eff); */


}
 a {
    text-decoration: none;
 }

 ul {
list-style:none;
 }

 button {
    background-color: unset;
    border: none;
 }

`;
