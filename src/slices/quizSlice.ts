import axios from "axios";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import processQuiz from "../utils/processQuiz";
import { Action } from "history";

export interface QuizState {
  quiz: Array<{
    id: number;
    question: string;
    choices: Array<number | string>;
    answer: number | string;
    indexAnswer: number;
    indexChosen: number | null;
    isCorrect: boolean;
  }>;
  score: number;
  loading: boolean;
  error: string;
};

const initialState: QuizState = {
  quiz: [],
  score: 0,
  loading: false,
  error: "",
};

export const getQuiz = createAsyncThunk("GET_QUIZ", async () => {
  try {
    const response = await axios.get(
      "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple"
    );
    return response.data;
  } catch (error) {
    return error;
  }
});

export const quizSlice = createSlice({
  name: "quizSlice",
  initialState,
  reducers: {
    clearQuiz(state) {
      state.quiz = [];
      state.loading = false;
      state.error = "";
    },
    setChosen(state, action: PayloadAction<Array<number>>) {
      // 유저가 선택한 보기를 해당 문항의 indexChosen에 업데이트
      // step은 유저가 풀고있는 문항의 index를 의미함
      const [step, indexChosen] = action.payload;
      state.quiz = state.quiz.map((quizElem, index) =>
        index === step
          ? {
              ...quizElem,
              indexChosen: indexChosen,
              isCorrect: quizElem.indexAnswer === indexChosen,
            }
          : quizElem
      );
    },
    getScore(state) {
      state.score = state.quiz.filter((item) => item.isCorrect === true).length;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getQuiz.rejected, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = "rejected";
    });

    builder.addCase(getQuiz.pending, (state, action: PayloadAction<any>) => {
      state.loading = true;
      state.error = "";
    });

    builder.addCase(getQuiz.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.quiz = processQuiz(action.payload.results);
    });
  },
});

export const { clearQuiz, setChosen, getScore } = quizSlice.actions;
export default quizSlice.reducer;
