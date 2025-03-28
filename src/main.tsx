import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "../src/store.tsx";
import { GlobalStyle } from "./styles/Global.styled.ts";
import { FontStyles } from "./styles/FontStyles.ts";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <FontStyles />
      <App />
    </Provider>
  </StrictMode>
);
