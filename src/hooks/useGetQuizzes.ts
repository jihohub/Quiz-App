import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Quizzes {
  response_code: number;
  results: Array<{
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: Array<number | string>;
  }>
};

const getQuizzes = async (): Promise<Quizzes> => {
  const { data } = await axios.get(
    "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple"
  );
  return data;
};

export default function useGetQuizzes() {
  return useQuery(["quizzes"], getQuizzes);
}
