import axios from "axios";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import useProcessQuiz from "../hooks/useProcessQuiz";

export interface QuizState {
  quiz: Array<{
    question: string;
    choices: Array<number | string>;
    answer: number | string;
    indexAnswer: number;
    indexChosen: number | null;
  }>;
  loading: boolean;
  error: string;
};

const initialState: QuizState = {
  quiz: [],
  loading: false,
  error: "",
};

export const getQuiz = createAsyncThunk(
  "GET_QUIZ",
  async () => {
    const response = await axios.get("https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple");

    return response.data;
  }
);

export const quizSlice = createSlice({
  name: "quizSlice",
  initialState,
  reducers: {
    clearQuiz(state) {
      state.quiz = [];
      state.loading = false;
      state.error = "";
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
      state.quiz = useProcessQuiz(action.payload.results);
    });
  },
});

export const { clearQuiz } = quizSlice.actions;
export default quizSlice.reducer;
