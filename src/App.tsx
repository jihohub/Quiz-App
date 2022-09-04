import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Error from "./pages/Error"; 
import GlobalStyle from "./styles/GlobalStyle";

const App = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="result" element={<Result />} />
        <Route path="error" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
