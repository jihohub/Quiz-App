import React from "react";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";

const queryClient = new QueryClient();

const App = (): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="quiz" element={<Quiz />} />
        </Routes>
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default App;
