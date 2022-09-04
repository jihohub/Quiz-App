import React from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { myTheme } from './styles/DefaultTheme';
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Error from "./pages/Error"; 

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="result" element={<Result />} />
        <Route path="error" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
