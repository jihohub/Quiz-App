import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store";
import { getQuiz } from "../slices/quizSlice";
import { afterProcess } from "../utils/processQuiz";

const useGetQuiz = (): [afterProcess, boolean, string, number] => {
  const dispatch = useDispatch<AppDispatch>();
  const quiz = useSelector((state: RootState) => state.quiz.quiz);
  const loading = useSelector((state: RootState) => state.quiz.loading);
  const error = useSelector((state: RootState) => state.quiz.error);
  const step = useSelector((state: RootState) => state.step.step);

  useEffect(() => {
    dispatch(getQuiz());
  }, []);

  return [quiz, loading, error, step];
};

export default useGetQuiz;
