import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import GlobalStyle from "./styles/globalStyles";

ReactDOM.render(
  <>
    <Routes /> <GlobalStyle />
  </>,
  document.getElementById("root")
);

// fragments <> </> usamos para renderizar dois elementos
// pois no react os elementos  sempre terão   um pai
